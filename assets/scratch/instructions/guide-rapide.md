# Guide Rapide - Créer la calculatrice dans Scratch

## Étapes rapides

### 1. Sprite Calculatrice (5 minutes)
- Nouveau sprite → Peinture
- Rectangle arrondi 400×300, couleur gris foncé
- Rectangle écran 350×80, noir, centré en haut

### 2. Boutons (10 minutes)
- Créer un sprite "Bouton"
- Carré arrondi 60×60
- Dupliquer pour chaque bouton (0-9, +, -, ×, ÷, =, C)
- Changer les couleurs :
  - Numériques : Gris (#34495e)
  - Opérateurs : Rouge (#e74c3c)
  - Égal : Vert (#27ae60)
  - Clear : Gris clair (#95a5a6)

### 3. Positionnement (5 minutes)
- Organiser en grille :
  ```
  7  8  9  ×
  4  5  6  -
  1  2  3  +
  0  .  =
  ```
- Clear en haut à gauche

### 4. Variables (2 minutes)
- Créer : `nombre1`, `nombre2`, `operateur`, `affichage`, `resultat`

### 5. Scripts (selon le niveau)
- Voir les README.md de chaque niveau pour les scripts avec bugs

## Astuce : Utiliser des clones

Au lieu de créer 10+ sprites, créer un sprite "Bouton" et utiliser des clones :

```
quand le drapeau vert est cliqué
créer un clone de [moi-même]
```

Puis pour chaque clone, définir sa position et son costume selon le type de bouton.

## Couleurs rapides

- Gris foncé : R:44, G:62, B:80
- Rouge : R:231, G:76, B:60
- Vert : R:39, G:174, B:96
- Gris clair : R:149, G:165, B:166
- Noir : R:26, G:26, B:26
- Vert néon : R:0, G:255, B:0

## Template de script bouton numérique

```
quand ce sprite est cliqué
ajouter [chiffre] à [affichage]
```

## Template de script opérateur

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [affichage] à []
```

## Template de script égal

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] + [nombre2])
fin

mettre [affichage] à [resultat]
```

## Voir aussi

- `creer-calculatrice.md` : Instructions détaillées
- `../reference/description-sprites.md` : Descriptions complètes

