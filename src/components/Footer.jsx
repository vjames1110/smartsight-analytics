import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SmartSight Analytics</h3>
        <p>
          Helping businesses grow using data-driven dashboards, insights,
          and analytics solutions.
        </p>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#audit">Free Audit</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} SmartSight Analytics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;