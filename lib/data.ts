// ============================================================
// lib/data.ts — All portfolio content lives here.
// Replace placeholder values with your real info.
// ============================================================

export const personalInfo = {
  name: { first: "Alex", last: "Morgan" },
  initials: "AM",
  roles: ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor"],
  email: "alex.morgan@email.com",
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "",
  location: "San Francisco, CA",
  availability: "Open to full-time opportunities & freelance projects",
  resumeUrl: "#",
};

export const experiences = [
  {
    id: 1,
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    accentColor: "#0F766E",
    dateRange: "Jan 2024 – Present",
    title: "Senior Full Stack Engineer",
    bullets: [
      "Architected and shipped a real-time data pipeline processing 5M+ events/day using Node.js, Kafka, and Redis.",
      "Led migration from monolith to microservices, reducing deployment time by 80% and improving uptime to 99.98%.",
      "Built a self-service analytics dashboard used by 200+ internal teams, cutting ad-hoc data requests by 60%.",
      "Mentored 4 junior engineers and established code review standards adopted org-wide.",
      "Designed and implemented CI/CD workflows with GitHub Actions, reducing release cycles from 2 weeks to 2 days.",
    ],
    tags: "Full Stack • System Design • Leadership",
    isCurrent: true,
  },
  {
    id: 2,
    company: "StartupXYZ",
    location: "Remote",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    accentColor: "#2563EB",
    dateRange: "Jun 2022 – Dec 2023",
    title: "Full Stack Developer",
    bullets: [
      "Built the core product from scratch — a SaaS platform with 3,000+ paying customers.",
      "Implemented JWT-based auth, role management, and Stripe subscription billing.",
      "Optimized PostgreSQL queries reducing average API response time by 45%.",
      "Developed reusable React component library used across 3 product lines.",
    ],
    tags: "React • Node.js • PostgreSQL • AWS",
    isCurrent: false,
  },
  {
    id: 3,
    company: "FreelanceHub",
    location: "Remote",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    accentColor: "#7C3AED",
    dateRange: "Jan 2021 – May 2022",
    title: "Frontend Developer",
    bullets: [
      "Delivered 10+ client projects including e-commerce stores, landing pages, and dashboards.",
      "Improved Core Web Vitals scores from 40s to 90+ across 5 client sites.",
      "Built a custom CMS using Next.js and Contentful for a media company with 50K monthly visitors.",
    ],
    tags: "React • Next.js • Tailwind CSS • Figma",
    isCurrent: false,
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    name: "DevFlow — Project Management SaaS",
    description:
      "A full-stack project management tool built for developer teams, with real-time collaboration, sprint boards, and GitHub integration.",
    accentColor: "#3B82F6",
    codeSnippet: {
      importName: "{ DevFlow }",
      moduleName: "@/core",
      comment: "Real-time collaboration engine",
      className: "SprintService",
    },
    techTags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket", "Redis"],
    bullets: [
      "Built a real-time sprint board with WebSocket — supports 100+ concurrent users per workspace.",
      "Integrated GitHub Webhooks to auto-link commits, PRs, and issues to tasks.",
      "Achieved sub-100ms p95 response time via Redis caching and query optimization.",
    ],
    githubUrl: "https://github.com/alexmorgan/devflow",
    liveUrl: "https://devflow.demo.com",
  },
  {
    id: 2,
    number: "02",
    name: "ShopSwift — E-Commerce Platform",
    description:
      "A high-performance e-commerce platform with server-side rendering, cart persistence, Stripe payments, and an admin dashboard.",
    accentColor: "#10B981",
    codeSnippet: {
      importName: "{ ShopSwift }",
      moduleName: "@/store",
      comment: "Cart & checkout workflow",
      className: "CheckoutService",
    },
    techTags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
    bullets: [
      "Handled 10K+ product catalog with advanced filtering, search, and pagination.",
      "Integrated Stripe for subscription and one-time payment flows with webhook sync.",
      "Built an admin panel for inventory, orders, and customer management.",
    ],
    githubUrl: "https://github.com/alexmorgan/shopswift",
    liveUrl: "https://shopswift.demo.com",
  },
  {
    id: 3,
    number: "03",
    name: "AskAI — AI Chat Application",
    description:
      "A streaming AI chat application powered by GPT-4, with conversation history, prompt templates, and multi-model support.",
    accentColor: "#F59E0B",
    codeSnippet: {
      importName: "{ AskAI }",
      moduleName: "@/ai",
      comment: "Streaming AI response handler",
      className: "ChatService",
    },
    techTags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase", "TypeScript"],
    bullets: [
      "Implemented streaming responses using Vercel AI SDK for real-time text output.",
      "Built conversation history with vector embeddings for context-aware replies.",
      "Supported 5 AI models with hot-swap capability and token usage tracking.",
    ],
    githubUrl: "https://github.com/alexmorgan/askai",
    liveUrl: "https://askai.demo.com",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "CodeXml",
    color: "#3B82F6",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    color: "#10B981",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#F59E0B",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    color: "#8B5CF6",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Nginx"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    color: "#EC4899",
    items: ["Git", "Figma", "Postman", "Linux", "VS Code", "Jira"],
  },
  {
    category: "Core Concepts",
    icon: "BrainCircuit",
    color: "#06B6D4",
    items: ["REST APIs", "GraphQL", "System Design", "Microservices", "WebSockets", "JWT Auth"],
  },
];

export const achievements = [
  {
    id: 1,
    icon: "Trophy",
    title: "LeetCode",
    value: "500+ Problems",
    metric: "Top 5%",
    description: "Solved 500+ DSA problems. Ranked in top 5% globally.",
    link: "https://leetcode.com/alexmorgan",
    color: "#F59E0B",
    date: "2023",
  },
  {
    id: 2,
    icon: "Award",
    title: "AWS Certified",
    value: "Solutions Architect",
    metric: "Associate",
    description: "Passed AWS Certified Solutions Architect Associate exam with a score of 920/1000.",
    link: "",
    color: "#F97316",
    date: "2023",
  },
  {
    id: 3,
    icon: "Star",
    title: "Open Source",
    value: "200+ GitHub Stars",
    metric: "3 Projects",
    description: "Three open-source projects with 200+ combined GitHub stars and 15+ contributors.",
    link: "https://github.com/alexmorgan",
    color: "#3B82F6",
    date: "2024",
  },
  {
    id: 4,
    icon: "GraduationCap",
    title: "B.Tech Computer Science",
    value: "9.1 CGPA",
    metric: "Gold Medal",
    description: "Graduated with distinction. Awarded university gold medal for academic excellence.",
    link: "",
    color: "#10B981",
    date: "2022",
  },
  {
    id: 5,
    icon: "Zap",
    title: "Hackathon Winner",
    value: "1st Place",
    metric: "National Level",
    description: "Won national-level hackathon out of 500+ teams building an AI accessibility tool.",
    link: "",
    color: "#8B5CF6",
    date: "2023",
  },
  {
    id: 6,
    icon: "Users",
    title: "Community",
    value: "2,000+ Followers",
    metric: "LinkedIn",
    description: "Active tech content creator sharing insights on web dev, system design, and careers.",
    link: "https://linkedin.com/in/alexmorgan",
    color: "#0EA5E9",
    date: "2024",
  },
];

export const tickerSkills = [
  { label: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { label: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { label: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { label: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];
