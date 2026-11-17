import { skillGroups, learningSkills } from "../data/portfolioData.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
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

        {learningSkills?.length > 0 && (
          <div className="skills-learning">
            <h3 className="skills-category">Currently learning</h3>
            <div className="skills-tags">
              {learningSkills.map((skill) => (
                <span className="skills-tag skills-tag--learning" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
