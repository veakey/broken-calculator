# Guide des Versions - Calculatrice Cassée

## 📑 Table des Matières

- [Versions disponibles](#-versions-disponibles)
  - [Version Standard](#1-version-standard-indexhtml)
  - [Version Enfant](#2-version-enfant-index-enfanthtml--nouveau)
  - [Outil Enseignant](#3-outil-enseignant-enseignant-viewerhtml--nouveau)
  - [Créateur de Bugs](#4-créateur-de-bugs-bug-creatorhtml--nouveau)
- [Comment choisir ?](#-comment-choisir-)
- [Comparaison rapide](#-comparaison-rapide)

## 📱 Versions disponibles

### 1. Version Standard (`src/index.html`)
**Pour qui :** Élèves à partir de CM2/6P (10-11 ans) et plus

**Caractéristiques :**
- Interface complète avec toutes les fonctions
- Code JavaScript visible (pour apprentissage)
- Tests unitaires complets
- Fonctions mathématiques avancées (sin, cos, tan, hyp, %)

**Utilisation :**
- Ouvrir `src/index.html` dans un navigateur
- Les élèves peuvent voir et modifier le code JavaScript
- Système de tests pour valider les corrections

---

### 2. Version Enfant (`src/index-enfant.html`) ⭐ NOUVEAU
**Pour qui :** Élèves de CP-CE2/3P-5P (6-9 ans)

**Caractéristiques :**
- Interface simplifiée et colorée
- **Affichage visuel étape par étape** des calculs
- Tests visuels avec feedback coloré (vert = correct, rouge = erreur)
- Pas de code visible pour l'enfant
- Boutons plus grands et plus clairs
- Messages explicatifs simples

**Utilisation :**
- Ouvrir `src/index-enfant.html` dans un navigateur
- Les enfants utilisent la calculatrice normalement
- Les étapes s'affichent visuellement pour comprendre ce qui se passe
- Les tests montrent clairement les erreurs avec des couleurs

**Avantages :**
- Pas besoin de savoir lire du code
- Compréhension visuelle des erreurs
- Feedback immédiat et coloré
- Idéal pour introduction au débogage

---

### 3. Outil Enseignant (`src/enseignant-viewer.html`) ⭐ NOUVEAU
**Pour qui :** Enseignants et accompagnants

**Caractéristiques :**
- Visualisation du code avec coloration syntaxique
- Identification automatique des bugs
- Explications pédagogiques
- Interface claire et professionnelle
- Permet de montrer le code aux élèves de manière compréhensible

**Utilisation :**
- Ouvrir `src/enseignant-viewer.html` dans un navigateur
- Cliquer sur "Charger le code" pour voir le code coloré
- Cliquer sur "Voir les bugs" pour mettre en évidence les erreurs
- Cliquer sur "Explications" pour les détails pédagogiques

**Avantages :**
- Compréhension du code pour tous (même sans connaissances techniques)
- Support pédagogique pour expliquer aux élèves
- Identification rapide des bugs
- Peut être projeté au tableau

---

## 🎯 Quelle version choisir ?

### Pour les tout petits (Maternelle, 1P-2P)
- **Activités manuelles** : Voir les fichiers `activité-sans-code.md`
- Calculatrice jouet avec bugs
- Pas d'écran nécessaire

### Pour Cycle 1 (CP-CE1, 3P-4P)
- **Version Enfant** (`index-enfant.html`)
- Interface simple et visuelle
- Pas de code visible

### Pour Cycle 2 (CE2-CM1, 5P-6P)
- **Version Enfant** pour débuter
- Puis **Version Standard** pour progresser
- Introduction au code progressif

### Pour Cycle 3+ (CM2-6e, 7P+)
- **Version Standard** (`src/index.html`)
- Code visible et modifiable
- Apprentissage complet du débogage

### Pour les enseignants
- **Outil Enseignant** pour comprendre et expliquer
- **Version Standard** pour préparer les activités
- Documentation complète dans les dossiers par niveau

---

## 🔄 Progression recommandée

1. **Découverte** : Version Enfant pour comprendre le concept
2. **Exploration** : Outil Enseignant pour voir le code
3. **Apprentissage** : Version Standard pour modifier le code
4. **Maîtrise** : Créer ses propres bugs et tests

---

## 📝 Notes importantes

- Toutes les versions utilisent le **même code JavaScript** en arrière-plan
- Pas de traduction nécessaire entre les versions
- La Version Enfant ajoute juste une couche visuelle
- L'Outil Enseignant aide à comprendre sans modifier

---

## 🚀 Démarrage rapide

### Pour tester la Version Enfant :
```bash
python3 -m http.server 8000
# Ouvrir http://localhost:8000/index-enfant.html
```

### Pour utiliser l'Outil Enseignant :
```bash
python3 -m http.server 8000
# Ouvrir http://localhost:8000/src/enseignant-viewer.html
```

---

## 📚 Documentation complémentaire

- `TEST-INTERFACE.md` : Guide de test de la version standard
- `assets/scratch/` : Documentation pour les versions Scratch
- Dossiers par niveau : Instructions spécifiques pour chaque cycle

