import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./academics.css";

/* ---------------------------- Icon components ---------------------------- */

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChevronDown = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-6.3 7-11.5C19 5.9 15.9 3 12 3S5 5.9 5 9.5C5 14.7 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z" fill="currentColor" />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 10.5v6M7.5 7.8v.01M11.5 16.5v-3.5c0-1.2 1-2 2.2-2 1.2 0 1.8.8 1.8 2v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconYoutube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 9.7l5 2.3-5 2.3V9.7z" fill="currentColor" />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */

const FILTER_TABS = ["All", "Engineering", "Business", "Sciences", "Arts & Humanities"];
const LEVELS = ["All Levels", "Undergraduate", "Postgraduate"];

// Unsplash — free to use, no attribution required (Unsplash License)
const PROGRAMS = [
  {
    title: "Computer Engineering",
    description: "Build the technology of tomorrow with our cutting-edge engineering program.",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=300&h=300&q=70",
  },
  {
    title: "Business Administration",
    description: "Develop leadership and management skills for a global career.",
    duration: "4 Years",
    level: "Undergraduate",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&h=300&q=70",
  },
  {
    title: "Medicine & Surgery",
    description: "Train to make a difference in people's lives.",
    duration: "6 Years",
    level: "Undergraduate",
    category: "Sciences",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=300&h=300&q=70",
  },
];

