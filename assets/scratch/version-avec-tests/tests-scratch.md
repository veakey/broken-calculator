# Scripts de Tests Unitaires pour Scratch

## Variables nécessaires

Créer ces variables (pour tous les sprites) :

```
test.nombreTests
test.nombreReussis
test.resultatActuel
test.resultatAttendu
test.nomTest
test.erreur
```

## Sprite Testeur - Script principal

### Script d'initialisation

```
quand le drapeau vert est cliqué
mettre [test.nombreTests] à [0]
mettre [test.nombreReussis] à [0]
dire [Démarrage des tests...] pendant (2) secondes
testAddition
testSoustraction
testMultiplication
testDivision
testDecimal
testDivisionParZero
testClear
afficherResultats
```

### Fonction : testAddition

```
définir testAddition
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Addition: 5 + 3]
mettre [test.resultatAttendu] à [8]

// Simuler le calcul : 5 + 3
// (Utiliser les broadcasts de la calculatrice)
envoyer [Clear Problem] à tous
envoyer [Delete Numbers] à tous
// Simuler clic sur 5
// Simuler clic sur +
// Simuler clic sur 3
// Simuler clic sur =
envoyer [Equals] à tous

attendre (0.5) secondes

// Récupérer le résultat de calculator.answer
mettre [test.resultatActuel] à [calculator.answer]

si <[test.resultatActuel] = [test.resultatAttendu]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Addition réussi] pendant (1) secondes
sinon
    dire [❌ Test Addition échoué: attendu [test.resultatAttendu], obtenu [test.resultatActuel]] pendant (2) secondes
fin
```

### Fonction : testSoustraction

```
définir testSoustraction
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Soustraction: 10 - 4]
mettre [test.resultatAttendu] à [6]

// Simuler le calcul : 10 - 4
envoyer [Clear Problem] à tous
// Simuler 10 - 4 = 
envoyer [Equals] à tous

attendre (0.5) secondes
mettre [test.resultatActuel] à [calculator.answer]

si <[test.resultatActuel] = [test.resultatAttendu]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Soustraction réussi] pendant (1) secondes
sinon
    dire [❌ Test Soustraction échoué: attendu [test.resultatAttendu], obtenu [test.resultatActuel]] pendant (2) secondes
fin
```

### Fonction : testMultiplication

```
définir testMultiplication
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Multiplication: 6 × 7]
mettre [test.resultatAttendu] à [42]

// Simuler le calcul : 6 × 7
envoyer [Clear Problem] à tous
// Simuler 6 × 7 =
envoyer [Equals] à tous

attendre (0.5) secondes
mettre [test.resultatActuel] à [calculator.answer]

si <[test.resultatActuel] = [test.resultatAttendu]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Multiplication réussi] pendant (1) secondes
sinon
    dire [❌ Test Multiplication échoué: attendu [test.resultatAttendu], obtenu [test.resultatActuel]] pendant (2) secondes
fin
```

### Fonction : testDivision

```
définir testDivision
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Division: 20 ÷ 4]
mettre [test.resultatAttendu] à [5]

// Simuler le calcul : 20 ÷ 4
envoyer [Clear Problem] à tous
// Simuler 20 ÷ 4 =
envoyer [Equals] à tous

attendre (0.5) secondes
mettre [test.resultatActuel] à [calculator.answer]

si <[test.resultatActuel] = [test.resultatAttendu]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Division réussi] pendant (1) secondes
sinon
    dire [❌ Test Division échoué: attendu [test.resultatAttendu], obtenu [test.resultatActuel]] pendant (2) secondes
fin
```

### Fonction : testDecimal

```
définir testDecimal
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Décimal: 3.5 + 2.5]
mettre [test.resultatAttendu] à [6]

// Simuler le calcul : 3.5 + 2.5
envoyer [Clear Problem] à tous
// Simuler 3.5 + 2.5 =
envoyer [Equals] à tous

attendre (0.5) secondes
mettre [test.resultatActuel] à [calculator.answer]

si <([test.resultatActuel] - [test.resultatAttendu]) < [0.1]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Décimal réussi] pendant (1) secondes
sinon
    dire [❌ Test Décimal échoué: attendu [test.resultatAttendu], obtenu [test.resultatActuel]] pendant (2) secondes
fin
```

### Fonction : testDivisionParZero

```
définir testDivisionParZero
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Division par zéro: 10 ÷ 0]

// Simuler le calcul : 10 ÷ 0
envoyer [Clear Problem] à tous
// Simuler 10 ÷ 0 =
envoyer [Equals] à tous

attendre (0.5) secondes

// Vérifier que l'erreur est gérée (pas d'infini)
si <[calculator.answer] = [Erreur]> ou <[calculator.answer] = [Infini]> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Division par zéro réussi] pendant (1) secondes
sinon
    dire [❌ Test Division par zéro échoué: devrait gérer l'erreur] pendant (2) secondes
fin
```

### Fonction : testClear

```
définir testClear
mettre [test.nombreTests] à ([test.nombreTests] + [1])
mettre [test.nomTest] à [Clear: Réinitialisation]

// Entrer un nombre
// Simuler 5 + 3
envoyer [Clear Problem] à tous

attendre (0.2) secondes

// Vérifier que tout est réinitialisé
si <[calculator.answer] = [0]> et <[calculator.equation] = []> alors
    mettre [test.nombreReussis] à ([test.nombreReussis] + [1])
    dire [✅ Test Clear réussi] pendant (1) secondes
sinon
    dire [❌ Test Clear échoué: réinitialisation incomplète] pendant (2) secondes
fin
```

### Fonction : afficherResultats

```
définir afficherResultats
dire (regrouper [Résultats des tests: ] (regrouper [test.nombreReussis] (regrouper [ / ] [test.nombreTests]))) pendant (3) secondes

si <[test.nombreReussis] = [test.nombreTests]> alors
    dire [🎉 Tous les tests passent ! Calculatrice réparée !] pendant (3) secondes
sinon
    dire (regrouper [⚠️ ] (regrouper ([test.nombreTests] - [test.nombreReussis]) [ tests échouent. Continuez le débogage !])) pendant (3) secondes
fin
```

## Notes d'implémentation

### Simuler les clics sur les boutons

Pour simuler les clics, vous pouvez :
1. Utiliser les broadcasts existants de la calculatrice
2. Créer de nouveaux broadcasts pour chaque bouton
3. Modifier directement les variables de la calculatrice

### Exemple de simulation de clic

```
// Pour cliquer sur le bouton "5"
envoyer [Button 5 Clicked] à tous

// Le sprite bouton écoute ce broadcast et simule un clic
```

### Alternative : Modification directe des variables

```
// Définir directement l'équation
mettre [calculator.equation] à [5, +, 3]
envoyer [Equals] à tous
```

## Adaptation nécessaire

Ces scripts doivent être adaptés selon :
- La structure exacte de votre calculatrice
- Les noms des variables utilisées
- Les broadcasts disponibles
- La façon dont les résultats sont stockés

Voir le fichier `bugs-detaille.md` pour les modifications à apporter à la calculatrice.

