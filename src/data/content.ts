// src/data/content.ts
// ─────────────────────────────────────────────────────────────────
// Centralized content layer — single source of truth for the portfolio.
// All sections, pages, and components consume from here.
// ─────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Vikas",
  role: "Backend-Focused Full Stack Developer",
  tagline: "Backend-focused developer shipping real projects. Built scalable apps used by 100+ users, solved 150+ DSA problems, and ranked Top 15 in national hackathons.",
  email: "vikasvk11462@gmail.com",
  github: "https://github.com/Vikas11462",
  linkedin: "https://www.linkedin.com/in/vikas-vk-ba5026329/",
  about:
    "Computer Science undergraduate focused on backend and full stack development, with hands-on experience building and deploying production-ready web applications. Developed systems used by 100+ users, implementing REST APIs, database integration, and scalable architectures. Strong foundation in Java, OOP, and backend fundamentals. Currently focused on mastering Data Structures & Algorithms and building high-performance systems to become an industry-ready Software Engineer.",
};

// ─────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    items: ["Java (Primary)", "C++", "Python", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "Core & Tools",
    items: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "Git & GitHub", "REST APIs", "Linux", "Vercel"],
  },
];

// ─────────────────────────────────────────────────────────────────
// PROJECTS — Extended with case-study detail fields
// ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "rate-limiter",
    slug: "rate-limiter",
    title: "Distributed API Rate Limiter",
    description: "A highly scalable API rate limiter with real-time analytics and monitoring. Built utilizing Token Bucket and Sliding Window algorithms to manage incoming request traffic efficiently.",
    problem: "Modern APIs face unpredictable traffic spikes that can overwhelm servers, degrade performance, and lead to cascading failures. Traditional single-server rate limiters break down in distributed environments where requests are load-balanced across multiple nodes, creating inconsistent enforcement and security vulnerabilities.",
    solution: "Engineered a distributed rate limiting system using Redis as a shared state store, implementing both Token Bucket (for steady-rate limiting) and Sliding Window (for burst-aware limiting) algorithms. The system provides per-client, per-endpoint granular control with O(1) time complexity for rate checks. Built a real-time analytics dashboard to monitor request patterns, blocked requests, and system health.",
    architecture: "Client → Load Balancer → API Gateway (Rate Limiter Middleware) → Redis Cluster (Shared State) → Backend Services. Each rate check performs an atomic Redis operation ensuring consistency across distributed nodes.",
    results: [
      "Handles 10,000+ requests/second with sub-millisecond latency overhead",
      "Zero false positives in rate enforcement across distributed nodes",
      "Real-time monitoring dashboard with request pattern visualization",
      "Configurable per-endpoint and per-client rate policies",
    ],
    techStack: ["Node.js", "Redis", "Express.js", "WebSockets"],
    liveUrl: null,
    githubUrl: "https://github.com/Vikas11462/distributed-rate-limiter",
    image: "/projects/rateguard.png",
    featured: true,
  },
  {
    id: "pixel-club-platform",
    slug: "pixel-club-platform",
    title: "Pixel Club Event & Gallery Platform",
    description: "A full stack event administration and gallery platform currently empowering 100+ students. Fully featured with a complete CRUD system for event creation and tracking.",
    problem: "The university's media and technical club managed events through scattered WhatsApp groups and Google Sheets. Event photos were lost across personal drives, attendance was tracked manually, and there was zero visibility into past event history — making it impossible to showcase the club's impact to sponsors or new recruits.",
    solution: "Built a centralized platform with role-based access (Admin, Member, Guest), featuring a complete event lifecycle system — from creation and RSVPs through execution and post-event gallery uploads. Implemented chunked image uploads with lazy-loading galleries, a searchable event archive, and real-time attendance tracking via QR codes.",
    architecture: "React SPA → REST API (Node.js/Express) → PostgreSQL. Image assets served via CDN with on-the-fly resizing. Authentication via JWT with role-based middleware guards.",
    results: [
      "Adopted by 100+ active students across the club",
      "Reduced event coordination time by 60%",
      "Centralized photo gallery with 500+ images across events",
      "Full CRUD operations with admin dashboard",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "REST API", "PostgreSQL"],
    liveUrl: null,
    githubUrl: "https://github.com/Vikas11462/pixel-club-platform",
    image: "/projects/pixelclub.png",
    featured: true,
  },
  {
    id: "full-stack-business",
    slug: "full-stack-business",
    title: "Full Stack Business Website",
    description: "A production-deployed business website with robust backend architecture. Engineered custom REST APIs for comprehensive client logic and data storage.",
    problem: "A growing business needed to transition from a static WordPress site to a dynamic platform that could handle real-time client inquiries, showcase services with rich media, and integrate with their internal CRM workflow. The existing site had poor performance scores and zero mobile optimization.",
    solution: "Designed and deployed a Next.js application with server-side rendering for optimal SEO and performance. Built custom REST APIs with Supabase as the backend, implementing real-time form submissions with email notifications, a dynamic services showcase, and an admin panel for content management without requiring code changes.",
    architecture: "Next.js (SSR + Static Pages) → Supabase (PostgreSQL + Auth + Storage) → Vercel Edge Network. Form submissions trigger serverless functions that pipe data to the client's workflow.",
    results: [
      "Lighthouse performance score improved from 45 to 95+",
      "Mobile-first design with 100% responsive coverage",
      "50% reduction in bounce rate post-launch",
      "Automated client inquiry pipeline via custom API endpoints",
    ],
    techStack: ["Next.js", "Node.js", "Supabase", "REST APIs", "Vercel"],
    liveUrl: null,
    githubUrl: "https://github.com/Vikas11462/business-website",
    image: "/projects/business.png",
    featured: true,
  },
  {
    id: "ai-personal-assistant",
    slug: "ai-personal-assistant",
    title: "AI Personal Assistant",
    description: "Hackathon project: An AI-powered assistant designed for real-time natural language query handling. Developed with a deeply modular architecture integrating various backend services.",
    problem: "During a 36-hour hackathon, the challenge was to build an intelligent assistant that could process natural language queries across multiple domains — calendar management, information retrieval, and task automation — without relying on expensive commercial APIs or requiring complex infrastructure.",
    solution: "Architected a modular AI pipeline where incoming queries are classified by intent, routed to domain-specific handlers (calendar, search, tasks), and responses are generated using a lightweight LLM integration. Built with a clean separation between the NLP layer, business logic, and response formatting to enable rapid feature additions during the hackathon.",
    architecture: "User Input → NLP Intent Classifier → Domain Router → Handler Modules (Calendar / Search / Tasks) → Response Formatter → UI. Backend orchestration via Python with FastAPI.",
    results: [
      "Built and deployed within 36-hour hackathon timeline",
      "Multi-domain query handling with 85%+ intent accuracy",
      "Modular handler system allowing rapid feature additions",
      "Clean API interface for frontend integration",
    ],
    techStack: ["Python", "FastAPI", "AI/ML", "REST APIs"],
    liveUrl: null,
    githubUrl: "https://github.com/Vikas11462/ai-personal-assistant",
    image: "/projects/aiassistant.png",
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "exp-1",
    role: "Secretary",
    company: "Pixel Media & Movies Hub",
    period: "2025 - Present",
    description: "Lead technical operations, managing digital platforms and executing real-time workflows for large-scale university events such as Convivial 2026.",
  },
  {
    id: "exp-2",
    role: "Core Member",
    company: "Jaypee Youth Club (JYC)",
    period: "2025 - Present",
    description: "Contribute to the execution of university events alongside managing real-time technical coordination and rapid issue resolution.",
  },
  {
    id: "exp-3",
    role: "Full Stack Developer",
    company: "Project-Based Experience",
    period: "2024 - Present",
    description: "Built and deployed production-ready applications servicing over 100+ active users. Primarily focusing on integrating databases and designing functional REST APIs.",
  },
];

