import { ExperienceItem, ProjectItem, SkillCategory, Certification } from "./types";

export const personalInfo = {
  name: "Sai Laxma Reddy R",
  role: "Python & Full-Stack Developer",
  subRole: "B.Tech CSE (Data Science & AI) Graduate",
  location: "Hyderabad, India",
  phone: "+91 9014726652",
  email: "sailaxmareddy07@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-laxma-reddy-ab7441352/",
  linkedinUser: "sai-laxma-reddy",
  github: "https://github.com/Sai7724",
  githubUser: "Sai7724",
  objective: "B.Tech graduate in Data Science & AI, building scalable REST APIs with Flask, FastAPI & Express and full-stack apps powered by clean, well-tested code. Currently looking for a Python/Full-Stack Dev $ AI Engineer roles.",
  stats: [
    { label: "GPA (B.Tech)", value: "7.5 / 10" },
    { label: "Internships Done", value: "2" },
    { label: "Core Projects", value: "4+" },
    { label: "Tech Stack Succeeded", value: "15+" }
  ]
};

export const experienceData: ExperienceItem[] = [
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
    description: "AI-Powered Interview Preparation Platform",
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
    id: "proj-sitesafe",
    title: "SiteSafe",
    description: "Privacy Threat Analyzer",
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
  },
{
  id: "proj-AgentRed",
  title: "AgentRed",
  description: "AI-powered cold email outreach agent and a built-in web scraper",
  tag: {
    label: "Fullstack Agentic AI",
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
      { name: "React.js", level: 85 },
      { name: "Node JS", level: 80 },
      { name: "Express JS", level: 80 }
    ]
  },
  {
    id: "databases",
    name: "Databases & APIs",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 },
      {name: "MySQL", level: 85 },
      { name: "SQLite", level: 90 },
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
  { name: "Front-End Software Engineering Internship (Skyscanner)" },
  { name: "Amazon Web Services (AWS) Certification" },
  { name: "Python Developer Certification" },
  { name: "MCP - Model Context Protocol Certified" },
  { name: "Advanced Python Specialist" },
  { name: "JavaScript DOM & Interactive Web Apps" },
  { name: "Node JS Developer Path" },
  { name: "SQL & Relational Databases Mastery" },
  { name: "HTML/CSS & Bootstrap Design" },
  { name: "Modern UI/UX Principles" }
];
