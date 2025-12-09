# Guide pour Créer les Fichiers .sb3

## 📦 Qu'est-ce qu'un fichier .sb3 ?

Un fichier `.sb3` est une archive ZIP contenant :
- `project.json` : Structure complète du projet Scratch
- Assets (images, sons) : Si présents dans le projet

## 🚀 Méthode 1 : Utiliser le Générateur Python

### Étape 1 : Générer la structure de base

```bash
cd assets/scratch

# Pour un niveau basique
python3 generate-scratch-project.py --niveau basique --output 6P-basique.json

# Pour un niveau avancé avec fonctions mathématiques
python3 generate-scratch-project.py --niveau avance --advanced --output 8P-avance.json
```

### Étape 2 : Compléter dans Scratch

1. **Renommer le fichier** : `6P-basique.json` → `6P-basique.sb3`
   - Ou créer une archive ZIP et renommer en `.sb3`

2. **Ouvrir dans Scratch** :
   - Scratch Desktop : Fichier → Charger depuis votre ordinateur
   - Scratch en ligne : Fichier → Charger depuis votre ordinateur

3. **Compléter le projet** :
   - Créer les sprites des boutons
   - Ajouter les scripts selon les README.md
   - Introduire les bugs selon `bugs-detaille.md`

4. **Sauvegarder** : Le fichier `.sb3` sera créé automatiquement

## 🎨 Méthode 2 : Créer depuis Scratch (Manuel)

### Étape 1 : Créer le projet dans Scratch

1. Ouvrir Scratch (en ligne ou Desktop)
2. Créer un nouveau projet
3. Suivre les instructions dans les README.md correspondants

### Étape 2 : Structure de base

#### Variables à créer (pour tous les sprites)

- `nombre1` (nombre)
- `nombre2` (nombre)
- `operateur` (texte)
- `affichage` (texte)
- `resultat` (nombre)

**Pour niveaux intermédiaires/avancés :**
- `en_attente` (booléen)

**Pour niveau expert :**
- `mode_decimale` (booléen)

#### Sprite Calculatrice

1. Créer un sprite "Calculatrice"
2. Dessiner le corps (rectangle arrondi 400×300)
3. Dessiner l'écran (rectangle 350×80, noir)
4. Ajouter le script d'affichage :

```
quand le drapeau vert est cliqué
répéter indéfiniment
    dire [affichage]
fin
```

#### Sprites Boutons

Créer les sprites suivants :

**Boutons numériques :** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
**Bouton décimal :** .
**Boutons opérateurs :** +, -, ×, ÷
**Bouton égal :** =
**Bouton Clear :** C

**Pour niveaux avancés :**
- sin, cos, tan, hyp, %

### Étape 3 : Ajouter les scripts

Suivre les instructions dans :
- `assets/scratch/source/<niveau>.md` pour les scripts de base
- `assets/scratch/version-avec-tests/bugs-detaille.md` pour les bugs

### Étape 4 : Introduire les bugs

Modifier les scripts selon `bugs-detaille.md` pour introduire les bugs intentionnels.

### Étape 5 : Sauvegarder

1. Fichier → Enregistrer sur votre ordinateur
2. Le fichier `.sb3` sera téléchargé/créé

## 🔧 Méthode 3 : Conversion JSON → SB3

Si vous avez un `project.json` complet :

```bash
# Créer une archive ZIP
cd dossier-du-projet
zip -r projet.sb3 project.json

# Ou avec le script fourni
cd assets/scratch/sb3
./create-sb3.sh
```

## 📁 Structure des dossiers .sb3

Dans `assets/scratch/sb3/`, il y a des dossiers pour chaque niveau :

```
sb3/
├── 6P-basique/
│   ├── project.json
│   └── README.md
├── 7P-intermediaire/
│   ├── project.json
│   └── README.md
└── ...
```

### Pour créer le .sb3 depuis ces dossiers

```bash
cd assets/scratch/sb3/6P-basique
zip -r ../../6P-basique.sb3 project.json README.md
```

## ✅ Vérification

Après création du `.sb3` :

1. **Ouvrir dans Scratch** : Le projet doit s'ouvrir correctement
2. **Vérifier les variables** : Toutes les variables doivent être présentes
3. **Vérifier les sprites** : Tous les sprites doivent être présents
4. **Tester les scripts** : Les scripts doivent fonctionner (avec bugs)

## 🐛 Dépannage

### Le fichier .sb3 ne s'ouvre pas

- Vérifier que c'est bien une archive ZIP valide
- Vérifier que `project.json` est présent et valide
- Essayer de renommer en `.zip` et vérifier le contenu

### Les variables ne sont pas visibles

- Vérifier que les variables sont créées "pour tous les sprites"
- Vérifier les IDs dans le JSON

### Les scripts ne fonctionnent pas

- Vérifier la syntaxe des blocs
- Vérifier que les opcodes sont corrects
- Vérifier les références aux variables (IDs)

## 📝 Notes importantes

- Les fichiers `.sb3` sont des archives ZIP, mais Scratch les reconnaît avec l'extension `.sb3`
- Le `project.json` doit être valide JSON
- Les IDs des variables/blocs doivent être uniques
- Les références entre blocs utilisent des IDs

## 🎯 Workflow recommandé

1. **Générer la structure** avec `generate-scratch-project.py`
2. **Ouvrir dans Scratch** et compléter visuellement
3. **Ajouter les scripts** selon la documentation
4. **Introduire les bugs** selon `bugs-detaille.md`
5. **Tester** avec le sprite Testeur (si version avec tests)
6. **Sauvegarder** en `.sb3`

## 🔗 Ressources

- `GENERATEUR-README.md` : Guide du générateur Python
- `source/<niveau>.md` : Scripts détaillés par niveau
- `version-avec-tests/` : Version avec tests unitaires
- `sb3/create-sb3.sh` : Script bash pour créer les .sb3

