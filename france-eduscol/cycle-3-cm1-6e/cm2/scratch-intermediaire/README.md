# Calculatrice Cassée - Scratch Intermédiaire (CM2)

## Instructions pour créer le projet Scratch

### Structure de base

Même structure que CM1 mais avec plus de fonctionnalités et plus de bugs.

### Scripts avec bugs

#### Bouton égal (AVEC BUGS)

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
            mettre [resultat] à ([nombre1] × [nombre2])  // OK
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] × [nombre2])  // BUG 3: Division multiplie
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
```

#### Boutons numériques (AVEC BUG)

```
quand ce sprite est cliqué
si [affichage] = [0] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 4: Permet plusieurs points décimaux
fin
```

## Bugs à introduire

1. **BUG 1** : Addition soustrait
2. **BUG 2** : Soustraction additionne
3. **BUG 3** : Division multiplie
4. **BUG 4** : Permet plusieurs points décimaux

## Tests

- 5 + 3 = 8 (donnera 2)
- 10 - 4 = 6 (donnera 14)
- 6 × 7 = 42 (donnera 42 - OK)
- 20 ÷ 4 = 5 (donnera 80)
- Test décimal : 3.14.5 (devrait être bloqué)

## Corrections

1. Corriger l'addition : `+` au lieu de `-`
2. Corriger la soustraction : `-` au lieu de `+`
3. Corriger la division : `/` au lieu de `×`
4. Ajouter vérification pour points décimaux

## Notes pour l'enseignant

Version intermédiaire avec 4 bugs pour développer les compétences de débogage.

