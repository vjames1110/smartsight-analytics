import { useRef, useState } from "react";
import "./ProductModal.css";
import MockScreen from "./MockScreen";
import PhoneMock from "./PhoneMock";
import PlanBuilder from "./PlanBuilder";
import ScaledEmbed from "./ScaledEmbed";
import { themeVars } from "./tones";
import DownloadPortfolio from "../DownloadPortfolio";
import { CloseIcon, ExternalLinkIcon } from "../Icons";
import useModalBehavior from "../../hooks/useModalBehavior";
import { DOMAINS, STATUS, productWhatsappText } from "../../data/products";
import { whatsappLink, trackEvent, SITE_URL } from "../../config/site";

function ProductModal({ product, onClose }) {
  const [platform, setPlatform] = useState("web");
  const [screenIndex, setScreenIndex] = useState(0);
  const boxRef = useRef(null);
  const [copied, setCopied] = useState(false);
  useModalBehavior(true, onClose, boxRef);

  const copyLink = async () => {
    const link = `${SITE_URL}/#product-${product.id}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      trackEvent("copy_product_link", { product: product.name });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", link);
    }
  };

  const domain = DOMAINS[product.domain];
  const status = STATUS[product.status];
  const isDashboard = product.kind === "dashboard";
  const hasPlans = Boolean(product.moduleGroups);

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div
        ref={boxRef}
        tabIndex={-1}
        className={`pm-box ${isDashboard ? "wide" : ""}`}
        style={themeVars(product.theme)}
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
            <span className="pm-platform">
              {isDashboard ? "Analytics dashboard" : product.platforms}
            </span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
        </div>

        {product.status === "blueprint" && (
          <p className="pm-blueprint">
            This is a solution blueprint. We build it to your requirement, and
            the screens show how it could look with sample data.
          </p>
        )}

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
            <div className="pm-platform-switch" role="tablist" aria-label="Platform">
              <button
                type="button"
                role="tab"
                aria-selected={platform === "web"}
                className={platform === "web" ? "active" : ""}
                onClick={() => setPlatform("web")}
              >
                Web app
              </button>
              {product.mobile && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={platform === "mobile"}
                  className={platform === "mobile" ? "active" : ""}
                  onClick={() => setPlatform("mobile")}
                >
                  Mobile app
                </button>
              )}
            </div>

            {platform === "web" ? (
              <>
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
                  <MockScreen
                    product={product}
                    screen={product.screens[screenIndex]}
                  />
                </div>
              </>
            ) : (
              <div className="pm-phones">
                {product.mobile.screens.map((s) => (
                  <figure key={s.name}>
                    <PhoneMock product={product} screen={s} scale={1.05} />
                    <figcaption>{s.name}</figcaption>
                  </figure>
                ))}
              </div>
            )}

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

        {hasPlans ? (
          <PlanBuilder product={product} />
        ) : (
          <>
            <h4 className="pm-sub">
              {isDashboard ? "What it covers" : "Core modules"}
            </h4>
            <ul className="pm-modules">
              {product.modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}

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
            {isDashboard ? "Get a Similar Dashboard" : "Request a Demo"}
          </a>
          <DownloadPortfolio className="btn btn-dark" location="product_modal">
            Download Portfolio
          </DownloadPortfolio>
          <button type="button" className="btn btn-outline" onClick={copyLink}>
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
