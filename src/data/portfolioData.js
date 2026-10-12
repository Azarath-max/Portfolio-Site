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