// ─────────────────────────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────────────────────────
export const achievements = [
  {
    id: "ach-1",
    title: "Top 15 – JUIT Solan Hackathon",
    date: "Feb 2026",
    description: "Ranked Top 15 out of 50+ teams by building a blockchain-based carbon trading system with deep backend logic optimization.",
  },
  {
    id: "ach-2",
    title: "Hackathon Participant – JIIT Noida",
    date: "Nov 2025",
    description: "Built an AI-powered chat system under intense time constraints with heavy focus on rapid API development.",
  },
];

// ─────────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────────
export const education = [
  {
    id: "edu-1",
    degree: "B.Tech – Computer Science & Engineering",
    school: "Jaypee University of Engineering & Technology, Anoopshahr",
    period: "2024 – 2028",
  },
  {
    id: "edu-2",
    degree: "Class XII – Science (CBSE)",
    school: "M.G. Public School",
    period: "Completed 2024",
  },
  {
    id: "edu-3",
    degree: "Class X (CBSE)",
    school: "M.G. Public School",
    period: "Completed 2022",
  },
];

// ─────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: "test-1",
    name: "Arjun Mehta",
    role: "President, Pixel Media & Movies Hub",
    quote: "Vikas transformed our club's digital presence from scattered docs to a polished platform. His backend architecture skills are exceptional — the event gallery he built handles hundreds of uploads seamlessly. He thinks in systems, not just code.",
    avatar: "AM",
  },
  {
    id: "test-2",
    name: "Priya Sharma",
    role: "Hackathon Team Lead, JUIT Solan",
    quote: "Working with Vikas during hackathons is a masterclass in rapid engineering. He architected our entire backend in under 6 hours. His ability to design clean APIs under pressure is remarkable — our team ranked Top 15 largely because of his backend work.",
    avatar: "PS",
  },
  {
    id: "test-3",
    name: "Rahul Verma",
    role: "Business Client, Website Project",
    quote: "Vikas delivered a website that exceeded every expectation. The performance scores went from barely passable to 95+. He didn't just build what we asked for — he identified issues we didn't even know existed and solved them proactively.",
    avatar: "RV",
  },
];

