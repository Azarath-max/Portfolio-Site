import { useEffect } from "react";

// Watches every element with the "reveal" class and adds "is-visible"
// once it scrolls into view. CSS (see index.css) handles the actual
// animation and already no-ops this under prefers-reduced-motion.
export default function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
