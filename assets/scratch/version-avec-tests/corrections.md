# Corrections des Bugs

## Correction 1 : Addition

### Problème
L'addition soustrait au lieu d'additionner.

### Solution
```scratch
// Remplacer
mettre [resultat] à ([nombre1] - [nombre2])

// Par
mettre [resultat] à ([nombre1] + [nombre2])
```

## Correction 2 : Soustraction

### Problème
La soustraction additionne au lieu de soustraire.

### Solution
```scratch
// Remplacer
mettre [resultat] à ([nombre1] + [nombre2])

// Par
mettre [resultat] à ([nombre1] - [nombre2])
```

## Correction 3 : Multiplication

### Problème
La multiplication divise au lieu de multiplier.

### Solution
```scratch
// Remplacer
mettre [resultat] à ([nombre1] / [nombre2])

// Par
mettre [resultat] à ([nombre1] × [nombre2])
```

## Correction 4 : Division

### Problème
La division multiplie au lieu de diviser.

### Solution
```scratch
// Remplacer
mettre [resultat] à ([nombre1] × [nombre2])

// Par
mettre [resultat] à ([nombre1] / [nombre2])
```

## Correction 5 : Clear

### Problème
Clear ne réinitialise pas complètement.

### Solution
```scratch
// Ajouter
mettre [calculator.answer] à [0]
mettre [calculator.equation] à []
```

## Correction 6 : Points décimaux

### Problème
Permet plusieurs points décimaux.

### Solution
```scratch
// Remplacer
ajouter [.] à [equation]

// Par
si <non <[equation] contient [.]?>> alors
    ajouter [.] à [equation]
fin
```

## Correction 7 : Division par zéro

### Problème
Ne gère pas la division par zéro.

### Solution
```scratch
// Remplacer
mettre [resultat] à ([nombre1] / [nombre2])

// Par
si <[nombre2] = [0]> alors
    mettre [calculator.answer] à [Erreur]
sinon
    mettre [resultat] à ([nombre1] / [nombre2])
fin
```

## Processus de correction

1. **Lancer les tests** avec le sprite Testeur
2. **Identifier les tests qui échouent**
3. **Corriger un bug à la fois**
4. **Relancer les tests après chaque correction**
5. **Vérifier que le test correspondant passe**
6. **Continuer jusqu'à ce que tous les tests passent**

## Validation

Une fois toutes les corrections appliquées :
- Tous les tests doivent passer ✅
- Le score doit être : `7 / 7` (ou le nombre total de tests)
- Le message "🎉 Tous les tests passent !" doit s'afficher

## Conseils

- **Corriger méthodiquement** : Un bug à la fois
- **Tester régulièrement** : Après chaque correction
- **Comprendre l'erreur** : Lire les messages des tests
- **Valider** : S'assurer que tous les tests passent

