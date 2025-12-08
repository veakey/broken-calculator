# Calculatrice Cassée - Scratch Version Basique (6P)

## Instructions pour créer le projet Scratch

### Étape 1 : Créer les sprites

1. **Sprite Calculatrice** (sprite principal)
   - Créer un rectangle pour le corps de la calculatrice
   - Ajouter un rectangle plus petit pour l'écran d'affichage

2. **Sprites Boutons** (ou utiliser des clones)
   - Boutons numériques : 0-9
   - Boutons opérateurs : +, -, ×, ÷
   - Bouton égal : =
   - Bouton Clear : C

### Étape 2 : Variables à créer

- `nombre1` : Premier nombre
- `nombre2` : Deuxième nombre
- `operateur` : Opérateur sélectionné
- `affichage` : Texte à afficher
- `resultat` : Résultat du calcul

### Étape 3 : Scripts pour les boutons numériques

```
quand ce sprite est cliqué
ajouter [chiffre] à [affichage]
```

### Étape 4 : Scripts pour les opérateurs

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [affichage] à []
```

### Étape 5 : Script pour le bouton égal (AVEC BUGS)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG 1: Soustrait au lieu d'additionner
fin

mettre [affichage] à [resultat]
```

### Étape 6 : Script pour le bouton Clear

```
quand ce sprite est cliqué
mettre [affichage] à []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
```

### Étape 7 : Affichage

Créer un script qui affiche la variable `affichage` sur l'écran de la calculatrice.

## Bugs à introduire

1. **BUG 1** : L'addition soustrait au lieu d'additionner
   - Dans le script du bouton égal, utiliser `-` au lieu de `+` pour l'addition

## Tests à effectuer

- 5 + 3 devrait donner 8 (mais donnera 2 avec le bug)
- 10 - 4 devrait donner 6
- 6 × 7 devrait donner 42
- 20 ÷ 4 devrait donner 5

## Correction

Pour corriger le bug, il faut changer dans le script du bouton égal :
- Remplacer `([nombre1] - [nombre2])` par `([nombre1] + [nombre2])` pour l'addition

## Notes pour l'enseignant

Cette version contient un seul bug simple et évident pour permettre aux élèves de comprendre le concept de débogage. Le bug est dans l'opération d'addition uniquement.

