
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const navigationLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "WORKS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="portfolio-header">

      {/* Desktop Navbar */}
      <div className="portfolio-header__inner">

        {/* Logo */}
        <a
          href="#home"
          className="portfolio-brand"
          onClick={closeMenu}
        >
          <span className="brand-name">NIRMALANANTH A S</span>
          <span className="brand-role">
            JAVA FULL STACK DEVELOPER
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">
          LET'S TALK
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Fullscreen Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >

        {/* Mobile Menu Header */}
        <div className="mobile-menu__top">

          <a href="#home" className="portfolio-brand" onClick={closeMenu}>
            <span className="brand-name">YOUR NAME</span>
            <span className="brand-role">
              JAVA FULL STACK DEVELOPER
            </span>
          </a>

          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Mobile Navigation Links */}
        <nav className="mobile-nav-list" aria-label="Mobile navigation">
          {navigationLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <span className="mobile-nav-number">
                0{index + 1}
              </span>

              <span>{link.name}</span>

              <span className="mobile-nav-arrow">↗</span>
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="mobile-nav-cta"
          onClick={closeMenu}
        >
          LET'S TALK
          <span>↗</span>
        </a>

      </div>

    </header>
  );
}

export default Header;
