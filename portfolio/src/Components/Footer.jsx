const Footer = () => {
  return (
    <footer className="footer-custom text-center py-4 mt-5 border-top border-custom">
      <div className="container">
        <p className="mb-1 text-primary-custom">
          © {new Date().getFullYear()} Ayesha Shafique. All rights reserved.
        </p>
        <div>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-secondary-custom mx-2"
            aria-label="GitHub"
          >
            GitHub
          </a>
          |
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-secondary-custom mx-2"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-secondary-custom mx-2"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
