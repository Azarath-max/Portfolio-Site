import { Github, Linkedin, Mail } from "lucide-react";
import { profile, quickFacts } from "../data/portfolioData.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container-wide hero-grid">
        <div className="hero-main">
          <h1 className="hero-title">{profile.title}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a
              className="icon-link"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              className="icon-link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Quick facts">
          {quickFacts.map((fact) => (
            <div className="hero-panel-row" key={fact.label}>
              <span className="hero-panel-label">{fact.label}</span>
              <span className="hero-panel-value">{fact.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
