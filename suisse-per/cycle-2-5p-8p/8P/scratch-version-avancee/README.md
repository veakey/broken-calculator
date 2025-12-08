# Calculatrice Cassée - Scratch Version Avancée (8P)

## Instructions pour créer le projet Scratch

### Étape 1 : Structure avancée

Créer une calculatrice avec :
- Sprite calculatrice avec écran d'affichage
- Boutons numériques (0-9) et point décimal
- Boutons opérateurs (+, -, ×, ÷)
- Bouton égal (=)
- Bouton Clear (C)
- Variables : `nombre1`, `nombre2`, `operateur`, `affichage`, `resultat`, `en_attente`

### Étape 2 : Scripts complets avec bugs

#### Script pour les boutons numériques (AVEC BUGS)

```
quand ce sprite est cliqué
si [en_attente] = [vrai] alors
    mettre [affichage] à []
    mettre [en_attente] à [faux]
fin

si [affichage] = [0] et [chiffre] ≠ [.] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 1: Ne vérifie pas les points décimaux multiples
fin
```

#### Script pour les opérateurs (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    // Calculer le résultat précédent
    // (code de calcul ici)
fin

mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [en_attente] à [vrai]  // BUG 2: Devrait être vrai mais logique incorrecte
```

#### Script pour le bouton égal (AVEC BUGS)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG 3: Addition inversée
sinon
    si [operateur] = [-] alors
        mettre [resultat] à ([nombre1] + [nombre2])  // BUG 4: Soustraction inversée
    sinon
        si [operateur] = [×] alors
            mettre [resultat] à ([nombre1] / [nombre2])  // BUG 5: Multiplication divise
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] × [nombre2])  // BUG 6: Division multiplie
                // BUG 7: Pas de vérification division par zéro
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
mettre [operateur] à []
mettre [en_attente] à [vrai]
```

#### Script pour Clear (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 8: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
mettre [en_attente] à [faux]
```

### Étape 3 : Script d'affichage

```
quand le drapeau vert est cliqué
répéter indéfiniment
    dire [affichage]  // Afficher sur le sprite
fin
```

## Bugs à introduire

1. **BUG 1** : Permet plusieurs points décimaux
2. **BUG 2** : Logique incorrecte pour `en_attente`
3. **BUG 3** : Addition soustrait
4. **BUG 4** : Soustraction additionne
5. **BUG 5** : Multiplication divise
6. **BUG 6** : Division multiplie
7. **BUG 7** : Pas de vérification division par zéro
8. **BUG 8** : Clear met "0" au lieu de vider

## Tests à effectuer

- 5 + 3 = 8 (donnera 2)
- 10 - 4 = 6 (donnera 14)
- 6 × 7 = 42 (donnera ~0.86)
- 20 ÷ 4 = 5 (donnera 80)
- 10 ÷ 0 = Erreur (donnera 0 - devrait gérer l'erreur)
- 3.14 (peut créer 3.14.5)
- Clear devrait vider l'affichage

## Corrections à apporter

1. Ajouter vérification pour points décimaux multiples
2. Corriger la logique de `en_attente`
3. Corriger toutes les opérations (+, -, ×, ÷)
4. Ajouter vérification division par zéro
5. Corriger Clear pour vider l'affichage

## Notes pour l'enseignant

Cette version contient 8 bugs de complexité variable. Les élèves devront :
- Analyser chaque fonctionnalité
- Identifier tous les types d'erreurs
- Corriger méthodiquement
- Tester après chaque correction

