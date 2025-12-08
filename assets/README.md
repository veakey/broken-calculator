# Assets pour les projets Scratch

Ce dossier contient tous les assets et instructions nécessaires pour créer les projets Scratch de la calculatrice cassée.

## Structure

```
assets/
└── scratch/
    ├── sprites/          # (À venir) Images de référence pour les sprites
    ├── instructions/      # Guides pour créer les sprites et projets
    ├── reference/         # Descriptions détaillées et références
    ├── source/            # Code source complet pour chaque niveau
    └── sb3/               # Structure des fichiers .sb3 (archives ZIP)
```

## Fichiers disponibles

### Instructions

1. **`instructions/creer-calculatrice.md`**
   - Guide complet pour créer tous les sprites
   - Dimensions, couleurs, positionnement
   - Instructions étape par étape

2. **`instructions/guide-rapide.md`**
   - Version condensée pour création rapide
   - Étapes essentielles
   - Templates de scripts

### Références

1. **`reference/description-sprites.md`**
   - Descriptions détaillées de chaque sprite
   - Palette de couleurs complète
   - Effets visuels et animations
   - Scripts d'exemple

### Code Source

1. **`source/README.md`**
   - Guide d'utilisation des fichiers source
   - Format et structure

2. **Fichiers source par niveau :**
   - `6P-basique.md` : Version basique (1 bug)
   - `7P-intermediaire.md` : Version intermédiaire (5 bugs)
   - `8P-avance.md` : Version avancée (8 bugs)
   - `9P-expert.md` : Version experte (9 bugs)
   - `CM1-basique.md` : Version basique CM1 (1 bug)
   - `CM2-intermediaire.md` : Version intermédiaire CM2 (4 bugs)
   - `6e-avance.md` : Version avancée 6e (7 bugs)

Chaque fichier contient :
- Variables à créer
- Scripts complets avec bugs
- Tests à effectuer
- Corrections à apporter

### Fichiers .sb3

1. **`sb3/README.md`**
   - Guide d'utilisation des fichiers .sb3
   - Instructions pour créer les archives

2. **`sb3/INSTRUCTIONS.md`**
   - Instructions détaillées pour créer les .sb3
   - Scripts automatiques
   - Méthodes manuelles

3. **`sb3/create-sb3.sh`**
   - Script bash pour créer automatiquement tous les .sb3

4. **Dossiers par niveau :**
   - `6P-basique/` : Structure pour version basique
   - `7P-intermediaire/` : Structure pour version intermédiaire
   - `8P-avance/` : Structure pour version avancée
   - `9P-expert/` : Structure pour version experte
   - `CM1-basique/` : Structure pour CM1
   - `CM2-intermediaire/` : Structure pour CM2
   - `6e-avance/` : Structure pour 6e

Chaque dossier contient :
- `project.json` : Structure JSON du projet Scratch
- `README.md` : Instructions spécifiques au niveau

**Pour créer un fichier .sb3 :**
1. Aller dans le dossier du niveau
2. Créer une archive ZIP de tout le contenu
3. Renommer l'archive en `.sb3`
4. Ouvrir dans Scratch

## Utilisation

### Pour les enseignants

1. Lire `instructions/creer-calculatrice.md` pour comprendre la structure
2. Suivre `instructions/guide-rapide.md` pour créer rapidement
3. Consulter `reference/description-sprites.md` pour les détails

### Pour créer un projet

1. Ouvrir Scratch (en ligne ou Desktop)
2. Suivre les instructions dans `instructions/`
3. Créer les sprites selon les descriptions
4. Ajouter les scripts selon le niveau (voir les README.md des dossiers Scratch)
5. Tester et sauvegarder en .sb3

## Palette de couleurs

Toutes les couleurs sont définies dans les fichiers d'instructions. Format :
- Hexadécimal : #2c3e50
- RGB : R:44, G:62, B:80

## Notes

- Les fichiers .sb3 ne sont pas inclus (doivent être créés dans Scratch)
- Tous les assets peuvent être créés directement dans Scratch avec l'éditeur intégré
- Les images de référence peuvent être ajoutées dans `sprites/` si nécessaire

## Prochaines étapes

1. Créer les projets dans Scratch selon les guides
2. Ajouter les bugs selon le niveau (voir README.md de chaque version)
3. Sauvegarder les fichiers .sb3
4. Distribuer aux élèves pour débogage

