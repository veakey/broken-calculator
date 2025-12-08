#!/bin/bash

# Script pour créer automatiquement les fichiers .sb3
# Usage: ./create-sb3.sh

echo "🔧 Création des fichiers .sb3..."

cd "$(dirname "$0")"

for dir in */; do
    if [ -d "$dir" ] && [ "$dir" != "README.md" ] && [ "$dir" != "INSTRUCTIONS.md" ]; then
        dirname="${dir%/}"
        echo "📦 Création de ${dirname}.sb3..."
        
        cd "$dir"
        
        # Créer l'archive ZIP
        zip -r "../${dirname}.sb3" . > /dev/null 2>&1
        
        if [ $? -eq 0 ]; then
            echo "  ✅ ${dirname}.sb3 créé avec succès"
        else
            echo "  ❌ Erreur lors de la création de ${dirname}.sb3"
        fi
        
        cd ..
    fi
done

echo ""
echo "✨ Terminé ! Les fichiers .sb3 sont dans le dossier actuel."
echo "💡 Vous pouvez maintenant les ouvrir dans Scratch !"

