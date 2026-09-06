import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import "./Projects.css";

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-heading">Currently Building</h2>
        <p className="projects-intro">
          I'm currently building practical projects focused on automation, APIs,
          Python, and web development. I'll add them here as they are completed.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              className={`project-item ${project.status === "Completed" ? "project-item--completed" : ""}`}
              key={project.title}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span
                  className={`project-status project-status--${project.status.toLowerCase().replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>
              {project.image && (
                <button
                  className="project-image-button"
                  onClick={() =>
                    setLightboxImage({
                      src: project.image,
                      title: project.title,
                    })
                  }
                  aria-label={`View larger screenshot of ${project.title}`}
                >
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                  />
                </button>
              )}
              <p>{project.description}</p>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxImage.title} screenshot, enlarged`}
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <img
            className="lightbox-image"
            src={lightboxImage.src}
            alt={`Enlarged screenshot of ${lightboxImage.title}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
