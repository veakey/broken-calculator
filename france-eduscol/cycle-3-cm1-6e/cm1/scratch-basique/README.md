# Calculatrice Cassée - Scratch Basique (CM1)

## Instructions pour créer le projet Scratch

### Étape 1 : Créer les éléments de base

1. **Sprite Calculatrice**
   - Dessiner un rectangle pour le corps
   - Dessiner un rectangle plus petit pour l'écran

2. **Boutons**
   - Créer des sprites pour les boutons ou utiliser des clones
   - Boutons : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
   - Boutons : +, -, ×, ÷
   - Bouton : =
   - Bouton : C (Clear)

### Étape 2 : Variables

Créer ces variables :
- `nombre1`
- `nombre2`
- `operateur`
- `affichage`
- `resultat`

### Étape 3 : Scripts simples avec bug

#### Bouton égal (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG: Soustrait au lieu d'additionner
sinon
    mettre [resultat] à ([nombre1] - [nombre2])  // Pour les autres opérations aussi
fin

mettre [affichage] à [resultat]
```

#### Boutons numériques

```
quand ce sprite est cliqué
ajouter [chiffre] à [affichage]
```

#### Bouton Clear

```
quand ce sprite est cliqué
mettre [affichage] à []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
```

## Bug à introduire

**BUG UNIQUE** : L'addition soustrait au lieu d'additionner

## Tests

- 5 + 3 devrait donner 8 (donnera 2)
- 4 + 2 devrait donner 6 (donnera 2)

## Correction

Changer `([nombre1] - [nombre2])` en `([nombre1] + [nombre2])` pour l'addition.

## Notes pour l'enseignant

Version très simple avec un seul bug évident pour initier les élèves au débogage.

