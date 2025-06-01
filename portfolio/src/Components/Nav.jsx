import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-md sticky-top shadow-sm navbar-custom border-bottom border-custom">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary-custom" href="#">
          Ayesha's Portfolio
        </a>
        <button
          className="navbar-toggler border-custom"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
          style={{ borderColor: "#B6B09F" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(0%)" }}
          ></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {links.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link text-secondary-custom"
                  href={link.href}
                  onClick={() => setIsCollapsed(true)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-secondary-custom"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-secondary-custom"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-secondary-custom"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
