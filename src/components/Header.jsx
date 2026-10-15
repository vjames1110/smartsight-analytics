import { useState, useCallback, useRef } from "react";
import "./Header.css";
import { MenuIcon, CloseIcon } from "./Icons";
import useModalBehavior from "../hooks/useModalBehavior";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const sidebarRef = useRef(null);
  useModalBehavior(menuOpen, closeMenu, sidebarRef);

  return (
    <header className="header">
      <a className="brand" href="#top">
        <img src="/images/ssalogo.png" alt="" className="logo" />
        <div className="brand-text">
          <p className="brand-name">SmartSight Analytics</p>
          <p className="tagline">IT Services, ERP, Software & Analytics</p>
        </div>
      </a>

      <nav className="nav" aria-label="Main navigation">
        <a href="#audit" className="nav-audit-btn">
          Free Audit
        </a>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        type="button"
      >
        <MenuIcon />
      </button>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div
        ref={sidebarRef}
        tabIndex={-1}
        className={`sidebar ${menuOpen ? "open" : ""}`}
        inert={!menuOpen}
      >
        <button
          className="sidebar-close-btn icon-btn"
          onClick={closeMenu}
          aria-label="Close navigation menu"
          type="button"
        >
          <CloseIcon />
        </button>

        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#audit" className="mobile-audit-btn" onClick={closeMenu}>
          Get Free Audit
        </a>
      </div>
    </header>
  );
}

export default Header;
