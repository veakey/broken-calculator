# Calculatrice avec Tests Unitaires - Version Complexe

## Description

Cette version améliore la calculatrice originale en ajoutant :
1. **Bugs intentionnels** dans les opérations de la calculatrice
2. **Système de tests unitaires intégré** dans Scratch
3. **Sprite Testeur** qui exécute automatiquement les tests
4. **Affichage des résultats** avec score et détails

## 🎯 Version avec Tests dans l'UI

Un fichier `project-avec-tests-ui.json` (279KB) a été généré automatiquement depuis le project.json original. Ce fichier contient :

- ✅ Variables de test ajoutées au Stage
- ✅ Sprite Testeur créé avec scripts de base
- ✅ Un bug introduit (Addition → Soustraction)
- ✅ Structure prête pour compléter

**Pour l'utiliser :**
1. Renommer en `.sb3` : `mv project-avec-tests-ui.json project-avec-tests-ui.sb3`
2. Ouvrir dans Scratch
3. Compléter les scripts selon votre structure (voir GUIDE-FINAL.md)
4. Ajouter les bugs manquants (voir bugs-detaille.md)

Voir `GUIDE-FINAL.md` pour les instructions complètes.

## Bugs à introduire

### Bugs de base (1-7)
1. **Addition** : Soustrait au lieu d'additionner
2. **Soustraction** : Additionne au lieu de soustraire
3. **Multiplication** : Divise au lieu de multiplier
4. **Division** : Multiplie au lieu de diviser
5. **Clear** : Ne réinitialise pas correctement
6. **Décimales** : Permet plusieurs points décimaux
7. **Division par zéro** : Ne gère pas l'erreur

### Bugs fonctions avancées (8-12) - Pour niveaux avancés
8. **Pourcentage** : Multiplie au lieu de calculer le pourcentage
9. **Sinus** : Utilise cos au lieu de sin
10. **Cosinus** : Utilise tan au lieu de cos
11. **Tangente** : Utilise sin au lieu de tan
12. **Hypoténuse** : Additionne au lieu de calculer l'hypoténuse

## Système de tests

### Variables de test à créer

- `test.nombreTests` : Nombre total de tests
- `test.nombreReussis` : Nombre de tests réussis
- `test.resultatActuel` : Résultat du test en cours
- `test.resultatAttendu` : Résultat attendu
- `test.nomTest` : Nom du test en cours

### Sprite Testeur

Le sprite "Testeur" contient :
- Scripts pour exécuter chaque test
- Vérification des résultats
- Affichage des résultats
- Calcul du score

### Tests inclus

#### Tests de base (1-7)
1. **testAddition** : 5 + 3 = 8
2. **testSoustraction** : 10 - 4 = 6
3. **testMultiplication** : 6 × 7 = 42
4. **testDivision** : 20 ÷ 4 = 5
5. **testDecimal** : 3.5 + 2.5 = 6
6. **testDivisionParZero** : 10 ÷ 0 = Erreur
7. **testClear** : Vérifie la réinitialisation

#### Tests fonctions avancées (8-12) - Pour niveaux avancés
8. **testPourcentage** : 50 % de 20 = 10
9. **testSin** : sin(30°) ≈ 0.5
10. **testCos** : cos(60°) = 0.5
11. **testTan** : tan(45°) = 1
12. **testHyp** : hyp(3, 4) = 5

## Instructions de création

### Étape 1 : Copier le projet original

1. Copier `source-from-zip/project.json` dans `version-avec-tests/`
2. Décompresser et modifier le projet

### Étape 2 : Ajouter les bugs

Modifier les scripts de calcul pour introduire les bugs (voir fichiers source détaillés).

### Étape 3 : Créer le sprite Testeur

1. Créer un nouveau sprite "Testeur"
2. Ajouter les variables de test (voir ci-dessus)
3. Créer les scripts de test (voir `tests-scratch.md`)

### Étape 4 : Créer l'interface de résultats

1. Créer un sprite "Résultats" ou utiliser le sprite Stage
2. Afficher le score : `[nombreReussis] / [nombreTests]`
3. Lister les tests réussis/échoués

## Utilisation

1. Ouvrir le projet dans Scratch
2. Cliquer sur le drapeau vert
3. Le sprite Testeur exécute automatiquement tous les tests
4. Les résultats s'affichent avec le score
5. Identifier les bugs grâce aux tests qui échouent
6. Corriger les bugs
7. Relancer les tests pour valider

## Avantages pédagogiques

- Introduction aux tests unitaires
- Validation automatique des corrections
- Feedback immédiat
- Approche méthodique du débogage

## Fichiers associés

- `tests-scratch.md` : Scripts détaillés des tests
- `bugs-detaille.md` : Description détaillée des bugs
- `corrections.md` : Solutions pour chaque bug

