// src/components/Technologies.jsx

import { technologies } from '../data/technologiesData';
import '../styles/Technologies.css'; // Make sure this CSS file is imported

export default function Technologies() {
  return (
    <section id="technologies" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Technologies I Work With</h2>
        <p className="text-white-50 mb-4">Technologies I Work With</p>

        <div className="tech-slider">
          <div className="slider-track">
            {technologies.concat(technologies).map((tech, index) => (
              <div className="slide" key={index}>
                <img src={tech.icon} alt={tech.name} />
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
