// ------------------------------------------------------------------
// Edit this file to update your links, email, and project status.
// Everything else in the app reads from here.
// ------------------------------------------------------------------

export const profile = {
  name: "John Gabriel L. Panopio",
  shortName: "John Gabriel Panopio",
  initials: "JP",
  title: "Computer Engineering Graduate",
  tagline:
    "Interested in software, automation, and solving practical technical problems.",
  summary:
    "I'm an entry-level technology professional currently developing my skills in software development and workflow automation. I'm looking for opportunities in IT support, automation, or junior software roles where I can keep building on what I learned in school and during my internship.",
  email: "cpe.panopio.johngabriel@gmail.com", // TODO: replace with your real email
  links: {
    github: "https://github.com/Azarath-max", // TODO: replace
    linkedin: "https://www.linkedin.com/in/johngabrielpanopio/", // TODO: replace
  },
};

export const quickFacts = [
  { label: "Status", value: "Open to entry-level roles" },
  { label: "Focus", value: "IT · Automation · Software" },
  { label: "Education", value: "BS Computer Engineering, 2026" },
  { label: "Based in", value: "Philippines" },
];

export const highlights = [
  { label: "Degree", value: "BS Computer Engineering, PLSP (2022–2026)" },
  { label: "Internship", value: "Drive Test Analyst, COMIT Telecom (2026)" },
  { label: "Currently learning", value: "Python, APIs, n8n, Zapier" },
];

export const about = `I recently completed my BS in Computer Engineering at Pamantasan ng Lungsod ng San Pablo, where I gained a solid foundation in both software and hardware. During my internship as a Drive Test Analyst, I got hands-on experience working with real telecom network data, which taught me how to stay methodical when troubleshooting and interpreting technical information. Right now I'm expanding into software development and workflow automation — learning Python, building small projects with APIs, and getting comfortable with tools like n8n and Zapier. I'm still early in that journey, but I enjoy the process of figuring out how systems fit together and automating the repetitive parts.`;

export const experience = [
  {
    role: "Drive Test Analyst Intern",
    company: "COMIT Telecom Philippines Inc.",
    period: "January 2026 — May 2026",
    bullets: [
      "Monitored and analyzed telecommunications network data collected during drive tests.",
      "Used WNG Analyzer to review network performance and identify issues across test routes.",
      "Assisted with troubleshooting and prepared reports summarizing findings.",
      "Worked with network site and location data to help map coverage and identify problem areas.",
      "Helped organize and interpret technical information for the wider team.",
    ],
  },
];

export const education = {
  degree: "BS Computer Engineering",
  school: "Pamantasan ng Lungsod ng San Pablo",
  period: "2022 — 2026",
};

export const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB", "SQL", "JSON"],
  },
  {
    category: "Automation",
    skills: ["n8n", "Zapier"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

// Set status to "In Progress" or "Planned".
// Replace title/description/link once a project is actually finished.
export const projects = [
  {
    title: "Automation Workflow",
    status: "Planned",
    description:
      "An n8n workflow that connects services and automates a repetitive task end-to-end, including error handling and notifications.",
  },
  {
    title: "Python API Project",
    status: "Planned",
    description:
      "A small Python/FastAPI application that consumes or exposes an API, with proper data validation and error handling.",
  },
  {
    title: "Full-Stack React Project",
    status: "Planned",
    description:
      "A practical React application connected to an API or database, built to solve an actual workflow problem rather than a demo task.",
  },
];
