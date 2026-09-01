import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-heading">Let's Connect</h2>
        <p className="contact-text">
          I'm open to entry-level opportunities, collaborations, and
          conversations about technology. Feel free to reach out.
        </p>

        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            Email Me
          </a>
          <a
            className="btn btn-secondary"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            className="btn btn-secondary"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        <p className="contact-email-text">
          Or reach me directly at{" "}
          <span className="contact-email-value">{profile.email}</span>
        </p>
      </div>
    </section>
  );
}
