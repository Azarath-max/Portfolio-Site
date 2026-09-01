import { skillGroups } from "../data/portfolioData.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-card" key={group.category}>
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-tags">
                {group.skills.map((skill) => (
                  <span className="skills-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
