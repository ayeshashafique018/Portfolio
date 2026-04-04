import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/About.css';

export default function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;

    const clone = box.innerHTML;
    box.innerHTML += clone;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 1;
      box.scrollTop = scrollAmount;

      if (scrollAmount >= box.scrollHeight / 2) {
        scrollAmount = 0;
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const services = [
    "Responsive Web Development",
    "Modern UI Design using Bootstrap",
    "Interactive Web Elements",
    "React.js Development with Vite",
    "Component-Based Architecture in React",
    "Cross-Browser Compatibility & Mobile Responsiveness",
    "Figma to Code Conversion",
    "Git & GitHub Collaboration",
    "Single Page Application (SPA) Development",
    "Website Optimization & Debugging",
    "Form Validation & Authentication UI",
    "Reusable UI Components Creation",
    "Landing Page Development",
    "Portfolio & Business Website Design",
    "Basic MERN Stack Integration",
    "Version Control & Code Refactoring"
  ];

  return (
    <section id="about" className="about-section text-white py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="fw-bold display-5">
            <span className="text-primary">Ayesha Shafique</span> — Front-End Developer
          </h1>
          <p className="lead mt-2">
            Turning clean code into powerful web experiences.
          </p>
        </div>

        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-md-6 mb-4" data-aos="fade-up">
            <h2 className="fw-bold mb-3">
              I build sleek, fast, and scalable web interfaces using <span className="text-primary">React (Vite)</span>, <span className="text-primary">JavaScript</span>, and <span className="text-primary">HTML/CSS</span> — with a growing command of the <span className="text-primary">MERN stack</span>.
            </h2>
            <p className="lead">
              From responsive UI/UX to production-ready code, I bring both <strong>technical precision</strong> and <strong>creative edge</strong> to every project.
              Not just a coder — a <strong>digital problem-solver</strong> who delivers real results.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="services-box" ref={scrollRef}>
              {services.map((service, idx) => (
                <div key={idx} className="service-pill">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
