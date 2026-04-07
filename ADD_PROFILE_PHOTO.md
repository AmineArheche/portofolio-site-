# 📸 Ajouter votre photo au CV

Pour que votre photo apparaisse dans le CV téléchargé, suivez ces étapes :

## 📋 Étape 1 : Préparer votre photo

1. **Format recommandé** : JPG ou PNG
2. **Taille recommandée** : 400x400 pixels minimum (format carré)
3. **Qualité** : Photo professionnelle, fond neutre ou uni de préférence
4. **Nom du fichier** : `profile-photo.jpg` ou `profile-photo.png`

## 📁 Étape 2 : Placer la photo

Placez votre photo dans le dossier :
```
public/assets/profile-photo.jpg
```

Ou si vous utilisez PNG :
```
public/assets/profile-photo.png
```

**Note** : Le code cherche automatiquement `.jpg` en premier, puis `.png`

## ✅ Option A : PDF Statique

Si vous créez votre CV manuellement (Word, Google Docs, etc.) :

1. Incluez votre photo en haut du CV
2. Exportez en PDF
3. Placez le fichier dans `public/CV.pdf`

## ✅ Option B : Génération Dynamique (jsPDF)

Si vous utilisez la génération automatique avec jsPDF :

1. Placez votre photo dans `public/assets/profile-photo.jpg`
2. La photo sera automatiquement incluse dans le PDF généré
3. Le code détectera et inclura l'image dans le CV HTML avant conversion

## 🎨 Format de photo recommandé pour CV

- **Fond** : Blanc, gris clair ou couleur professionnelle
- **Style** : Photo professionnelle (passeport/portrait)
- **Taille** : Environ 2-3 cm de hauteur dans le PDF
- **Position** : En haut à gauche ou centrée sous le nom

## 🔧 Si la photo ne s'affiche pas

1. Vérifiez que le fichier existe bien dans `public/assets/`
2. Vérifiez le nom exact : `profile-photo.jpg` ou `profile-photo.png`
3. Vérifiez la casse (minuscules recommandées)
4. Videz le cache du navigateur (Ctrl+F5)

## 📝 Note

Le code inclut une gestion d'erreur : si la photo n'est pas trouvée, elle sera simplement masquée et le reste du CV fonctionnera normalement.

