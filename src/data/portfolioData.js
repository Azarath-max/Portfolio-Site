// ------------------------------------------------------------------
// Edit this file to update your links, email, and project status.
// Everything else in the app reads from here.
// ------------------------------------------------------------------

export const profile = {
  name: "John Gabriel L. Panopio",
  shortName: "John Gabriel Panopio",
  initials: "JP",
  titleLine1: "AI Automation ",
  titleLine2: "Specialist",
  tagline:
    "Interested in software, automation, and solving practical technical problems.",
  summary:
    "AI Automation Specialist building AI-powered automation workflows — connecting APIs, validating data, and letting AI handle classification and routing decisions. Also bring hands-on telecom experience from an internship analyzing live network data.",
  email: "cpe.panopio.johngabriel@gmail.com",
  links: {
    github: "https://github.com/Azarath-max",
    linkedin: "https://www.linkedin.com/in/johngabrielpanopio/",
  },
};

export const about = `I'm a Computer Engineering graduate from Pamantasan ng Lungsod ng San Pablo, with a foundation in both software and hardware. I build automation workflows that connect APIs and use AI for classification and decision-making — including n8n systems that validate incoming data, send it to Gemini for structured analysis, and route the results automatically across Airtable, Slack, and Gmail. I'm also continuing to build my Python skills alongside this. Before this, I worked as a Drive Test Analyst intern, analyzing real telecom network data — experience that shaped how methodically I approach troubleshooting.`;

export const quickFacts = [
  { label: "Status", value: "Open to entry-level roles" },
  { label: "Focus", value: "IT · Automation · Software" },
  { label: "Education", value: "BS Computer Engineering, 2026" },
  { label: "Currently Learning", value: "Python · n8n · APIs" },
];

export const highlights = [
  { label: "Degree", value: "BS Computer Engineering, PLSP (2022–2026)" },
  { label: "Internship", value: "Drive Test Analyst, COMIT Telecom (2026)" },
  { label: "Currently learning", value: "Python, APIs, n8n, Zapier" },
];

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

// Set status to "In Progress" or "Planned". Use "Completed" once a project is actually finished.
// techStack is optional — an array of short tool/tech names shown as tags on the card.
// image is optional — put the actual file in public/projects/ and reference the path here.
// link is optional — only renders a "View Project" button when filled in.
export const projects = [
  {
    title: "AI Lead Qualification & Smart Sales Routing System",
    status: "Completed",
    description:
      "An end-to-end lead qualification and routing automation built with n8n. The workflow receives lead submissions through a webhook, cleans and validates the data, checks for duplicate leads, and sends qualified submissions to Gemini for AI-powered lead scoring. Structured lead information is stored in Airtable. Hot leads are automatically routed to Slack, and the lead receives an acknowledgement email. Invalid submissions and failed AI responses are separated into a manual review process and logged for troubleshooting.",
    techStack: ["n8n", "Webhooks", "Gemini API", "Airtable", "Slack", "Gmail"],
    link: "https://github.com/Azarath-max/ai-lead-qualification-system",
    image: "/projects/lead-qualification.png", // put the actual image file in public/projects/
  },
  {
    title: "AI Customer Support Ticket Triage & Routing System",
    status: "Completed",
    description:
      "An n8n automation that takes an inbound support ticket from a raw webhook submission to a classified, prioritized, and routed response. Submissions are validated before any AI call is made, then sent to Gemini for structured classification (priority, category, sentiment, and a customer-facing acknowledgement draft) using a schema-constrained response format. The AI output is schema- and enum-validated in code before anything downstream trusts it. Spam is filtered before priority is even considered, critical and high-priority tickets trigger an immediate Slack alert alongside a real acknowledgement email, and every branch — including failures — writes its own entry to an automation log so nothing is silently dropped.",
    techStack: [
      "n8n",
      "Webhooks",
      "Gemini API",
      "Airtable",
      "Slack",
      "Gmail",
      "JavaScript",
    ],
    link: "https://github.com/Azarath-max/AI-Customer-Support-Ticket-Triage-Routing-System-",
    image: "/projects/AI Customer Support Ticket Triage & Routing System.png",
  },
];
