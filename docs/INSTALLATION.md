# Guide d'Installation - Calculatrice Cassée

## 🚀 Installation Ultra-Simple

**Aucun serveur, npm, git ou installation nécessaire !**

### Méthode 1 : Ouvrir directement (Recommandé)

1. **Télécharger ou cloner le projet**
   ```bash
   # Optionnel : Si vous avez git
   git clone <url-du-projet>
   
   # Ou simplement télécharger le ZIP et extraire
   ```

2. **Ouvrir les fichiers HTML directement**
   - Double-cliquer sur `index.html` (version standard)
   - Double-cliquer sur `index-enfant.html` (version pour enfants)
   - Double-cliquer sur `enseignant-viewer.html` (outil enseignant)

3. **C'est tout !** Les fichiers s'ouvrent dans votre navigateur.

### Méthode 2 : Serveur local (Optionnel)

**Uniquement si vous avez des problèmes avec `file://`** (rare) :

```bash
# Python 3 (généralement déjà installé)
python3 -m http.server 8000

# Puis ouvrir http://localhost:8000
```

**Mais ce n'est généralement PAS nécessaire !**

## 📝 Modifier le code

### Pour les élèves

1. **Ouvrir `calculator.js`** avec n'importe quel éditeur de texte :
   - Bloc-notes (Windows)
   - TextEdit (Mac)
   - Gedit (Linux)
   - Ou n'importe quel éditeur (VS Code, Sublime, etc.)

2. **Modifier le code** directement

3. **Sauvegarder** (Ctrl+S / Cmd+S)

4. **Recharger la page** dans le navigateur (F5)

**C'est tout !** Pas besoin de compiler, installer, ou autre.

### Pour les enseignants

- Utiliser `enseignant-viewer.html` pour visualiser le code
- Modifier `calculator.js` avec un éditeur de texte
- Recharger la page pour voir les changements

## 📁 Structure minimale nécessaire

Pour que ça fonctionne, vous avez besoin de ces fichiers dans le même dossier :

```
broken-calculator/
├── index.html              # Version standard
├── index-enfant.html       # Version enfant
├── enseignant-viewer.html  # Outil enseignant
├── calculator.js           # Code de la calculatrice (À MODIFIER)
├── tests.js               # Système de tests
├── styles.css             # Styles de base
├── styles-enfant.css      # Styles version enfant
├── calculator-enfant.js    # Logique version enfant
└── tests-enfant.js        # Tests version enfant
```

## ✅ Vérification

1. Ouvrez `index.html` dans votre navigateur
2. La calculatrice doit s'afficher
3. Cliquez sur quelques boutons
4. Cliquez sur "Lancer les Tests"
5. Si tout fonctionne, c'est bon !

## 🐛 Dépannage

### "Les fichiers ne se chargent pas"

- Vérifiez que tous les fichiers sont dans le même dossier
- Vérifiez les noms des fichiers (respectez la casse)
- Essayez un autre navigateur (Chrome, Firefox, Edge)

### "Les styles ne s'appliquent pas"

- Vérifiez que `styles.css` est dans le même dossier
- Vérifiez que le chemin dans `<link>` est correct

### "Les tests ne fonctionnent pas"

- Vérifiez que `tests.js` est dans le même dossier
- Ouvrez la console du navigateur (F12) pour voir les erreurs

## 💡 Conseils

- **Pour les élèves** : Commencez par la version enfant (`index-enfant.html`)
- **Pour modifier** : Utilisez un éditeur de texte simple, pas besoin d'IDE complexe
- **Pour partager** : Copiez tout le dossier, ça fonctionnera partout
- **Pas de dépendances** : Tout fonctionne avec juste un navigateur moderne

## 🎯 Objectif

**Zéro installation, zéro configuration, zéro dépendance.**

Juste :
1. Ouvrir les fichiers HTML
2. Modifier `calculator.js` si besoin
3. C'est tout !

