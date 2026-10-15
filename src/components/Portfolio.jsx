import { useState, useCallback } from "react";
import "./Portfolio.css";
import ProductModal from "./portfolio/ProductModal";
import MockScreen from "./portfolio/MockScreen";
import ScaledPreview from "./portfolio/ScaledPreview";
import DownloadPortfolio from "./DownloadPortfolio";
import {
  products,
  DOMAINS,
  STATUS,
  getDomainsInUse,
} from "../data/products";
import { whatsappLink, trackEvent } from "../config/site";

const valueProps = [
  {
    title: "Built around your process",
    text: "Every product is configured to your workflow, not the other way round.",
  },
  {
    title: "Demo with sample data",
    text: "Review working screens first. Your own data is never used in demos.",
  },
  {
    title: "Handover and training",
    text: "Documentation, user training and a clear handover on delivery.",
  },
  {
    title: "Ongoing support",
    text: "Monthly support for fixes, reports and new features after launch.",
  },
];

const customizeSteps = [
  { title: "Share your requirement", text: "Tell us your process and pain points on WhatsApp." },
  { title: "Pick a starting point", text: "We map the closest product and the modules you need." },
  { title: "Configure and build", text: "We adapt screens, roles, approvals and reports to you." },
  { title: "Launch and support", text: "Testing, training, go-live and monthly support." },
];

function ProductCard({ product, onOpen }) {
  const domain = DOMAINS[product.domain];
  const status = STATUS[product.status];

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card-hit"
        onClick={() => onOpen(product)}
        aria-label={`View details of ${product.name}`}
      >
        <div className="product-preview">
          {product.kind === "dashboard" ? (
            <img src={product.image} alt="" loading="lazy" />
          ) : (
            <ScaledPreview>
              <MockScreen product={product} screen={product.screens[0]} />
            </ScaledPreview>
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
          </div>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
          <ul>
            {product.modules.slice(0, 3).map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <span className="product-cta">
            {product.kind === "dashboard" ? "Open live dashboard" : "View details"}
          </span>
        </div>
      </button>
    </article>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const domainsInUse = getDomainsInUse();
  const visible =
    filter === "all" ? products : products.filter((p) => p.domain === filter);

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
          Explore our ready-to-adapt products and live dashboards. Every
          solution is customized around your process, so if you do not see your
          industry, we will build it for you.
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

      <div className="product-grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onOpen={openProduct} />
        ))}
      </div>

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

      {selected && <ProductModal product={selected} onClose={closeModal} />}
    </section>
  );
}

export default Portfolio;
