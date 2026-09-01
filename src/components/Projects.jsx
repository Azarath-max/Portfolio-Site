import { projects } from "../data/portfolioData.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-heading">Currently Building</h2>
        <p className="projects-intro">
          I'm currently building practical projects focused on automation, APIs, Python, and web
          development. I'll add them here as they are completed.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-item" key={project.title}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status project-status--${project.status.toLowerCase().replace(" ", "-")}`}>
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
