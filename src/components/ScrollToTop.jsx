import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#63AAFF",
        padding: "12px",
        borderRadius: "50%",
        cursor: "pointer",
        display: visible ? "block" : "none",
        zIndex: 9999,
      }}
      onClick={scrollToTop}
    >
      <FaArrowUp color="white" />
    </div>
  );
}
