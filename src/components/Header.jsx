import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="brand">
        <img src="/images/ssalogo.png" alt="SmartSight Logo" className="logo" />
        <div className="brand-text">
          <h2>SmartSight Analytics</h2>
          <p className="tagline">IT Services, ERP, Software & Analytics</p>
        </div>
      </div>

      <nav className="nav">
        <a href="#audit" className="nav-audit-btn">
          Free Audit
        </a>
        <a href="#how-it-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
        type="button"
      >
        Menu
      </button>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="sidebar-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
          type="button"
        >
          Close
        </button>

        <a href="#audit" onClick={() => setMenuOpen(false)}>
          Free Audit
        </a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
          How It Works
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>
          Portfolio
        </a>
        <a href="#privacy" onClick={() => setMenuOpen(false)}>
          Privacy
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <a
          href="#contact"
          className="mobile-audit-btn"
          onClick={() => setMenuOpen(false)}
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}

export default Header;
