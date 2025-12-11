# Guide d'Installation - Calculatrice Cassée

## 📑 Table des Matières

- [Installation Ultra-Simple](#-installation-ultra-simple)
  - [Méthode 1 : Ouvrir directement (Recommandé)](#méthode-1--ouvrir-directement-recommandé)
  - [Méthode 2 : Serveur local (Optionnel)](#méthode-2--serveur-local-optionnel)
- [Modifier le code](#-modifier-le-code)
  - [Pour les élèves](#pour-les-élèves)
  - [Pour les enseignants](#pour-les-enseignants)
- [Structure minimale nécessaire](#-structure-minimale-nécessaire)
- [Vérification](#-vérification)
- [Dépannage](#-dépannage)
- [Conseils](#-conseils)
- [Objectif](#-objectif)

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
   - Double-cliquer sur `src/index.html` (version standard)
   - Double-cliquer sur `src/index-enfant.html` (version pour enfants)
   - Double-cliquer sur `src/enseignant-viewer.html` (outil enseignant)

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

1. **Ouvrir `src/js/calculator.js`** avec n'importe quel éditeur de texte :
   - Bloc-notes (Windows)
   - TextEdit (Mac)
   - Gedit (Linux)
   - Ou n'importe quel éditeur (VS Code, Sublime, etc.)

2. **Modifier le code** directement

3. **Sauvegarder** (Ctrl+S / Cmd+S)

4. **Recharger la page** dans le navigateur (F5)

**C'est tout !** Pas besoin de compiler, installer, ou autre.

### Pour les enseignants

- Utiliser `src/enseignant-viewer.html` pour visualiser le code
- Modifier `src/js/calculator.js` avec un éditeur de texte
- Recharger la page pour voir les changements

## 📁 Structure minimale nécessaire

Pour que ça fonctionne, vous avez besoin de ces fichiers dans le même dossier :

```
broken-calculator/
├── src/
│   ├── index.html              # Version standard
│   ├── index-enfant.html       # Version enfant
│   ├── enseignant-viewer.html  # Outil enseignant
│   ├── js/
│   │   ├── calculator.js       # Code de la calculatrice (À MODIFIER)
│   │   ├── tests.js            # Système de tests
│   │   ├── calculator-enfant.js # Logique version enfant
│   │   └── tests-enfant.js     # Tests version enfant
│   └── css/
│       ├── styles.css          # Styles de base
│       └── styles-enfant.css  # Styles version enfant
```

## ✅ Vérification

1. Ouvrez `src/index.html` dans votre navigateur
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

- Vérifiez que `src/css/styles.css` est dans le bon dossier
- Vérifiez que le chemin dans `<link>` est correct

### "Les tests ne fonctionnent pas"

- Vérifiez que `src/js/tests.js` est dans le bon dossier
- Ouvrez la console du navigateur (F12) pour voir les erreurs

## 💡 Conseils

- **Pour les élèves** : Commencez par la version enfant (`src/index-enfant.html`)
- **Pour modifier** : Utilisez un éditeur de texte simple, pas besoin d'IDE complexe
- **Pour partager** : Copiez tout le dossier, ça fonctionnera partout
- **Pas de dépendances** : Tout fonctionne avec juste un navigateur moderne

## 🎯 Objectif

**Zéro installation, zéro configuration, zéro dépendance.**

Juste :
1. Ouvrir les fichiers HTML dans `src/`
2. Modifier `src/js/calculator.js` si besoin
3. C'est tout !

