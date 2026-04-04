import React, { useEffect, useState } from 'react';

const LearningJourney = () => {

  // ✅ Skills Data
  const skills = [
    { name: "HTML, CSS, Bootstrap", done: true },
    { name: "Responsive Web Design", done: true },
    { name: "UI/UX with Figma", done: true },
    { name: "React.js + Vite", done: true },
    { name: "JavaScript", done: true },
    { name: "Git & GitHub", done: true },
    { name: "MERN Stack", done: false },
  ];

  const completed = skills.filter(skill => skill.done).length;
  const actualProgress = Math.round((completed / skills.length) * 100);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(actualProgress);
    }, 300);
  }, [actualProgress]);

  return (
    <section className="learning-progress-section py-5 text-light" style={{ background: '#0C0D0E' }}>
      
      <h2 className="text-center fw-bold display-5 mb-4">
        My Development Journey
      </h2>

      <div className="progress-card mx-auto p-4 rounded shadow" style={{ maxWidth: '900px', background: '#1e1e1e' }}>
        
        {/* Top Section */}
        <div className="progress-top d-flex justify-content-between align-items-center">
          <span className="progress-title fw-semibold">
            Building Scalable Web Applications
          </span>
          <span className="progress-percent text-success fw-bold">
            {progress}%
          </span>
        </div>

        {/* Progress Bar (UNCHANGED) */}
        <div style={{
          height: '12px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.15)',
          marginTop: '15px',
          overflow: 'hidden'
        }}>
          <div
            style={{
              height: '100%',
              width: '80%',
              borderRadius: '20px',
              background: 'linear-gradient(90deg, #00c853, #69f0ae)',
              transition: 'width 0.8s ease-in-out',
              boxShadow: '0 0 8px rgba(0,200,83,0.5)'
            }}
          />
        </div>

        {/* Skills Section */}
        <div className="progress-boxes row text-start mt-4">
          
          <div className="phase-box col-md-6">
            <h5>🎨 UI / Frontend Development</h5>
            <ul className="list-unstyled">
              <li>✓ Clean UI using HTML, CSS, Bootstrap</li>
              <li>✓ Responsive & mobile-first design</li>
              <li>✓ UI/UX design using Figma</li>
            </ul>
          </div>

          <div className="phase-box col-md-6">
            <h5>💻 Application Development</h5>
            <ul className="list-unstyled">
              <li>✓ React.js (Hooks, Routing, Components)</li>
              <li>✓ JavaScript (ES6+) for logic & interactivity</li>
              <li>✓ Git & GitHub for version control</li>
              <li>⏳ MERN Stack (MongoDB, Express, Node)</li>
            </ul>
          </div>

        </div>

        {/* NEW PROFESSIONAL SECTION (Subtle but powerful) */}
        <div className="mt-4 p-3 rounded" style={{ background: '#111' }}>
          <p className="mb-0 text-center">
            <strong>Hands-on Experience:</strong> Built multiple real-world projects including dashboards, blogs, eCommerce UI, and interactive web apps — all deployed and production-ready.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center mt-4 text-success fw-bold">
          Focused on writing clean, scalable code and building real-world solutions 💻✨
        </p>

      </div>

    </section>
  );
};

export default LearningJourney;