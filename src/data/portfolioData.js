// ------------------------------------------------------------------
// Edit this file to update your links, email, and project status.
// Everything else in the app reads from here.
// ------------------------------------------------------------------

export const profile = {
  name: "John Gabriel L. Panopio",
  shortName: "John Gabriel Panopio",
  initials: "JP",
  tagline:
    "Interested in software, automation, and solving practical technical problems.",
  titleLine1: "Junior Software",
  titleLine2: "Engineer",
  tagline: "Backend Development · AI Integration · Automation",
  summary:
    "Fresh Computer Engineering graduate focused on backend and automation work. I've built n8n systems that connect webhooks, REST APIs, PostgreSQL, Airtable, and Gemini-based AI steps, and I'm now deepening my Python and backend development skills.",
  email: "cpe.panopio.johngabriel@gmail.com",
  links: {
    github: "https://github.com/Azarath-max",
    linkedin: "https://www.linkedin.com/in/johngabrielpanopio/",
  },
};

export const about = `I'm a Computer Engineering graduate from Dalubhasaan ng Lungsod ng San Pablo, with a foundation in both software and hardware. My interest is in software development, especially backend systems, APIs, and databases, and I'm still building my Python and backend skills. Alongside that, I've built automation projects in n8n that connect webhooks, REST APIs, PostgreSQL, Airtable, and Gemini to validate, classify, and route incoming data, including a RAG-based customer success system. Before this, I interned as a Drive Test Analyst at COMIT Telecom Philippines, where I analyzed real network data, which taught me to troubleshoot methodically.`;

export const quickFacts = [
  { label: "Status", value: "Open to entry-level software engineering roles" },
  { label: "Focus", value: "IT · Automation · Software" },
  { label: "Education", value: "BS Computer Engineering, 2026" },
  { label: "Currently Learning", value: "Python · Next.js · APIs" },
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
    skills: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "SQL", "JSON"],
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

export const projects = [
  {
    title: "AI Lead Qualification & Smart Sales Routing System",
    status: "Completed",
    description:
      "An n8n workflow that validates and deduplicates inbound leads, scores them with Gemini, stores results in Airtable, and routes hot leads to Slack with an automatic acknowledgement email.",
    techStack: ["n8n", "Webhooks", "Gemini API", "Airtable", "Slack", "Gmail"],
    link: "https://github.com/Azarath-max/ai-lead-qualification-system",
    image: "/projects/lead-qualification.png",
  },
  {
    title: "AI Customer Support Ticket Triage & Routing System",
    status: "Completed",
    description:
      "An n8n automation that validates incoming support tickets, classifies them with Gemini (priority, category, sentiment), and routes critical/high-priority tickets to Slack while logging every step for auditability.",
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
  {
    title: "AI Customer Success Inbound Automation & Triage System",
    status: "Completed",
    description:
      "A 16-stage n8n system that classifies inbound customer requests with Gemini, grounds responses in a RAG knowledge base, uses a controlled AI Agent for account lookups, and routes by deterministic health/risk scoring — with human approval via Slack before any reply sends.",
    techStack: [
      "n8n",
      "PostgreSQL",
      "Gemini API",
      "RAG",
      "AI Agent",
      "Slack",
      "Gmail",
    ],
    link: "https://github.com/Azarath-max/AI-Customer-Success-Inbound-Automation-Triage-System",
    image: "/projects/architecture.jpg",
  },
  {
    title: "AI Customer Onboarding Welcome Automation",
    status: "Completed",
    description:
      "An n8n workflow triggered by Salesforce Closed-Won deals that validates account data, drafts a personalized welcome email with Gemini, routes it through Slack for human approval, and sends via Gmail.",
    techStack: ["n8n", "Salesforce", "Gemini API", "Slack", "Gmail"],
    link: "https://github.com/Azarath-max/AI-Customer-Onboarding-Welcome-Automation",
    image: "/projects/AI Customer Onboarding Welcome Automation.png",
  },
];
