// ============================================================
// lib/data.ts — All portfolio content lives here.
// Replace placeholder values with your real info.
// ============================================================

export const personalInfo = {
  name: { first: "Sameer", last: "Gautam" },
  initials: "SG",
  roles: ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Code in C++"],
  email: "sameergautam024@gmail.com",
  github: "https://github.com/MasterchiefSameer",
  linkedin: "https://www.linkedin.com/in/sameergautam1996/",
  codolio: "https://codolio.com/profile/SameerG",
  twitter: "",
  location: "Kanpur, Uttar Pradesh",
  availability: "Open to full-time opportunities & freelance projects",
  resumeUrl: "https://drive.google.com/file/d/1MPeEPMDIzs7M68LQYEEalYt9b-4UfyJF/view?usp=sharing",
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
  id: 1, // Adjust this ID based on its position in your projects array
  number: "01", // Adjust this number sequence based on your list
  name: "Foodie Diet — AI-Powered Meal & Recipe Planner",
  description:
    "A full-stack pantry manager and meal planner that leverages Google Gemini AI to analyze available ingredients and generate custom, image-mapped recipes.",
  accentColor: "#10B981", // Sleek food-themed green color
  codeSnippet: {
    importName: "{ getOrGenerateRecipe }",
    moduleName: "@/actions/recipe.actions",
    comment: "AI recipe query and database cache layer",
    className: "RecipeService",
  },
  techTags: ["Next.js", "Strapi CMS (API Architecture)", "Lucide-React", "Tailwind CSS", "ShadCN UI", "Clerk (Auth)",  "Google Gemini AI", "PostgreSQL", "Arcjet",  "Sonner", ],
  bullets: [
    "Integrated Google Gemini AI to generate step-by-step recipes based on pantry ingredients, enriched with dynamic Unsplash image mapping.",
    "Secured Edge API routes and Server Actions using Arcjet middleware, enforcing subscription limits and preventing malicious request spam.",
    "Engineered a database caching strategy in Neon DB using Strapi v5, yielding a 40% reduction in page load times by reusing common recipe queries.",
  ],
  githubUrl: "https://github.com/MasterchiefSameer/Servd",
  liveUrl: "https://servd-woad.vercel.app/", 
},

  {
  id: 2,
  number: "02",
  name: "Vocab Challenge — Wordle Clone",
  description:
    "A polished, accessible Wordle-style word game built entirely with vibe coding. Features daily and unlimited modes, hard mode, stats tracking, sound effects, and a responsive keyboard-driven UI.",
  accentColor: "#3B82F6",
  codeSnippet: {
    importName: "{ useGameStore }",
    moduleName: "@/store/gameStore",
    comment: "Core game state & guess evaluation",
    className: "GameStore",
  },
  techTags: ["TanStack Start", "React 19", "Vite 7", "TypeScript", "Tailwind CSS v4", "Vitest", "Zustand"],
  bullets: [
    "Built a complete 5-letter word guessing game with daily and unlimited modes using vibe-coding workflows.",
    "Implemented official two-pass letter evaluation, hard mode validation, and persistent game state via localStorage.",
    "Deployed to both Lovable and Vercel with platform-specific Nitro build configuration from a single codebase.",
  ],
  githubUrl: "https://github.com/MasterchiefSameer/vocab-challenge-hub",
  liveUrl: "https://vocab-challenge-hub.vercel.app/",
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
    items: ["C++ (DSA)", "C", "Python", "HTML5", "CSS3", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    color: "#10B981",
    items: ["React.js", "TypeScript", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "ShadCN UI" ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#F59E0B",
    items: ["MySQL", "NeonDB", "Supabase", "MongoDB(NoSQL)", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    color: "#8B5CF6",
    items: ["AWS", "kubernetes", "Vercel", "Docker", "Render", "CI/CD pipelines" ],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    color: "#EC4899",
    items: ["Git & Github", "Canva", "Figma", "Clerk", "Linux", "Antigravity", "PostmanAPI", "Arcjet"],
  },
  {
    category: "Core Concepts",
    icon: "BrainCircuit",
    color: "#06B6D4",
    // items: ["REST APIs", "GraphQL", "System Design", "Microservices", "WebSockets", "JWT Auth"],
    items: ["Data Structures and Algorithms", "Networking", "OOPs", "OS", "DBMS", "REST APIs", "WebSockets", "JWT Auth", "Scalable Systems", "Performance Optimization"],
  },
];

export const achievements = [
  {
    id: 1,
    icon: "Trophy",
    title: "LeetCode Rating",
    value: "600+ Problems",
    metric: "Top 24%",
    description: "Achieved 1600+ rating on LeetCode with strong Data Structures and Algorithms expertise in C++.",
    link: "https://codolio.com/profile/SameerG",
    color: "#F59E0B",
    date: "2026",
  },
  {
    id: 2,
    icon: "Trophy",
    // title: "Problem Solving",
    value: "Problem solving",
    // metric: "Top 24%",
    description: "Solved 500+ problems across LeetCode, CodeChef, and GeeksforGeeks; ranked in the top 16% in multiple contests.",
    link: "https://codolio.com/profile/SameerG",
    color: "#219DEB",
    date: "2026",
  },
  {
    id: 3,
    icon: "Award",
    title: "Oracle Certified",
    value: "Cloud Infrastructure AI Foundations Associate",
    metric: "Associate",
    description: "Passed Oracle Infrastructure AI Foundations Associate exam with a score of 98/100.",
    link: "",
    color: "#F97316",
    date: "2025",
  },
  {
    id: 4,
    icon: "Star",
    title: "Naukri Campus",
    value: "CodeQuest #25 and #28, Organised by Naukri Campus",
    metric: "Rank 561/19000+ (Top 0.02 %) in #25 and 141/6000+ (Top 2.2 %)",
    description: "Participants in Naukri Campus CodeQuest #25 and #28, placing in the top 3%.",
    // link: "https://github.com/alexmorgan",
    color: "#3B82F6",
    date: "2025",
  },
  // {
  //   id: 4,
  //   icon: "GraduationCap",
  //   title: "B.Tech Computer Science",
  //   value: "9.1 CGPA",
  //   metric: "Gold Medal",
  //   description: "Graduated with distinction. Awarded university gold medal for academic excellence.",
  //   link: "",
  //   color: "#10B981",
  //   date: "2022",
  // },
  // {
  //   id: 5,
  //   icon: "Zap",
  //   title: "Hackathon Winner",
  //   value: "1st Place",
  //   metric: "National Level",
  //   description: "Won national-level hackathon out of 500+ teams building an AI accessibility tool.",
  //   link: "",
  //   color: "#8B5CF6",
  //   date: "2023",
  // },
  // {
  //   id: 6,
  //   icon: "Users",
  //   title: "Community",
  //   value: "2,000+ Followers",
  //   metric: "LinkedIn",
  //   description: "Active tech content creator sharing insights on web dev, system design, and careers.",
  //   link: "https://linkedin.com/in/alexmorgan",
  //   color: "#0EA5E9",
  //   date: "2024",
  // },
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

export const education = [
  {
    id: 1,
    institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    degree: "B.Tech in Computer Science And Engineering",
    duration: "Aug 2022 - July 2026",
    location: "Kanpur, Uttar Pradesh",
    gpa: "CGPA: 7.03/10",
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Design and Analysis of Algorithms",
      "Compiler Design",
      "DBMS",
      "Python Programming Language",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning"
    ],
    quote: {
      text: "Scientists investigate that which already is; Engineers create that which has never been.",
      author: "Albert Einstein"
    },
    color: "#a855f7",
    icon: "GraduationCap"
  },
  {
    id: 2,
    institution: "Kendriya Vidyalaya Old Cantt Prayagraj(Allahabad)",
    degree: "Class XII (Senior Secondary)",
    duration: "Apr 2019 - May 2021",
    location: "Prayagraj, India",
    // gpa: "Percentage: 82%",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      // "Computer Science",
      // "English"
    ],
    quote: {
      text: "Education is not preparation for life; education is life itself.",
      author: "John Dewey"
    },
    color: "#3b82f6",
    icon: "School"
  }
];

export const hobbies = [
  // {
  //   id: 1,
  //   title: "Chess",
  //   description: "Strategizing moves on the 64 squares. Intra-IIT Gold Medalist.",
  //   emoji: "♟️",
  //   color: "#F59E0B", // Amber
  //   shadowColor: "rgba(245, 158, 11, 0.15)"
  // },
  {
    id: 2,
    title: "Playing Cricket",
    description: "Love to compete and win games of cricket",
    emoji: "🏏",
    color: "#EC4899", // Pink
    shadowColor: "rgba(236, 72, 153, 0.15)"
  },
  {
    id: 3,
    title: "Sketching",
    description: "Capturing expressions through charcoal and graphite portraits.",
    emoji: "✏️",
    color: "#8B5CF6", // Purple
    shadowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    id: 4,
    title: "Tech Blogs & News",
    description: "Reading engineering blogs and keeping up with the latest tech-related news.",
    emoji: "📰",
    color: "#10B981", // Emerald
    shadowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: 5,
    title: "Creative Writing",
    description: "Weaving thoughts into stories and poetry.",
    emoji: "✒️",
    color: "#3B82F6", // Blue
    shadowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    id: 6,
    title: "Competitive Coding",
    description: "Solving complex algorithmic problems against the clock.",
    emoji: "💻",
    color: "#EF4444", // Red
    shadowColor: "rgba(239, 68, 68, 0.15)"
  }
];


