# Structure - Python (11P)

## Organisation des fichiers

Cette version suit une **structure plate** pour faciliter l'utilisation par les enseignants :

```
python/
├── index.html          # Point d'entrée - Interface calculatrice (JavaScript)
├── calculator.js       # Interface JavaScript qui appelle Python
├── calculatrice.py     # Logique calculatrice Python avec bugs intentionnels
├── tests.js            # Tests unitaires pour valider les corrections
└── styles.css          # Styles de l'interface
```

## Description des fichiers

### `index.html`
- Point d'entrée principal
- Contient l'interface HTML de la calculatrice
- Référence les fichiers CSS et JS via chemins relatifs
- Interface en JavaScript, logique en Python

### `calculator.js`
- Interface JavaScript de la calculatrice
- Gère l'affichage et les interactions utilisateur
- Appelle les fonctions Python via Pyodide ou similaire
- Transmet les opérations à `calculatrice.py`

### `calculatrice.py`
- Contient toute la logique de la calculatrice en Python
- **Bugs intentionnels** à identifier et corriger
- Fonctions : addition, soustraction, multiplication, division
- Niveau 11P : bugs avancés à corriger

### `tests.js`
- Suite de tests unitaires et fonctionnels
- Valide les opérations de base (+, -, ×, ÷)
- Teste les fonctions Python via l'interface JavaScript
- Affiche les résultats dans l'interface

### `styles.css`
- Styles de l'interface utilisateur
- Design moderne avec glassmorphism
- Responsive pour différents écrans

## Utilisation

1. Ouvrir `index.html` dans un navigateur
2. S'assurer que Pyodide (ou autre runtime Python) est chargé
3. Utiliser la calculatrice pour identifier les bugs
4. Modifier `calculatrice.py` pour corriger les erreurs
5. Lancer les tests via le bouton "Lancer les Tests"
6. Vérifier que tous les tests passent (✅)

## Principes

- **Structure plate** : Tous les fichiers au même niveau pour simplicité
- **Autonome** : Chaque dossier peut être copié indépendamment
- **Chemins relatifs** : Tous les chemins sont relatifs au dossier
- **Documentation** : Ce fichier explique l'organisation
- **Hybride** : Interface JS + Logique Python

