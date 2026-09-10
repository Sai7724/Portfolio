import { ExperienceItem, ProjectItem, SkillCategory, Certification } from "./types";

export const personalInfo = {
  name: "Sai Laxma Reddy R",
  role: "Python & Full-Stack Developer",
  subRole: "B.Tech CSE (Data Science & AI) Graduate",
  location: "Hyderabad, Chennai, Bengaluru, India",
  phone: "+91 9014726652",
  email: "sailaxmareddy07@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-laxma-reddy-ab7441352/",
  linkedinUser: "sai-laxma-reddy",
  github: "https://github.com/Sai7724",
  githubUser: "Sai7724",
  objective: "Full-stack developer & AI engineer in the making - I turn Data Science & AI fundamentals into shipped, tested, scalable software.",
  stats: [
    { label: "GPA (B.Tech)", value: "7.6 / 10" },
    { label: "Internships Done", value: "2" },
    { label: "Freelancing Experience", value: "1+ years" },
    { label: "Core Projects", value: "8+" },
    { label: "Tech Stack Succeeded", value: "15+" }
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-Freelancer",
    role: "Freelance Software Developer",
    company: "Self-employed",
    period: "June 2025 - Present",
    location: "Remote",
    description: [
      "Delivered end-to-end applications for independent clients across ML, full-stack web, and backend domains, owning requirements gathering, architecture, development, deployment, and handover as the sole developer.",
      "Built ML/CV applications including detection and tracking pipelines, NLP-based text analysis, and LLM-integrated features, handling data preprocessing, model integration, and inference optimization for real-time use.",
      "Developed REST APIs and backend services in Python/FastAPI/Flask/Node with SQL/NoSQL schema design, authentication, and third-party API integrations.",
      "Shipped responsive web applications using React/TypeScript/Tailwind, deploying to Render/Vercel/Streamlit Cloud with environment-based configuration and secrets management.",
      "Maintained a 85% on-time delivery rate across fixed-deadline engagements while translating non-technical requirements into working technical specifications."
    ],
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "React", "Vite", "Tailwind CSS", "responsive design", "FastAPI", "Flask", "REST APIs", "authentication", "PostgreSQL", "Supabase", "SQLite", "MongoDB", "Git", "Docker", "Vercel", "Render", "Postman", "Linux"]
  },
  {
    id: "exp-skyscanner",
    role: "Front-End Software Intern",
    company: "Skyscanner",
    period: "Dec - Jan 2025 - 26",
    location: "Remote",
    description: [
      "Built a production-quality travel date picker in React.js using Skyscanner's open-source Backpack design system, shipped to a live web application.",
      "Wrote automated tests covering rendering, accessibility, and edge cases across screen sizes for reusable UI components.",
      "Worked within component-based architecture, Git, and code-review workflows alongside the core engineering team."
    ],
    skills: ["React.js", "Backpack Design System", "Component Architecture", "Testing", "Accessibility"]
  },
  {
    id: "exp-biva",
    role: "Data Analyst Intern",
    company: "BIVA Analytics",
    period: "April - May 2026",
    location: "Hydrabad, India",
    description: [
      "Architected source-to-target data mappings across 10+ platforms (Shopify, GA4, Amazon, Flipkart, Myntra), unlocking analytics-ready datasets for cross-platform BI reporting.",
      "Wrote complex SQL on Trino-based retail POS systems to uncover insights on store performance, return rates, and revenue leakage directly informing ops decisions.",
      "Designed ER diagrams spanning 23+ entity tables and drove schema governance, catching critical data quality issues before they reached production reporting.",
    ],
    skills: ["SQL", "Trino", "ER Diagrams", "Data Mapping", "E-commerce BI"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-acemock",
    title: "AceMock",
    description: "AceMock is an AI-powered interview practice platform that simulates multi-stage technical interviews. It includes aptitude tests, coding challenges, technical Q&A, HR rounds, and provides Gemini AI detailed feedback. Built with React, TypeScript, Supabase, and Tailwind CSS.",
    tag: {
      label: "LLM Fullstack",
      icon: "cpu",
      color: "#CCFF00"
    },
    period: "Sep – Dec 2025",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "LLM Integration", "Tailwind CSS"],
    details: [
    ],
    liveUrl: "https://acemock.demo",
    githubUrl: "https://github.com/Sai7724/AceMock-Ai-powered-interviewer"
  },

  {
    id: "proj-AgentRed",
    title: "Email-Agent",
    description: "AI cold-email outreach agent for job seekers. FastAPI backend with LangChain drafting, Gmail sending via MCP tool-calling, multi-provider LLM support (Groq/Gemini/OpenAI), and a draft-review queue. React + Vite frontend.",
    tag: {
      label: "Agentic AI",
      icon: "bot",
      color: "#3dffce"
    },
    period: "Nov – Dec 2025",
    tech: ["Python", "FastAPI", "LangChain", "React.js", "MongoDB/PostgreSQL", "Gmail MCP (Zapier)", "REST APIs"],
    details: [
    ],
    liveUrl: "https://agentred.demo",
    githubUrl: "https://github.com/Sai7724/AgentRed-Backend"
  },
  {
    id: "proj-AgentScrapper",
    title: "Agent-Scrapper",
    description: "AI-powered job scraper & ATS advisor. Async FastAPI backend with a LangGraph multi-agent pipeline (intent routing → stealth scraping → LLM extraction → resume-fit scoring), ChromaDB vector memory for RAG-style recall, and a multi-LLM fallback chain. React + TypeScript frontend.",
    tag: {
      label: "Agentic AI",
      icon: "bot",
      color: "#3dffce"
    },
    period: "Nov – Dec 2025",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "SQLAlchemy", "SQLite", "Pytest", "react", "TypeScript", "Vite", "TailwindCSS", "ChromaDB", "REST APIs", "ordered fallback chain", "Crawl4AI", "Playwright", "ChromaDB"],
    details: [
    ],
    liveUrl: "https://agentScrapper.demo",
    githubUrl: "https://github.com/Sai7724/AgentScrape"
  },
  {
    id: "proj-sitesafe",
    title: "SiteSafe",
    description: "Website privacy auditor that scrapes a target site, detects third-party trackers, verifies TLS, and pulls the privacy policy for NLP analysis — spaCy for extraction plus a Transformers classifier that grades policy risk — then combines tracker, TLS, and WHOIS domain-age signals into a weighted privacy score. Flask + BeautifulSoup + PyTorch.",
    tag: {
      label: "Python ML/NLP",
      icon: "shield-alert",
      color: "#FF3DCB"
    },
    period: "Nov – Dec 2025",
    tech: ["Python", "Flask", "BeautifulSoup", "spaCy", "Transformers", "PyTorch", "REST APIs"],
    details: [
    ],
    liveUrl: "https://sitesafe.demo",
    githubUrl: "https://github.com/Sai7724/SiteSafe-Highlights-defense-against-online-privacy-threats"
  }, {
    id: "proj-PeopleCounter",
    title: "People Counter",
    description: "Real-time people counting and directional tracking app using YOLOv8 and OpenCV",
    tag: {
      label: "Computer Vision",
      icon: "eye",
      color: "#f5ff3d"
    },
    period: "Project",
    tech: ["Python", "Streamlit", "OpenCV", "YOLOv8 (Ultralytics)", "NumPy", "SciPy"],
    details: [
    ],
    liveUrl: "https://peoplecounter.demo",
    githubUrl: "https://github.com/Sai7724/people-counter-app"
  },{
    id: "proj-LennysRagAssistant",
    title: "Lenny's product Stratergist Rag Assistant",
    description: "An AI-powered product and growth strategy assistant that transforms 200+ hours of podcast transcripts into an interactive knowledge base. Users can ask product, startup, and growth questions in natural language and receive context-aware, grounded answers with source citations.",
    tag: {
      label: "RAG Asistant",
      icon: "brain",
      color: "#3dffce"
    },
    period: "Project",
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "pgvector", "Ollama", "LLM", "Docker"],
    details: [
    ],
    liveUrl: "https://lennys.demo",
    githubUrl: "https://github.com/Sai7724/lennys-growth-rag-assistant"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Python", level: 85, iconName: "python" },
      { name: "JavaScript", level: 85, iconName: "javascript" },
      { name: "SQL", level: 90, iconName: "database" },
      { name: "HTML5 & CSS3", level: 90, iconName: "html" }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Backends",
    skills: [
      { name: "Flask", level: 90 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "LangChain", level: 75 },
      { name: "CrewAI", level: 75 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Node JS", level: 80 },
      { name: "Nest.js", level: 80 },
      { name: "Express JS", level: 80 }
    ]
  },
  {
    id: "databases",
    name: "Databases & APIs",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 90 },
      { name: "ChromaDB", level: 75 },
      { name: "RESTful APIs", level: 95 }
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 80 },
      { name: "VS Code / Cursor", level: 95 }
    ]
  },
  {
    id: "testing",
    name: "Testing & Quality",
    skills: [
      { name: "Unit Testing", level: 85 },
      { name: "pytest", level: 80 },
      { name: "Code Review", level: 75 },
      { name: "Debugging", level: 80 }
    ]
  }
];

