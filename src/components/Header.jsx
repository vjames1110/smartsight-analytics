import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Left Brand Section */}
      <div className="brand">
        <div className="logo-placeholder">
          {/* Replace this img src later */}
          <img
            src="/images/Smartsight Analytics.png"
            alt="SmartSight Logo"
            className="logo"
          />
        </div>

        <div className="brand-text">
          <h2>SmartSight Analytics</h2>
          <p className="tagline">A Mini Data Analytics Agency</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="https://wa.me/918374220978?text=Hi%2C%20I%20want%20a%20free%20business%20audit.%20Please%20guide%20me."
        target="_blank"
        rel="noreferrer"
        className="nav-audit-btn">Get Free Business Audit</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
