import { experience } from "../data/portfolioData.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-heading">Experience</h2>

        {experience.map((job) => (
          <div className="experience-item" key={job.company}>
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span className="experience-period">{job.period}</span>
            </div>
            <p className="experience-company">{job.company}</p>

            <ul className="experience-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
