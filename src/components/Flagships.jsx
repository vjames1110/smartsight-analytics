import "./Flagships.css";
import ProductVisual from "./portfolio/ProductVisual";
import ScaledPreview from "./portfolio/ScaledPreview";
import LazyMount from "./portfolio/LazyMount";
import { products, STATUS } from "../data/products";
import { trackEvent } from "../config/site";

const FLAGSHIP_IDS = ["buildx", "medicore"];

const intro = {
  buildx:
    "A complete enterprise ERP for construction and infrastructure companies, with the depth of suites like SAP: tender management, planning, procurement, stores, machinery, subcontractors, finance and HR on one connected database.",
  medicore:
    "A complete hospital management system for small clinics, mid-size nursing homes and large multi-branch hospitals: from registration and OPD to IPD, OT, lab, pharmacy, billing and insurance.",
};

const sizes = {
  buildx: ["Small contractors", "Mid-size companies", "Large / EPC"],
  medicore: ["Clinics", "Nursing homes", "Large hospitals"],
};

const countModules = (product) =>
  product.moduleGroups.reduce((n, g) => n + g.modules.length, 0);

function Flagships() {
  const flagships = FLAGSHIP_IDS.map((id) =>
    products.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <section className="flagships" id="flagships">
      <div className="section-heading">
        <p className="section-kicker">Flagship products</p>
        <h2>Complete Suites, Priced by the Modules You Choose</h2>
        <p>
          Two full-scale platforms we are building for businesses that want
          everything on one system. Switch on only the modules you need, and
          your plan follows your choices.
        </p>
      </div>

      <div className="flagship-grid">
        {flagships.map((product) => (
          <article
            className="flagship"
            key={product.id}
            style={{
              "--f-accent": product.theme.accent,
              "--f-tint": product.theme.tint,
              "--f-dark": product.theme.dark,
            }}
          >
            <div className="flagship-visual">
              <LazyMount>
                <ScaledPreview baseWidth={700}>
                  <ProductVisual product={product} />
                </ScaledPreview>
              </LazyMount>
            </div>

            <div className="flagship-body">
              <div className="flagship-tags">
                <span>{STATUS[product.status].label}</span>
                <span>{product.platforms}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{intro[product.id]}</p>

              <ul className="flagship-stats">
                <li>
                  <strong>{countModules(product)}+</strong> modules
                </li>
                <li>
                  <strong>{product.mobile.screens.length}</strong> mobile app
                  views
                </li>
                <li>
                  <strong>Modular</strong> plans
                </li>
              </ul>

              <div className="flagship-groups">
                {product.moduleGroups
                  .filter((g) => !g.core)
                  .map((g) => (
                    <span key={g.title}>{g.title}</span>
                  ))}
              </div>

              <p className="flagship-fit">
                <b>Fits:</b> {sizes[product.id].join(" · ")}
              </p>

              <div className="flagship-actions">
                <a
                  className="btn btn-gold"
                  href={`#product-${product.id}`}
                  onClick={() =>
                    trackEvent("view_product", {
                      product: product.name,
                      location: "flagships",
                    })
                  }
                >
                  Explore and build your plan
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Flagships;
