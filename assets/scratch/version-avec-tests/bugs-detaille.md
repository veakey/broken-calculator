# Bugs Détaillés à Introduire dans la Calculatrice

## Bug 1 : Addition inversée

### Localisation
Dans le script qui gère le bouton "Equals" pour l'addition.

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([nombre1] + [nombre2])

// APRÈS (bugué)
mettre [resultat] à ([nombre1] - [nombre2])  // BUG: Soustrait au lieu d'additionner
```

### Test qui échouera
- `testAddition` : 5 + 3 devrait donner 8, mais donnera 2

## Bug 2 : Soustraction inversée

### Localisation
Dans le script qui gère le bouton "Equals" pour la soustraction.

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([nombre1] - [nombre2])

// APRÈS (bugué)
mettre [resultat] à ([nombre1] + [nombre2])  // BUG: Additionne au lieu de soustraire
```

### Test qui échouera
- `testSoustraction` : 10 - 4 devrait donner 6, mais donnera 14

## Bug 3 : Multiplication inversée

### Localisation
Dans le script qui gère le bouton "Equals" pour la multiplication.

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([nombre1] × [nombre2])

// APRÈS (bugué)
mettre [resultat] à ([nombre1] / [nombre2])  // BUG: Divise au lieu de multiplier
```

### Test qui échouera
- `testMultiplication` : 6 × 7 devrait donner 42, mais donnera ~0.86

## Bug 4 : Division inversée

### Localisation
Dans le script qui gère le bouton "Equals" pour la division.

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([nombre1] / [nombre2])

// APRÈS (bugué)
mettre [resultat] à ([nombre1] × [nombre2])  // BUG: Multiplie au lieu de diviser
```

### Test qui échouera
- `testDivision` : 20 ÷ 4 devrait donner 5, mais donnera 80

## Bug 5 : Clear incomplet

### Localisation
Dans le script qui gère le bouton "Clear" ou "C".

### Modification à faire
```scratch
// AVANT (correct)
mettre [calculator.equation] à []
mettre [calculator.answer] à [0]

// APRÈS (bugué)
mettre [calculator.equation] à []  // BUG: Ne remet pas answer à 0
// calculator.answer garde l'ancienne valeur
```

### Test qui échouera
- `testClear` : Après Clear, calculator.answer devrait être 0

## Bug 6 : Points décimaux multiples

### Localisation
Dans le script qui gère l'ajout d'un point décimal.

### Modification à faire
```scratch
// AVANT (correct)
si <non <[equation] contient [.]?>> alors
    ajouter [.] à [equation]
fin

// APRÈS (bugué)
ajouter [.] à [equation]  // BUG: Permet plusieurs points décimaux
```

### Conséquence
- On peut entrer "3.14.5" ce qui est invalide

## Bug 7 : Division par zéro non gérée

### Localisation
Dans le script qui gère la division, avant le calcul.

### Modification à faire
```scratch
// AVANT (correct)
si <[nombre2] = [0]> alors
    mettre [calculator.answer] à [Erreur]
sinon
    mettre [resultat] à ([nombre1] / [nombre2])
fin

// APRÈS (bugué)
mettre [resultat] à ([nombre1] / [nombre2])  // BUG: Ne vérifie pas la division par zéro
```

### Test qui échouera
- `testDivisionParZero` : 10 ÷ 0 devrait afficher "Erreur"

## Comment introduire les bugs

1. **Ouvrir le projet dans Scratch**
2. **Pour chaque bug :**
   - Localiser le script concerné
   - Modifier selon les instructions ci-dessus
   - Sauvegarder
3. **Tester avec le sprite Testeur**
4. **Vérifier que les tests échouent**

## Ordre recommandé

1. Commencer par les bugs simples (Addition, Soustraction)
2. Continuer avec les bugs moyens (Multiplication, Division)
3. Finir avec les bugs complexes (Clear, Décimales, Division par zéro)

## Bug 8 : Pourcentage incorrect

### Localisation
Dans le script qui gère le bouton "%" (pourcentage).

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([nombre1] × ([nombre2] / [100]))

// APRÈS (bugué)
mettre [resultat] à ([nombre1] × [nombre2])  // BUG: Multiplie au lieu de calculer le pourcentage
```

### Test qui échouera
- `testPourcentage` : 50 % de 20 devrait donner 10, mais donnera 1000

## Bug 9 : Sinus utilise cos

### Localisation
Dans le script qui gère le bouton "sin" (sinus).

### Modification à faire
```scratch
// AVANT (correct)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([sin] de ([radians]))

// APRÈS (bugué)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([cos] de ([radians]))  // BUG: Utilise cos au lieu de sin
```

### Test qui échouera
- `testSin` : sin(30°) devrait donner ≈ 0.5, mais donnera cos(30°) ≈ 0.866

## Bug 10 : Cosinus utilise tan

### Localisation
Dans le script qui gère le bouton "cos" (cosinus).

### Modification à faire
```scratch
// AVANT (correct)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([cos] de ([radians]))

// APRÈS (bugué)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([tan] de ([radians]))  // BUG: Utilise tan au lieu de cos
```

### Test qui échouera
- `testCos` : cos(60°) devrait donner 0.5, mais donnera tan(60°) ≈ 1.732

## Bug 11 : Tangente utilise sin

### Localisation
Dans le script qui gère le bouton "tan" (tangente).

### Modification à faire
```scratch
// AVANT (correct)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([tan] de ([radians]))

// APRÈS (bugué)
mettre [radians] à (([valeur] × [3.14159]) / [180])
mettre [resultat] à ([sin] de ([radians]))  // BUG: Utilise sin au lieu de tan
```

### Test qui échouera
- `testTan` : tan(45°) devrait donner 1, mais donnera sin(45°) ≈ 0.707

## Bug 12 : Hypoténuse additionne

### Localisation
Dans le script qui gère le bouton "hyp" (hypoténuse).

### Modification à faire
```scratch
// AVANT (correct)
mettre [resultat] à ([sqrt] de (([nombre1] × [nombre1]) + ([nombre2] × [nombre2])))

// APRÈS (bugué)
mettre [resultat] à ([valeur] + [valeur])  // BUG: Additionne au lieu de calculer l'hypoténuse
```

### Test qui échouera
- `testHyp` : hyp(3, 4) devrait donner 5, mais donnera 6 (3+3)

## Notes

- Ne pas introduire tous les bugs en même temps pour les débutants
- Commencer avec 1-2 bugs, puis ajouter progressivement
- Les tests aideront à identifier chaque bug individuellement
- Les bugs 8-12 sont pour les niveaux avancés (fonctions mathématiques avancées)