export const certificationsData: Certification[] = [
  { name: "Amazon Web Services (AWS) Certification", link: "https://res.cloudinary.com/dmw3mfbni/image/upload/v1753033282/AWS_workshop_srjfcw.jpg" },
  { name: "Python", link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=OFBUZFTKTY" },
  { name: "Python for Data Science", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S14330086501363930.pdf" },
  { name: "MCP - Model Context Protocol Certified", link: "#" },
  { name: "JavaScript Essentials", link: "https://certificates.ccbp.in/academy/javascript-essentials?id=KCFCTGHJVK" },
  { name: "JavaScript Dom", link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=UFRGUIECLZ" },
  { name: "React JS", link: "https://certificates.ccbp.in/academy/react-js?id=BDKKMHAADA" },
  { name: "Node JS", link: "https://certificates.ccbp.in/academy/node-js?id=DRLHITTTDI" },
  { name: "SQL", link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=LLZCIBJOCP" },
  { name: "HTML/CSS", link: "https://certificates.ccbp.in/academy/static-website?id=QLWESMBVGI" },
  { name: "Bootstrap", link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=IDHOLUPHTM" },
  { name: "FlexBox", link: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=BVCXLTILZX" },
  { name: "Modern UI/UX Principles", link: "https://www.udemy.com/certificate/UC-15a58b62-323c-4ea9-84b3-8580995ada1c/" }
];
