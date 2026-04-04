import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <h2 className="text-center fw-bold display-5 mb-4">
        Front-End Projects
      </h2>

        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card h-100 p-3">

                {/* Clickable Image */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="d-block"
                >
                  <img
                    src={project.image}
                    className="card-img-top rounded project-img"
                    alt={project.title}
                  />
                </a>

                <div className="card-body">

                  {/* Title + Button */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">
                      {project.title}
                    </h5>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-light live-btn"
                    >
                      Live Preview
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-white-50 small mt-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="badge bg-dark rounded-pill px-3 py-1 text-light small"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Full card clickable */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="stretched-link"
                  ></a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .project-img {
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .project-img:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.35);
        }

        .live-btn {
          transition: all 0.3s ease;
        }

        .live-btn:hover {
          transform: translateY(-2px);
          background: white;
          color: black;
        }
      `}</style>
    </section>
  );
}