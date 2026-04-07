# 🚀 Guide de Démarrage Rapide

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
npm install
```

### 2. Personnaliser le contenu

Ouvrez `src/content.js` et remplacez :
- `{{NAME}}` → Votre nom
- `{{GITHUB_URL}}` → https://github.com/votre-username
- `{{LINKEDIN_URL}}` → https://linkedin.com/in/votre-profil
- `{{EMAIL}}` → votre.email@example.com

### 3. Lancer le projet
```bash
npm run dev
```

Votre portfolio sera accessible sur `http://localhost:3000`

---

## 🎨 Personnalisation rapide

### Modifier les couleurs
Éditez `tailwind.config.js` dans la section `colors.primary`

### Ajouter une image de profil
Placez votre photo dans `public/` et modifiez le chemin dans `src/pages/About.jsx`

### Ajouter des images de projets
Placez vos images dans `public/assets/projects/` et mettez à jour les chemins dans `src/content.js`

---

## 📦 Déploiement express

### Sur Vercel (le plus rapide)
1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. C'est tout ! 🎉

Voir `deploy_instructions.md` pour plus de détails.

---

## ✅ Checklist avant de publier

- [ ] Tous les placeholders remplacés
- [ ] Liens GitHub/LinkedIn fonctionnels
- [ ] Formulaire de contact configuré
- [ ] Images de projets ajoutées
- [ ] Testé sur mobile
- [ ] Build réussi : `npm run build`

---

## 🆘 Besoin d'aide ?

Consultez :
- `README.md` pour la documentation complète
- `deploy_instructions.md` pour le déploiement détaillé

Bon codage ! 💻
