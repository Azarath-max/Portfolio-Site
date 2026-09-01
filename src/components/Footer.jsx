import { profile } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          {profile.shortName} · {year}
        </p>
      </div>
    </footer>
  );
}
