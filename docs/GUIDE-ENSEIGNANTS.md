# Guide pour les Enseignants - Utilisation des Versions Pédagogiques

Ce guide explique comment utiliser les différentes versions de la calculatrice cassée en classe.

## 📋 Table des Matières

- [Structure des Versions](#structure-des-versions)
- [Comment Copier une Version](#comment-copier-une-version)
- [Utilisation en Classe](#utilisation-en-classe)
- [Fonctionnalités Disponibles](#fonctionnalités-disponibles)
- [Niveaux de Difficulté](#niveaux-de-difficulté)
- [Troubleshooting](#troubleshooting)

## 📁 Structure des Versions

Chaque version pédagogique est **autonome** et peut être copiée directement. La structure typique est :

```
nom-version/
├── index.html          # Page principale
├── calculator.js       # Code de la calculatrice (avec bugs)
├── tests.js            # Tests unitaires
├── styles.css          # Styles de base
├── css/
│   └── tabs.css        # Styles des onglets
└── js/
    ├── tabs.js         # Système d'onglets
    ├── page-init.js    # Initialisation
    └── accessibility-controls.js  # Contrôles d'accessibilité
```

## 📂 Comment Copier une Version

### Méthode 1 : Copier-Coller Simple

1. **Localiser la version** dans le dossier du projet :
   - Versions JavaScript : `france-eduscol/cycle-4-5e-3e/[classe]/js-[niveau]/`
   - Versions Blockly : `suisse-per/cycle-1-1p-4p/[classe]/blockly-calculator/`
   - Versions Scratch : Voir `assets/scratch/`

2. **Copier tout le dossier** de la version souhaitée

3. **Coller** dans votre espace de travail (clé USB, dossier partagé, etc.)

4. **Ouvrir** `index.html` dans un navigateur web

**C'est tout !** Aucune installation nécessaire.

### Méthode 2 : Utilisation Directe

1. **Ouvrir** directement le fichier `index.html` depuis le dossier du projet
2. Le navigateur chargera automatiquement tous les fichiers nécessaires

⚠️ **Note :** Certains navigateurs peuvent bloquer le chargement de fichiers locaux. Dans ce cas, utilisez un serveur local simple (voir ci-dessous).

### Méthode 3 : Avec un Serveur Local (Optionnel)

Si vous avez besoin d'un serveur local :

```bash
# Dans le dossier de la version
python3 -m http.server 8000

# Puis ouvrir dans le navigateur :
# http://localhost:8000/index.html
```

## 🎓 Utilisation en Classe

### Pour les Élèves

1. **Ouvrir** `index.html` dans un navigateur
2. **Tester** la calculatrice pour voir les bugs
3. **Lancer les tests** pour identifier les erreurs
4. **Ouvrir l'onglet "Console (Code)"** pour voir/modifier le code
5. **Corriger les bugs** dans l'éditeur de code
6. **Appliquer le code** et vérifier avec les tests

### Pour les Enseignants

1. **Préparer** la version adaptée au niveau de la classe
2. **Tester** vous-même avant la séance
3. **Projeter** au tableau si besoin
4. **Guider** les élèves dans l'identification des bugs
5. **Expliquer** comment utiliser l'éditeur de code

## ✨ Fonctionnalités Disponibles

### Système d'Onglets

- **Onglet "Calculatrice"** : Interface de la calculatrice
- **Onglet "Console (Code)"** : Éditeur de code modifiable

### Éditeur de Code

- **Éditeur intégré** : Les élèves peuvent modifier le code directement
- **Template adapté** : Instructions différentes selon le niveau
- **Bouton "Appliquer le code"** : Exécute le code modifié
- **Feedback visuel** : Message de succès ou d'erreur

### Contrôles d'Accessibilité

- **A-** : Réduire la taille de police
- **A+** : Augmenter la taille de police
- **☀** : Basculer entre mode clair/sombre

### Système de Tests

- **Tests unitaires** : Validation automatique des corrections
- **Feedback visuel** : ✅ pour les tests qui passent, ❌ pour les échecs
- **Indices** : Bouton pour obtenir des indices sur les bugs

## 📊 Niveaux de Difficulté

### Niveau Basique (5e, 9P)

- **Template de code** : Instructions très détaillées avec exemples
- **Bugs** : 2 bugs simples et évidents
- **Objectif** : Comprendre la structure de base

### Niveau Intermédiaire (4e, 10P)

- **Template de code** : Instructions modérées avec exemples
- **Bugs** : 4 bugs plus subtils
- **Objectif** : Analyser et corriger plusieurs bugs

### Niveau Avancé (3e, 11P, Terminale)

- **Template de code** : Instructions minimales
- **Bugs** : 6+ bugs complexes
- **Objectif** : Maîtriser le débogage et les tests

## 🔧 Troubleshooting

### Le code ne s'applique pas

- Vérifier qu'il n'y a pas d'erreurs de syntaxe
- Regarder la console du navigateur (F12) pour les erreurs
- S'assurer que le bouton "Appliquer le code" a été cliqué

### Les styles ne s'affichent pas correctement

- Vérifier que tous les fichiers CSS sont présents
- Vérifier les chemins relatifs dans `index.html`
- Tester avec un serveur local si nécessaire

### Les tests ne fonctionnent pas

- Vérifier que `tests.js` est chargé
- Vérifier la console du navigateur pour les erreurs
- S'assurer que `calculator.js` est chargé avant `tests.js`

### Les onglets ne s'affichent pas

- Vérifier que `tabs.css` est chargé
- Vérifier que `tabs.js` est chargé
- Vérifier la console du navigateur pour les erreurs

## 📚 Ressources Complémentaires

- **Documentation complète** : Voir les fichiers `README.md` dans chaque dossier de version
- **Guide des versions** : `docs/GUIDE-VERSIONS.md`
- **Installation** : `docs/INSTALLATION.md`
- **Structure du projet** : `docs/STRUCTURE.md`

## 💡 Conseils Pédagogiques

1. **Commencez simple** : Utilisez la version basique pour introduire le concept
2. **Progression graduelle** : Passez aux versions intermédiaires puis avancées
3. **Travail en groupe** : Encouragez les élèves à travailler en binômes
4. **Débogage guidé** : Guidez les élèves dans l'utilisation des tests
5. **Valorisation** : Célébrez les corrections réussies

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifier ce guide
2. Consulter la documentation dans les dossiers de version
3. Tester avec un autre navigateur
4. Vérifier la console du navigateur (F12) pour les erreurs

---

**Bon enseignement !** 🎓

