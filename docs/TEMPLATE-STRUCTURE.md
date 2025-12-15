# Template de Structure pour Nouvelles Versions Pédagogiques

Ce document sert de référence pour créer de nouvelles versions pédagogiques du projet "Calculatrice Cassée".

## Structure Standard (JS/Python)

Pour les versions JavaScript et Python, utiliser cette structure plate :

```
[niveau]/[techno]/
├── index.html          # Point d'entrée - Interface calculatrice
├── calculator.js       # Logique calculatrice (ou calculatrice.py pour Python)
├── tests.js            # Tests unitaires (ou tests.py pour Python)
├── styles.css          # Styles de l'interface
└── STRUCTURE.md        # Documentation de l'organisation (optionnel)
```

### Fichiers requis

#### `index.html`
- Point d'entrée principal
- Contient l'interface HTML de la calculatrice
- Doit référencer :
  - `<link rel="stylesheet" href="styles.css">`
  - `<script src="calculator.js"></script>`
  - `<script src="tests.js"></script>`
- Tous les chemins doivent être **relatifs** au dossier

#### `calculator.js` (ou `calculatrice.py`)
- Contient toute la logique de la calculatrice
- **Bugs intentionnels** à identifier et corriger
- Fonctions principales :
  - `appendNumber(number)` : Ajouter un chiffre
  - `appendOperator(op)` : Ajouter un opérateur
  - `calculate()` : Effectuer le calcul
  - `clearDisplay()` : Effacer l'affichage
- Pour Python : peut être `calculatrice.py` si logique pure Python

#### `tests.js` (ou `tests.py`)
- Suite de tests unitaires et fonctionnels
- Doit inclure :
  - Tests des opérations de base (+, -, ×, ÷)
  - Tests des cas limites (division par zéro, décimaux, etc.)
  - Fonction `runTests()` pour lancer tous les tests
  - Affichage des résultats dans l'interface

#### `styles.css`
- Styles de l'interface utilisateur
- Design cohérent avec le reste du projet
- Responsive pour différents écrans

## Structure Blockly (HTML Autonome)

Pour les versions Blockly, utiliser un **fichier HTML autonome** :

```
[niveau]/
├── blockly-[nom].html  # Fichier HTML autonome complet
└── STRUCTURE.md        # Documentation (optionnel)
```

### Fichier Blockly

#### `blockly-[nom].html`
- **Fichier HTML autonome** : Tout le code est dans un seul fichier
- Doit contenir :
  - Blockly via CDN : `<script src="https://unpkg.com/blockly/..."></script>`
  - CSS intégré dans `<style>` tags
  - JavaScript intégré dans `<script>` tags
  - Interface calculatrice complète
- **Avantages** :
  - Facile à distribuer (un seul fichier)
  - Pas de dépendances externes (sauf CDN Blockly)
  - Fonctionne directement en ouvrant le fichier

## Principes à respecter

### 1. Structure plate
- Tous les fichiers au même niveau (pas de sous-dossiers complexes)
- Facilite l'utilisation par les enseignants
- Permet de copier un dossier indépendamment

### 2. Chemins relatifs
- Tous les chemins doivent être **relatifs** au dossier
- Exemple : `href="styles.css"` (pas `href="../styles.css"`)
- Permet de déplacer/copier le dossier sans casser les liens

### 3. Noms de fichiers standardisés
- `index.html` : Point d'entrée (pas `calculator.html` ou autre)
- `calculator.js` : Logique calculatrice JS
- `calculatrice.py` : Logique calculatrice Python (si différent)
- `tests.js` : Tests unitaires JS
- `tests.py` : Tests unitaires Python (si différent)
- `styles.css` : Styles

### 4. Autonomie
- Chaque dossier doit pouvoir être copié indépendamment
- Tous les fichiers nécessaires doivent être dans le dossier
- Pas de dépendances vers d'autres dossiers du projet

### 5. Documentation
- Créer un `STRUCTURE.md` dans chaque dossier techno
- Expliquer l'organisation des fichiers
- Donner des instructions d'utilisation

## Exemples

### Exemple JS Basique
```
5e/js-basique/
├── index.html
├── calculator.js
├── tests.js
├── styles.css
└── STRUCTURE.md
```

### Exemple Python
```
11P/python/
├── index.html
├── calculator.js
├── calculatrice.py
├── tests.js
├── styles.css
└── STRUCTURE.md
```

### Exemple Blockly
```
3P/
├── blockly-calculator.html
└── STRUCTURE.md
```

## Checklist pour nouvelle version

- [ ] Créer le dossier `[niveau]/[techno]/`
- [ ] Créer `index.html` avec chemins relatifs corrects
- [ ] Créer `calculator.js` (ou `calculatrice.py`) avec bugs intentionnels
- [ ] Créer `tests.js` avec suite de tests complète
- [ ] Créer `styles.css` avec design cohérent
- [ ] Vérifier que tous les chemins sont relatifs
- [ ] Tester que le dossier fonctionne indépendamment
- [ ] Créer `STRUCTURE.md` pour documentation
- [ ] Mettre à jour `prompts/inventaire_versions_pedagogiques.md`

## Références

- Structure modulaire : `src/blockly/STRUCTURE.md`
- Inventaire complet : `prompts/inventaire_versions_pedagogiques.md`
- Exemples existants : Voir les dossiers dans `france-eduscol/` et `suisse-per/`

