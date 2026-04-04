import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.border = "2px solid #63AAFF";
    cursor.style.borderRadius = "50%";
    cursor.style.zIndex = "10000";
    cursor.style.pointerEvents = "none";
    cursor.style.transition = "transform 0.1s ease";
    cursor.style.mixBlendMode = "difference";
    cursor.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return null;
}