export default function Academics() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [query, setQuery] = useState("");
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const visiblePrograms = PROGRAMS.filter((p) => {
    const matchesTab = activeTab === "All" || p.category === activeTab;
    const matchesLevel = level === "All Levels" || p.level === level;
    const matchesQuery = p.title.toLowerCase().includes(query.trim().toLowerCase());
    return matchesTab && matchesLevel && matchesQuery;
  });

  return (
    <div className="nu-page">
      {/* ----------------------------- Navbar ----------------------------- */}
      <header className={`nu-nav ${scrolled ? "nu-nav--scrolled" : ""}`}>
        <div className="nu-nav__inner">
          <Link to="/" className="nu-logo">
            <span className="nu-logo__mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 3l15 6v9c0 9-6.3 15.8-15 19-8.7-3.2-15-10-15-19V9l15-6z" fill="#0D183A" stroke="#F1F5F9" strokeWidth="1.2" />
                <path d="M20 10l8 3.4v4.4c0 5-3.4 8.7-8 10.4-4.6-1.7-8-5.4-8-10.4v-4.4l8-3.4z" fill="#2563EB" />
              </svg>
            </span>
            <span className="nu-logo__text">
              Nigerian
              <br />
              University
            </span>
          </Link>

          <nav className="nu-nav__links" aria-label="Primary">
            <Link to="/" className={`nu-nav__link${isActive("/") ? " is-active" : ""}`}>Home</Link>
            <Link to="/about" className={`nu-nav__link${isActive("/about") ? " is-active" : ""}`}>About</Link>
            <Link to="/academics" className={`nu-nav__link${isActive("/academics") ? " is-active" : ""}`}>Academics</Link>
            <Link to="/admissions" className={`nu-nav__link${isActive("/admissions") ? " is-active" : ""}`}>Admissions</Link>
            <Link to="/news-events" className={`nu-nav__link${isActive("/news-events") ? " is-active" : ""}`}>News & Events</Link>
            <Link to="/gallery" className={`nu-nav__link${isActive("/gallery") ? " is-active" : ""}`}>Gallery</Link>
            <Link to="/contact" className={`nu-nav__link${isActive("/contact") ? " is-active" : ""}`}>Contact</Link>
          </nav>

          <div className="nu-nav__actions">
            <button className="nu-icon-btn" aria-label="Search">
              <IconSearch width="18" height="18" />
            </button>
            <Link to="/admissions" className="nu-btn nu-btn--primary nu-btn--sm">
              Apply Now
            </Link>
            <button className="nu-menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <IconMenu width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------- Mobile menu -------------------------- */}
      <div className={`nu-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="nu-mobile-menu__header">
          <span className="nu-logo__text nu-logo__text--dark">Nigerian University</span>
          <button className="nu-icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <IconClose width="22" height="22" />
          </button>
        </div>
        <nav className="nu-mobile-menu__links" aria-label="Mobile">
          <Link to="/" className={isActive("/") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={isActive("/about") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/academics" className={isActive("/academics") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Academics</Link>
          <Link to="/admissions" className={isActive("/admissions") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Admissions</Link>
          <Link to="/news-events" className={isActive("/news-events") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>News & Events</Link>
          <Link to="/gallery" className={isActive("/gallery") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" className={isActive("/contact") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <Link to="/admissions" className="nu-btn nu-btn--primary nu-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Apply Now
        </Link>
      </div>
      <button
        className={`nu-mobile-scrim ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* ----------------------------- Page header ----------------------------- */}
      <section className="nu-page-header">
        <img
          className="nu-page-header__bg"
          src="https://images.unsplash.com/photo-1670859229997-87b121ab0c2d?auto=format&fit=crop&w=1600&q=70"
          alt="Nigerian University campus building"
        />
        <div className="nu-page-header__scrim" />
        <div className="nu-page-header__inner">
          <h1 className="nu-anim nu-anim--1">Academics</h1>
          <p className="nu-anim nu-anim--2">Programs, departments and academic resources</p>
        </div>
      </section>

      {/* ------------------------------- Programs -------------------------------- */}
      <section className="nu-explore">
        <div className="nu-container">
          <h2>Explore Our Programs</h2>

          <div className="nu-explore__controls">
            <div className="nu-search">
              <IconSearch width="18" height="18" />
              <input
                type="text"
                placeholder="Search for a program..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search for a program"
              />
            </div>
            <div className="nu-select">
              <select value={level} onChange={(e) => setLevel(e.target.value)} aria-label="Filter by level">
                {LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
              <IconChevronDown width="16" height="16" />
            </div>
          </div>

          <div className="nu-tabs" role="tablist" aria-label="Filter programs by department">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`nu-tab ${activeTab === tab ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="nu-program-list">
            {visiblePrograms.length === 0 && (
              <p className="nu-program-list__empty">No programs match your search yet — try a different filter.</p>
            )}
            {visiblePrograms.map((program) => (
              <Link to="/academics" className="nu-program-row" key={program.title}>
                <div className="nu-program-row__image">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="nu-program-row__body">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="nu-program-row__meta">
                    <span className="nu-program-row__duration">{program.duration}</span>
                    <span className="nu-badge">{program.level}</span>
                  </div>
                </div>
                <IconArrowRight className="nu-program-row__arrow" width="18" height="18" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- Footer -------------------------------- */}
      <footer className="nu-footer">
        <div className="nu-container nu-footer__grid">
          <div className="nu-footer__brand">
            <span className="nu-logo__mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 3l15 6v9c0 9-6.3 15.8-15 19-8.7-3.2-15-10-15-19V9l15-6z" fill="#0D183A" stroke="#F1F5F9" strokeWidth="1.2" />
                <path d="M20 10l8 3.4v4.4c0 5-3.4 8.7-8 10.4-4.6-1.7-8-5.4-8-10.4v-4.4l8-3.4z" fill="#2563EB" />
              </svg>
            </span>
            <span className="nu-logo__text">
              Nigerian
              <br />
              University
            </span>
          </div>

          <div className="nu-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="nu-footer__col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/news-events">News & Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/student-portal">Student Portal</Link></li>
              <li><Link to="/alumni">Alumni</Link></li>
            </ul>
          </div>

          <div className="nu-footer__col nu-footer__contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <IconPhone width="16" height="16" /> <span>+234 803 123 4567</span>
              </li>
              <li>
                <IconMail width="16" height="16" /> <span>info@nigerian.edu.ng</span>
              </li>
              <li>
                <IconPin width="16" height="16" /> <span>123 Education Road, Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="nu-footer__social">
              <a href="#" aria-label="Facebook"><IconFacebook width="16" height="16" /></a>
              <a href="#" aria-label="X"><IconX width="16" height="16" /></a>
              <a href="#" aria-label="Instagram"><IconInstagram width="16" height="16" /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedin width="16" height="16" /></a>
              <a href="#" aria-label="YouTube"><IconYoutube width="16" height="16" /></a>
            </div>
          </div>
        </div>

        <div className="nu-container nu-footer__bottom">
          <p>© 2026 Nigerian University. All rights reserved.</p>
          <div className="nu-footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}