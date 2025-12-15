# Structure - JS Avancé (3e)

## Organisation des fichiers

Cette version suit une **structure plate** pour faciliter l'utilisation par les enseignants :

```
js-avance/
├── index.html          # Point d'entrée - Interface calculatrice
├── calculator.js       # Logique calculatrice avec bugs intentionnels
├── tests.js            # Tests unitaires pour valider les corrections
└── styles.css          # Styles de l'interface
```

## Description des fichiers

### `index.html`
- Point d'entrée principal
- Contient l'interface HTML de la calculatrice
- Référence les fichiers CSS et JS via chemins relatifs
- Inclut les fonctions avancées (sin, cos, tan, hyp, %)

### `calculator.js`
- Contient toute la logique de la calculatrice
- **Bugs intentionnels** à identifier et corriger
- Fonctions : appendNumber, appendOperator, calculate, calculateAdvanced, etc.
- Niveau avancé : 6+ bugs à corriger

### `tests.js`
- Suite de tests unitaires et fonctionnels
- Valide les opérations de base (+, -, ×, ÷)
- Valide les fonctions avancées (sin, cos, tan, hyp, %)
- Affiche les résultats dans l'interface

### `styles.css`
- Styles de l'interface utilisateur
- Design moderne avec glassmorphism
- Responsive pour différents écrans

## Utilisation

1. Ouvrir `index.html` dans un navigateur
2. Utiliser la calculatrice pour identifier les bugs
3. Modifier `calculator.js` pour corriger les erreurs
4. Lancer les tests via le bouton "Lancer les Tests"
5. Vérifier que tous les tests passent (✅)

## Principes

- **Structure plate** : Tous les fichiers au même niveau pour simplicité
- **Autonome** : Chaque dossier peut être copié indépendamment
- **Chemins relatifs** : Tous les chemins sont relatifs au dossier
- **Documentation** : Ce fichier explique l'organisation

