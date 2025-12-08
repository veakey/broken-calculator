# Code Source - 6P Basique (1 bug)

## Variables à créer

- `nombre1` (pour tous les sprites)
- `nombre2` (pour tous les sprites)
- `operateur` (pour tous les sprites)
- `affichage` (pour tous les sprites)
- `resultat` (pour tous les sprites)

## Sprite: Calculatrice

### Script d'affichage

```
quand le drapeau vert est cliqué
répéter indéfiniment
    dire [affichage]
fin
```

## Sprite: Bouton Numérique (0-9)

### Script pour chaque bouton

```
quand ce sprite est cliqué
ajouter [chiffre] à [affichage]
```

**Note :** Créer un sprite pour chaque chiffre (0-9) ou utiliser des clones avec différents costumes.

## Sprite: Bouton Opérateur (+)

### Script

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [affichage] à []
```

**Note :** Créer des sprites similaires pour -, ×, ÷ avec les opérateurs correspondants.

## Sprite: Bouton Égal (=)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG: Soustrait au lieu d'additionner
sinon
    si [operateur] = [-] alors
        mettre [resultat] à ([nombre1] - [nombre2])
    sinon
        si [operateur] = [×] alors
            mettre [resultat] à ([nombre1] × [nombre2])
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] / [nombre2])
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
```

## Sprite: Bouton Clear (C)

### Script

```
quand ce sprite est cliqué
mettre [affichage] à []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
```

## Tests à effectuer

1. **Test 1 : Addition**
   - Cliquer sur : 5, +, 3, =
   - **Résultat attendu :** 8
   - **Résultat obtenu (avec bug) :** 2
   - **Bug identifié :** L'addition soustrait

2. **Test 2 : Soustraction**
   - Cliquer sur : 10, -, 4, =
   - **Résultat attendu :** 6
   - **Résultat obtenu :** 6 (OK)

3. **Test 3 : Multiplication**
   - Cliquer sur : 6, ×, 7, =
   - **Résultat attendu :** 42
   - **Résultat obtenu :** 42 (OK)

4. **Test 4 : Division**
   - Cliquer sur : 20, ÷, 4, =
   - **Résultat attendu :** 5
   - **Résultat obtenu :** 5 (OK)

## Correction

Dans le script du bouton Égal, ligne de l'addition :
- **Avant (bugué) :** `mettre [resultat] à ([nombre1] - [nombre2])`
- **Après (corrigé) :** `mettre [resultat] à ([nombre1] + [nombre2])`

## Notes

- Un seul bug dans cette version : l'addition est inversée
- Toutes les autres opérations fonctionnent correctement
- Idéal pour introduire le concept de débogage

