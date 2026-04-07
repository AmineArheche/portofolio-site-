# 📸 Instructions pour ajouter votre photo au CV

## ⚠️ Problème actuel
La photo de profil n'apparaît pas car le fichier n'existe pas encore dans le dossier `public/assets/`.

## ✅ Solution : Ajouter votre photo

### Étape 1 : Préparer votre photo
1. **Format** : JPG ou PNG
2. **Taille recommandée** : 400x400 pixels minimum (format carré)
3. **Qualité** : Photo professionnelle avec fond uni (noir, blanc ou gris)

### Étape 2 : Renommer votre photo
Renommez votre fichier photo en :
- `profile-photo.jpg` OU
- `profile-photo.png`

### Étape 3 : Placer la photo dans le bon dossier
Copiez votre photo dans le dossier :
```
portfolio-app/public/assets/profile-photo.jpg
```

**OU si vous utilisez PNG** :
```
portfolio-app/public/assets/profile-photo.png
```

### Étape 4 : Vérifier
1. Redémarrez le serveur de développement (`npm run dev`)
2. Allez sur `http://localhost:3000/cv`
3. La photo devrait maintenant apparaître en haut à gauche du CV
4. Testez le téléchargement du PDF pour vérifier que la photo est incluse

## 📋 Structure des dossiers attendue

```
portfolio-app/
├── public/
│   └── assets/
│       ├── profile-photo.jpg  ← VOTRE PHOTO ICI
│       └── projects/
│           └── ...
```

## 🔧 Si la photo ne s'affiche toujours pas

1. **Vérifiez le chemin** : Le fichier doit être exactement dans `public/assets/`
2. **Vérifiez le nom** : `profile-photo.jpg` (sans espace, avec tiret)
3. **Videz le cache** : Ctrl+F5 dans le navigateur
4. **Redémarrez le serveur** : Arrêtez (Ctrl+C) et relancez `npm run dev`

## 📝 Notes importantes

- Le code cherche d'abord `.jpg`, puis `.png` si le JPG n'existe pas
- La photo doit être accessible via `/assets/profile-photo.jpg` (chemin public)
- Si aucune photo n'est trouvée, un placeholder sera affiché
- La photo sera automatiquement convertie en Base64 pour le PDF

