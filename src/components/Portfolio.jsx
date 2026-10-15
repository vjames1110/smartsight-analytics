import { lazy, Suspense, useState, useCallback, useEffect } from "react";
import "./Portfolio.css";
import ProductVisual from "./portfolio/ProductVisual";
import ScaledPreview from "./portfolio/ScaledPreview";
import LazyMount from "./portfolio/LazyMount";
import DownloadPortfolio from "./DownloadPortfolio";
import {
  products,
  DOMAINS,
  STATUS,
  getDomainsInUse,
} from "../data/products";
import { whatsappLink, trackEvent } from "../config/site";

const ProductModal = lazy(() => import("./portfolio/ProductModal"));

const valueProps = [
  {
    title: "Built around your process",
    text: "Every product is configured to your workflow, not the other way round.",
  },
  {
    title: "Web and mobile apps",
    text: "Each solution comes with a web app and a mobile app for your field and office teams.",
  },
  {
    title: "Demo with sample data",
    text: "Review working screens first. Your own data is never used in demos.",
  },
  {
    title: "Handover and support",
    text: "Documentation, user training, go-live help and monthly support.",
  },
];

const customizeSteps = [
  { title: "Share your requirement", text: "Tell us your process and pain points on WhatsApp." },
  { title: "Pick your modules", text: "We map the closest product and the modules you need. Plans follow your choices." },
  { title: "Configure and build", text: "We adapt screens, roles, approvals and reports to you." },
  { title: "Launch and support", text: "Testing, training, go-live and monthly support." },
];

function ProductCard({ product, onOpen }) {
  const domain = DOMAINS[product.domain];
  const status = STATUS[product.status];
  const isDashboard = product.kind === "dashboard";

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card-hit"
        onClick={() => onOpen(product)}
      >
        <div
          className={`product-preview ${isDashboard ? "" : "app"}`}
          style={
            isDashboard
              ? undefined
              : { background: `linear-gradient(135deg, ${product.theme.tint}, #ffffff)` }
          }
        >
          {isDashboard ? (
            <img src={product.image} alt="" loading="lazy" />
          ) : (
            <LazyMount>
              <ScaledPreview baseWidth={680}>
                <ProductVisual product={product} />
              </ScaledPreview>
            </LazyMount>
          )}
        </div>

        <div className="product-body">
          <div className="product-badges">
            <span className="product-domain" style={{ "--accent": domain.accent }}>
              {domain.label}
            </span>
            <span className={`product-status ${status.tone}`}>
              {status.label}
            </span>
            <span className="product-platform">
              {isDashboard ? "Analytics dashboard" : product.platforms}
            </span>
          </div>
          <h3>{product.name}</h3>
          <p className="product-tagline">{product.tagline}</p>
          <p className="product-problem">
            <b>The problem:</b> {product.problem}
          </p>
          <span className="product-cta">
            {isDashboard ? "Open live dashboard" : "View details"}
          </span>
        </div>
      </button>
    </article>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const closeModal = useCallback(() => {
    setSelected(null);
    if (window.location.hash.startsWith("#product-")) {
      window.history.replaceState(null, "", "#portfolio");
    }
  }, []);

  // Deep links such as #product-buildx open that product directly
  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#product-(.+)$/);
      if (!match) return;
      const found = products.find((p) => p.id === match[1]);
      if (!found) return;
      setSelected(found);
      document.getElementById("portfolio")?.scrollIntoView();
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const domainsInUse = getDomainsInUse();
  const visible =
    filter === "all" ? products : products.filter((p) => p.domain === filter);
  const apps = visible.filter((p) => p.kind === "product");
  const dashboards = visible.filter((p) => p.kind === "dashboard");

  const openProduct = (product) => {
    trackEvent("view_product", { product: product.name });
    setSelected(product);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-heading portfolio-heading">
        <p className="section-kicker dark">Products & Portfolio</p>
        <h2>Software We Have Built, Adapted to Your Business</h2>
        <p>
          Real-world business problems, solved with web and mobile apps.
          Explore our products and live analytics dashboards. Every solution is
          customized around your process, so if you do not see your industry,
          we will build it for you.
        </p>
        <div className="portfolio-download">
          <DownloadPortfolio location="portfolio_section" />
        </div>
      </div>

      <ul className="value-props">
        {valueProps.map((v) => (
          <li key={v.title}>
            <strong>{v.title}</strong>
            <span>{v.text}</span>
          </li>
        ))}
      </ul>

      <div className="domain-filter" role="group" aria-label="Filter by domain">
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All ({products.length})
        </button>
        {domainsInUse.map((key) => (
          <button
            key={key}
            type="button"
            className={filter === key ? "active" : ""}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {DOMAINS[key].label}
          </button>
        ))}
      </div>

      <ul className="status-legend" aria-label="What the status labels mean">
        <li>
          <span className="product-status ready">Production-ready</span>
          Built and in use
        </li>
        <li>
          <span className="product-status development">In development</span>
          Being built now
        </li>
        <li>
          <span className="product-status blueprint">Buildable on request</span>
          Blueprint we build to your spec
        </li>
      </ul>

      {apps.length > 0 && (
        <>
          <h3 className="group-title">
            Web & mobile applications <span>{apps.length}</span>
          </h3>
          <div className="product-grid">
            {apps.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={openProduct} />
            ))}
          </div>
        </>
      )}

      {dashboards.length > 0 && (
        <>
          <h3 className="group-title">
            Analytics dashboards <span>{dashboards.length}</span>
          </h3>
          <div className="product-grid">
            {dashboards.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={openProduct} />
            ))}
          </div>
        </>
      )}

      <p className="portfolio-footnote">
        Product screens use illustrative sample data.
      </p>

      <div className="customize">
        <h3>How we customize a product for you</h3>
        <ol>
          {customizeSteps.map((step, i) => (
            <li key={step.title}>
              <span>{i + 1}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="custom-note">
        <p>
          Do not see your industry? We design custom dashboards, admin panels,
          ERP modules and full business software around your exact process.
        </p>

        <a
          href={whatsappLink(
            "Hi, I want a custom software solution for my business."
          )}
          target="_blank"
          rel="noreferrer"
          className="custom-btn"
          onClick={() => trackEvent("whatsapp_click", { location: "portfolio" })}
        >
          Request a Custom Build
        </a>
      </div>

      {selected && (
        <Suspense fallback={null}>
          <ProductModal product={selected} onClose={closeModal} />
        </Suspense>
      )}
    </section>
  );
}

export default Portfolio;
