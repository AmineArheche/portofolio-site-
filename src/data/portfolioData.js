export const personalInfo = {
  name: "Amine Arheche",
  title: "Full-Stack Software Engineer • Systems & Creative Technologist",
  location: "Morocco 🇲🇦",
  email: "aminearheche@gmail.com",
  github: "https://github.com/AmineArheche",
  linkedin: "https://linkedin.com/in/amine-arheche",
  headline: "Architecting resilient digital systems and harmonizing clean code with expressive sonic design.",
  bio: "I'm a Full-Stack Software Engineer and Musician based in Morocco. I operate at the intersection of engineering rigor and creative intuition. By day, I design robust full-stack applications, scalable APIs, and database architectures (Python, React, MySQL, FastAPI). In between code sessions, I explore sound design, instrumental composition, and acoustic harmonics.",
  status: "Available for high-impact software engineering & full-stack roles",
  motto: "Structure carries the logic. Frequencies carry the rest.",
  terminalInfo: {
    kernel: "0x7FFF",
    sampleRate: "96.0 kHz",
    tuning: "432 Hz",
    status: "SYSTEMS_OPTIMAL",
    location: "Casablanca, Morocco"
  }
};

export const projectsData = [
  {
    id: "auralink",
    title: "AuraLink — Custom Link Shortener & Telemetry",
    category: "fullstack",
    featured: true,
    tagline: "High-Performance URL Shortener & Real-Time Visitor Telemetry Platform",
    description: "Production-grade URL shortening and traffic intelligence platform pairing sub-millisecond HTTP redirects with comprehensive visitor analytics (browser, OS, device categorization, referrer channel, and geo-telemetry).",
    longDescription: "AuraLink is built from the ground up to solve modern marketing and link redirection needs. It features an instant non-blocking redirection engine (<5ms latency), an interactive Chart.js analytics dashboard, a dynamic QR Code Studio with customizable themes, batch shortening up to 50 URLs, a visual UTM campaign builder, and hardened anti-SSRF security defenses.",
    technologies: ["React 19", "FastAPI", "SQLAlchemy 2.0", "Chart.js", "Docker", "SQLite/Postgres", "Vite 8", "Nginx"],
    metrics: [
      { label: "Redirect Speed", value: "< 5ms" },
      { label: "Telemetry Accuracy", value: "99.8%" },
      { label: "Batch Capacity", value: "50 URLs" }
    ],
    github: "https://github.com/AmineArheche/custom-link-shortener",
    live: "http://localhost:5173",
    color: "#6366f1",
    highlights: [
      "Non-blocking HTTP 307 temporary redirect engine",
      "Real-time visitor telemetry (User-Agent, OS, device, country)",
      "High-contrast QR Code Studio with logo overlays and PNG export",
      "Visual UTM campaign token builder with 1-click injection",
      "Pre-flight DNS anti-SSRF protection and SQL wildcard DoS escaping"
    ]
  },
  {
    id: "horti-innov",
    title: "Horti-Innov — Enterprise Inventory & ERP",
    category: "desktop",
    featured: true,
    tagline: "Offline-First Enterprise Stock & Commercial Management Suite",
    description: "Robust desktop ERP and stock management software designed for commercial distribution, featuring a self-contained portable MySQL engine, supplier billing, and automated invoice PDF generation.",
    longDescription: "Engineered to operate with zero system dependencies on any Windows machine (including USB drives). Features automated schema verification across 14 relational tables, customer credit ledger tracking, sales and purchase histories, low-stock threshold alerts, and PDF invoices stamped with Morocco legal requirements.",
    technologies: ["Python", "Tkinter", "MySQL", "ReportLab PDF", "OpenPyXL", "PowerShell", "PyInstaller"],
    metrics: [
      { label: "Database Tables", value: "14 Tables" },
      { label: "Portability", value: "100% Zero-Install" },
      { label: "PDF Generation", value: "< 1s" }
    ],
    github: "https://github.com/AmineArheche/Gestion-de-Stock",
    live: null,
    color: "#10b981",
    highlights: [
      "Self-contained zero-admin MySQL portable engine with dynamic port failover",
      "Automated PDF invoice generation with fiscal stamps",
      "Customer credit & payment installment tracking (Rest à payer)",
      "Excel multi-sheet export/import engine",
      "Automated daily backup and recovery manager"
    ]
  },
  {
    id: "solar-energy",
    title: "Solar Energy E-Commerce & Sizing Platform",
    category: "web",
    featured: true,
    tagline: "E-Commerce Platform with Interactive Solar Energy Sizing Calculator",
    description: "Full-scale solar equipment platform featuring interactive energy consumption calculators, battery storage sizing algorithms, inverter estimation, and automated inventory management.",
    longDescription: "A specialized platform addressing renewable energy adoption. Users can calculate their exact solar installation requirements by inputting household appliances and consumption patterns, receiving instant recommendations for solar panels, inverters, and battery banks with real-time stock availability and cost estimation.",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Chart.js", "REST APIs"],
    metrics: [
      { label: "Sizing Algorithm", value: "Real-Time" },
      { label: "Product Catalog", value: "100+ Items" },
      { label: "Estimation Precision", value: "95%" }
    ],
    github: "https://github.com/AmineArheche/solar-energy-platform",
    live: null,
    color: "#f59e0b",
    highlights: [
      "Interactive multi-step energy consumption calculator",
      "Battery bank & photovoltaic panel capacity sizing logic",
      "E-commerce storefront with cart, checkout, and order lifecycle",
      "Administrative dashboard for inventory and product management",
      "Responsive mobile-first user experience"
    ]
  },
  {
    id: "autoloc",
    title: "AutoLoc — Fleet & Car Rental Management",
    category: "desktop",
    featured: false,
    tagline: "Automotive Rental Fleet Management & Contract Tracking System",
    description: "Desktop software suite managing car rental operations, vehicle availability status, client reservations, and automated billing contracts.",
    longDescription: "Designed for vehicle rental agencies to track fleet mileage, maintenance schedules, rental agreements, client CIN records, and daily revenue metrics with interactive dashboards.",
    technologies: ["Python", "CustomTkinter", "SQLite / MySQL", "Fpdf", "Matplotlib"],
    metrics: [
      { label: "Fleet Capacity", value: "Unlimited" },
      { label: "Contract Speed", value: "Instant" }
    ],
    github: "https://github.com/AmineArheche/location-prjt",
    live: null,
    color: "#0284c7",
    highlights: [
      "Real-time vehicle availability and maintenance scheduling",
      "Customer identity verification and rental contract generation",
      "Financial tracking of deposits, rentals, and overdue payments",
      "Visual fleet occupancy charts"
    ]
  },
  {
    id: "taskflow",
    title: "TaskFlow Pro — Productivity Suite",
    category: "web",
    featured: false,
    tagline: "Interactive Task & Workflow Management Application",
    description: "Modern productivity web application featuring priority matrix categorization, due-date tracking, local persistence, and glassmorphic UI.",
    longDescription: "A clean, distraction-free productivity app built with native web technologies. Features tag-based filtering, completion statistics, progress bars, and resilient client-side storage.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3 Glassmorphism", "LocalStorage API"],
    metrics: [
      { label: "Bundle Size", value: "< 25KB" },
      { label: "Offline Ready", value: "100%" }
    ],
    github: "https://github.com/AmineArheche/todo-list",
    live: null,
    color: "#ec4899",
    highlights: [
      "Instant drag/toggle task lifecycle states",
      "Filter by priority, due date, and category tags",
      "Zero-latency persistent local state",
      "Modern dark/light glassmorphic visual system"
    ]
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: 95, icon: "Code2", description: "FastAPI, Flask, Tkinter, Data Processing, PyInstaller" },
    { name: "JavaScript / ES6+", level: 92, icon: "Braces", description: "React 19, Modern Async, Vite, State Management" },
    { name: "C", level: 80, icon: "Cpu", description: "Memory layout, pointers, system concepts, low-level optimization" },
    { name: "SQL", level: 90, icon: "Database", description: "MySQL, Relational schema design, Indexing, Complex Joins" },
    { name: "PHP", level: 85, icon: "Server", description: "OOP, MVC architecture, E-Commerce platforms" },
    { name: "HTML5 & CSS3", level: 95, icon: "Layout", description: "TailwindCSS, Glassmorphism, CSS Variables, Responsive Layouts" }
  ],
  frameworks: [
    { name: "React 19 & Vite", level: 92, category: "Frontend" },
    { name: "FastAPI", level: 90, category: "Backend" },
    { name: "Flask", level: 88, category: "Backend" },
    { name: "SQLAlchemy 2.0", level: 90, category: "ORM" },
    { name: "Tailwind CSS", level: 94, category: "Styling" },
    { name: "Chart.js", level: 88, category: "DataViz" }
  ],
  infrastructure: [
    { name: "MySQL & SQLite", description: "Enterprise schemas, transactions, portable engines" },
    { name: "Docker & Compose", description: "Containerized multi-service deployment (Nginx, API, SPA)" },
    { name: "Git & GitHub Actions", description: "CI/CD automated testing, branch workflows, release pipelines" },
    { name: "Linux / Bash", description: "CLI administration, systemd, SSH, process monitoring" },
    { name: "PowerShell", description: "Automated Windows environment detection, build & packaging scripts" }
  ],
  creativeAndSound: [
    { name: "Harmonic Composition", description: "Melodic structure, chord progressions, emotional dynamics" },
    { name: "Multi-Instrumentation", description: "Acoustic and electric live instrumental performance" },
    { name: "Audio Synthesis & DSP", description: "Subtractive, FM, and wavetable synthesis, envelope shaping" },
    { name: "Digital Audio Workstation", description: "FL Studio 24, VST3 audio plugins, mixing & spatial mastering" },
    { name: "Songwriting & Lyricism", description: "Translating human concepts and stories into structured lyricism" }
  ]
};

export const timelineData = [
  {
    year: "2025 - 2026",
    role: "Full-Stack Software Engineer & System Architect",
    focus: "AuraLink & Enterprise Portals",
    description: "Engineered AuraLink URL telemetry platform with FastAPI and React 19, alongside the Horti-Innov enterprise inventory suite with portable embedded MySQL architecture."
  },
  {
    year: "2024 - 2025",
    role: "Full-Stack Web Developer",
    focus: "Renewable Energy & Commercial Applications",
    description: "Built the Solar Energy E-Commerce & sizing platform with interactive equipment calculators, and automotive rental fleet management systems in Python and PHP."
  },
  {
    year: "Lifelong Craft",
    role: "Musician, Composer & Sonic Explorer",
    focus: "Acoustics & Synthesis",
    description: "Deep immersion in musical instruments, composition, sound design, and harmonic acoustics, infusing engineering work with rhythm, elegance, and aesthetic balance."
  }
];
