# Structure - Blockly Avancé (3e)

## Organisation des fichiers

Cette version utilise un **fichier HTML autonome** avec Blockly intégré :

```
3e/
├── blockly-avance.html  # Fichier HTML autonome complet
└── [autres fichiers]    # Autres versions (js-avance/, etc.)
```

## Description du fichier

### `blockly-avance.html`
- **Fichier HTML autonome** : Tout le code est dans un seul fichier
- Contient :
  - Blockly via CDN (`https://unpkg.com/blockly/...`)
  - CSS intégré dans `<style>` tags
  - JavaScript intégré dans `<script>` tags
  - Interface calculatrice complète
- **Avantages** :
  - Facile à distribuer (un seul fichier)
  - Pas de dépendances externes (sauf CDN Blockly)
  - Fonctionne directement en ouvrant le fichier

## Utilisation

1. Ouvrir `blockly-avance.html` directement dans un navigateur
2. Utiliser les blocs Blockly pour créer la fonction de calcul
3. Tester la calculatrice avec les blocs créés
4. Identifier et corriger les bugs dans les blocs

## Principes

- **Autonome** : Un seul fichier HTML contient tout
- **Blockly intégré** : Utilise Blockly via CDN
- **Pas de structure modulaire** : Tout est dans le HTML pour simplicité
- **Documentation** : Ce fichier explique l'organisation

## Note

Cette version est différente de `src/blockly/` qui utilise une structure modulaire.
Cette version est conçue pour être **autonome et facile à distribuer** aux enseignants.

