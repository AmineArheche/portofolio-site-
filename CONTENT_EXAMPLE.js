// EXEMPLE DE CONTENU PERSONNALISÉ
// Copiez ce fichier et remplacez les valeurs dans src/content.js

export const contentExample = {
  name: "Amine Arheche", // Remplacez {{NAME}}
  role: "Développeur Full-Stack — Spécialiste Web & Solutions Cloud",
  bio: "Je suis Amine Arheche, stagiaire en développement digital avec une passion pour le back-end, le front moderne et les animations 3D.",
  bioLong: `Je suis Amine Arheche, un développeur passionné par la création d'applications web modernes et performantes. 
    Avec une expertise en développement full-stack, je combine des compétences en front-end (React, Vue.js) 
    et back-end (Node.js, Laravel, Python) pour créer des solutions complètes.`,
  
  links: {
    github: "https://github.com/aminex", // Remplacez {{GITHUB_URL}}
    linkedin: "https://www.linkedin.com/in/aminex", // Remplacez {{LINKEDIN_URL}}
    email: "amine@example.com", // Remplacez {{EMAIL}}
    portfolio: "https://your-domain.com"
  },
  
  projects: [
    {
      id: 1,
      title: "Calculateur d'installations solaires",
      description: "Plateforme fournissant des estimations d'équipements solaires et simulations de coûts.",
      longDescription: "Une application complète permettant aux utilisateurs de calculer leurs besoins en installations solaires.",
      tech: ["Laravel", "React", "MySQL", "Three.js"],
      image: "/assets/projects/solar.png",
      github: "https://github.com/aminex/solar-calculator",
      live: "https://example.com/solar",
      featured: true
    },
    // Ajoutez vos projets ici...
  ],
  
  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      // Ajoutez vos compétences...
    ],
    backend: [
      { name: "Node.js", level: 85 },
      // Ajoutez vos compétences...
    ],
    tools: [
      { name: "Git", level: 90 },
      // Ajoutez vos outils...
    ]
  },
  
  experience: [
    {
      title: "Développeur Full-Stack",
      company: "Entreprise Tech",
      period: "2023 - Présent",
      description: "Développement d'applications web modernes"
    },
    // Ajoutez vos expériences...
  ]
};

// INSTRUCTIONS :
// 1. Remplacez les valeurs dans src/content.js avec vos propres informations
// 2. Les placeholders {{NAME}}, {{GITHUB_URL}}, etc. doivent être remplacés
// 3. Ajoutez vos projets, compétences et expériences
// 4. Assurez-vous que les images sont dans public/assets/projects/

