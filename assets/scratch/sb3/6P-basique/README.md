# Structure .sb3 - 6P Basique

## Contenu

Ce dossier contient la structure pour créer un fichier .sb3 pour la version basique (1 bug).

## Fichiers

- `project.json` : Structure de base du projet Scratch

## Bugs inclus

- **BUG 1** : L'addition soustrait au lieu d'additionner
  - Dans le script du bouton Égal, l'opération d'addition utilise `operator_subtract` au lieu de `operator_add`

## Création du .sb3

1. Créer une archive ZIP de ce dossier :
   ```bash
   zip -r calculatrice-erreurs.zip .
   ```

2. Renommer en .sb3 :
   ```bash
   mv calculatrice-erreurs.zip calculatrice-erreurs.sb3
   ```

3. Ouvrir dans Scratch

## Notes

⚠️ Le fichier `project.json` fourni est un **template de base**. Pour un projet complet :

1. Créer le projet dans Scratch selon les instructions dans `../../source/6P-basique.md`
2. Exporter en .sb3 depuis Scratch
3. OU compléter le template JSON manuellement

Le template fourni contient :
- Variables de base
- Structure de la scène
- Sprite Calculatrice avec script d'affichage
- Sprite Bouton Égal avec le bug d'addition

Pour un projet complet, ajouter :
- Tous les boutons numériques (0-9)
- Boutons opérateurs (+, -, ×, ÷)
- Bouton Clear
- Scripts complets selon `../../source/6P-basique.md`

