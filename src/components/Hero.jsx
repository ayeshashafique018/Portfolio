import { motion } from 'framer-motion';
import profilePic from '../assets/images/dp1.png';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="d-flex align-items-center"
        style={{
          minHeight: 'calc(100vh - 70px)',
          paddingTop: '70px',
          background: 'radial-gradient(circle at center, #0f1113, #0b0c0d)',
          color: 'white',
          overflow: 'hidden',
        }}
        id="hero"
      >
        <div className="container-fluid px-md-5">
          <div className="row align-items-center">
            {/* Left Side */}
            <motion.div
              className="col-md-6 text-start mb-4 mb-md-0 position-relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="availability-badge">
                <span className="status-dot"></span>
                Available for Projects
              </div>

              <h1 className="fw-bold display-4">
                Your Digital Presence <br />
                Deserves a Developer <br />
                <span className="text-gradient"> Backed by Marketing  </span>
              </h1>

              <p className="lead mt-3 text-white-50">
                Ayesha blend front-end coding with marketing mindset to craft web experiences that connect.
              </p>

              {
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary glow-button">
                    Start Your Project
                  </a>



                  <a href="/cvdev.pdf" download className="btn btn-outline-light">
                    Dev (Download CV)
                  </a>

                  {/* SMM → Download CV */}
                  <a href="/cv.pdf" download className="btn btn-outline-light">
                    SMM (Download CV)
                  </a>




                </div>
/* Social Links */}
              <div className="mt-4">
                <p className="text-white-50 mb-2">Find me </p>

                <div className="d-flex gap-3 flex-wrap">

                  <a
                    href="https://github.com/ayeshashafique018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn d-flex align-items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
<span className="divider">|</span>
                  <a
                    href="https://www.linkedin.com/in/ayesha-shafique-2a786a194"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="social-btn d-flex align-items-center gap-2"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
<span className="divider">|</span>
                  <a
                    href="https://www.instagram.com/ayesha_shafiquee_?igsh=MTExMjgyNzcxcWt3cw=="
                    target="_blank"
                    rel="noopener noreferrer"
                      className="social-btn d-flex align-items-center gap-2"
                  >
                    <FaInstagram />
                    Content Creator
                  </a>
                  <span className="divider">|</span>
                  <a
                    href="https://www.instagram.com/ugc.ayeshashafique?igsh=djlxbm8ybTlremIx"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="social-btn d-flex align-items-center gap-2"
                  >
                    <FaInstagram />
                    UGC Creator
                  </a>

                </div>
              </div>


            </motion.div>

            {/* Right Side */}
            <motion.div
              className="col-md-6 text-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src={profilePic}
                alt="Ayesha Shafique"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxHeight: 'calc(100vh - 100px)', // fits within screen height
                  objectFit: 'contain',             // keeps full image visible
                  borderRadius: '12px',
                }}

              />
            </motion.div>
          </div>
        </div>
      </section>




    </>
  );
}
