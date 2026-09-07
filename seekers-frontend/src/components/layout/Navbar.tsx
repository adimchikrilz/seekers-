import { useState } from "react";
import { Link } from "react-router-dom";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useMobileMenu } from "../../hooks/useMobileMenu";

interface NavChild {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/admissions",
    label: "Admissions",
    children: [
      { href: "/admissions", label: "Admission" },
      { href: "/admissions/e-admission", label: "e-Admission" },
      { href: "/admissions/e-admission-2", label: "e-Admission 2" },
    ],
  },
  { href: "/#facilities", label: "Facilities" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useHeaderScroll();
  const { open, toggle, close } = useMobileMenu();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header
      style={{
        boxShadow: scrolled
          ? "0 1px 0 rgba(201,151,63,0.45), 0 16px 34px -18px rgba(66,12,21,0.5)"
          : "0 1px 0 rgba(201,151,63,0.35), 0 12px 30px -18px rgba(66,12,21,0.35)",
      }}
    >
      <div className="navbar">
        <div className="brand">
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div className="crest">S</div>
            <div className="brand-text">
              <div className="brand-name">Seekers</div>
              <div className="brand-sub">Group of Schools</div>
            </div>
          </Link>
        </div>

        <nav className="links">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div className="nav-item" key={item.label}>
                <Link to={item.href} className="nav-link-trigger">
                  {item.label}
                  <span className="nav-caret">▾</span>
                </Link>
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="navbar-right">
          <div className="navbar-divider" />
          <div className="phone">
            <span className="dot">☏</span> +234 903 474 7594
          </div>
          <a className="btn-apply" href="#">
            Apply Now
          </a>
          <button
            className={`hamburger${open ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div className="mobile-accordion" key={item.label}>
                <div className="mobile-accordion-head">
                  <Link className="m-link" to={item.href} onClick={close} style={{ border: "none" }}>
                    {item.label}
                  </Link>
                  <button
                    className={`mobile-accordion-toggle${mobileDropdownOpen ? " open" : ""}`}
                    onClick={() => setMobileDropdownOpen((v) => !v)}
                    aria-label="Toggle admissions submenu"
                  >
                    ▾
                  </button>
                </div>
                <div className={`mobile-accordion-panel${mobileDropdownOpen ? " open" : ""}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      className="m-sublink"
                      to={child.href}
                      onClick={close}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} className="m-link" to={item.href} onClick={close}>
                {item.label}
              </Link>
            )
          )}
          <div className="m-phone">
            <span className="dot">☏</span> +234 903 474 7594
          </div>
          <a className="btn-apply" href="#" onClick={close}>
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
