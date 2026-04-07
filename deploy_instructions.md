# Instructions de Déploiement

Ce guide vous explique comment déployer votre portfolio sur différentes plateformes.

## 🚀 Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via l'interface Vercel

1. **Préparez votre projet**
   ```bash
   npm run build
   ```
   Assurez-vous que le build fonctionne sans erreur.

2. **Connectez votre repository GitHub**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Import Project"
   - Connectez votre compte GitHub
   - Sélectionnez votre repository

3. **Configuration automatique**
   - Vercel détectera automatiquement Vite
   - Les paramètres par défaut devraient fonctionner :
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. **Déployez**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en quelques minutes !

5. **Configuration personnalisée (optionnel)**
   Créez un fichier `vercel.json` à la racine :
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

### Méthode 2 : Via CLI Vercel

```bash
# Installez Vercel CLI
npm i -g vercel

# Déployez
vercel

# Pour la production
vercel --prod
```

---

## 🌐 Déploiement sur Netlify

### Méthode 1 : Via l'interface Netlify

1. **Préparez votre projet**
   ```bash
   npm run build
   ```

2. **Connectez votre repository**
   - Allez sur [netlify.com](https://www.netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"
   - Connectez GitHub et sélectionnez votre repo

3. **Configuration de build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Fichier de configuration**
   Créez `netlify.toml` à la racine :
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. **Déployez**
   - Cliquez sur "Deploy site"
   - Votre site sera déployé automatiquement

### Méthode 2 : Drag & Drop

1. Build votre projet :
   ```bash
   npm run build
   ```

2. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)

3. Glissez-déposez le dossier `dist`

---

## 📄 Déploiement sur GitHub Pages

### Préparation

1. **Installez gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifiez `package.json`**
   Ajoutez ces scripts :
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://votre-username.github.io/portfolio-app"
   }
   ```

3. **Modifiez `vite.config.js`**
   Ajoutez la base URL :
   ```js
   export default defineConfig({
     base: '/portfolio-app/', // Remplacez par le nom de votre repo
     plugins: [react()],
     // ... reste de la config
   })
   ```

4. **Déployez**
   ```bash
   npm run deploy
   ```

5. **Activez GitHub Pages**
   - Allez dans Settings > Pages de votre repo
   - Sélectionnez la branche `gh-pages`
   - Le site sera accessible à `https://votre-username.github.io/portfolio-app`

---

## 🔧 Configuration du formulaire de contact

### Option 1 : Formspree (Recommandé - Gratuit)

1. Créez un compte sur [formspree.io](https://formspree.io)

2. Créez un nouveau formulaire et récupérez votre endpoint :
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

3. Modifiez `src/pages/Contact.jsx` :
   ```js
   const handleSubmit = async (e) => {
     e.preventDefault()
     setStatus('Envoi en cours...')

     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     })

     if (response.ok) {
       setStatus('Message envoyé avec succès!')
       setFormData({ name: '', email: '', subject: '', message: '' })
     } else {
       setStatus('Une erreur est survenue. Veuillez réessayer.')
     }
   }
   ```

### Option 2 : EmailJS

1. Installez EmailJS :
   ```bash
   npm install @emailjs/browser
   ```

2. Créez un compte sur [emailjs.com](https://www.emailjs.com)

3. Configurez votre service email

4. Modifiez `src/pages/Contact.jsx` :
   ```js
   import emailjs from '@emailjs/browser'

   const handleSubmit = async (e) => {
     e.preventDefault()
     setStatus('Envoi en cours...')

     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       formData,
       'YOUR_PUBLIC_KEY'
     )
     .then(() => {
       setStatus('Message envoyé avec succès!')
       setFormData({ name: '', email: '', subject: '', message: '' })
     })
     .catch(() => {
       setStatus('Une erreur est survenue.')
     })
   }
   ```

---

## 📝 Checklist avant le déploiement

- [ ] Tous les placeholders ont été remplacés dans `src/content.js`
- [ ] Les liens GitHub et LinkedIn sont corrects
- [ ] L'adresse email est configurée
- [ ] Les images de projets sont ajoutées dans `public/assets/projects/`
- [ ] Le CV PDF est ajouté (optionnel) dans `public/CV.pdf`
- [ ] Le formulaire de contact est configuré
- [ ] Les meta tags sont personnalisés dans `index.html`
- [ ] Le build fonctionne sans erreur : `npm run build`
- [ ] Le site a été testé localement

---

## 🎨 Configuration des domaines personnalisés

### Sur Vercel

1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

### Sur Netlify

1. Allez dans Site settings > Domain management
2. Cliquez sur "Add custom domain"
3. Suivez les instructions DNS

---

## 🔒 Variables d'environnement

Si vous utilisez des clés API, créez un fichier `.env` :

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_SITE_URL=https://your-domain.com
```

Puis utilisez-les dans le code :
```js
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
```

**⚠️ Important** : Ne commitez JAMAIS le fichier `.env` avec des secrets. Ajoutez-le à `.gitignore`.

---

## 🐛 Résolution de problèmes

### Erreur 404 sur les pages

Assurez-vous d'avoir configuré les redirections :
- Vercel : `vercel.json`
- Netlify : `netlify.toml`
- GitHub Pages : Configurez la base URL dans `vite.config.js`

### Images ne se chargent pas

Vérifiez que les chemins sont corrects. Les images dans `public/` sont accessibles via `/image.png`.

### Animations 3D ne fonctionnent pas

C'est normal sur mobile ou appareils peu performants. Un fallback CSS est automatiquement utilisé.

---

## 📚 Ressources utiles

- [Documentation Vite](https://vitejs.dev/)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation GitHub Pages](https://pages.github.com/)

---

**Bon déploiement ! 🚀**
