# 📧 Configuration du Formulaire de Contact

Ce guide vous explique comment configurer le formulaire de contact pour recevoir et consulter les messages.

## 🎯 Option 1 : Formspree (Recommandé - Gratuit)

### Avantages :
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Dashboard en ligne pour voir tous les messages
- ✅ Notifications par email
- ✅ Protection anti-spam intégrée
- ✅ Aucun backend nécessaire

### Configuration :

1. **Créer un compte sur Formspree**
   - Allez sur https://formspree.io
   - Créez un compte gratuit
   - Cliquez sur "New Form"

2. **Obtenir votre Form ID**
   - Formspree vous donnera une URL comme : `https://formspree.io/f/YOUR_FORM_ID`
   - Copiez `YOUR_FORM_ID`

3. **Mettre à jour le code**
   - Ouvrez `src/pages/Contact.jsx`
   - Remplacez la fonction `handleSubmit` avec le code configuré pour Formspree
   - (Le code est déjà prêt, il suffit de décommenter et ajouter votre Form ID)

4. **Voir les messages**
   - Connectez-vous à https://formspree.io
   - Tous vos messages apparaîtront dans votre dashboard
   - Vous recevrez aussi des notifications par email

---

## 📨 Option 2 : EmailJS (Envoi direct par email)

### Avantages :
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Messages directement dans votre boîte email
- ✅ Configuration simple

### Configuration :

1. **Installer EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

2. **Créer un compte sur EmailJS**
   - Allez sur https://www.emailjs.com
   - Créez un compte gratuit
   - Configurez votre service email (Gmail, Outlook, etc.)

3. **Obtenir vos clés**
   - Service ID
   - Template ID
   - Public Key

4. **Mettre à jour le code**
   - Voir l'exemple dans `src/pages/Contact.jsx` (à configurer)

---

## 💾 Option 3 : Stockage Local (Pour test uniquement)

Cette option stocke les messages dans le localStorage du navigateur. 
**⚠️ Attention : Les messages ne sont visibles que sur votre navigateur local.**

### Comment voir les messages :

1. Ouvrez la console du navigateur (F12)
2. Tapez : `localStorage.getItem('contact_messages')`
3. Les messages s'afficheront en format JSON

Ou utilisez la page de test `/contact-messages` (si configurée)

---

## 🚀 Option 4 : Backend personnalisé

Si vous avez un backend (Node.js, PHP, Python, etc.), vous pouvez :
1. Créer une route API pour recevoir les messages
2. Stocker dans une base de données (MongoDB, PostgreSQL, etc.)
3. Créer une page admin pour consulter les messages

---

## ⚙️ Configuration rapide avec Formspree

1. Créez votre compte : https://formspree.io/register
2. Créez un nouveau formulaire
3. Copiez votre Form ID
4. Modifiez `src/pages/Contact.jsx` ligne 26 :
   ```javascript
   const response = await fetch('https://formspree.io/f/VOTRE_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```
5. Décommentez le code dans `handleSubmit`
6. C'est tout ! 🎉

---

## 📝 Notes importantes

- **Formspree** est recommandé pour commencer rapidement
- Pour la production, vous pouvez migrer vers un backend personnalisé
- Les deux premières options (Formspree et EmailJS) sont gratuites et suffisantes pour un portfolio

