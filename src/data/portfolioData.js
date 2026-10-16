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
    live: null,
    color: "#6366f1",
    coverImage: "/assets/screens/auralink/auralink-studio.png",
    screenshots: [
      { 
        url: "/assets/screens/auralink/auralink-studio.png", 
        caption: "Smart URL Shortener Studio v2.0", 
        description: "Clean URL shortening studio with instant generation, QR code export, and UTM controls." 
      },
      { 
        url: "/assets/screens/auralink/auralink-analytics.png", 
        caption: "Real-Time Visitor Telemetry", 
        description: "Granular breakdown of devices, operating systems, browsers, and traffic origins." 
      },
      { 
        url: "/assets/screens/auralink/auralink-swagger.png", 
        caption: "FastAPI Swagger Documentation", 
        description: "Interactive REST API explorer with comprehensive endpoints and security schemas." 
      }
    ],
    highlights: [
      "Non-blocking HTTP 307 temporary redirect engine with sub-5ms response time",
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
    coverImage: "/assets/screens/horti-innov/horti-dashboard.png",
    screenshots: [
      { 
        url: "/assets/screens/horti-innov/horti-dashboard.png", 
        caption: "Business Intelligence Executive Dashboard", 
        description: "Real-time analytical view of sales volumes, stock levels, receivables, and supplier orders." 
      },
      { 
        url: "/assets/screens/horti-innov/horti-invoices-stock.png", 
        caption: "Stock Movement & Invoice Center", 
        description: "Complete inventory ledger, product categories, and fiscal invoice generation." 
      },
      { 
        url: "/assets/screens/horti-innov/horti-clients.png", 
        caption: "Customer Ledger & Credit Tracking", 
        description: "Client directory with transaction histories, outstanding balances, and export tools." 
      },
      { 
        url: "/assets/screens/horti-innov/horti-login.png", 
        caption: "Secure Enterprise Authentication", 
        description: "Role-based access control with session persistence and database verification." 
      }
    ],
    highlights: [
      "Self-contained zero-admin MySQL portable engine with dynamic port failover",
      "Automated PDF invoice generation with fiscal stamps",
      "Customer credit & payment installment tracking (Reste à payer)",
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
    coverImage: "/assets/screens/solar-energy/solar-inverter-installation.jpg",
    screenshots: [
      { 
        url: "/assets/screens/solar-energy/solar-inverter-installation.jpg", 
        caption: "Solar Inverter & Power Management System", 
        description: "Real-world installation of photovoltaic inverter and control box." 
      }
    ],
    highlights: [
      "Interactive multi-step energy consumption calculator",
      "Battery bank & photovoltaic panel capacity sizing logic",
      "E-commerce storefront with cart, checkout, and order lifecycle",
      "Administrative dashboard for inventory and product management",
      "Responsive mobile-first user experience"
    ]
  },
  {
    id: "rainradar",
    title: "RainRadar Pro — Doppler Radar & NASA 3D Earth",
    category: "web",
    featured: true,
    tagline: "Aerology & Weather Platform with Live Doppler Radar and Interactive 3D Earth",
    description: "Advanced meteorology platform featuring real-time Doppler radar scans, NASA-powered 3D Earth WebGL visualization, hyperlocal rain nowcasting, and atmospheric telemetry across 1,200+ global radar stations.",
    longDescription: "RainRadar Pro integrates global meteorology telemetry with high-performance 3D WebGL graphics. Built with Three.js for interactive photorealistic NASA planetary exploration and RainViewer REST API integration, delivering sub-100m precipitation resolution, 120-minute forward nowcasting, and instantaneous multi-city atmospheric tracking.",
    technologies: ["Three.js", "WebGL", "JavaScript (ES6+)", "RainViewer API", "NASA Data", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Radar Stations", value: "1,200+" },
      { label: "Radar Resolution", value: "100m" },
      { label: "Nowcast Horizon", value: "120 min" }
    ],
    github: "https://github.com/AmineArheche/meteo",
    live: null,
    color: "#06b6d4",
    coverImage: "/assets/screens/rainradar/rainradar-doppler-live.png",
    screenshots: [
      { 
        url: "/assets/screens/rainradar/rainradar-doppler-live.png", 
        caption: "Live Doppler Radar Cockpit", 
        description: "Real-time precipitation radar scanning across 1,200+ global stations with 100m precision." 
      },
      { 
        url: "/assets/screens/rainradar/rainradar-globe3d.png", 
        caption: "NASA 3D Earth Exploration", 
        description: "Interactive 3D WebGL photorealistic planetary globe with atmospheric simulation." 
      },
      { 
        url: "/assets/screens/rainradar/rainradar-scan.png", 
        caption: "Active RainRadar Doppler Scan", 
        description: "Active scan visualization with 2-minute sweep cycles and rain front monitoring." 
      },
      { 
        url: "/assets/screens/rainradar/rainradar-stations.png", 
        caption: "Fronts Pluvieux & Radar Network", 
        description: "Live radar network monitoring storm tracks and cloud formation vectors." 
      },
      { 
        url: "/assets/screens/rainradar/rainradar-search.png", 
        caption: "Hyperlocal City Weather Telemetry", 
        description: "Instant city search with planetary coordinates and local radar overlays." 
      }
    ],
    highlights: [
      "Interactive Three.js 3D NASA Earth globe with WebGL atmospheric rendering",
      "Real-time Doppler radar integration connecting 1,200+ global radar stations",
      "120-minute forward precipitation nowcasting engine",
      "Multi-city instantaneous search with localized satellite telemetry",
      "Dark-mode cockpit UI optimized for real-time aerology monitoring"
    ]
  },
  {
    id: "streamvault",
    title: "StreamVault — Premium IPTV Streaming Platform",
    category: "web",
    featured: true,
    tagline: "High-Performance Streaming Portal & Subscription Showcase",
    description: "A high-conversion responsive web platform for premium IPTV streaming, highlighting 20,000+ live TV channels, 100,000+ VOD catalog, anti-freeze technology, and interactive device setup guides.",
    longDescription: "StreamVault presents an immersive cinematic user experience built with modern glassmorphism. Featuring dynamic hero banners, popular movie and series carousels, tiered subscription matrix, multi-device activation workflows (Smart TV, Android, Firestick, iOS), and FAQ troubleshooting guides.",
    technologies: ["HTML5", "CSS3 Glassmorphism", "JavaScript (ES6+)", "Responsive UI", "VOD Carousel"],
    metrics: [
      { label: "Live Channels", value: "20,000+" },
      { label: "VOD Content", value: "100,000+" },
      { label: "Resolution", value: "4K UHD" }
    ],
    github: "https://github.com/AmineArheche/IPTV-landing-page",
    live: null,
    color: "#ef4444",
    coverImage: "/assets/screens/streamvault/streamvault-hero.png",
    screenshots: [
      { 
        url: "/assets/screens/streamvault/streamvault-hero.png", 
        caption: "StreamVault Cinematic Landing Page", 
        description: "Sleek hero section with service highlights, 4K badges, and streaming stats." 
      },
      { 
        url: "/assets/screens/streamvault/streamvault-catalog.png", 
        caption: "4K VOD & Blockbuster Series Catalog", 
        description: "Interactive movie showcase featuring trending blockbusters and cinematic posters." 
      },
      { 
        url: "/assets/screens/streamvault/streamvault-pricing.png", 
        caption: "Subscription Pricing Matrix", 
        description: "Clear subscription tiers with anti-freeze feature badges and checkout CTA." 
      },
      { 
        url: "/assets/screens/streamvault/streamvault-support.png", 
        caption: "Device Setup & Knowledge Base", 
        description: "Guided installation tutorials for Android TV, Firestick, Apple TV, and MAG boxes." 
      }
    ],
    highlights: [
      "Cinematic glassmorphic design system with high-contrast streaming aesthetics",
      "Curated VOD showcase with responsive poster carousels and genre filters",
      "Multi-tier pricing matrix with instant checkout integrations",
      "Interactive device setup and troubleshooting walkthroughs",
      "Ultra-fast loading times with optimized lightweight assets"
    ]
  },
  {
    id: "eduflow",
    title: "EduFlow SaaS — Online Examination & Quiz Platform",
    category: "fullstack",
    featured: true,
    tagline: "Multi-Tenant School Examination & Grading Management System",
    description: "Comprehensive online examination suite enabling educational institutions to create timed quizzes, enforce secure student authentication via national student IDs (CNE), and track classroom analytics.",
    longDescription: "EduFlow streamlines academic evaluation through a modern web interface. Administrators and instructors can author multi-choice questions with customized duration, assign quizzes to student cohorts, view live submission stats, and export grading ledgers. Students benefit from a clean, distraction-free test-taking environment.",
    technologies: ["Laravel / PHP", "React", "MySQL", "Tailwind CSS", "REST API", "JWT Auth"],
    metrics: [
      { label: "Role Auth", value: "Admin / Student" },
      { label: "Evaluation", value: "Auto-Grading" },
      { label: "Latency", value: "Instant" }
    ],
    github: "https://github.com/AmineArheche/EduFlow-SaaS",
    live: null,
    color: "#8b5cf6",
    coverImage: "/assets/screens/eduflow/eduflow-portal.png",
    screenshots: [
      { 
        url: "/assets/screens/eduflow/eduflow-portal.png", 
        caption: "Exam En Ligne Portal Home", 
        description: "Modern welcome portal inviting students and instructors to pass tests online." 
      },
      { 
        url: "/assets/screens/eduflow/eduflow-admin-dashboard.png", 
        caption: "Administrator Intelligence Dashboard", 
        description: "Overview of active teachers, pending student groups, and quiz metrics." 
      },
      { 
        url: "/assets/screens/eduflow/eduflow-create-quiz.png", 
        caption: "Interactive Quiz & Question Builder", 
        description: "Form to configure test duration, descriptions, and add weighted questions." 
      },
      { 
        url: "/assets/screens/eduflow/eduflow-cne-login.png", 
        caption: "Secure CNE Identification Login", 
        description: "Encrypted student portal authentication supporting official academic CNE credentials." 
      }
    ],
    highlights: [
      "Role-based authentication separated for students, teachers, and school administrators",
      "Dynamic quiz creation studio with customizable time limits and point weights",
      "Instant automated scoring engine with immediate student feedback",
      "Cohort and group allocation for streamlined academic assignment",
      "Responsive UI tested across desktop, tablets, and smartphones"
    ]
  },
  {
    id: "autoloc",
    title: "AutoLoc — Morocco FleetManager & Rental ERP",
    category: "desktop",
    featured: false,
    tagline: "Automotive Rental Fleet Management & Contract Tracking System",
    description: "Enterprise desktop and REST-connected fleet management software managing car rental operations, vehicle availability status, client reservations, and automated billing contracts.",
    longDescription: "Designed for vehicle rental agencies to track fleet mileage, maintenance schedules, rental agreements, client CIN records, and daily revenue metrics with interactive dashboards and REST API connectivity.",
    technologies: ["Python", "FastAPI", "React TypeScript", "SQLite / MySQL", "FPDF"],
    metrics: [
      { label: "Fleet Capacity", value: "Unlimited" },
      { label: "Contract Speed", value: "Instant" },
      { label: "Architecture", value: "REST API" }
    ],
    github: "https://github.com/AmineArheche/location-prjt",
    live: null,
    color: "#0284c7",
    coverImage: "/assets/screens/autoloc/autoloc-fleet-dashboard.png",
    screenshots: [
      { 
        url: "/assets/screens/autoloc/autoloc-fleet-dashboard.png", 
        caption: "Fleet Operations Dashboard", 
        description: "Real-time car availability, maintenance alerts, and active contract statuses." 
      },
      { 
        url: "/assets/screens/autoloc/autoloc-bookings.png", 
        caption: "Booking & Rental Ledger", 
        description: "Transactional booking manager with reservation calendars and deposit tracking." 
      },
      { 
        url: "/assets/screens/autoloc/autoloc-login.png", 
        caption: "Agency REST API Portal Access", 
        description: "Secure agency credential authentication with quick demo access modes." 
      }
    ],
    highlights: [
      "Real-time vehicle availability, maintenance scheduling, and fuel tracking",
      "Customer identity verification and instant rental contract generation",
      "Financial tracking of caution deposits, daily rates, and overdue payments",
      "REST API connectivity for multi-station rental agencies"
    ]
  },
  {
    id: "calculator",
    title: "Calculator Pro & Interactive Math Learning Hub",
    category: "web",
    featured: false,
    tagline: "High-Precision Web Calculator with Finite State Machine & Math Quizzes",
    description: "A precision web calculator paired with a 10-lesson interactive mathematical learning hub for students, featuring Web Audio acoustic feedback, fraction modules, and automated unit testing.",
    longDescription: "Engineered with a robust Finite State Machine (FSM) to prevent floating-point calculation anomalies. Features an integrated educational center with 10 interactive lessons covering fractions, decimal precision, and percentages, alongside interactive knowledge validation quizzes.",
    technologies: ["JavaScript (ES6+)", "Web Audio API", "Vitest", "CSS Glassmorphism", "HTML5"],
    metrics: [
      { label: "Math Lessons", value: "10 Modules" },
      { label: "Audio Feedback", value: "Web Audio" },
      { label: "FSM Engine", value: "Deterministic" }
    ],
    github: "https://github.com/AmineArheche/calculator",
    live: null,
    color: "#f59e0b",
    coverImage: "/assets/screens/calculator/calculator-math-center.png",
    screenshots: [
      { 
        url: "/assets/screens/calculator/calculator-math-center.png", 
        caption: "Centre d'Apprentissage Mathématique", 
        description: "Interactive mathematics center with progress trackers and quiz score metrics." 
      },
      { 
        url: "/assets/screens/calculator/calculator-lessons.png", 
        caption: "Curated Modular Math Lessons", 
        description: "Deep dives into fractions, decimal numbers, and real-world percentage calculations." 
      },
      { 
        url: "/assets/screens/calculator/calculator-quiz.png", 
        caption: "Interactive Course & Quiz Studio", 
        description: "Assessment environment testing mathematical concepts with instant score tallies." 
      }
    ],
    highlights: [
      "Deterministic Finite State Machine (FSM) math evaluation core",
      "10 comprehensive interactive lessons spanning fundamental numeracy",
      "Acoustic click and success tones generated via Web Audio API oscillators",
      "Automated Vitest test suite verifying mathematical edge cases"
    ]
  },
  {
    id: "monasabaty",
    title: "Monasabaty — Luxury Event & Gala Management",
    category: "web",
    featured: false,
    tagline: "Exclusive High-Society Event Planning & Prestigious Venue Platform",
    description: "Luxury event planning platform tailored for high-society galas, corporate summits, and weddings, featuring bespoke provider directories, tiered pricing plans, and client management.",
    longDescription: "An opulent, gold-accented digital experience connecting event organizers with premier caterers, decorators, and venues. Designed to evoke elegance with bespoke typography, smooth transitions, and dedicated portals for clients and luxury service providers.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Animation Engine"],
    metrics: [
      { label: "UI Tier", value: "Ultra Luxury" },
      { label: "Provider Hub", value: "Multi-Role" },
      { label: "Visual Tone", value: "Gold & Noir" }
    ],
    github: "https://github.com/AmineArheche",
    live: null,
    color: "#d97706",
    coverImage: "/assets/screens/monasabaty/monasabaty-home.png",
    screenshots: [
      { 
        url: "/assets/screens/monasabaty/monasabaty-home.png", 
        caption: "Monasabaty Unmatched Luxury Showcase", 
        description: "Opulent landing experience tailored for gala organizers and prestigious events." 
      },
      { 
        url: "/assets/screens/monasabaty/monasabaty-events.png", 
        caption: "Exclusive Gatherings & Summits", 
        description: "Showcase for corporate summits, galas, and high-society celebratory occasions." 
      },
      { 
        url: "/assets/screens/monasabaty/monasabaty-portal.png", 
        caption: "Bespoke Client & Provider Portal", 
        description: "Dedicated account authentication for event hosts and luxury vendors." 
      }
    ],
    highlights: [
      "High-end luxury gold-and-black design language",
      "Multi-role authentication for private clients and certified service vendors",
      "Interactive event catalog and catering tier selections",
      "Smooth micro-interactions and responsive layout adaptation"
    ]
  },
  {
    id: "khawatim-rouhania",
    title: "Khawatim Rouhania — Flash USB E-Commerce Store",
    category: "web",
    featured: false,
    tagline: "High-Conversion Single-Product E-Commerce Landing Page",
    description: "Fast-loading, high-conversion e-commerce landing page optimized for cash-on-delivery (COD) transactions, featuring countdown timers and stock scarcity cues.",
    longDescription: "Engineered specifically for high-velocity direct-response marketing. Features an integrated checkout form, animated urgency countdown timers, live stock counter depletion triggers, and automatic WhatsApp order confirmation dispatching.",
    technologies: ["PHP", "JavaScript", "Tailwind CSS", "WhatsApp API", "LocalStorage"],
    metrics: [
      { label: "Checkout Model", value: "Cash on Delivery" },
      { label: "Conversion Rate", value: "Optimized" },
      { label: "Load Speed", value: "< 0.8s" }
    ],
    github: "https://github.com/AmineArheche",
    live: null,
    color: "#10b981",
    coverImage: "/assets/screens/khawatim-rouhania/khawatim-offer.png",
    screenshots: [
      { 
        url: "/assets/screens/khawatim-rouhania/khawatim-offer.png", 
        caption: "Direct-Response Promotional Landing", 
        description: "Urgency-driven product presentation with countdown timer and legal proof." 
      },
      { 
        url: "/assets/screens/khawatim-rouhania/khawatim-stock.png", 
        caption: "Stock Scarcity & Social Proof", 
        description: "Live stock scarcity indicators and cash-on-delivery guarantee banners." 
      },
      { 
        url: "/assets/screens/khawatim-rouhania/khawatim-delivery.png", 
        caption: "Streamlined Cash-on-Delivery Checkout", 
        description: "Simplified order placement with automatic geographic position verification." 
      }
    ],
    highlights: [
      "Urgency countdown timer with session persistence",
      "Live stock scarcity triggers increasing conversion rates",
      "Frictionless 1-click Cash on Delivery order processing",
      "Automated WhatsApp notification dispatch for instant dispatch confirmation"
    ]
  },
  {
    id: "taskflow",
    title: "TaskFlow Pro 3D — Productivity Suite",
    category: "web",
    featured: false,
    tagline: "Interactive Task & Workflow Management Application with Multi-Format Export",
    description: "Modern productivity web application featuring priority matrix categorization, due-date tracking, local persistence, 3D UI depth effects, and multi-format report exports (PDF, Excel, CSV).",
    longDescription: "A clean, distraction-free productivity app built with native web technologies. Features tag-based filtering, completion statistics, progress bars, interactive 3D perspective tilts, and resilient client-side storage.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3 3D Transforms", "LocalStorage API"],
    metrics: [
      { label: "Bundle Size", value: "< 25KB" },
      { label: "Offline Ready", value: "100%" },
      { label: "Export Formats", value: "PDF / CSV" }
    ],
    github: "https://github.com/AmineArheche/todo-list",
    live: null,
    color: "#ec4899",
    coverImage: null,
    screenshots: [],
    highlights: [
      "Instant drag/toggle task lifecycle states",
      "Filter by priority, due date, and category tags",
      "Zero-latency persistent local state",
      "Modern dark/light glassmorphic visual system with 3D tilt"
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
