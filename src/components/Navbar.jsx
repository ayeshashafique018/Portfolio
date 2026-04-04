import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'bg-dark shadow-sm' : 'bg-transparent'
      }`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center text-white fw-bold gap-2"
          to="/"
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '30px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
          <span style={{ fontSize: '1.9rem', lineHeight: '1' }}>
            Ayesha
          </span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
{/* 
            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <a
                href="#projects"
                className="nav-link text-white"
                onClick={(e) => handleScroll(e, 'projects')}
              >
                Projects
              </a>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <a
                href="#about"
                className="nav-link text-white"
                onClick={(e) => handleScroll(e, 'about')}
              >
                About
              </a>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <a
                href="#contact"
                className="nav-link text-white"
                onClick={(e) => handleScroll(e, 'contact')}
              >
                Contact
              </a>
            </li> */}
          </ul>

          {/* Button */}
          <div className="d-flex justify-content-end">
            <a
              href="#contact"
              className="btn btn-primary mt-2 mt-lg-0"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}