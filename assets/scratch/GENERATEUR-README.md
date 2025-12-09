# Générateur de Projets Scratch

## Description

Le script `generate-scratch-project.py` génère automatiquement la structure de base d'un projet Scratch pour la calculatrice cassée. Il crée :

- ✅ Les variables nécessaires (nombre1, nombre2, operateur, affichage, resultat, etc.)
- ✅ Le sprite Calculatrice avec script d'affichage de base
- ✅ La structure JSON compatible Scratch
- ✅ Les métadonnées pour guider la complétion manuelle

## Installation

Aucune dépendance externe nécessaire, utilise uniquement la bibliothèque standard Python.

```bash
chmod +x generate-scratch-project.py
```

## Utilisation

### Commande de base

```bash
python3 generate-scratch-project.py --niveau basique --output mon-projet.json
```

### Options disponibles

- `--niveau` : Niveau de difficulté
  - `basique` : Variables de base uniquement
  - `intermediaire` : Ajoute `en_attente`
  - `avance` : Ajoute `en_attente`
  - `expert` : Ajoute `en_attente` et `mode_decimale`

- `--advanced` : Inclure les fonctions avancées (sin, cos, tan, hyp, %)
  - Ajoute des variables supplémentaires si nécessaire
  - Prépare la structure pour les boutons avancés

- `--output` : Nom du fichier de sortie (défaut: `project-generated.json`)

### Exemples

```bash
# Version basique
python3 generate-scratch-project.py --niveau basique --output 6P-basique.json

# Version avancée avec fonctions mathématiques
python3 generate-scratch-project.py --niveau avance --advanced --output 8P-avance.json

# Version experte
python3 generate-scratch-project.py --niveau expert --advanced --output 9P-expert.json
```

## Structure générée

Le fichier JSON généré contient :

1. **Stage** : Variables globales
2. **Sprite Calculatrice** : 
   - Script d'affichage de base (affiche la variable `affichage`)
   - Structure prête pour ajouter les scripts

3. **Métadonnées** (`_meta`) :
   - Date de génération
   - Niveau
   - Liste des variables créées avec leurs IDs
   - Instructions pour compléter le projet

## Prochaines étapes après génération

### 1. Ouvrir dans Scratch

1. Renommer le fichier `.json` en `.sb3` (ou créer une archive ZIP)
2. Ouvrir dans Scratch Desktop ou Scratch en ligne
3. Le projet s'ouvrira avec les variables et le sprite de base

### 2. Créer les sprites des boutons

Créer les sprites suivants :
- Boutons numériques : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Bouton point décimal : .
- Boutons opérateurs : +, -, ×, ÷
- Bouton égal : =
- Bouton Clear : C

Si `--advanced` a été utilisé, ajouter aussi :
- sin, cos, tan, hyp, %

### 3. Ajouter les scripts

Pour chaque bouton, ajouter les scripts selon :
- `assets/scratch/source/<niveau>.md` pour les scripts de base
- `assets/scratch/version-avec-tests/bugs-detaille.md` pour les bugs à introduire

### 4. Ajouter les bugs intentionnels

Suivre les instructions dans `bugs-detaille.md` pour introduire les bugs selon le niveau.

### 5. Créer le sprite Testeur (optionnel)

Si vous voulez les tests unitaires :
- Créer un sprite "Testeur"
- Ajouter les scripts selon `tests-scratch.md`
- Ajouter les variables de test

## Limitations

Le générateur crée uniquement :
- ✅ La structure de base
- ✅ Les variables
- ✅ Le sprite Calculatrice avec affichage

Il ne crée **PAS** :
- ❌ Les sprites des boutons (à créer manuellement)
- ❌ Les scripts des boutons (à ajouter manuellement)
- ❌ Les bugs intentionnels (à introduire manuellement)
- ❌ Les costumes des sprites (à dessiner manuellement)

## Avantages

- ⚡ **Gain de temps** : Pas besoin de créer toutes les variables manuellement
- 🎯 **Structure cohérente** : Tous les projets ont la même base
- 📝 **Documentation intégrée** : Les métadonnées guident la complétion
- 🔧 **Modulaire** : Facile d'ajouter de nouvelles fonctionnalités

## Améliorations futures possibles

- [ ] Génération automatique des scripts de base pour les boutons
- [ ] Génération des bugs intentionnels directement dans le JSON
- [ ] Support pour générer les costumes SVG de base
- [ ] Génération du sprite Testeur avec tous les tests
- [ ] Interface graphique pour faciliter l'utilisation

## Support

Pour plus d'informations :
- Voir `assets/scratch/source/` pour les scripts détaillés
- Voir `assets/scratch/version-avec-tests/` pour les tests
- Voir les README.md de chaque niveau pour les instructions spécifiques

