import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <div className="row">

          {/* About / Intro */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Ayesha Shafique</h5>
            <p className="text-light small">
              Frontend Developer & Marketing Mindset Creator. Building modern,
              scalable, and impactful digital experiences.
            </p>
            <a
              href="mailto:ayeshashafique018@gmail.com"
              className="btn btn-primary btn-sm rounded-pill"
            >
              Get In Touch →
            </a>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled small">
              <li>Web Development</li>
              <li>Social Media Management</li>
              <li>UGC Content Creation</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Brand Strategy</li>
              <li>Landing Pages & Funnels</li>
            </ul>
          </div>

          {/* Expertise / Skills */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Expertise</h5>
            <ul className="list-unstyled small">
              <li>Responsive Web Design</li>
              <li>React.js Development</li>
              <li>Performance Optimization</li>
              <li>SEO-Friendly Websites</li>
              <li>Conversion-Focused Design</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Connect</h5>

            <ul className="list-unstyled small">

              <li className="mb-2">
                <a
                  href="https://github.com/ayeshashafique018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaGithub /> GitHub
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/ayesha-shafique-2a786a194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://www.instagram.com/ayesha_shafiquee_?igsh=MTExMjgyNzcxcWt3cw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaInstagram /> Content Creator
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/ugc.ayeshashafique?igsh=djlxbm8ybTlremIx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <FaInstagram /> UGC Creator
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary mt-3" />

        {/* Bottom */}
        <div className="text-center text-muted small">
          © 2026 Ayesha Shafique. All rights reserved. | Built with passion & modern tech.
        </div>
      </div>
    </footer>
  );
}