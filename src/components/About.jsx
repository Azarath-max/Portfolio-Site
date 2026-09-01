import { about, highlights } from "../data/portfolioData.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide about-grid">
        <div>
          <h2 className="section-heading">About</h2>
          <p>{about}</p>
        </div>

        <aside className="about-highlights" aria-label="Highlights">
          {highlights.map((item) => (
            <div className="about-highlight-row" key={item.label}>
              <span className="about-highlight-label">{item.label}</span>
              <span className="about-highlight-value">{item.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
