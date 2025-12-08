# Code Source Scratch

Ce dossier contient les codes source détaillés pour chaque version de la calculatrice Scratch.

## Format

Les fichiers sont organisés par niveau et contiennent :
- **Variables** : Liste des variables à créer
- **Scripts** : Scripts complets avec les bugs à introduire
- **Sprites** : Instructions pour chaque sprite
- **Tests** : Tests à effectuer

## Structure des fichiers

Chaque fichier suit ce format :

```
# Variables
- variable1
- variable2

# Sprite: NomDuSprite
## Scripts
[Scripts détaillés]

# Tests
[Tests à effectuer]
```

## Niveaux disponibles

### Suisse - PER
- `6P-basique.md` : Version basique (1 bug)
- `7P-intermediaire.md` : Version intermédiaire (5 bugs)
- `8P-avance.md` : Version avancée (8 bugs)
- `9P-expert.md` : Version experte (9 bugs)

### France - Eduscol
- `CM1-basique.md` : Version basique (1 bug)
- `CM2-intermediaire.md` : Version intermédiaire (4 bugs)
- `6e-avance.md` : Version avancée (7 bugs)

## Utilisation

1. Ouvrir le fichier correspondant à votre niveau
2. Créer les variables listées dans Scratch
3. Créer les sprites selon les instructions
4. Copier les scripts dans Scratch (en adaptant la syntaxe)
5. Introduire les bugs selon les commentaires

## Syntaxe

Les scripts utilisent une syntaxe proche de Scratch mais adaptée pour la documentation :
- `quand [événement]` = Bloc événement
- `si [condition] alors` = Bloc condition
- `mettre [variable] à [valeur]` = Bloc définir variable
- `// Commentaire` = Bug ou note

## Notes

- Les scripts doivent être adaptés à la syntaxe exacte de Scratch
- Certains blocs peuvent avoir des noms légèrement différents selon la version
- Les bugs sont marqués avec `// BUG` dans les commentaires

