# Résumé - Calculatrice avec Tests Unitaires

## Ce qui a été créé

Cette version améliore la calculatrice originale en ajoutant un **système complet de tests unitaires intégré dans Scratch**.

## Fichiers créés

### Documentation
- **README.md** : Vue d'ensemble du projet
- **INSTRUCTIONS.md** : Guide complet pas à pas
- **tests-scratch.md** : Scripts détaillés des tests
- **bugs-detaille.md** : Description des 12 bugs à introduire (7 de base + 5 fonctions avancées)
- **corrections.md** : Solutions complètes pour chaque bug

### Code
- **project.json** : Copie du projet original (à modifier)

## Fonctionnalités ajoutées

### 1. Système de tests unitaires
- 12 tests automatiques (7 de base + 5 fonctions avancées)
- Vérification des opérations de base
- Vérification des fonctions mathématiques avancées (sin, cos, tan, hyp, %)
- Gestion des cas limites
- Affichage des résultats

### 2. Bugs intentionnels
- 12 bugs différents à corriger (7 de base + 5 fonctions avancées)
- De la simple erreur d'opération aux bugs complexes
- Bugs dans les fonctions trigonométriques et mathématiques avancées
- Tests qui échouent pour chaque bug

### 3. Validation automatique
- Score en temps réel
- Feedback immédiat
- Message de réussite quand tout est corrigé

## Tests inclus

### Tests de base (1-7)
1. ✅ **testAddition** : 5 + 3 = 8
2. ✅ **testSoustraction** : 10 - 4 = 6
3. ✅ **testMultiplication** : 6 × 7 = 42
4. ✅ **testDivision** : 20 ÷ 4 = 5
5. ✅ **testDecimal** : 3.5 + 2.5 = 6
6. ✅ **testDivisionParZero** : 10 ÷ 0 = Erreur
7. ✅ **testClear** : Vérification de la réinitialisation

### Tests fonctions avancées (8-12) - Pour niveaux avancés
8. ✅ **testPourcentage** : 50 % de 20 = 10
9. ✅ **testSin** : sin(30°) ≈ 0.5
10. ✅ **testCos** : cos(60°) = 0.5
11. ✅ **testTan** : tan(45°) = 1
12. ✅ **testHyp** : hyp(3, 4) = 5

## Bugs à introduire

### Bugs de base (1-7)
1. Addition soustrait
2. Soustraction additionne
3. Multiplication divise
4. Division multiplie
5. Clear incomplet
6. Points décimaux multiples
7. Division par zéro non gérée

### Bugs fonctions avancées (8-12) - Pour niveaux avancés
8. Pourcentage multiplie au lieu de calculer le pourcentage
9. Sinus utilise cos au lieu de sin
10. Cosinus utilise tan au lieu de cos
11. Tangente utilise sin au lieu de tan
12. Hypoténuse additionne au lieu de calculer l'hypoténuse

## Utilisation rapide

### Pour créer le projet
1. Ouvrir `project.json` dans Scratch
2. Suivre `INSTRUCTIONS.md`
3. Introduire les bugs (voir `bugs-detaille.md`)
4. Créer le sprite Testeur (voir `tests-scratch.md`)

### Pour utiliser avec les élèves
1. Distribuer le projet avec bugs
2. Les élèves lancent les tests
3. Ils identifient les bugs grâce aux tests
4. Ils corrigent un par un
5. Ils relancent les tests pour valider

## Avantages pédagogiques

- ✅ Introduction aux tests unitaires
- ✅ Débogage méthodique
- ✅ Validation automatique
- ✅ Feedback immédiat
- ✅ Approche scientifique

## Prochaines étapes

1. **Adapter les scripts** selon votre structure de calculatrice
2. **Tester le système** avec quelques bugs
3. **Ajuster** si nécessaire
4. **Utiliser** avec vos élèves

## Support

- Voir `INSTRUCTIONS.md` pour le guide complet
- Voir `tests-scratch.md` pour les scripts détaillés
- Voir `bugs-detaille.md` pour les modifications à faire
- Voir `corrections.md` pour les solutions

