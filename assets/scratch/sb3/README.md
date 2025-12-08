# Structure des fichiers .sb3

## Format .sb3

Les fichiers `.sb3` sont des archives ZIP contenant :
- `project.json` : Fichier principal avec toute la structure du projet Scratch
- Assets (images, sons) dans des sous-dossiers (optionnel)

## Utilisation

### Pour créer un fichier .sb3

1. Aller dans le dossier du niveau souhaité (ex: `6P-basique/`)
2. Créer une archive ZIP de tout le contenu du dossier
3. Renommer l'archive en `.sb3` (ex: `calculatrice-erreurs.sb3`)
4. Ouvrir dans Scratch

### Structure d'un dossier

```
niveau/
├── project.json          # Fichier principal (OBLIGATOIRE)
└── (assets optionnels)   # Images, sons, etc.
```

## Import dans Scratch

### Scratch en ligne
1. Aller sur https://scratch.mit.edu
2. Créer un nouveau projet
3. Fichier → Charger depuis votre ordinateur
4. Sélectionner le fichier .sb3

### Scratch Desktop
1. Ouvrir Scratch Desktop
2. Fichier → Charger depuis votre ordinateur
3. Sélectionner le fichier .sb3

## Notes

- Le fichier `project.json` contient toute la structure du projet
- Les assets sont optionnels (peuvent être créés directement dans Scratch)
- La structure JSON est complexe mais suit le format standard de Scratch
- Chaque niveau a sa propre structure avec les bugs appropriés

## Fichiers disponibles

- `6P-basique/` : Version basique (1 bug)
- `7P-intermediaire/` : Version intermédiaire (5 bugs)
- `8P-avance/` : Version avancée (8 bugs)
- `9P-expert/` : Version experte (9 bugs)
- `CM1-basique/` : Version basique CM1 (1 bug)
- `CM2-intermediaire/` : Version intermédiaire CM2 (4 bugs)
- `6e-avance/` : Version avancée 6e (7 bugs)

