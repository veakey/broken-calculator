# Structure - Blockly Avancé (3e)

## Organisation des fichiers

Cette version utilise une **structure modulaire** inspirée de `src/blockly/` :

```
blockly-avance/
├── index.html              # Point d'entrée - Interface Blockly
├── src/
│   ├── css/
│   │   ├── base.css        # Styles de base (layout, panels)
│   │   └── calculator.css  # Styles spécifiques calculatrice
│   └── js/
│       ├── blocks.js       # Définition des blocs Blockly
│       ├── generators.js   # Générateurs JavaScript pour les blocs
│       ├── calculator.js   # Logique de la calculatrice
│       └── runtime.js       # Gestion du runtime Blockly
└── STRUCTURE.md            # Ce fichier
```

## Description des fichiers

### `index.html`
- Point d'entrée principal
- Contient l'interface HTML (Blockly + Calculatrice)
- Référence les fichiers CSS et JS modulaires via chemins relatifs
- Contient la toolbox XML pour Blockly

### `src/css/base.css`
- Styles de base : layout, panels, header, structure générale
- Styles pour Blockly (blocklyDiv)
- Styles pour les badges, status, code-preview, etc.

### `src/css/calculator.css`
- Styles spécifiques à la calculatrice
- Styles des boutons (number, operator, equals, clear)
- Styles de l'affichage (display)

### `src/js/blocks.js`
- Définition de tous les blocs Blockly (bugs et corrects)
- Blocs : calculator_add_bug, calculator_subtract_bug, etc.
- Blocs corrects : calculator_add_correct, etc.

### `src/js/generators.js`
- Générateurs JavaScript pour chaque bloc
- Convertit les blocs Blockly en code JavaScript
- Surcharge variables_set pour utiliser 'let'

### `src/js/calculator.js`
- Logique de la calculatrice
- Fonctions : appendNumber, appendOperator, calculate, clearDisplay
- Utilise calculateFunction (défini dans runtime.js) si disponible

### `src/js/runtime.js`
- Gestion du runtime Blockly
- Initialise le workspace Blockly
- Détecte et connecte la fonction "calculer" créée avec les blocs
- Gère l'aperçu du code JavaScript généré

## Utilisation

1. Ouvrir `index.html` dans un navigateur
2. Utiliser les blocs Blockly pour créer la fonction "calculer"
3. Tester la calculatrice - elle utilisera le code généré par les blocs
4. Cliquer sur "Afficher le code JavaScript" pour voir le code généré

## Principes

- **Structure modulaire** : Séparation claire CSS/JS
- **Autonome** : Chaque dossier peut être copié indépendamment
- **Chemins relatifs** : Tous les chemins sont relatifs au dossier
- **Documentation** : Ce fichier explique l'organisation
- **Inspiré de src/blockly/** : Même structure que la version de référence

## Différences avec src/blockly/

- Utilise Blockly via CDN (pas de copie locale)
- Structure simplifiée (pas de sous-dossiers core/runtime/utils)
- Adapté pour être autonome et facilement distribué

