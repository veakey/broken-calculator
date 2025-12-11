# Guide de Test de l'Interface Web

## 📑 Table des Matières

- [Démarrage rapide](#-démarrage-rapide)
  - [Ouvrir directement (Recommandé)](#ouvrir-directement-recommandé)
  - [Option alternative : Serveur local](#option-alternative--serveur-local-si-problème-avec-file)
- [Checklist de test](#-checklist-de-test)
  - [Interface visuelle](#interface-visuelle)
  - [Fonctionnalités de base](#fonctionnalités-de-base)
  - [Système de tests](#système-de-tests)
  - [Fonctionnalités avancées](#fonctionnalités-avancées)
- [Tests spécifiques par version](#-tests-spécifiques-par-version)
- [Dépannage](#-dépannage)

## 🚀 Démarrage rapide

### Ouvrir directement (Recommandé)

**Double-cliquer sur `src/index.html`** ou faire glisser le fichier dans le navigateur.

**C'est tout !** Pas besoin de serveur, npm, git, ou autre installation.

### Option alternative : Serveur local (si problème avec file://)

**Uniquement si vous avez des problèmes** (rare) :

```bash
# Dans le dossier du projet
python3 -m http.server 8000

# Puis ouvrir dans le navigateur :
# http://localhost:8000
```

**Mais normalement, ce n'est PAS nécessaire !**

## ✅ Checklist de test

### Interface visuelle

- [ ] La calculatrice est bien positionnée à gauche
- [ ] La zone de tests est bien positionnée à droite
- [ ] Le style glassmorphism est appliqué (transparence, flou)
- [ ] Les boutons avancés (sin, cos, tan, hyp, %) sont visibles en haut
- [ ] Le bouton "Lancer les Tests" est visible dans la zone de droite
- [ ] L'écran de la calculatrice affiche "0" au démarrage

### Fonctionnalités de base

- [ ] Les boutons numériques (0-9) fonctionnent
- [ ] Le point décimal (.) fonctionne
- [ ] Le bouton Clear (C) réinitialise l'affichage
- [ ] Les opérateurs (+, -, ×, ÷) fonctionnent

### Bugs intentionnels à vérifier

- [ ] **Addition** : 5 + 3 donne 2 (au lieu de 8) ❌
- [ ] **Soustraction** : 10 - 4 donne 14 (au lieu de 6) ❌
- [ ] **Multiplication** : 6 × 7 donne ~0.86 (au lieu de 42) ❌
- [ ] **Division** : 20 ÷ 4 donne 80 (au lieu de 5) ❌
- [ ] **Pourcentage** : 50 % de 20 donne 1000 (au lieu de 10) ❌

### Fonctions avancées (bugs)

- [ ] **Sinus** : sin(30°) donne ~0.866 (cos au lieu de sin) ❌
- [ ] **Cosinus** : cos(60°) donne ~1.732 (tan au lieu de cos) ❌
- [ ] **Tangente** : tan(45°) donne ~0.707 (sin au lieu de tan) ❌
- [ ] **Hypoténuse** : hyp(3) donne 6 (addition au lieu de calcul) ❌

### Système de tests

- [ ] Le bouton "Lancer les Tests" fonctionne
- [ ] Les tests s'affichent dans la zone de droite
- [ ] Les tests montrent ❌ pour les bugs (comportement attendu)
- [ ] Le score s'affiche (ex: "5/12 tests réussis")
- [ ] Les détails de chaque test sont visibles (attendu vs obtenu)

### Responsive design

- [ ] Sur petit écran (< 900px), la calculatrice et les tests s'empilent verticalement
- [ ] L'interface reste utilisable sur mobile
- [ ] Les boutons restent cliquables sur tactile

## 🐛 Tests des bugs spécifiques

### Test 1 : Addition buggée
```
Action : Cliquer sur 5, puis +, puis 3, puis =
Résultat attendu (avec bug) : 2
Résultat correct (après réparation) : 8
```

### Test 2 : Soustraction buggée
```
Action : Cliquer sur 10, puis -, puis 4, puis =
Résultat attendu (avec bug) : 14
Résultat correct (après réparation) : 6
```

### Test 3 : Multiplication buggée
```
Action : Cliquer sur 6, puis ×, puis 7, puis =
Résultat attendu (avec bug) : ~0.86
Résultat correct (après réparation) : 42
```

### Test 4 : Division buggée
```
Action : Cliquer sur 20, puis ÷, puis 4, puis =
Résultat attendu (avec bug) : 80
Résultat correct (après réparation) : 5
```

### Test 5 : Pourcentage buggé
```
Action : Cliquer sur 50, puis %, puis 20, puis =
Résultat attendu (avec bug) : 1000
Résultat correct (après réparation) : 10
```

### Test 6 : Sinus buggé
```
Action : Cliquer sur 30, puis sin
Résultat attendu (avec bug) : ~0.866 (cos(30°))
Résultat correct (après réparation) : ~0.5 (sin(30°))
```

### Test 7 : Cosinus buggé
```
Action : Cliquer sur 60, puis cos
Résultat attendu (avec bug) : ~1.732 (tan(60°))
Résultat correct (après réparation) : 0.5 (cos(60°))
```

### Test 8 : Tangente buggée
```
Action : Cliquer sur 45, puis tan
Résultat attendu (avec bug) : ~0.707 (sin(45°))
Résultat correct (après réparation) : 1 (tan(45°))
```

## 🔧 Après réparation

Une fois les bugs corrigés dans `src/js/calculator.js` :

- [ ] Tous les tests doivent passer (✅)
- [ ] Le score doit être "12/12 tests réussis"
- [ ] Le message "🎉 Félicitations !" doit s'afficher
- [ ] Toutes les opérations donnent les bons résultats

## 📝 Notes

- Les tests utilisent une tolérance pour les nombres décimaux (0.0001)
- Les tests trigonométriques utilisent une tolérance de 0.01
- Le test de l'hypoténuse vérifie juste que ça ne crashe pas (simplifié)

## 🌐 Navigateurs testés

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile (Chrome/Firefox)

