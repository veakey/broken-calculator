# 📁 Structure du Projet

Ce document décrit l'organisation des fichiers du projet.

## 🗂️ Organisation Générale

```
broken-calculator/
├── src/                     # Fichiers sources principaux
│   ├── *.html              # Fichiers HTML principaux
│   ├── js/                 # Fichiers JavaScript
│   └── css/                # Fichiers CSS
├── docs/                    # Documentation
├── suisse-per/              # Versions PER (Suisse)
├── france-eduscol/          # Versions Eduscol (France)
├── assets/                  # Assets (Scratch, etc.)
└── README.md                # Documentation principale
```

## 📂 Détails des Dossiers

### `src/` - Fichiers Sources Principaux

Contient tous les fichiers HTML, JavaScript et CSS des versions principales du projet.

#### Fichiers HTML
- `index.html` - Version standard (CM2/6P+)
- `index-enfant.html` - Version enfant (CP-CE2/3P-5P)
- `enseignant-viewer.html` - Outil enseignant
- `bug-creator.html` - Créateur de bugs personnalisés
- `blockly-calculator.html` - Version Blockly prototype
- `blockly-calculator-interactive.html` - Version Blockly interactive

#### `src/js/` - Fichiers JavaScript
- `calculator.js` - Code de la calculatrice (avec bugs)
- `calculator-corrected.js` - Version corrigée
- `calculator-enfant.js` - Logique version enfant
- `tests.js` - Système de tests
- `tests-enfant.js` - Tests version enfant
- `keyboard-support.js` - Support clavier
- `display-feedback.js` - Animations de feedback
- `hints-system.js` - Système d'indices progressifs
- `calculation-history.js` - Historique des calculs
- `error-statistics.js` - Statistiques des erreurs
- `accessibility-controls.js` - Contrôles d'accessibilité
- `bug-creator.js` - Logique du créateur de bugs
- `enseignant-viewer.js` - Logique outil enseignant

#### `src/css/` - Fichiers CSS
- `styles.css` - Style glassmorphism principal
- `styles-enfant.css` - Styles version enfant

### `docs/` - Documentation

Tous les fichiers de documentation Markdown :
- `INSTALLATION.md` - Guide d'installation
- `GUIDE-CREATEUR-BUGS.md` - Guide du créateur de bugs
- `GUIDE-VERSIONS.md` - Guide pour choisir la version
- `BLOCKLY-VERSIONS-README.md` - Documentation des versions Blockly
- `REFERENTIELS-SYNTHESE.md` - Synthèse des référentiels PER et Eduscol
- `APPROCHE-DIFFERENCIEE.md` - Guide de l'approche différenciée
- `TEST-INTERFACE.md` - Documentation des tests
- `SCRATCH_GUIDE.md` - Guide Scratch
- `STRUCTURE.md` - Ce fichier

### `suisse-per/` - Versions PER (Suisse)

Versions adaptées au Plan d'Études Romand, organisées par cycles :
- `cycle-1-1p-4p/` - Cycle 1 (1P-4P)
- `cycle-2-5p-8p/` - Cycle 2 (5P-8P)
- `cycle-3-9p-11p/` - Cycle 3 (9P-11P)

### `france-eduscol/` - Versions Eduscol (France)

Versions adaptées aux programmes Eduscol, organisées par cycles :
- `cycle-1-maternelle/` - Cycle 1 (Maternelle)
- `cycle-2-cp-ce2/` - Cycle 2 (CP-CE2)
- `cycle-3-cm1-6e/` - Cycle 3 (CM1-6e)
- `cycle-4-5e-3e/` - Cycle 4 (5e-3e)
- `lycee/` - Lycée

### `assets/` - Assets

Ressources du projet :
- `scratch/` - Fichiers et guides Scratch

## 🔗 Chemins Relatifs

Tous les fichiers HTML dans `src/` utilisent des chemins relatifs :
- `css/styles.css` pour les styles
- `js/calculator.js` pour les scripts JavaScript

Les fichiers dans les sous-dossiers (suisse-per, france-eduscol) utilisent leurs propres chemins relatifs.

## 📝 Notes

- Le fichier `README.md` reste à la racine (convention)
- Les fichiers de configuration (`.gitignore`, etc.) restent à la racine
- Chaque version dans `suisse-per/` et `france-eduscol/` peut avoir sa propre structure
