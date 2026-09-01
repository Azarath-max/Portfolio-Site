import { education } from "../data/portfolioData.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="education-item">
          <h3>{education.degree}</h3>
          <p className="education-school">{education.school}</p>
          <p className="education-period">{education.period}</p>
        </div>
      </div>
    </section>
  );
}
