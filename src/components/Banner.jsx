import { useEffect, useState } from "react";
import "./Banner.css";
import DownloadPortfolio from "./DownloadPortfolio";
import { whatsappLink, trackEvent } from "../config/site";

function Banner() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    import("../data/products").then(({ products, getDomainsInUse }) =>
      setStats({
        industries: getDomainsInUse().filter((d) => d !== "analytics").length,
        solutions: products.length,
      })
    );
  }, []);

  const whatsappMessage = `
Hi,
I would like to discuss a project with SmartSight Analytics.

Project Type:
Business Type:
Timeline:
`;

  return (
    <section className="banner" id="top">
      <div className="banner-content">
        <p className="banner-eyebrow">Premium IT services for modern businesses</p>
        <h1>SmartSight Analytics</h1>
        <p className="banner-copy">
          We build websites, web apps, mobile apps, ERP systems, custom software,
          dashboards, and automation tools that help businesses operate smarter.
        </p>
        <div className="banner-actions">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="banner-primary"
            onClick={() => trackEvent("whatsapp_click", { location: "banner" })}
          >
            Get Free Consultation
          </a>

          <a href="#services" className="banner-secondary">
            Explore Services
          </a>

          <DownloadPortfolio className="banner-secondary" location="banner" />
        </div>

        <ul className="banner-stats">
          {stats && (
            <>
              <li>
                <strong>{stats.industries}</strong> industries
              </li>
              <li>
                <strong>{stats.solutions}</strong> solutions & dashboards
              </li>
            </>
          )}
          <li>Built around your process</li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
