# 📄 Guide de génération du CV en PDF

Il existe deux méthodes pour créer et télécharger le CV en PDF :

## 🎯 Méthode 1 : PDF Statique (Simple)

### Étape 1 : Créer votre CV en PDF
1. Créez votre CV avec un outil comme :
   - Microsoft Word
   - Google Docs
   - Canva
   - LaTeX
   - Adobe InDesign

2. Exportez-le en PDF

3. Placez le fichier dans le dossier `public/` avec le nom `CV.pdf`

### ✅ Avantage
- Simple et rapide
- Contrôle total sur le design
- Pas besoin de bibliothèques supplémentaires

---

## 🚀 Méthode 2 : Génération Dynamique avec jsPDF (Avancé)

Cette méthode génère automatiquement le PDF à partir des données du portfolio.

### Installation

```bash
npm install jspdf html2canvas
```

### Code à ajouter dans `src/pages/CV.jsx` :

```javascript
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const downloadCV = async () => {
  // Sélectionner l'élément CV à convertir
  const element = document.getElementById('cv-content')
  
  // Options pour html2canvas
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  })
  
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF('p', 'mm', 'a4')
  
  const imgWidth = 210
  const pageHeight = 295
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  let heightLeft = imgHeight
  
  let position = 0
  
  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
  heightLeft -= pageHeight
  
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight
    pdf.addPage()
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight
  }
  
  pdf.save(`CV_${content.name.replace(' ', '_')}.pdf`)
}
```

### Modifier le JSX pour ajouter un ID :

```jsx
<motion.div
  ref={ref}
  id="cv-content"
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="max-w-4xl mx-auto card p-4 sm:p-6 md:p-8 lg:p-12"
>
  {/* Contenu du CV */}
</motion.div>
```

---

## 📝 Recommandation

Pour un portfolio professionnel, je recommande :
1. **Court terme** : Utiliser un PDF statique (Méthode 1)
   - Plus rapide à mettre en place
   - Meilleure qualité de rendu
   - Contrôle total du design

2. **Long terme** : Implémenter la génération dynamique (Méthode 2)
   - Le CV se met à jour automatiquement avec les données
   - Plus maintenable

---

## 🎨 Template de CV suggéré

Votre CV PDF devrait contenir :

### En-tête
- **Photo professionnelle** (en haut, centrée ou à gauche)
- Nom : Amine Arheche
- Titre : Développeur Full-Stack — Spécialiste Web & Solutions Cloud
- Contact : Email, GitHub, LinkedIn

**Note** : Placez votre photo dans `public/assets/profile-photo.jpg` pour qu'elle apparaisse automatiquement sur la page CV et soit incluse dans le PDF généré.

### Sections
1. **Profil professionnel**
2. **Expérience professionnelle** (avec dates et descriptions)
3. **Formation**
4. **Certifications**
5. **Compétences techniques**
   - Front-end
   - Back-end
   - Outils
6. **Projets notables**

---

## 💡 Astuce

Vous pouvez créer un template Word/Google Docs avec toutes vos informations, puis :
1. Exporter en PDF
2. Placer dans `public/CV.pdf`
3. Le téléchargement fonctionnera automatiquement !

