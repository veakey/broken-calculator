# Description détaillée des sprites

## Sprite Calculatrice (Corps)

### Apparence
- **Forme :** Rectangle avec coins arrondis
- **Dimensions :** 400 pixels de large × 300 pixels de haut
- **Couleur principale :** Gris foncé (#2c3e50)
- **Bordure :** Légèrement plus claire, 2-3 pixels
- **Style :** Moderne, épuré

### Éléments internes
- **Écran d'affichage :** Rectangle noir (350×80) centré en haut
- **Zone boutons :** Espace réservé pour les boutons en bas
- **Texte (optionnel) :** "CALCULATRICE" en haut, petit, gris clair

### Instructions de dessin dans Scratch
1. Outil rectangle arrondi
2. Taille : 400×300
3. Remplissage : #2c3e50
4. Contour : 2px, #34495e
5. Rectangle écran : 350×80, noir, centré verticalement à y=100

## Sprite Écran

### Apparence
- **Forme :** Rectangle
- **Dimensions :** 350×80 pixels
- **Couleur :** Noir (#1a1a1a)
- **Bordure :** Vert néon (#00ff00), 2 pixels
- **Texte :** Variable `affichage`, couleur verte (#00ff00), police monospace

### Position
- Centré horizontalement
- Positionné à y = 100 (au-dessus du centre)

### Affichage du texte
- Utiliser le bloc "dire [affichage]" sur le sprite Calculatrice
- OU créer un sprite séparé qui affiche la variable

## Boutons numériques (0-9)

### Apparence standard
- **Forme :** Carré avec coins arrondis (rayon 8px)
- **Dimensions :** 60×60 pixels
- **Couleur de fond :** #34495e (gris moyen)
- **Couleur de texte :** #ffffff (blanc)
- **Police :** Arial ou similaire, taille 24
- **Bordure :** 1px, #2c3e50 (gris foncé)
- **Ombre :** Légère ombre portée pour effet 3D

### États
- **Normal :** Couleur de fond standard
- **Survol :** Légèrement plus clair (#3d566e)
- **Clic :** Légèrement plus foncé (#2c3e50)

### Positionnement
Grille 4×3 :
- Ligne 1 : 7, 8, 9 (y = 50)
- Ligne 2 : 4, 5, 6 (y = 0)
- Ligne 3 : 1, 2, 3 (y = -50)
- Ligne 4 : 0 (largeur double, y = -100), . (y = -100)

Espacement : 10 pixels entre les boutons

## Boutons opérateurs (+, -, ×, ÷)

### Apparence
- **Même style que les boutons numériques**
- **Couleur de fond :** #e74c3c (rouge)
- **Couleur de texte :** #ffffff (blanc)
- **Dimensions :** 60×60 pixels

### Positionnement
- Alignés verticalement à droite
- x = 100
- Espacement vertical : 10 pixels
- Ordre de haut en bas : /, ×, -, +

## Bouton Égal (=)

### Apparence
- **Forme :** Rectangle vertical
- **Dimensions :** 60×120 pixels (double hauteur)
- **Couleur de fond :** #27ae60 (vert)
- **Couleur de texte :** #ffffff (blanc)
- **Texte :** "=" centré verticalement et horizontalement

### Position
- x = 100 (aligné avec les opérateurs)
- y = -25 (centré verticalement avec les lignes 3 et 4)

## Bouton Clear (C)

### Apparence
- **Forme :** Carré arrondi
- **Dimensions :** 60×60 pixels
- **Couleur de fond :** #95a5a6 (gris clair)
- **Couleur de texte :** #ffffff (blanc)
- **Texte :** "C" (pour Clear)

### Position
- x = -150 (gauche)
- y = 100 (en haut, aligné avec l'écran)

## Effets visuels optionnels

### Ombre portée
- Ajouter une ombre légère sous chaque bouton
- Couleur : Noir avec transparence 30%
- Décalage : 2 pixels vers le bas et la droite

### Effet 3D
- Bordure supérieure plus claire
- Bordure inférieure plus foncée
- Donne un effet de relief

### Animation au clic
- Réduire légèrement la taille (95%) pendant 0.1 seconde
- Puis revenir à la taille normale
- Donne un feedback visuel

## Palette de couleurs complète

```
Corps calculatrice :  #2c3e50
Écran fond :          #1a1a1a
Écran bordure :       #00ff00
Écran texte :         #00ff00
Boutons numériques :  #34495e
Boutons opérateurs :  #e74c3c
Bouton égal :         #27ae60
Bouton Clear :         #95a5a6
Texte :               #ffffff
Ombre :               #000000 (30% opacité)
```

## Instructions pour Scratch

### Créer un bouton réutilisable

1. Créer un sprite "Bouton"
2. Dessiner le carré arrondi avec la couleur de base
3. Créer plusieurs costumes :
   - Costume 1 : Normal
   - Costume 2 : Survol (plus clair)
   - Costume 3 : Clic (plus foncé)
4. Utiliser des clones pour créer tous les boutons
5. Chaque clone change de costume selon l'état

### Script pour l'animation de clic

```
quand ce sprite est cliqué
passer au costume [clic]
attendre 0.1 secondes
passer au costume [normal]
```

### Script pour le survol

```
répéter indéfiniment
    si <touching [souris] ?> alors
        passer au costume [survol]
    sinon
        passer au costume [normal]
    fin
fin
```

