import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import "./Projects.css";

// Order and labels for the detail sections. A section only renders if the project has it.
const DETAIL_SECTIONS = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem solved" },
  { key: "technologies", label: "Technologies" },
  { key: "architecture", label: "Architecture" },
  { key: "implementation", label: "Implementation" },
  { key: "challenges", label: "Technical challenges" },
  { key: "testing", label: "Testing" },
  { key: "future", label: "Future improvements" },
];

function DetailSection({ sectionKey, label, value }) {
  let body;
  if (typeof value === "string") {
    body = <p>{value}</p>;
  } else if (sectionKey === "technologies") {
    body = (
      <div className="project-tech-tags">
        {value.map((item) => (
          <span className="project-tech-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    );
  } else if (sectionKey === "architecture") {
    body = (
      <ol className="detail-steps">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  } else {
    body = (
      <ul className="detail-list">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <section className="detail-section">
      <h4>{label}</h4>
      {body}
    </section>
  );
}

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const lastTrigger = useRef(null);
  const closeButton = useRef(null);

  const overlayOpen = Boolean(lightboxImage || activeProject);

  const openDetails = (project, event) => {
    lastTrigger.current = event.currentTarget;
    setActiveProject(project);
  };

  const closeAll = () => {
    setLightboxImage(null);
    setActiveProject(null);
    if (lastTrigger.current) lastTrigger.current.focus();
  };

  useEffect(() => {
    if (!overlayOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        // Close the image first if it is on top of the details panel.
        if (lightboxImage) setLightboxImage(null);
        else closeAll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayOpen, lightboxImage]);

  useEffect(() => {
    if (activeProject && closeButton.current) closeButton.current.focus();
  }, [activeProject]);

  return (
    <section id="projects" className="section reveal">
      <div className="projects-wrap">
        <h2 className="section-heading">Projects</h2>
        <p className="projects-intro">
          Automation systems built with n8n, REST APIs, databases, and AI
          integrations. Open any project for its architecture, implementation,
          and testing notes.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.status === "Completed" ? "project-card--completed" : ""}`}
              key={project.title}
            >
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

              <div className="project-card-body">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.status !== "Completed" && (
                    <span
                      className={`project-status project-status--${project.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="project-summary">{project.summary}</p>

                {project.techStack && (
                  <div className="project-tech-tags">
                    {project.techStack.map((tech) => (
                      <span className="project-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-actions">
                {project.details && (
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => openDetails(project, e)}
                  >
                    View details
                  </button>
                )}
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={15} /> Repository <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {overlayOpen &&
        createPortal(
          <>
            {activeProject && (
              <div className="overlay" onClick={closeAll}>
                <div
                  className="detail-panel"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="project-detail-title"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="detail-panel-header">
                    <h3 id="project-detail-title">{activeProject.title}</h3>
                    <button
                      ref={closeButton}
                      className="detail-close"
                      onClick={closeAll}
                      aria-label="Close project details"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="detail-panel-body">
                    {DETAIL_SECTIONS.filter(
                      (s) => activeProject.details[s.key],
                    ).map((s) => (
                      <DetailSection
                        key={s.key}
                        sectionKey={s.key}
                        label={s.label}
                        value={activeProject.details[s.key]}
                      />
                    ))}
                  </div>

                  {activeProject.link && (
                    <div className="detail-panel-footer">
                      <a
                        className="project-link"
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={15} /> View repository{" "}
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {lightboxImage && (
              <div
                className="overlay overlay--image"
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
          </>,
          document.body,
        )}
    </section>
  );
}
