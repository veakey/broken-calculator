# Calculatrice Cassée - Scratch Version Intermédiaire (7P)

## Instructions pour créer le projet Scratch

### Étape 1 : Structure de base

Créer la même structure que la version basique avec :
- Sprite calculatrice
- Boutons numériques et opérateurs
- Variables : `nombre1`, `nombre2`, `operateur`, `affichage`, `resultat`

### Étape 2 : Scripts avec bugs

#### Script pour le bouton égal (AVEC BUGS)

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

#### Script pour les boutons numériques (AVEC BUG)

```
quand ce sprite est cliqué
si [affichage] = [0] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 4: Ne vérifie pas si on ajoute un deuxième point décimal
fin
```

### Étape 3 : Script pour Clear

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 5: Devrait être [] et non [0]
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
```

## Bugs à introduire

1. **BUG 1** : Addition soustrait au lieu d'additionner
2. **BUG 2** : Soustraction additionne au lieu de soustraire
3. **BUG 3** : Division multiplie au lieu de diviser
4. **BUG 4** : Permet plusieurs points décimaux (ex: 3.14.5)
5. **BUG 5** : Clear met "0" au lieu de vider l'affichage

## Tests à effectuer

- 5 + 3 = 8 (donnera 2)
- 10 - 4 = 6 (donnera 14)
- 6 × 7 = 42 (donnera 42 - OK)
- 20 ÷ 4 = 5 (donnera 80)
- Test avec point décimal : 3.14 (peut créer 3.14.5)
- Test Clear : devrait vider l'affichage

## Corrections à apporter

1. Remplacer `([nombre1] - [nombre2])` par `([nombre1] + [nombre2])` pour l'addition
2. Remplacer `([nombre1] + [nombre2])` par `([nombre1] - [nombre2])` pour la soustraction
3. Remplacer `([nombre1] × [nombre2])` par `([nombre1] / [nombre2])` pour la division
4. Ajouter une vérification pour éviter les points décimaux multiples
5. Changer `mettre [affichage] à [0]` en `mettre [affichage] à []` dans Clear

## Notes pour l'enseignant

Cette version contient 5 bugs de complexité moyenne. Les élèves devront analyser chaque opération et identifier les patterns d'erreurs.

