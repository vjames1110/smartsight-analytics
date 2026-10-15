import { useState } from "react";
import "./ProductModal.css";
import MockScreen from "./MockScreen";
import ScaledEmbed from "./ScaledEmbed";
import DownloadPortfolio from "../DownloadPortfolio";
import { CloseIcon, ExternalLinkIcon } from "../Icons";
import useModalBehavior from "../../hooks/useModalBehavior";
import { DOMAINS, STATUS, productWhatsappText } from "../../data/products";
import { whatsappLink, trackEvent } from "../../config/site";

function ProductModal({ product, onClose }) {
  const [screenIndex, setScreenIndex] = useState(0);
  useModalBehavior(true, onClose);

  const domain = DOMAINS[product.domain];
  const status = STATUS[product.status];
  const isDashboard = product.kind === "dashboard";

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div
        className={`pm-box ${isDashboard ? "wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="pm-close icon-btn"
          type="button"
          onClick={onClose}
          aria-label="Close product details"
        >
          <CloseIcon />
        </button>

        <div className="pm-head">
          <div className="pm-badges">
            <span className="pm-domain" style={{ "--accent": domain.accent }}>
              {domain.label}
            </span>
            <span className={`pm-status ${status.tone}`}>{status.label}</span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
        </div>

        {isDashboard ? (
          <div className="pm-embed">
            <ScaledEmbed
              src={product.embedUrl}
              title={`${product.name} dashboard`}
            />
            <a
              className="pm-fullscreen"
              href={product.embedUrl.split("?")[0]}
              target="_blank"
              rel="noreferrer"
            >
              Open in full screen
              <ExternalLinkIcon width={16} height={16} />
            </a>
          </div>
        ) : (
          <div className="pm-screens">
            {product.screens.length > 1 && (
              <div className="pm-tabs" role="tablist" aria-label="Screens">
                {product.screens.map((s, i) => (
                  <button
                    key={s.name}
                    role="tab"
                    type="button"
                    aria-selected={i === screenIndex}
                    className={i === screenIndex ? "active" : ""}
                    onClick={() => setScreenIndex(i)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
            <div className="pm-screen-scroll">
              <MockScreen product={product} screen={product.screens[screenIndex]} />
            </div>
            <p className="pm-note">
              Illustrative screens with sample data. Your version is built
              around your own process and data.
            </p>
          </div>
        )}

        <div className="pm-story">
          <div>
            <h4>The problem</h4>
            <p>{product.problem}</p>
          </div>
          <div>
            <h4>How we solve it</h4>
            <p>{product.solution}</p>
          </div>
        </div>

        {product.workflow && (
          <>
            <h4 className="pm-sub">How work flows</h4>
            <ol className="pm-flow">
              {product.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </>
        )}

        <h4 className="pm-sub">{isDashboard ? "What it covers" : "Core modules"}</h4>
        <ul className="pm-modules">
          {product.modules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        {(product.roles || product.reports) && (
          <div className="pm-story pm-extra">
            {product.roles && (
              <div>
                <h4>User roles</h4>
                <ul className="pm-plain">
                  {product.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.reports && (
              <div>
                <h4>Key reports</h4>
                <ul className="pm-plain">
                  {product.reports.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="pm-fit">
          <strong>Best fit:</strong> {product.bestFor}
        </div>

        <div className="pm-footer">
          <a
            className="btn btn-wa"
            href={whatsappLink(productWhatsappText(product))}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", {
                location: "product_modal",
                product: product.name,
              })
            }
          >
            {product.kind === "dashboard" ? "Get a Similar Dashboard" : "Request a Demo"}
          </a>
          <DownloadPortfolio
            className="btn btn-dark"
            location="product_modal"
          >
            Download Portfolio
          </DownloadPortfolio>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
