import "./PortfolioPrint.css";
import ProductVisual from "./portfolio/ProductVisual";
import { themeVars } from "./portfolio/tones";
import { products, DOMAINS, STATUS, getDomainsInUse } from "../data/products";
import { SITE, phoneList } from "../config/site";

const Footer = ({ page }) => (
  <div className="pp-footer">
    <span>{SITE.name} · Products & Portfolio</span>
    <span>{page}</span>
  </div>
);

const optionalModules = (product) =>
  product.moduleGroups
    .filter((g) => !g.core)
    .flatMap((g) => g.modules.map((m) => m.name));

// Print-only view, opened as /?print=1. scripts/build-pdf.js renders it to PDF.
function PortfolioPrint() {
  const apps = products.filter((p) => p.kind === "product");
  const dashboards = products.filter((p) => p.kind === "dashboard");
  const domains = getDomainsInUse();

  // Page plan: cover (1), about (2), then one page per app (+1 for suites with
  // a module catalogue), then dashboards and the closing page.
  let next = 3;
  const plan = apps.map((product) => {
    const page = next;
    next += product.moduleGroups ? 2 : 1;
    return { product, page, planPage: product.moduleGroups ? page + 1 : null };
  });
  const dashboardPage = next;

  return (
    <div className="pp-root">
      <section className="pp-page pp-cover">
        <img src="/images/print/logo.png" alt="SmartSight Analytics" />
        <h1>Products & Solutions Portfolio</h1>
        <p className="pp-cover-sub">
          Real-world business problems, solved with custom web and mobile apps,
          ERP and analytics, built around your process.
        </p>
        <ul className="pp-cover-domains">
          {domains.map((key) => (
            <li key={key}>{DOMAINS[key].label}</li>
          ))}
        </ul>
        <div className="pp-cover-contact">
          <strong>{SITE.name}</strong>
          <span>
            {phoneList()} · {SITE.email}
          </span>
          <span>{SITE.website}</span>
          <span>{SITE.location}</span>
        </div>
      </section>

      <section className="pp-page">
        <h2>About SmartSight Analytics</h2>
        <p className="pp-tagline">
          IT services, ERP, software and analytics for growing businesses.
        </p>
        <p className="pp-lead">
          We design and build websites, web and mobile apps, ERP systems,
          custom software and dashboards around how your business actually
          works. The products in this portfolio are our starting points, each
          one adapted to the client process, roles and data. Complete suites
          such as BuildX ERP and MediCore HMS are modular: the plan follows the
          modules a company opts for.
        </p>

        <div className="pp-story">
          <div>
            <h3>What we build</h3>
            <ul className="pp-plain">
              <li>Web and mobile applications</li>
              <li>ERP and customized ERP modules</li>
              <li>Custom business software and automation</li>
              <li>Analytics dashboards and reporting</li>
            </ul>
          </div>
          <div>
            <h3>How we work</h3>
            <ol className="pp-plain">
              <li>Discovery call and free project audit</li>
              <li>Solution blueprint: screens, modules, roles</li>
              <li>Design and development</li>
              <li>Testing, training and launch</li>
              <li>Monthly support and improvements</li>
            </ol>
          </div>
        </div>

        <h3>In this portfolio</h3>
        <ul className="pp-contents">
          {plan.map(({ product, page, planPage }) => (
            <li key={product.id}>
              <span>
                {product.name}
                {planPage ? " (with modules & plans)" : ""}
              </span>
              <em>{DOMAINS[product.domain].label}</em>
              <b>{planPage ? `${page}–${planPage}` : page}</b>
            </li>
          ))}
          {dashboards.length > 0 && (
            <li>
              <span>Analytics dashboards</span>
              <em>{DOMAINS.analytics.label}</em>
              <b>{dashboardPage}</b>
            </li>
          )}
        </ul>
        <p className="pp-note">
          All screens in this document use illustrative sample data. Live demos
          are available on request.
        </p>
        <Footer page={2} />
      </section>

      {plan.flatMap(({ product, page, planPage }) => {
        const domain = DOMAINS[product.domain];
        const pages = [
          <section
            className="pp-page"
            key={product.id}
            style={themeVars(product.theme)}
          >
            <div className="pp-badges">
              <span style={{ "--accent": domain.accent }} className="pp-domain">
                {domain.label}
              </span>
              <span className={`pp-status ${STATUS[product.status].tone}`}>
                {STATUS[product.status].label}
              </span>
              <span className="pp-platform">{product.platforms}</span>
            </div>
            <h2>{product.name}</h2>
            <p className="pp-tagline">{product.tagline}</p>

            <ProductVisual product={product} phoneScale={0.78} />
            <p className="pp-note">
              {product.status === "blueprint"
                ? "Solution blueprint: built to your requirement. Illustrative web and mobile screens with sample data."
                : "Illustrative web and mobile screens with sample data."}
            </p>

            <div className="pp-story">
              <div>
                <h3>The problem</h3>
                <p>{product.problem}</p>
              </div>
              <div>
                <h3>How we solve it</h3>
                <p>{product.solution}</p>
              </div>
            </div>

            {product.workflow && (
              <ol className="pp-flow">
                {product.workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            )}

            <h3>{product.moduleGroups ? "Headline modules" : "Core modules"}</h3>
            <ul className="pp-modules">
              {product.modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            {product.roles && (
              <div className="pp-story pp-roles">
                <div>
                  <h3>User roles</h3>
                  <p>{product.roles.join(" · ")}</p>
                </div>
                <div>
                  <h3>Key reports</h3>
                  <p>{product.reports.join(" · ")}</p>
                </div>
              </div>
            )}

            <p className="pp-fit">
              <strong>Best fit:</strong> {product.bestFor}
            </p>
            <Footer page={page} />
          </section>,
        ];

        if (planPage) {
          pages.push(
            <section
              className="pp-page"
              key={`${product.id}-plan`}
              style={themeVars(product.theme)}
            >
              <div className="pp-badges">
                <span className="pp-domain" style={{ "--accent": domain.accent }}>
                  {domain.label}
                </span>
                <span className={`pp-status ${STATUS[product.status].tone}`}>
                  {STATUS[product.status].label}
                </span>
              </div>
              <h2>{product.name}: modules & plans</h2>
              <p className="pp-tagline">{product.editionNote}</p>

              <div className="pp-groups">
                {product.moduleGroups.map((group) => (
                  <div className="pp-group" key={group.title}>
                    <h3>
                      {group.title}
                      {group.core && <em>Always included</em>}
                    </h3>
                    <ul>
                      {group.modules.map((m) => (
                        <li key={m.name}>
                          <b>{m.name}</b>
                          <span>{m.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3>Suggested starting points</h3>
              <div className="pp-presets">
                {product.presets.map((preset) => {
                  const count =
                    preset.modules === "all"
                      ? optionalModules(product).length
                      : preset.modules.length;
                  return (
                    <div key={preset.name}>
                      <strong>{preset.name}</strong>
                      <span>
                        {preset.modules === "all"
                          ? `All ${count} modules`
                          : `${count} modules`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="pp-note">
                Plans are built from the modules you choose, plus the number of
                users and sites. Contact us for a quote and a live demo.
              </p>
              <Footer page={planPage} />
            </section>
          );
        }
        return pages;
      })}

      {dashboards.length > 0 && (
        <section className="pp-page">
          <div className="pp-badges">
            <span style={{ "--accent": DOMAINS.analytics.accent }} className="pp-domain">
              {DOMAINS.analytics.label}
            </span>
          </div>
          <h2>Analytics Dashboards</h2>
          <p className="pp-tagline">
            Interactive dashboards built on your data. Live versions are on our
            website.
          </p>
          <div className="pp-dash-list">
            {dashboards.map((d) => (
              <div className="pp-dash" key={d.id}>
                <img
                  src={d.image.replace("/images/", "/images/print/").replace(".webp", ".jpg")}
                  alt=""
                />
                <div>
                  <h3>{d.name}</h3>
                  <p>{d.solution}</p>
                  <p className="pp-fit">
                    <strong>Best fit:</strong> {d.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Footer page={dashboardPage} />
        </section>
      )}

      <section className="pp-page pp-closing">
        <h2>Do not see your industry?</h2>
        <p>
          Everything in this portfolio is a starting point. We build custom
          software, ERP modules, apps and dashboards around your exact process.
          Share your requirement for a free project audit and a written
          recommendation within 72 hours.
        </p>
        <div className="pp-cover-contact">
          <strong>{SITE.name}</strong>
          <span>WhatsApp / Phone: {phoneList()}</span>
          <span>{SITE.email}</span>
          <span>{SITE.website}</span>
          <span>{SITE.location}</span>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPrint;
