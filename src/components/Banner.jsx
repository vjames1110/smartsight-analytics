import "./Banner.css";
import DownloadPortfolio from "./DownloadPortfolio";
import { whatsappLink, trackEvent } from "../config/site";

function Banner() {
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
      </div>
    </section>
  );
}

export default Banner;
