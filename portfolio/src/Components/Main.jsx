const Main = () => {
  return (
    <div>
      <section
        id="home"
        className="min-vh-100 py-5 bg-primary-custom d-flex align-items-center justify-content-center flex-column text-center"
      >
        <h2 className="text-primary-custom">Welcome to My Portfolio</h2>
        <p className="text-secondary-custom lead">
          Hi, I'm Ayesha Shafique – a Front-End Developer passionate about creating elegant and responsive UIs.
        </p>
        <button className="btn btn-custom mt-3">Explore More</button>
      </section>

      <section
        id="about"
        className="min-vh-100 py-5 bg-secondary-custom d-flex align-items-center justify-content-center flex-column text-center"
      >
        <h2 className="text-primary-custom">About Me</h2>
        <p className="text-secondary-custom w-75">
          I’m a Computer Science student with hands-on experience in front-end development. I’ve completed internships, online certifications, and academic projects that sharpened my skills in web technologies. Outside tech, I thrive on debate competitions, content creation, and volunteering.
        </p>
      </section>

      <section
        id="skills"
        className="min-vh-100 py-5 bg-primary-custom d-flex align-items-center justify-content-center flex-column text-center"
      >
        <h2 className="text-primary-custom">My Skills</h2>
        <ul className="list-unstyled mt-3 text-secondary-custom">
          <li>🌐 HTML, CSS, JavaScript</li>
          <li>⚛️ React, Bootstrap, jQuery</li>
          <li>🛠️ Git, Responsive Design</li>
          <li>🧠 C++, DSA, OOP</li>
        </ul>
      </section>

      <section
        id="projects"
        className="min-vh-100 py-5 bg-secondary-custom d-flex align-items-center justify-content-center flex-column text-center"
      >
        <h2 className="text-primary-custom">Projects</h2>
        <div className="text-secondary-custom w-75">
          <p>✨ <strong>Todo App</strong> – A React-based task manager with filters and update features.</p>
          <p>✨ <strong>Portfolio Website</strong> – Showcasing my achievements and skills using custom CSS themes.</p>
          <p>✨ <strong>Login UI</strong> – A sleek, responsive form with validation and password toggle features.</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-vh-100 py-5 bg-primary-custom d-flex align-items-center justify-content-center flex-column text-center"
      >
        <h2 className="text-primary-custom">Contact Me</h2>
        <p className="text-secondary-custom mb-3">Let’s collaborate and create something beautiful!</p>
        <p className="text-secondary-custom">
          Email: <a href="mailto:ayeshashafiqueo18@gmail.com">ayeshashafiqueo18@gmail.com</a>
        </p>
        <p className="text-secondary-custom">
          LinkedIn: <a href="https://www.linkedin.com/in/ayesha-shafique" target="_blank" rel="noopener noreferrer">Visit Profile</a>
        </p>
      </section>
    </div>
  );
};

export default Main;
