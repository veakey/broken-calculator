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

## Notes

- Ne pas introduire tous les bugs en même temps pour les débutants
- Commencer avec 1-2 bugs, puis ajouter progressivement
- Les tests aideront à identifier chaque bug individuellement

