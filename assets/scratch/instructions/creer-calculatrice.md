# Instructions pour créer la calculatrice dans Scratch

## Sprites nécessaires

### 1. Sprite Calculatrice (Corps principal)

**Dimensions recommandées :** 400x300 pixels

**Éléments à dessiner :**
- Rectangle arrondi pour le corps (couleur : gris foncé #2c3e50 ou similaire)
- Rectangle pour l'écran d'affichage (couleur : noir #1a1a1a avec bordure)
- Texte "CALCULATRICE" en haut (optionnel)

**Instructions Scratch :**
1. Créer un nouveau sprite
2. Aller dans l'onglet "Costumes"
3. Utiliser l'éditeur de peinture vectorielle
4. Dessiner un rectangle arrondi (400x300)
5. Dessiner un rectangle plus petit pour l'écran (350x80, centré)
6. Nommer le sprite "Calculatrice"

### 2. Sprite Écran d'affichage

**Dimensions recommandées :** 350x80 pixels

**Éléments à dessiner :**
- Rectangle noir avec bordure verte (style rétro)
- Texte "0" par défaut (sera remplacé par la variable)

**Instructions Scratch :**
1. Créer un nouveau sprite
2. Dessiner un rectangle noir (350x80)
3. Ajouter une bordure verte fine
4. Positionner au-dessus du sprite Calculatrice
5. Utiliser la variable `affichage` pour afficher le texte

**Alternative :** Utiliser le bloc "dire" sur le sprite Calculatrice avec la variable `affichage`

### 3. Boutons numériques (0-9)

**Dimensions recommandées :** 60x60 pixels

**Style :**
- Carré avec coins arrondis
- Fond gris (#34495e)
- Texte blanc, centré
- Bordure subtile

**Instructions Scratch :**
1. Créer un sprite "Bouton"
2. Dessiner un carré arrondi (60x60)
3. Ajouter le texte du chiffre
4. Dupliquer ce sprite pour chaque chiffre (0-9)
5. Modifier le texte de chaque copie
6. Positionner les boutons en grille :
   ```
   7  8  9
   4  5  6
   1  2  3
      0
   ```

### 4. Boutons opérateurs (+, -, ×, ÷)

**Dimensions recommandées :** 60x60 pixels

**Style :**
- Même style que les boutons numériques
- Fond rouge (#e74c3c) pour les distinguer
- Texte blanc

**Instructions Scratch :**
1. Dupliquer un bouton numérique
2. Changer la couleur de fond en rouge
3. Modifier le texte pour chaque opérateur
4. Positionner à droite de la grille numérique

### 5. Bouton Égal (=)

**Dimensions recommandées :** 60x120 pixels (double hauteur)

**Style :**
- Rectangle vertical
- Fond vert (#27ae60)
- Texte blanc "=" centré

**Instructions Scratch :**
1. Créer un nouveau sprite
2. Dessiner un rectangle (60x120)
3. Fond vert
4. Texte "=" blanc
5. Positionner à droite, aligné avec les boutons opérateurs

### 6. Bouton Clear (C)

**Dimensions recommandées :** 60x60 pixels

**Style :**
- Carré arrondi
- Fond gris clair (#95a5a6)
- Texte blanc "C"

**Instructions Scratch :**
1. Dupliquer un bouton numérique
2. Changer la couleur en gris clair
3. Modifier le texte en "C"
4. Positionner en haut à gauche

## Palette de couleurs recommandée

- **Corps calculatrice :** #2c3e50 (gris foncé)
- **Écran :** #1a1a1a (noir) avec bordure #00ff00 (vert)
- **Boutons numériques :** #34495e (gris moyen)
- **Boutons opérateurs :** #e74c3c (rouge)
- **Bouton égal :** #27ae60 (vert)
- **Bouton Clear :** #95a5a6 (gris clair)
- **Texte :** #ffffff (blanc)

## Positionnement

### Layout recommandé

```
┌─────────────────────────────────┐
│  C    [Écran d'affichage]   /  │
│                                 │
│  7    8    9    ×              │
│  4    5    6    -               │
│  1    2    3    +               │
│       0    .    =               │
└─────────────────────────────────┘
```

### Coordonnées approximatives (Scratch)

- **Calculatrice :** x: 0, y: 0 (centre)
- **Écran :** x: 0, y: 100
- **Boutons :** Grille centrée autour de x: 0, y: 0
  - Ligne 1 (7,8,9) : y: 50
  - Ligne 2 (4,5,6) : y: 0
  - Ligne 3 (1,2,3) : y: -50
  - Ligne 4 (0,.) : y: -100
  - Opérateurs : x: 100, y varié
  - Égal : x: 100, y: -25 (centré verticalement)

## Astuces Scratch

1. **Utiliser des clones** : Pour les boutons numériques, créer un sprite "Bouton" et utiliser des clones avec différents costumes
2. **Variables visuelles** : Afficher les variables sur la scène pour le débogage
3. **Groupes** : Grouper les boutons pour faciliter le positionnement
4. **Calques** : Utiliser les calques pour l'ordre d'affichage (écran au-dessus, boutons en dessous)

## Fichiers de référence

Voir le dossier `reference/` pour des exemples visuels et des descriptions détaillées.

