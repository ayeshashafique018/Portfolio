import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark-mode" : "light-mode";
  }, [dark]);

  return (
    <motion.div
      className="position-fixed top-0 end-0 p-3"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={() => setDark(!dark)}
        className="btn btn-sm btn-light"
        style={{ borderRadius: "50%", background: dark ? "#1e2a47" : "#fff" }}
      >
        {dark ? <FaSun color="#f9d71c" /> : <FaMoon color="#1e2a47" />}
      </button>
    </motion.div>
  );
}
