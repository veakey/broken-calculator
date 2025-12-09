# 🔧 Calculatrice Cassée - Projet Pédagogique

Un projet éducatif pour apprendre le débogage et la résolution de problèmes en programmation, adapté aux programmes scolaires français (Eduscol) et suisse (PER).

## 📚 Structure du Projet

Le projet est organisé selon deux systèmes éducatifs :

### 🇨🇭 Suisse - Plan d'Études Romand (PER)
- **Cycle 1 (1P-4P)** : Activités sans code et pré-algorithmique
- **Cycle 2 (5P-8P)** : Débogage visuel et Scratch (basique à avancé)
- **Cycle 3 (9P-11P)** : JavaScript (débutant à avancé) et Python

### 🇫🇷 France - Eduscol
- **Cycle 1 (Maternelle)** : Activités sans code et logique
- **Cycle 2 (CP-CE2)** : Débogage sans code et mini-algorithmes
- **Cycle 3 (CM1-6e)** : Scratch (basique à avancé)
- **Cycle 4 (5e-3e)** : JavaScript (basique à avancé)
- **Lycée** : Python et JavaScript modulaire

## 🎯 Objectif

Réparer une calculatrice qui contient des bugs intentionnels en :
1. Identifiant les erreurs grâce aux tests
2. Localisant les bugs dans le code
3. Corrigeant les erreurs
4. Validant les corrections avec les tests

## 🚀 Utilisation

### ⚡ Installation Ultra-Simple

**Aucun serveur, npm, git ou installation nécessaire !**

1. **Télécharger le projet** (ZIP ou git clone)
2. **Ouvrir directement** les fichiers HTML dans votre navigateur :
   - `index.html` → Version standard
   - `index-enfant.html` → Version enfant
   - `enseignant-viewer.html` → Outil enseignant
3. **C'est tout !** 

**Voir `INSTALLATION.md` pour plus de détails.**

### Versions disponibles

1. **Version Standard** (`index.html`) : Pour CM2/6P et plus - Code visible
2. **Version Enfant** (`index-enfant.html`) ⭐ : Pour CP-CE2/3P-5P - Interface visuelle simplifiée
3. **Outil Enseignant** (`enseignant-viewer.html`) ⭐ : Pour les enseignants - Visualisation du code

**Voir `GUIDE-VERSIONS.md` pour choisir la bonne version.**

### Modifier le code

1. Ouvrir `calculator.js` avec un éditeur de texte
2. Modifier le code
3. Sauvegarder
4. Recharger la page (F5)

**Pas besoin de compiler, installer, ou configurer quoi que ce soit !**

### Versions par niveau
Chaque niveau a sa propre version dans les dossiers correspondants :
- **Débutant** : 2 bugs simples
- **Intermédiaire** : 4 bugs modérés
- **Avancé** : 6+ bugs complexes (avec fonctions mathématiques avancées)

## 🧪 Système de Tests

Chaque version inclut un système de tests qui :
- Vérifie toutes les opérations de base
- Teste les cas limites (décimaux, division par zéro, etc.)
- Affiche les résultats avec un score
- Valide la réparation complète

## 📁 Structure des Fichiers

```
broken-calculator/
├── index.html          # Version principale
├── calculator.js       # Code de la calculatrice (avec bugs)
├── tests.js           # Système de tests
├── styles.css          # Style glassmorphism
├── suisse-per/         # Versions PER (Suisse)
├── france-eduscol/     # Versions Eduscol (France)
└── prompts/            # Documentation du projet
```

## 🎨 Design

L'interface utilise un style **glassmorphism** (liquid glass) avec :
- Effets de transparence et flou
- Animations de gradient
- Design moderne et responsive

## 📖 Documentation

Chaque niveau contient :
- Tutoriels pour les élèves
- Objectifs pédagogiques
- Guides de débogage
- Activités adaptées

## 🛠️ Technologies

- **HTML5** : Structure
- **CSS3** : Style avec glassmorphism
- **JavaScript** : Logique et tests
- **Python** : Version pour niveaux avancés

## 📝 Notes

- Les versions Scratch nécessitent des fichiers `.sb3` (non inclus, arborescence créée)
- **Créer les fichiers .sb3** : Voir `assets/scratch/CREER-SB3.md` pour le guide complet
- **Générateur Python** : Utiliser `assets/scratch/generate-scratch-project.py` pour créer la structure de base
- **Assets Scratch** : Voir le dossier `assets/scratch/` pour les guides de création des sprites
- Les niveaux sans code utilisent des activités manuelles
- Chaque version est adaptée au niveau de difficulté approprié

## 🎨 Assets Scratch

Le dossier `assets/scratch/` contient :
- **Instructions** : Guides complets pour créer les sprites de la calculatrice
- **Références** : Descriptions détaillées, palette de couleurs, positionnement
- **Guide rapide** : Version condensée pour création rapide

Voir `assets/README.md` pour plus d'informations.

## 🎓 Compétences Développées

- Débogage et résolution de problèmes
- Analyse de code
- Tests unitaires et fonctionnels
- Méthodologie de travail
- Pensée logique et algorithmique

## 📄 Licence

Projet éducatif libre d'utilisation pour l'enseignement.

