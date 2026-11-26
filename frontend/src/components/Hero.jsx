import { useEffect, useState } from "react";
import "./Hero.css";

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero({
  name = "Nirmalananth",
  role = "FULL STACK\nDEVELOPER",
  summary = "Passionate about creating modern, scalable and user-centric web applications using React.js, Spring Boot and MySQL.",
  resumeUrl = "/resume.pdf",
  portraitImage = "/src/assets/hero-portrait.jpg",
  projectImage = "/src/assets/project-laptop.jpg",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-hero-page" id="home">
      <div className="portfolio-hero-shell">

          <button
            className="hero-menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

        {/* Mobile navigation overlay */}
        <div
          id="hero-mobile-menu"
          className={`hero-mobile-menu${menuOpen ? " is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="hero-mobile-menu-top">
            <span className="hero-mobile-menu-label">NAVIGATION</span>
            <button
              className="hero-menu-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="hero-mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                <span className="hero-mobile-nav-number">0{index + 1}</span>
                <span>{item.label}</span>
                <span className="hero-mobile-nav-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <a className="hero-mobile-cta" href="#contact" onClick={closeMenu}>
            LET'S TALK <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Main portrait and name */}
        <section className="hero-stage" aria-labelledby="hero-title">
          <img
            className="hero-portrait"
            src={portraitImage}
            alt=""
            aria-hidden="true"
          />
          <div className="hero-stage-shade" aria-hidden="true" />

          <div className="hero-side-note">
            <span className="hero-side-note-arrow" aria-hidden="true">↗</span>
            <p>Building Scalable<br />Web Applications<br />with Java</p>
          </div>

          <div className="hero-heading-wrap">
            <p className="hero-eyebrow">Hi, I am</p>
            <h1 className="hero-title" id="hero-title">{name}</h1>
          </div>
        </section>

        {/* Three-column information strip */}
        <section className="hero-info" aria-label="Introduction and featured work">
          <div className="hero-info-role">
            <h2>{role.split("\n").map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}</h2>

            <a className="hero-resume-link" href={resumeUrl} download>
              Download Resume
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
              </svg>
            </a>
          </div>

          <div className="hero-info-summary">
            <p>{summary}</p>
            <a className="hero-contact-button" href="#contact">
              <span>Get In Touch</span>
              <span className="hero-contact-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-featured-project">
            <a className="hero-project-image-link" href="#projects" aria-label="Explore my projects">
              <img src={projectImage} alt="Laptop displaying software code" />
              <span className="hero-project-arrows" aria-hidden="true">
                <span>←</span>
                <span>→</span>
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
