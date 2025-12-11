# Guide Complet pour les Projets Scratch

## Vue d'ensemble

Ce guide explique comment créer les projets Scratch pour chaque niveau. Les fichiers .sb3 ne sont pas inclus car ils nécessitent Scratch Desktop ou Scratch en ligne, mais ce guide fournit toutes les instructions nécessaires.

## Structure des projets

Chaque niveau a son propre dossier avec un fichier README.md contenant :
- Instructions détaillées pour créer le projet
- Liste des sprites et variables nécessaires
- Scripts complets avec les bugs à introduire
- Tests à effectuer
- Corrections à apporter

## Niveaux disponibles

### Suisse - PER

1. **6P - Version Basique** : 1 bug simple
   - Dossier : `suisse-per/cycle-2-5p-8p/6P/scratch-version-basique/`

2. **7P - Version Intermédiaire** : 5 bugs modérés
   - Dossier : `suisse-per/cycle-2-5p-8p/7P/scratch-version-intermediaire/`

3. **8P - Version Avancée** : 8 bugs complexes
   - Dossier : `suisse-per/cycle-2-5p-8p/8P/scratch-version-avancee/`

4. **9P - Version Expert** : 9 bugs subtils
   - Dossier : `suisse-per/cycle-3-9p-11p/9P/scratch-expert/`

### France - Eduscol

1. **CM1 - Version Basique** : 1 bug simple
   - Dossier : `france-eduscol/cycle-3-cm1-6e/cm1/scratch-basique/`

2. **CM2 - Version Intermédiaire** : 4 bugs modérés
   - Dossier : `france-eduscol/cycle-3-cm1-6e/cm2/scratch-intermediaire/`

3. **6e - Version Avancée** : 7 bugs complexes
   - Dossier : `france-eduscol/cycle-3-cm1-6e/6e/scratch-avance/`

## Comment utiliser ce guide

### Pour les enseignants

1. Choisir le niveau approprié
2. Ouvrir le README.md correspondant
3. Suivre les instructions pour créer le projet dans Scratch
4. Tester le projet avant de le donner aux élèves
5. Sauvegarder le projet en .sb3

### Pour les élèves

1. Recevoir le fichier .sb3 du projet avec bugs
2. Ouvrir dans Scratch
3. Tester la calculatrice
4. Identifier les bugs
5. Corriger les bugs
6. Valider avec les tests

## Création d'un projet Scratch

### Méthode 1 : Scratch en ligne

1. Aller sur https://scratch.mit.edu
2. Créer un nouveau projet
3. Suivre les instructions du README correspondant
4. Télécharger le projet (.sb3)

### Méthode 2 : Scratch Desktop

1. Installer Scratch Desktop
2. Créer un nouveau projet
3. Suivre les instructions du README correspondant
4. Sauvegarder le projet (.sb3)

## Structure commune d'un projet

### Sprites nécessaires

- **Calculatrice** : Sprite principal avec l'écran d'affichage
- **Boutons numériques** : 0-9 (peuvent être des clones)
- **Boutons opérateurs** : +, -, ×, ÷
- **Bouton égal** : =
- **Bouton Clear** : C

### Variables nécessaires

- `nombre1` : Premier nombre
- `nombre2` : Deuxième nombre
- `operateur` : Opérateur sélectionné
- `affichage` : Texte affiché
- `resultat` : Résultat du calcul
- (Variables supplémentaires selon le niveau)

### Scripts de base

1. **Boutons numériques** : Ajouter le chiffre à l'affichage
2. **Boutons opérateurs** : Stocker le premier nombre et l'opérateur
3. **Bouton égal** : Calculer le résultat (avec bugs)
4. **Bouton Clear** : Réinitialiser tout
5. **Affichage** : Afficher la variable `affichage`

## Types de bugs à introduire

### Bugs simples (niveaux débutants)

- Opération inversée (addition qui soustrait)
- Une seule opération buggée

### Bugs modérés (niveaux intermédiaires)

- Plusieurs opérations inversées
- Gestion incorrecte des décimaux
- Problèmes avec Clear

### Bugs complexes (niveaux avancés)

- Toutes les opérations buggées
- Gestion d'état incorrecte
- Pas de vérifications (division par zéro, etc.)
- Problèmes d'affichage

## Tests à effectuer

Pour chaque niveau, tester :
- Toutes les opérations de base (+, -, ×, ÷)
- Nombres décimaux
- Division par zéro
- Points décimaux multiples
- Fonction Clear
- Chaînes d'opérations

## Conseils pédagogiques

1. **Commencez simple** : Utilisez la version basique pour introduire le concept
2. **Progression** : Passez aux versions plus complexes progressivement
3. **Méthodologie** : Enseignez une méthode de débogage systématique
4. **Tests** : Insistez sur l'importance des tests
5. **Documentation** : Demandez aux élèves de documenter leurs corrections

## Ressources supplémentaires

- Documentation Scratch : https://scratch.mit.edu/info/faq
- Tutoriels Scratch : https://scratch.mit.edu/ideas
- Communauté Scratch : https://scratch.mit.edu/explore

## Notes importantes

- Les fichiers .sb3 doivent être créés dans Scratch (en ligne ou Desktop)
- Chaque niveau a ses propres instructions détaillées
- Les bugs sont intentionnels pour l'apprentissage
- Les corrections doivent être validées par des tests

