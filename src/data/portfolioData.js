// ------------------------------------------------------------------
// Edit this file to update your links, email, and project status.
// Everything else in the app reads from here.
// ------------------------------------------------------------------

export const profile = {
  name: "John Gabriel L. Panopio",
  shortName: "John Gabriel Panopio",
  initials: "JP",
  titleLine1: "Junior Software",
  titleLine2: "Engineer",
  tagline: "Backend Development · Automation · AI Integration",
  summary:
    "Computer Engineering graduate who builds backend and automation systems. I started with n8n workflows connecting webhooks, REST APIs, PostgreSQL, and Gemini, then rebuilt the routing core as a FastAPI service with 55 tests, a Docker image, and CI. The design rule in both is the same: validate everything, let plain code make the decisions, and never send a guess to a customer.",
  email: "cpe.panopio.johngabriel@gmail.com",
  resume: "/resume.pdf",
  links: {
    github: "https://github.com/Azarath-max",
    linkedin: "https://www.linkedin.com/in/johngabrielpanopio/",
  },
};

export const about = `I'm a Computer Engineering graduate from Pamantasan ng Lungsod ng San Pablo (PLSP), with a foundation in both software and hardware. My interest is in software development, especially backend systems, APIs, and databases. I've built automation systems in n8n that connect webhooks, REST APIs, PostgreSQL, Airtable, and Gemini to validate, classify, and route incoming data, including a RAG-based customer success system backed by pgvector. I then rebuilt its routing core as a FastAPI service, which is where I learned that the interesting part of an AI feature is not the prompt: it is the validation, the tests, and the decision about what the system does when the model is wrong. Before this, I interned as a Drive Test Analyst at COMIT Telecom Philippines, where I analyzed real network data, which taught me to troubleshoot methodically.`;

export const quickFacts = [
  { label: "Status", value: "Open to entry-level backend and automation roles" },
  { label: "Location", value: "Makati City, Metro Manila" },
  { label: "Focus", value: "Backend · APIs · Automation" },
  { label: "Education", value: "BS Computer Engineering, 2026" },
  { label: "Currently Learning", value: "TypeScript · Node.js" },
];

export const highlights = [
  { label: "Degree", value: "BS Computer Engineering, PLSP (2022–2026)" },
  { label: "Internship", value: "Drive Test Analyst, COMIT Telecom (2026)" },
  { label: "Currently learning", value: "TypeScript, Node.js" },
];

export const experience = [
  {
    role: "Drive Test Analyst Intern",
    company: "COMIT Telecom Philippines Inc.",
    period: "February 2026 — May 2026",
    bullets: [
      "Monitored and analyzed telecom network data to identify abnormal network conditions.",
      "Investigated technical issues and prepared weekly troubleshooting reports.",
      "Analyzed field data with WNG Analyzer across 100 network site conditions.",
      "Mapped 50 test site locations in Google Earth Pro for technical tracking.",
      "Coordinated with field teams to verify network data and investigate discrepancies.",
    ],
  },
];

export const education = {
  degree: "BS Computer Engineering",
  school: "Pamantasan ng Lungsod ng San Pablo (PLSP)",
  location: "San Pablo City, Laguna",
  period: "2022 — 2026",
};

// Only list a skill here if a project, repository, or shipped feature backs it.
// Everything else belongs in `learningSkills`.
export const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Pydantic", "REST APIs", "Webhooks", "JSON"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "pgvector", "Airtable"],
  },
  {
    category: "Automation",
    skills: ["n8n", "Zapier"],
  },
  {
    category: "Testing & Tooling",
    skills: ["pytest", "Git", "GitHub Actions", "Docker"],
  },
];

export const learningSkills = ["TypeScript", "Node.js"];

