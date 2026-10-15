import "./Footer.css";
import { PORTFOLIO_PDF, trackEvent } from "../config/site";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SmartSight Analytics</h3>
        <p>
          Professional IT services for websites, web apps, mobile apps, ERP,
          custom software, dashboards, and business analytics.
        </p>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a
            href={PORTFOLIO_PDF}
            download="SmartSight-Portfolio.pdf"
            onClick={() => trackEvent("portfolio_download", { location: "footer" })}
          >
            Download Portfolio
          </a>
          <a href="#audit">Free Audit</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          Copyright {new Date().getFullYear()} SmartSight Analytics. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
