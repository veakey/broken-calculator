# Instructions pour créer les fichiers .sb3

## Méthode 1 : Création manuelle de l'archive

### Étapes

1. **Aller dans le dossier du niveau souhaité**
   ```bash
   cd assets/scratch/sb3/6P-basique
   ```

2. **Créer une archive ZIP de tout le contenu**
   - Sur Linux/Mac :
     ```bash
     zip -r calculatrice-erreurs.zip .
     ```
   - Sur Windows : Clic droit → Envoyer vers → Dossier compressé

3. **Renommer l'archive en .sb3**
   ```bash
   mv calculatrice-erreurs.zip calculatrice-erreurs.sb3
   ```
   Ou renommer manuellement en changeant l'extension.

4. **Ouvrir dans Scratch**
   - Scratch en ligne : Fichier → Charger depuis votre ordinateur
   - Scratch Desktop : Fichier → Charger depuis votre ordinateur

## Méthode 2 : Script automatique

### Script bash (Linux/Mac)

Créer un fichier `create-sb3.sh` :

```bash
#!/bin/bash

cd assets/scratch/sb3

for dir in */; do
    if [ -d "$dir" ]; then
        cd "$dir"
        zip -r "${dir%/}.sb3" .
        mv "${dir%/}.sb3" ..
        cd ..
    fi
done

echo "Tous les fichiers .sb3 ont été créés !"
```

Exécuter :
```bash
chmod +x create-sb3.sh
./create-sb3.sh
```

## Structure d'un fichier .sb3

Un fichier .sb3 est une archive ZIP contenant :

```
calculatrice-erreurs.sb3 (ZIP)
├── project.json          # Fichier principal (OBLIGATOIRE)
└── (assets optionnels)   # Images, sons, etc.
```

## Fichier project.json

Le fichier `project.json` contient :
- **targets** : Liste des sprites et de la scène
- **variables** : Variables globales et locales
- **blocks** : Tous les scripts/blocs
- **costumes** : Costumes des sprites
- **sounds** : Sons (optionnel)
- **meta** : Métadonnées du projet

## Notes importantes

⚠️ **Le format JSON de Scratch est très complexe et spécifique.**

Les fichiers `project.json` fournis sont des **templates de base**. Pour créer des projets complets :

1. **Option recommandée** : Créer le projet dans Scratch, puis exporter en .sb3
2. **Option avancée** : Utiliser les templates JSON comme base et les compléter

## Compléter un projet

Pour compléter un projet à partir du template :

1. Ouvrir Scratch
2. Créer un nouveau projet
3. Créer les sprites et scripts selon les guides dans `source/`
4. Exporter en .sb3
5. Décompresser l'archive
6. Remplacer `project.json` par celui du template (si nécessaire)
7. Recompresser et renommer en .sb3

## Vérification

Pour vérifier qu'un fichier .sb3 est valide :

1. Renommer en .zip
2. Décompresser
3. Vérifier la présence de `project.json`
4. Vérifier que le JSON est valide
5. Recompresser et renommer en .sb3

## Outils utiles

- **Validateur JSON** : https://jsonlint.com/
- **Éditeur JSON** : VS Code, Sublime Text, etc.
- **Archiveur** : 7-Zip, WinRAR, zip (Linux/Mac)

