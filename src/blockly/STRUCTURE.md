# Structure du Projet

## 📁 Organisation des fichiers

```
/
├── pages/                    # Toutes les pages HTML
│   ├── index.html            # Page principale (éditeur Blockly) ✅
│   ├── runtime.html          # Version runtime (tous boutons actifs) ✅
│   ├── runtime-off.html      # Version runtime (boutons désactivés) ✅
│   ├── interactive.html      # Version interactive ✅
│   └── calculator.html        # Version calculatrice simple ✅
│
├── src/
│   ├── js/
│   │   ├── core/             # Modules core réutilisables
│   │   │   ├── calculator.js  # Logique calculatrice
│   │   │   ├── keyboard.js   # Gestion clavier
│   │   │   └── tabs.js       # Système d'onglets
│   │   ├── runtime/           # Code spécifique runtime
│   │   │   └── runtime.js     # Gestion Blockly runtime
│   │   └── utils/             # Utilitaires
│   │       └── utils.js       # Helpers (replaceVarWithLet, etc.)
│   │
│   ├── css/
│   │   ├── base.css          # Styles de base (layout, panels)
│   │   ├── calculator.css    # Styles calculatrice
│   │   └── tabs.css          # Styles onglets
│   │
│   ├── blockly/              # Assets Blockly
│   │   ├── *.js
│   │   └── media/
│   │
│   └── styles.css            # Styles globaux
│
├── docs/                     # Documentation
│   └── RUNTIME-FUNCTIONS.md
│
├── tests/                    # Tests
│   ├── e2e/
│   └── unit/
│
└── [config files]            # package.json, playwright.config.js, etc.
```

## 🎯 Principes d'organisation

### Pages (`pages/`)
- Toutes les pages HTML du projet
- Chaque page correspond à une fonctionnalité/variante
- Références relatives vers `../src/`

### JavaScript (`src/js/`)
- **`core/`** : Modules réutilisables entre toutes les pages
  - `calculator.js` : Logique de calculatrice (état, opérations)
  - `keyboard.js` : Gestion des événements clavier
  - `tabs.js` : Système d'onglets générique
- **`runtime/`** : Code spécifique au mode runtime
  - `runtime.js` : Gestion Blockly, détection fonctions, etc.
- **`utils/`** : Fonctions utilitaires
  - `utils.js` : Helpers (replaceVarWithLet, etc.)

### CSS (`src/css/`)
- **`base.css`** : Layout général, panels, structure
- **`calculator.css`** : Styles spécifiques calculatrice
- **`tabs.css`** : Styles onglets

### Blockly (`src/blockly/`)
- Assets Blockly (librairie + media)
- Ne pas modifier, juste référencer

### Documentation (`docs/`)
- Toute la documentation du projet
- Guides, explications, etc.

## ✅ État actuel

Toutes les pages HTML sont maintenant dans `pages/` :
- ✅ `pages/index.html` - Page principale (éditeur Blockly)
- ✅ `pages/runtime.html` - Version runtime (tous boutons actifs)
- ✅ `pages/runtime-off.html` - Version runtime (boutons désactivés)
- ✅ `pages/interactive.html` - Version interactive
- ✅ `pages/calculator.html` - Version calculatrice simple

Tous les chemins ont été mis à jour pour pointer vers `../src/`.

2. **JavaScript → `src/js/`**
   - Extraire de `blockly-calculator-runtime.html` :
     - Logique calculatrice → `src/js/core/calculator.js`
     - Gestion clavier → `src/js/core/keyboard.js`
     - Système onglets → `src/js/core/tabs.js`
     - Runtime Blockly → `src/js/runtime/runtime.js`
     - Utilitaires → `src/js/utils/utils.js`

3. **CSS → `src/css/`**
   - Extraire les styles de `blockly-calculator-runtime.html` :
     - Styles base → `src/css/base.css` ✅ (déjà fait)
     - Styles calculatrice → `src/css/calculator.css` ✅ (déjà fait)
     - Styles onglets → `src/css/tabs.css` ✅ (déjà fait)

## 📝 Ordre de chargement dans les pages

```html
<!-- 1. Blockly (dépendances) -->
<script src="../src/blockly/blockly_compressed.js"></script>
<!-- ... -->

<!-- 2. Styles globaux -->
<link rel="stylesheet" href="../src/styles.css">

<!-- 3. Styles modulaires -->
<link rel="stylesheet" href="../src/css/base.css">
<link rel="stylesheet" href="../src/css/calculator.css">
<link rel="stylesheet" href="../src/css/tabs.css">

<!-- 4. JavaScript (ordre important) -->
<script src="../src/js/utils/utils.js"></script>
<script src="../src/js/core/tabs.js"></script>
<script src="../src/js/core/calculator.js"></script>
<script src="../src/js/core/keyboard.js"></script>
<script src="../src/js/runtime/runtime.js"></script>
```

## ✅ Avantages de cette structure

1. **Séparation claire** : Pages, code, styles, docs
2. **Réutilisabilité** : Modules core utilisables partout
3. **Maintenabilité** : Facile de trouver et modifier
4. **Scalabilité** : Facile d'ajouter de nouvelles pages/fonctionnalités
5. **Tests** : Structure claire pour les tests

