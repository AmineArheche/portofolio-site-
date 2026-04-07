# 📁 Structure du Projet

## Vue d'ensemble

```
portfolio-app/
├── public/                          # Fichiers statiques publics
│   ├── assets/
│   │   └── projects/               # Images des projets (à ajouter)
│   └── vite.svg                    # Favicon/Logo
│
├── src/
│   ├── components/                 # Composants réutilisables
│   │   ├── Layout.jsx             # Layout principal avec Navbar/Footer
│   │   ├── Navbar.jsx             # Navigation principale
│   │   ├── Footer.jsx             # Pied de page
│   │   ├── ThreeScene.jsx         # Composant 3D (React Three Fiber)
│   │   ├── ProjectCard.jsx        # Carte de projet
│   │   ├── SkillBar.jsx           # Barre de progression de compétence
│   │   ├── LoadingSpinner.jsx     # Indicateur de chargement
│   │   └── SEO.jsx                # Composant SEO (optionnel)
│   │
│   ├── pages/                     # Pages de l'application
│   │   ├── Home.jsx               # Page d'accueil avec animation 3D
│   │   ├── About.jsx              # Page À propos avec compétences
│   │   ├── Projects.jsx           # Liste des projets
│   │   ├── ProjectDetail.jsx      # Détail d'un projet avec 3D
│   │   ├── CV.jsx                 # Page CV téléchargeable
│   │   └── Contact.jsx            # Formulaire de contact
│   │
│   ├── content.js                 # ⚠️ FICHIER À PERSONNALISER
│   ├── App.jsx                    # Composant racine + routes
│   ├── main.jsx                   # Point d'entrée React
│   └── index.css                  # Styles globaux + Tailwind
│
├── .eslintrc.cjs                  # Configuration ESLint
├── .gitignore                     # Fichiers ignorés par Git
├── index.html                     # HTML principal
├── package.json                   # Dépendances npm
├── vite.config.js                 # Configuration Vite
├── tailwind.config.js             # Configuration Tailwind CSS
├── postcss.config.js              # Configuration PostCSS
├── vercel.json                    # Configuration Vercel (déploiement)
├── netlify.toml                   # Configuration Netlify (déploiement)
│
├── README.md                      # Documentation principale
├── QUICK_START.md                 # Guide de démarrage rapide
├── deploy_instructions.md         # Instructions de déploiement
├── CONTENT_EXAMPLE.js             # Exemple de contenu personnalisé
└── PROJECT_STRUCTURE.md           # Ce fichier
```

## 🔑 Fichiers Clés

### `src/content.js`
**⚠️ Fichier le plus important à personnaliser**
- Contient tous les textes, liens et données du portfolio
- Placeholders à remplacer : `{{NAME}}`, `{{GITHUB_URL}}`, etc.
- Structure : projets, compétences, expériences

### `src/pages/Home.jsx`
- Page d'accueil avec hero section
- Animation 3D interactive
- Call-to-action vers projets et contact

### `src/components/ThreeScene.jsx`
- Composant 3D avec React Three Fiber
- Variantes : 'home' et 'project'
- Fallback CSS pour appareils moins performants

### `tailwind.config.js`
- Configuration des couleurs du thème
- Personnalisation des animations
- Variables CSS personnalisées

## 📦 Dépendances Principales

### Core
- `react` + `react-dom` - Framework UI
- `react-router-dom` - Navigation
- `vite` - Build tool

### Styling & Animations
- `tailwindcss` - Framework CSS
- `framer-motion` - Animations fluides

### 3D
- `three` - Bibliothèque 3D
- `@react-three/fiber` - Wrapper React pour Three.js
- `@react-three/drei` - Helpers R3F

### Utilitaires
- `react-intersection-observer` - Animations au scroll

## 🎨 Personnalisation

### Couleurs
Éditez `tailwind.config.js` :
```js
colors: {
  primary: {
    // Vos couleurs ici
  }
}
```

### Animations 3D
Modifiez les modèles dans `src/components/ThreeScene.jsx`

### Layout
Ajustez les composants dans `src/components/`

## 🚀 Workflow de Développement

1. **Développement local**
   ```bash
   npm run dev
   ```

2. **Build de production**
   ```bash
   npm run build
   ```

3. **Preview du build**
   ```bash
   npm run preview
   ```

4. **Linting**
   ```bash
   npm run lint
   ```

## 📝 Checklist de Personnalisation

- [ ] `src/content.js` - Remplacer tous les placeholders
- [ ] `index.html` - Meta tags SEO
- [ ] `tailwind.config.js` - Couleurs du thème
- [ ] `src/pages/About.jsx` - Photo de profil
- [ ] `public/assets/projects/` - Images des projets
- [ ] `src/pages/Contact.jsx` - Configuration du formulaire
- [ ] `src/pages/CV.jsx` - Lien vers CV PDF

---

**Bonne personnalisation ! 🎨**

