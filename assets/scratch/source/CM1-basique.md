# Code Source - CM1 Basique (1 bug)

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

### Script

```
quand ce sprite est cliqué
ajouter [chiffre] à [affichage]
```

## Sprite: Bouton Opérateur (+)

### Script

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [affichage] à []
```

## Sprite: Bouton Égal (=)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG: Addition inversée
sinon
    mettre [resultat] à ([nombre1] - [nombre2])  // Pour les autres aussi
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
```

## Tests à effectuer

1. **Test 1 : Addition**
   - 5 + 3 = 8 (donnera 2)

2. **Test 2 : Addition simple**
   - 4 + 2 = 6 (donnera 2)

## Correction

Dans le script du bouton Égal :
- Remplacer `([nombre1] - [nombre2])` par `([nombre1] + [nombre2])` pour l'addition

## Notes

- Version très simple avec un seul bug évident
- Idéal pour initier au débogage
- Focus sur l'observation et l'identification

