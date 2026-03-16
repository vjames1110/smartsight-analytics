import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="brand">
        <img
          src="/images/ssalogo.png"
          alt="SmartSight Logo"
          className="logo"
        />
        <div className="brand-text">
          <h2>SmartSight Analytics</h2>
          <p className="tagline">A Mini Data Analytics Agency</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="nav">
        <a
          href="https://wa.me/918374220978?text=Hi%2C%20I%20want%20a%20free%20business%20audit.%20Please%20guide%20me."
          target="_blank"
          rel="noreferrer"
          className="nav-audit-btn"
        >
          Get Free Business Audit
        </a>
        <a href="#how-it-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>

        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a
          href="https://wa.me/918374220978?text=Hi%2C%20I%20want%20a%20free%20business%20audit.%20Please%20guide%20me."
          target="_blank"
          rel="noreferrer"
          className="mobile-audit-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get Free Business Audit
        </a>
      </div>
    </header>
  );
}

export default Header;