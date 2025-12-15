# Structure - Blockly Calculator (3P)

## Organisation des fichiers

Cette version utilise un **fichier HTML autonome** avec Blockly intégré :

```
3P/
├── blockly-calculator.html  # Fichier HTML autonome complet
└── [autres fichiers]       # Autres ressources (pré-algorithmique.md, etc.)
```

## Description du fichier

### `blockly-calculator.html`
- **Fichier HTML autonome** : Tout le code est dans un seul fichier
- Contient :
  - Blockly via CDN (`https://unpkg.com/blockly/...`)
  - CSS intégré dans `<style>` tags
  - JavaScript intégré dans `<script>` tags
  - Interface calculatrice complète
- **Niveau 3P** : Algorithmes simples avec bugs intentionnels
- **Avantages** :
  - Facile à distribuer (un seul fichier)
  - Pas de dépendances externes (sauf CDN Blockly)
  - Fonctionne directement en ouvrant le fichier

## Utilisation

1. Ouvrir `blockly-calculator.html` directement dans un navigateur
2. Utiliser les blocs Blockly pour créer la fonction de calcul
3. Tester la calculatrice avec les blocs créés
4. Identifier et corriger les bugs dans les blocs

## Principes

- **Autonome** : Un seul fichier HTML contient tout
- **Blockly intégré** : Utilise Blockly via CDN
- **Pas de structure modulaire** : Tout est dans le HTML pour simplicité
- **Documentation** : Ce fichier explique l'organisation
- **Niveau débutant** : Adapté au cycle 1 (3P)

## Note

Cette version est différente de `src/blockly/` qui utilise une structure modulaire.
Cette version est conçue pour être **autonome et facile à distribuer** aux enseignants.