export const projects = [
  {
    title: "Customer Support Triage API",
    status: "Completed",
    featured: true,
    summary:
      "A FastAPI service built on one rule: the model classifies, plain code decides. Message input and model output are both validated before anything acts on them, health rules can only raise risk, and a failed classification degrades to human review at confidence zero instead of sending a guess. This is the Python rewrite of the n8n customer success workflow below.",
    techStack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "pgvector",
      "Gemini API",
      "pytest",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://github.com/Azarath-max/cs-triage-api",
    image: "/projects/cs-triage-api.svg",
    details: {
      overview:
        "An inbound support message is validated, classified by an LLM against a schema, re-validated in code, scored against deterministic account-health rules, and routed to a queue with an explicit response mode. Risky or uncertain cases are held for a human before anything is sent. The service runs with no API key, no database, and no Docker, because the classifier and repository both sit behind interfaces.",
      problem:
        "My earlier customer success system lived inside n8n. The workflow proved the pipeline, but the routing logic was configuration rather than code: it could not be unit-tested, reviewed in a pull request, or reasoned about without opening a visual editor. That is fine for a prototype and a problem for anything a team has to maintain.",
      technologies: [
        "Python 3.11+",
        "FastAPI",
        "Pydantic v2",
        "PostgreSQL + pgvector",
        "Gemini API (schema-constrained)",
        "pytest",
        "Docker + Docker Compose",
        "GitHub Actions",
      ],
      architecture: [
        "POST /v1/messages is validated by Pydantic: email format, message_id character set, length caps. A failure returns 422 and nothing is persisted.",
        "A duplicate check runs before the model is called; message_id is also UNIQUE in Postgres, so two simultaneous arrivals cannot both be stored.",
        "The classifier is an interface with two implementations: Gemini with a response schema, and a deterministic keyword stub for local runs.",
        "The model response is parsed by pure functions that reject unknown enums, clamp confidence, and drop unrecognised keys.",
        "A failed classification becomes confidence 0, which the routing rules convert to human review with no draft.",
        "Customer signals are read from the database. The LLM never supplies them.",
        "assess_health and decide_routing are pure functions with no I/O, so every branch is unit-testable.",
        "The interaction and an append-only audit log entry are written with the outcome, response mode, confidence, and the reasons that fired.",
      ],
      implementation: [
        "Model output is treated as untrusted input. It comes from text a customer controls, so it gets the same treatment as a form field: required keys checked, enums rejected rather than guessed, confidence clamped to 0-1.",
        "The failure mode is deliberate: a broken model degrades to 'a person reads this', never to 'a guess reached a customer'.",
        "The prompt frames message text as data, not instructions, but the real defence is structural. Model output can only become a validated Classification, and routing is decided by code that never reads the raw message.",
        "Health can only go up automatically. If the stored status is already higher than the rules compute, the stored status wins and the reason is recorded.",
        "Routing priority is explicit and ordered: escalate, csm_review, billing, human_review, commercial, adoption, standard. First match wins.",
        "Billing never involves an AI decision. It gets a fixed template and a specialist queue regardless of confidence.",
        "Two thresholds, not one: MIN_CONFIDENCE decides whether a message is triaged at all, AUTO_SEND_CONFIDENCE decides whether a reply can go without approval.",
        "The API returns health_reasons alongside the decision, so the response explains why an account was flagged rather than just naming a status.",
      ],
      challenges: [
        "Keeping the rules testable meant refusing to let the HTTP layer, the database, or the model leak into them. The two Protocol boundaries exist for that reason.",
        "FastAPI dependency injection is expressed as default arguments, which ruff's B008 rule flags. The fix was a per-file ignore with a comment explaining why, not disabling the rule globally.",
        "The route handler is a sync def on purpose: the classifier and repository do blocking I/O, so FastAPI runs it in its threadpool instead of stalling the event loop.",
      ],
      testing: [
        "55 pytest tests, run in CI with no network, no database, and no API key.",
        "Coverage spans validation edge cases (missing keys, unknown enums, boolean confidence, non-list fields), every health rule, every routing branch, the Gemini request and response handling via httpx.MockTransport, and the HTTP layer end to end.",
        "CI also runs ruff check, ruff format --check, and a Docker image build.",
      ],
      future: [
        "An evaluation set of fixed messages with expected classifications, run in CI to catch prompt or model regressions.",
        "Response drafting with a content guard that blocks money and commitment language.",
        "A Slack approval flow with a 24-hour timeout.",
        "A read-only dashboard over the audit log.",
        "Deploy it publicly so the OpenAPI docs are a live link rather than a local command.",
      ],
    },
  },
  {
    title: "AI Lead Qualification & Smart Sales Routing System",
    status: "Completed",
    summary:
      "An n8n pipeline that validates inbound leads, checks Airtable for duplicates, and scores new ones with Gemini using a schema-constrained JSON response. The AI output is validated in code, then routed by Hot, Warm, or Cold to Slack alerts or Gmail drafts, with every failure path logged.",
    techStack: [
      "n8n",
      "Webhooks",
      "Gemini API",
      "Airtable",
      "Slack",
      "Gmail",
      "JavaScript",
    ],
    link: "https://github.com/Azarath-max/ai-lead-qualification-system",
    image: "/projects/lead-qualification.png",
    details: {
      overview:
        "An n8n automation that takes an inbound sales lead from a raw form submission to a scored, categorized, routed, and partially drafted follow-up. It was built as a client-style deliverable for a small B2B service business.",
      problem:
        "Leads arrive in a shared inbox and are triaged by hand. There is no shared definition of a hot lead, a high-intent lead can sit next to spam for hours, the same company can submit twice and be treated as two leads, and nobody can reconstruct how a lead was handled.",
      technologies: [
        "n8n",
        "Webhook",
        "Gemini API (HTTP Request)",
        "Airtable",
        "Slack",
        "Gmail",
        "JavaScript (Code nodes)",
      ],
      architecture: [
        "Webhook receives the form submission and a Set node cleans the fields.",
        "A Code node and IF node validate the email, name, and message. Failures go to an Errors table and a Slack alert.",
        "Airtable is searched by email. A match increments the submission count and skips the AI call.",
        "New leads are normalized and sent to Gemini in JSON mode with a response schema.",
        "A Code node validates the AI response, then the lead and its analysis are stored in Airtable.",
        "A Switch node routes by temperature. Hot sends a Slack alert and an acknowledgement email. Warm and Cold create personalized Gmail drafts.",
        "Each major step writes an entry to an Automation Log table.",
      ],
      implementation: [
        "Structured output uses responseMimeType application/json with an enum-constrained schema, so validation code only checks content, not formatting.",
        "AI output is treated as untrusted input: required keys are checked, temperature must be Hot, Warm, or Cold, and the score is clamped to 0-100. An invalid response stores the lead with a Manual Review stage instead of guessing.",
        "The system prompt frames submitted text as data, never instructions, to reduce prompt-injection risk.",
        "Scoring and email drafting are two separate AI calls with different temperatures, so a weak draft never affects routing.",
        "Validation runs before the duplicate check, and the duplicate check runs before the AI call, so no work is spent on bad or repeat submissions.",
        "The Automation Log is append-only (Create, never Update) and records the n8n execution ID for tracing a lead's full run.",
      ],
      challenges: [
        "n8n replaces the item at each node, so downstream nodes reference earlier nodes by name instead of assuming $json still holds the lead data.",
        "Airtable Autonumber fields cannot be used as an upsert match key, so updates match on the internal record id.",
        "Logging had to be a Create operation, because a log is a sequence of events rather than a row to merge into.",
      ],
      future: [
        "Require a shared secret on the intake webhook.",
        "Queue the AI call instead of running it inline with the webhook.",
        "Move from Airtable to Postgres for reporting and joins.",
        "Use similarity-based duplicate detection instead of exact email matching.",
        "Recalibrate the scoring rubric using real closed-deal outcomes.",
      ],
    },
  },
  {
    title: "AI Customer Support Ticket Triage & Routing System",
    status: "Completed",
    summary:
      "A 20-node n8n workflow that validates tickets before any AI call, classifies them with Gemini (priority, category, sentiment), and re-validates the response in code. Spam is filtered first, critical and high-priority tickets trigger a Slack alert, and every branch writes to an automation log.",
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
    details: {
      overview:
        "An n8n automation that takes a support ticket from a raw form submission to a classified, prioritized, and routed response, and only pulls a human in where a human decision matters, such as an urgent alert or a failed AI analysis.",
      problem:
        "Tickets arrive at any volume with no built-in signal of urgency, so a payment outage and a simple question look identical in a shared inbox until someone reads both.",
      technologies: [
        "n8n",
        "Webhook",
        "Gemini API (HTTP Request)",
        "Airtable",
        "Slack",
        "Gmail",
        "JavaScript (Code nodes)",
      ],
      architecture: [
        "Webhook receives the ticket and a Set node cleans the data.",
        "A Code node and IF node validate email, subject, and description. Failures go to the Errors table with a Slack alert and no AI call is made.",
        "An HTTP Request node sends the ticket to Gemini with a fixed prompt and a schema-constrained JSON response.",
        "A Code node validates the AI response against the schema and allowed enum values. A failure stores a Manual Review record with the raw fields and sends a Slack alert.",
        "A valid ticket is stored in Airtable, then a Switch node routes by category and priority. Spam is checked first.",
        "Critical and High tickets send a Slack alert and an acknowledgement email. Normal and Low send an acknowledgement email.",
        "Every branch writes its own entry to an Automation Log table.",
      ],
      implementation: [
        "Category and priority are separate fields, and spam is checked before priority, so a spam ticket scored as urgent is still archived.",
        "Gemini returns priority, category, sentiment, issue summary, key details, a recommended action, and a response draft in one structured call.",
        "The response draft is restricted to acknowledging receipt and restating the issue, with no promised resolution, timeline, or refund, which is what makes an immediate send safe.",
        "The prompt treats ticket text as data, and the output is schema- and enum-validated before it can influence routing or notifications.",
      ],
      challenges: [
        "Airtable column names with invisible leading or trailing spaces became different keys in JavaScript, so every reference returned undefined until the columns were cleaned.",
        "Renaming a Slack channel did not add the bot to it, so the bot needed an explicit invite.",
        "n8n replaces the item at each node, so log entries and emails reference the node that holds the ticket by name.",
      ],
      testing: [
        "Exercised by sending test payloads to the webhook with curl. This surfaced a shell-quoting problem where apostrophes truncated the JSON body.",
      ],
      future: [
        "Move the Gemini API key from an HTTP Request header into n8n's stored credentials.",
      ],
    },
  },
  {
    title: "AI Customer Success Inbound Automation & Triage System",
    status: "Completed",
    summary:
      "A 16-stage n8n system backed by PostgreSQL and pgvector. Gemini classifies each request, a RAG knowledge base and a read-only AI Agent supply context, and deterministic health and routing rules make the routing decision, with a Slack human-approval step.",
    techStack: [
      "n8n",
      "PostgreSQL",
      "pgvector",
      "Gemini API",
      "RAG",
      "AI Agent",
      "Slack",
      "Gmail",
    ],
    link: "https://github.com/Azarath-max/AI-Customer-Success-Inbound-Automation-Triage-System",
    image: "/projects/architecture.jpg",
    details: {
      overview:
        "An inbound customer success system built in n8n with a PostgreSQL database. It classifies a request, looks up the customer, retrieves trusted knowledge, drafts a response, and routes the case using business rules.",
      technologies: [
        "n8n",
        "PostgreSQL",
        "pgvector",
        "Gemini API and embeddings",
        "RAG",
        "AI Agent",
        "Slack",
        "Gmail",
      ],
      architecture: [
        "Inbound webhook with input validation.",
        "Customer lookup and context from PostgreSQL.",
        "Gemini classifies the request.",
        "A RAG knowledge base (pgvector with Gemini embeddings) provides trusted answers.",
        "An AI Agent with controlled, read-only tools gathers more context.",
        "Deterministic customer health and risk detection, then business rules decide the routing.",
        "AI response drafting with guards and a billing template.",
        "Slack alerts and human approval using send-and-wait, then a Gmail response.",
        "Interactions, follow-up tasks, escalations, and health records are saved back to PostgreSQL.",
      ],
      implementation: [
        "Responsibilities are split deliberately: the AI interprets, RAG supplies trusted knowledge, the agent only uses controlled tools, deterministic rules make the key routing decisions, and humans handle high-risk cases.",
        "The PostgreSQL schema has seven tables: customers, customer_interactions, customer_health, followup_tasks, escalations, knowledge_documents, and automation_logs.",
        "Recurring-question detection uses embeddings and posts recommendations to Slack.",
        "Error handling and audit logging cover the workflow.",
      ],
      testing: ["End-to-end tested with a 9-scenario script."],
    },
  },
  {
    title: "AI Customer Onboarding Welcome Automation",
    status: "Completed",
    summary:
      "An n8n workflow triggered when a Salesforce opportunity reaches Closed Won. It pulls contact and account data with SOQL, validates required fields, drafts a welcome email with Gemini, and sends through Gmail only after Slack approval, then writes the status back to Salesforce.",
    techStack: [
      "n8n",
      "Salesforce",
      "SOQL",
      "OAuth2",
      "Gemini API",
      "Slack",
      "Gmail",
      "JavaScript",
    ],
    link: "https://github.com/Azarath-max/AI-Customer-Onboarding-Welcome-Automation",
    image: "/projects/AI Customer Onboarding Welcome Automation.png",
    details: {
      overview:
        "An n8n workflow that sends a welcome email when a Salesforce deal closes. Salesforce is the source of truth, Gemini is used only to draft the email, and a person approves it in Slack before it is sent.",
      technologies: [
        "n8n",
        "Salesforce (External Client App, OAuth2)",
        "SOQL",
        "Gemini API",
        "Slack",
        "Gmail",
        "JavaScript (Code nodes)",
      ],
      architecture: [
        "Salesforce Trigger polls for Opportunity updates every minute, then Get Opportunity and a Closed Won check.",
        "An IF node skips deals that do not require implementation.",
        "One SOQL query fetches the contact and account.",
        "A Code node validates required data and an IF node checks the result.",
        "An IF node on Onboarding Status skips deals that were already sent.",
        "Gemini drafts the welcome email and a Code node checks the draft, with the subject built in code.",
        "Slack Send and Wait asks for approval, and an IF node handles the response.",
        "Gmail sends the email, then Salesforce is updated to mark the welcome email sent.",
      ],
      implementation: [
        "Salesforce access uses an External Client App with OAuth2.",
        "AI is limited to email drafting. The design deliberately has no RAG, no AI agent, and no separate vector or SQL database.",
        "Gmail and Gemini nodes use error outputs. A failed draft marks the email failed, builds an exception report in a Code node, and notifies Slack.",
      ],
      challenges: [
        "Code nodes had to be set to Run Once for Each Item to process records correctly.",
      ],
      testing: [
        "Defined three test opportunities: a Closed Won deal that requires implementation (expected to run end to end), one that does not require implementation (expected to be ignored), and one with a blank CSM (expected to go to human review).",
        "The happy path was verified end to end, and test contacts used plus-addressed emails so messages arrived in a controlled inbox.",
      ],
    },
  },
];
