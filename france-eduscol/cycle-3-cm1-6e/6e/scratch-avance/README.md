# Calculatrice Cassée - Scratch Avancé (6e)

## Instructions pour créer le projet Scratch

### Structure avancée

Calculatrice complète avec gestion d'état et toutes les fonctionnalités.

### Scripts complets avec bugs

#### Bouton égal (AVEC BUGS COMPLETS)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG 1: Addition inversée
sinon
    si [operateur] = [-] alors
        mettre [resultat] à ([nombre1] + [nombre2])  // BUG 2: Soustraction inversée
    sinon
        si [operateur] = [×] alors
            mettre [resultat] à ([nombre1] / [nombre2])  // BUG 3: Multiplication divise
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] × [nombre2])  // BUG 4: Division multiplie
                // BUG 5: Pas de vérification division par zéro
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
```

#### Boutons numériques (AVEC BUGS)

```
quand ce sprite est cliqué
si [affichage] = [0] et [chiffre] ≠ [.] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 6: Permet points décimaux multiples
fin
```

#### Bouton Clear (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 7: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
```

## Bugs à introduire

1. **BUG 1** : Addition soustrait
2. **BUG 2** : Soustraction additionne
3. **BUG 3** : Multiplication divise
4. **BUG 4** : Division multiplie
5. **BUG 5** : Pas de vérification division par zéro
6. **BUG 6** : Permet plusieurs points décimaux
7. **BUG 7** : Clear met "0" au lieu de vider

## Tests

- Toutes les opérations de base
- Division par zéro (devrait gérer l'erreur)
- Nombres décimaux
- Points décimaux multiples
- Clear

## Corrections

1. Corriger toutes les opérations
2. Ajouter vérification division par zéro
3. Empêcher points décimaux multiples
4. Corriger Clear

## Notes pour l'enseignant

Version avancée avec 7 bugs pour développer une méthodologie de débogage complète.