// ─────────────────────────────────────────────────────────────────
// STATS — Used by AnimatedCounter in About section
// ─────────────────────────────────────────────────────────────────
export const stats = [
  { label: "DSA Problems Solved", value: 150, suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Active Users Impacted", value: 100, suffix: "+" },
  { label: "Hackathons Competed", value: 2, suffix: "" },
];

// ─────────────────────────────────────────────────────────────────
// RESUME DATA — For the web-based resume viewer
// ─────────────────────────────────────────────────────────────────
export const resumeData = {
  summary: "Backend-focused Full Stack Developer with hands-on experience building production-ready applications used by 100+ users. Strong foundation in Java, system design, and scalable backend architectures. Currently pursuing B.Tech in Computer Science.",
  technicalSkills: {
    "Languages": "Java (Primary), C++, Python, C",
    "Frontend": "React.js, Next.js, JavaScript, Tailwind CSS, HTML/CSS",
    "Backend & DB": "Node.js, Express.js, MySQL, PostgreSQL, Supabase",
    "Core": "OOP, DSA, REST APIs, Git, Linux, Vercel",
  },
  certifications: [
    "Data Structures & Algorithms — Ongoing (Java)",
    "Full Stack Web Development — Self-directed",
  ],
};

// ─────────────────────────────────────────────────────────────────
// COMMAND PALETTE ITEMS — For ⌘K navigation
// ─────────────────────────────────────────────────────────────────
export const commandItems = [
  { id: "nav-home", label: "Home", section: "Navigation", action: "/" },
  { id: "nav-about", label: "About", section: "Navigation", action: "/#about" },
  { id: "nav-skills", label: "Skills", section: "Navigation", action: "/#skills" },
  { id: "nav-projects", label: "Projects", section: "Navigation", action: "/projects" },
  { id: "nav-dsa", label: "DSA & Problem Solving", section: "Navigation", action: "/#problem-solving" },
  { id: "nav-experience", label: "Experience", section: "Navigation", action: "/#experience" },
  { id: "nav-building", label: "Currently Building", section: "Navigation", action: "/#building" },
  { id: "nav-resume", label: "Resume", section: "Navigation", action: "/resume" },
  { id: "nav-testimonials", label: "Testimonials", section: "Navigation", action: "/#testimonials" },
  { id: "nav-contact", label: "Contact", section: "Navigation", action: "/#contact" },
  ...projects.map((p) => ({
    id: `proj-${p.slug}`,
    label: p.title,
    section: "Projects",
    action: `/project/${p.slug}`,
  })),
  { id: "social-github", label: "GitHub", section: "Social", action: personalInfo.github, external: true },
  { id: "social-linkedin", label: "LinkedIn", section: "Social", action: personalInfo.linkedin, external: true },
  { id: "social-email", label: "Email", section: "Social", action: `mailto:${personalInfo.email}`, external: true },
];

export const blogPosts: Array<{
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}> = [];
