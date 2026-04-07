# Portfolio Professionnel - Développeur Full-Stack

Un portfolio professionnel moderne et interactif construit avec React, Tailwind CSS, et Three.js. Ce site présente vos projets, compétences et expériences avec des animations 3D interactives.

## 🚀 Fonctionnalités

- ✨ **Animations 3D interactives** avec React Three Fiber
- 📱 **Design responsive** optimisé pour tous les appareils
- 🎨 **Interface moderne** avec Tailwind CSS
- ⚡ **Performances optimisées** avec lazy loading et code splitting
- ♿ **Accessibilité** (a11y) avec navigation au clavier et attributs ARIA
- 🔍 **SEO optimisé** avec meta tags dynamiques
- 🎭 **Animations fluides** avec Framer Motion
- 🌐 **Multi-pages** : Accueil, À propos, Projets, CV, Contact

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. **Clonez le dépôt ou téléchargez les fichiers**

```bash
git clone <votre-repo>
cd portfolio-app
```

2. **Installez les dépendances**

```bash
npm install
```

3. **Personnalisez le contenu**

Ouvrez `src/content.js` et remplacez les placeholders :
- `{{NAME}}` par votre nom
- `{{GITHUB_URL}}` par votre URL GitHub
- `{{LINKEDIN_URL}}` par votre URL LinkedIn
- `{{EMAIL}}` par votre adresse email
- Ajoutez vos projets, compétences et expériences

4. **Lancez le serveur de développement**

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:3000`

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production dans le dossier `dist`
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 📁 Structure du projet

```
portfolio-app/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ThreeScene.jsx # Composant 3D
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBar.jsx
│   │   └── SEO.jsx
│   ├── pages/            # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── CV.jsx
│   │   └── Contact.jsx
│   ├── content.js        # Fichier de contenu (à personnaliser)
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles globaux
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personnalisation

### Modifier les couleurs

Editez `tailwind.config.js` pour changer les couleurs du thème :

```js
colors: {
  primary: {
    // Vos couleurs personnalisées
  }
}
```

### Ajouter des projets

Dans `src/content.js`, ajoutez vos projets dans le tableau `projects` :

```js
{
  id: 5,
  title: "Mon nouveau projet",
  description: "Description courte",
  longDescription: "Description détaillée",
  tech: ["React", "Node.js"],
  image: "/assets/projects/my-project.png",
  github: "https://github.com/username/project",
  live: "https://example.com",
  featured: true
}
```

### Configurer le formulaire de contact

Le formulaire de contact utilise actuellement une simulation. Pour l'activer :

1. **Avec Formspree** (gratuit) :
   - Créez un compte sur [Formspree](https://formspree.io/)
   - Récupérez votre endpoint
   - Modifiez `src/pages/Contact.jsx` avec votre endpoint

2. **Avec EmailJS** :
   - Créez un compte sur [EmailJS](https://www.emailjs.com/)
   - Configurez un service email
   - Installez : `npm install @emailjs/browser`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Connectez votre repo à [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Vite et déploiera

### Netlify

1. Poussez votre code sur GitHub
2. Connectez votre repo à [Netlify](https://www.netlify.com)
3. Paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

Voir les instructions dans `deploy_instructions.md`

## 📝 Notes importantes

- Les images de projets doivent être placées dans `public/assets/projects/`
- Le CV PDF peut être ajouté dans `public/CV.pdf` et le lien dans `src/pages/CV.jsx`
- Les animations 3D sont automatiquement désactivées sur mobile pour les performances
- Assurez-vous de remplacer tous les placeholders avant le déploiement

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS
- **React Three Fiber** - Rendu 3D
- **Three.js** - Bibliothèque 3D
- **@react-three/drei** - Helpers pour R3F
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Intersection Observer** - Animations au scroll

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Contribution

N'hésitez pas à ouvrir une issue ou une pull request si vous souhaitez améliorer ce portfolio !

---

**Créé avec ❤️ pour les développeurs passionnés**

