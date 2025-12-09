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
4. **Créateur de Bugs** (`bug-creator.html`) ⭐ : Pour les enseignants - Créer des bugs personnalisés

**📖 Voir `GUIDE-CREATEUR-BUGS.md` pour un guide complet et détaillé.**

**Voir `GUIDE-VERSIONS.md` pour choisir la bonne version.**

### 🔄 Comment passer d'un mode à l'autre ?

**C'est très simple !** Il suffit d'ouvrir le fichier HTML correspondant dans votre navigateur :

#### Mode Enfant → Mode Standard
1. Fermer `index-enfant.html`
2. Ouvrir `index.html` dans le navigateur
3. **C'est tout !** Les deux utilisent le même `calculator.js` en arrière-plan

#### Mode Standard → Mode Enfant
1. Fermer `index.html`
2. Ouvrir `index-enfant.html` dans le navigateur
3. L'interface change automatiquement (plus simple, plus visuelle)

#### Accéder à l'Outil Enseignant
1. Ouvrir `enseignant-viewer.html` dans le navigateur
2. Cliquer sur "Afficher le code" pour voir le code coloré
3. Cliquer sur "Comparaison Avant/Après" pour voir les deux versions côte à côte

#### Créer des bugs personnalisés
1. Ouvrir `bug-creator.html` dans le navigateur
2. Cocher les bugs que vous voulez introduire
3. Cliquer sur "Générer le code"
4. Cliquer sur "Télécharger calculator.js" pour obtenir votre version personnalisée
5. Remplacer le fichier `calculator.js` existant par celui téléchargé

**💡 Astuce :** Vous pouvez avoir plusieurs onglets ouverts en même temps pour comparer les modes !

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

### Fonctionnalités avancées des tests

- **Export des résultats** : Bouton "📥 Exporter les résultats" pour télécharger un rapport texte
- **Historique des calculs** : Liste des derniers calculs avec indication des erreurs
- **Statistiques** : Graphiques montrant la difficulté de chaque bug et le temps moyen
- **Indices progressifs** : Bouton "Obtenir un indice" pour des indices de plus en plus précis

## 📁 Structure des Fichiers

```
broken-calculator/
├── index.html              # Version principale (CM2/6P+)
├── index-enfant.html        # Version enfant (CP-CE2/3P-5P)
├── enseignant-viewer.html   # Outil enseignant (visualisation code)
├── bug-creator.html         # Créateur de bugs personnalisés
├── calculator.js            # Code de la calculatrice (avec bugs)
├── calculator-corrected.js  # Version corrigée (pour comparaison)
├── tests.js                 # Système de tests
├── styles.css               # Style glassmorphism
├── styles-enfant.css        # Styles version enfant
├── keyboard-support.js      # Support clavier
├── display-feedback.js      # Animations de feedback
├── hints-system.js          # Système d'indices progressifs
├── calculation-history.js   # Historique des calculs
├── error-statistics.js      # Statistiques des erreurs
├── accessibility-controls.js # Contrôles d'accessibilité
├── bug-creator.js           # Logique du créateur de bugs
├── calculator-enfant.js     # Logique version enfant
├── tests-enfant.js          # Tests version enfant
├── suisse-per/              # Versions PER (Suisse)
├── france-eduscol/          # Versions Eduscol (France)
└── prompts/                  # Documentation du projet
```

## 🎨 Design

L'interface utilise un style **glassmorphism** (liquid glass) avec :
- Effets de transparence et flou
- Animations de gradient
- Design moderne et responsive

### Contrôles d'accessibilité

Dans la version standard (`index.html`), vous trouverez en haut à droite :
- **A-** / **A+** : Ajuster la taille de la police (80% à 150%)
- **🌓** : Basculer entre mode clair et mode sombre
- **🎨** : Activer le mode daltonien (formes + bordures en plus des couleurs)

**💾 Les préférences sont sauvegardées automatiquement** dans votre navigateur !

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

## ✨ Nouvelles Fonctionnalités

### Pour les élèves
- **Support clavier** : Utilisez votre clavier numérique (chiffres, +, -, *, /, Entrée, Escape)
- **Animation de feedback** : L'écran clignote en vert (correct) ou rouge (erreur)
- **Indices progressifs** : Obtenez des indices de plus en plus précis pour trouver les bugs
- **Historique des calculs** : Voyez tous vos calculs avec indication des erreurs
- **Statistiques** : Graphiques montrant votre progression et la difficulté de chaque bug

### Pour les enseignants
- **Comparaison avant/après** : Voir le code buggé et corrigé côte à côte
- **Créateur de bugs** : Créez vos propres bugs personnalisés pour vos élèves
- **Export des résultats** : Téléchargez les résultats des tests de vos élèves
- **Visualisation du code** : Code coloré avec explications pédagogiques

### Accessibilité
- **Taille de police ajustable** : A+ / A- pour adapter la taille
- **Mode sombre/clair** : Basculer entre les thèmes
- **Mode daltonien** : Formes et bordures en plus des couleurs

## 📄 Licence

Projet éducatif libre d'utilisation pour l'enseignement.

