# 🐛 Guide du Créateur de Bugs

## 📑 Table des Matières

- [À quoi sert cet outil ?](#-à-quoi-sert-cet-outil-)
- [Pourquoi utiliser cet outil ?](#-pourquoi-utiliser-cet-outil-)
  - [Scénario 1 : Exercice progressif](#scénario-1--exercice-progressif)
  - [Scénario 2 : Adaptation au niveau](#scénario-2--adaptation-au-niveau)
  - [Scénario 3 : Focus sur un type d'erreur](#scénario-3--focus-sur-un-type-derreur)
- [Comment utiliser le Créateur de Bugs](#-comment-utiliser-le-créateur-de-bugs)
  - [Étape 1 : Ouvrir l'outil](#étape-1--ouvrir-loutil)
  - [Étape 2 : Sélectionner les bugs](#étape-2--sélectionner-les-bugs)
  - [Étape 3 : Générer le code](#étape-3--générer-le-code)
  - [Étape 4 : Télécharger et utiliser](#étape-4--télécharger-et-utiliser)
- [Liste des Bugs Disponibles](#-liste-des-bugs-disponibles)
- [Exemples d'Utilisation](#-exemples-dutilisation)
- [Dépannage](#-dépannage)

## 📖 À quoi sert cet outil ?

Le **Créateur de Bugs** est un outil simple qui vous permet de créer vos propres exercices de débogage personnalisés pour vos élèves. 

Au lieu d'utiliser toujours les mêmes bugs, vous pouvez :
- ✅ Choisir quels bugs introduire dans la calculatrice
- ✅ Adapter la difficulté selon le niveau de vos élèves
- ✅ Créer des exercices progressifs (commencer avec 2 bugs, puis augmenter)
- ✅ Générer un fichier `calculator.js` personnalisé à utiliser avec vos élèves

---

## 🎯 Pourquoi utiliser cet outil ?

### Scénario 1 : Exercice progressif
Vous voulez commencer simple avec vos élèves :
1. **Première séance** : Créez une calculatrice avec seulement 2 bugs (addition et soustraction)
2. **Deuxième séance** : Ajoutez 2 bugs de plus (multiplication et division)
3. **Troisième séance** : Ajoutez tous les bugs pour un défi complet

### Scénario 2 : Adaptation au niveau
- **Classe débutante** : Cochez seulement les bugs de base (+, -, ×, ÷)
- **Classe avancée** : Ajoutez les bugs mathématiques avancés (sin, cos, tan, %)

### Scénario 3 : Focus sur un type d'erreur
Vous voulez que vos élèves se concentrent sur un type spécifique d'erreur :
- Uniquement les bugs de division (division inversée + division par zéro)
- Uniquement les bugs de fonctions mathématiques (sin, cos, tan)

---

## 🚀 Comment utiliser le Créateur de Bugs

### Étape 1 : Ouvrir l'outil

1. Ouvrez le fichier [`src/bug-creator.html`](../src/bug-creator.html) dans votre navigateur
   - Double-cliquez sur le fichier, ou
   - Faites un clic droit → "Ouvrir avec" → votre navigateur

2. Vous verrez une page avec une liste de bugs à cocher

### Étape 2 : Sélectionner les bugs

**Cochez les bugs que vous voulez introduire** dans votre calculatrice personnalisée :

#### 🟢 Bugs de base (recommandés pour débuter)
- ☑️ **Addition inversée** : L'addition soustrait au lieu d'additionner
- ☑️ **Soustraction inversée** : La soustraction additionne au lieu de soustraire
- ☑️ **Multiplication inversée** : La multiplication divise au lieu de multiplier
- ☑️ **Division inversée** : La division multiplie au lieu de diviser

#### 🟡 Bugs modérés
- ☐ **Pas de vérification division par zéro** : Permet de diviser par zéro (crée une erreur)
- ☐ **Points décimaux multiples** : Permet d'ajouter plusieurs points (ex: 3.14.5)

#### 🔴 Bugs avancés (pour classes plus élevées)
- ☐ **Pourcentage incorrect** : Multiplie au lieu de calculer le pourcentage
- ☐ **Sin incorrect** : Utilise cos au lieu de sin
- ☐ **Cos incorrect** : Utilise tan au lieu de cos
- ☐ **Tan incorrect** : Utilise sin au lieu de tan
- ☐ **Hyp incorrect** : Additionne au lieu de calculer l'hypoténuse

**💡 Conseil** : Commencez par cocher 2-3 bugs pour vos premières séances, puis augmentez progressivement.

### Étape 3 : Générer le code

1. Cliquez sur le bouton **"🔧 Générer le code"**
2. Vous verrez apparaître un aperçu du code dans la zone en bas de la page
3. Vérifiez que le code correspond à ce que vous voulez

### Étape 4 : Télécharger le fichier

1. Cliquez sur le bouton **"📥 Télécharger calculator.js"**
2. Le fichier `calculator.js` sera téléchargé dans votre dossier de téléchargements

### Étape 5 : Utiliser avec vos élèves

1. **Remplacez** le fichier [`src/js/calculator.js`](../src/js/calculator.js) existant par celui que vous venez de télécharger
   - Localisez le fichier [`src/js/calculator.js`](../src/js/calculator.js) dans le dossier du projet
   - Supprimez l'ancien fichier (ou renommez-le en `calculator-backup.js`)
   - Copiez le nouveau fichier téléchargé à la place

2. **Ouvrez** [`src/index.html`](../src/index.html) ou [`src/index-enfant.html`](../src/index-enfant.html) dans le navigateur
   - Vos élèves verront maintenant la calculatrice avec les bugs que vous avez choisis !

3. **Lancez les tests** pour vérifier que les bugs fonctionnent comme prévu

---

## 📋 Exemples d'utilisation

### Exemple 1 : Première séance (Très simple)

**Bugs sélectionnés :**
- ☑️ Addition inversée
- ☑️ Soustraction inversée

**Résultat :** Les élèves doivent corriger seulement 2 bugs. C'est parfait pour une première approche du débogage.

---

### Exemple 2 : Séance intermédiaire

**Bugs sélectionnés :**
- ☑️ Addition inversée
- ☑️ Soustraction inversée
- ☑️ Multiplication inversée
- ☑️ Division inversée
- ☑️ Pas de vérification division par zéro

**Résultat :** Les élèves doivent corriger 5 bugs. C'est un bon défi pour une classe qui a déjà fait du débogage.

---

### Exemple 3 : Défi complet (Avancé)

**Bugs sélectionnés :**
- Tous les bugs cochés ✅

**Résultat :** Les élèves doivent corriger 12 bugs. C'est un défi complet pour des classes avancées.

---

## ❓ Questions fréquentes

### Q : Puis-je modifier le fichier après l'avoir téléchargé ?

**R :** Oui ! Vous pouvez :
1. Revenir sur [`src/bug-creator.html`](../src/bug-creator.html)
2. Modifier vos sélections
3. Régénérer et télécharger un nouveau fichier
4. Remplacer l'ancien fichier

### Q : Les élèves peuvent-ils voir quels bugs sont présents ?

**R :** Non, pas directement. Les bugs sont cachés dans le code. Les élèves doivent :
1. Tester la calculatrice
2. Observer les erreurs
3. Utiliser les tests pour identifier les problèmes
4. Corriger le code

C'est tout l'intérêt pédagogique ! 🎓

### Q : Puis-je créer plusieurs versions différentes ?

**R :** Absolument ! Vous pouvez :
- Créer une version "débutant" avec 2 bugs
- Créer une version "intermédiaire" avec 5 bugs
- Créer une version "expert" avec tous les bugs
- Les sauvegarder avec des noms différents (`calculator-debutant.js`, `calculator-intermediaire.js`, etc.)

### Q : Que se passe-t-il si je ne coche aucun bug ?

**R :** Si vous ne cochez aucun bug, la calculatrice sera **correcte** (sans bugs). C'est utile pour :
- Montrer aux élèves à quoi ressemble une calculatrice qui fonctionne
- Créer un exercice où les élèves doivent introduire leurs propres bugs

### Q : Comment savoir quels bugs sont les plus difficiles ?

**R :** En général :
- **Faciles** : Addition, soustraction (opérations inversées)
- **Modérés** : Multiplication, division, points décimaux
- **Difficiles** : Fonctions mathématiques avancées (sin, cos, tan, hyp)

Commencez toujours par les bugs faciles et progressez !

---

## 🎓 Conseils pédagogiques

### Pour une première séance
1. ✅ Cochez seulement **2 bugs** (addition + soustraction)
2. ✅ Expliquez aux élèves comment utiliser les tests
3. ✅ Montrez-leur comment ouvrir le code dans un éditeur de texte
4. ✅ Guidez-les pour trouver et corriger le premier bug ensemble

### Pour progresser
1. ✅ Après chaque séance, ajoutez 1-2 bugs de plus
2. ✅ Laissez les élèves travailler en binôme
3. ✅ Encouragez-les à tester systématiquement après chaque correction
4. ✅ Utilisez l'outil "Indices" si les élèves sont bloqués

### Pour un défi
1. ✅ Créez une version avec tous les bugs
2. ✅ Organisez un concours : qui corrige le plus de bugs en 30 minutes ?
3. ✅ Demandez aux élèves de créer leurs propres bugs et de les partager

---

## 🔧 Dépannage

### Le fichier ne se télécharge pas
- Vérifiez que votre navigateur autorise les téléchargements
- Essayez avec un autre navigateur (Chrome, Firefox, Edge)

### La calculatrice ne fonctionne pas après remplacement
- Vérifiez que vous avez bien remplacé le fichier [`src/js/calculator.js`](../src/js/calculator.js)
- Rechargez la page (F5 ou Ctrl+R)
- Vérifiez la console du navigateur (F12) pour voir s'il y a des erreurs

### Je veux revenir à la version originale
- Le fichier [`src/js/calculator.js`](../src/js/calculator.js) original est toujours disponible dans le projet
- Vous pouvez aussi créer une version sans bugs dans le créateur

---

## 📚 Ressources complémentaires

- **Guide des versions** : Voir `GUIDE-VERSIONS.md` pour choisir la bonne interface
- **Installation** : Voir `INSTALLATION.md` pour les instructions de base
- **Outil Enseignant** : Utilisez [`src/enseignant-viewer.html`](../src/enseignant-viewer.html) pour visualiser le code avec vos élèves

---

## 💡 Astuce finale

**Créez un dossier "versions"** dans votre projet :
```
broken-calculator/
├── src/
│   └── js/
│       └── calculator.js (version actuelle)
├── versions/
│   ├── calculator-debutant.js (2 bugs)
│   ├── calculator-intermediaire.js (5 bugs)
│   └── calculator-expert.js (12 bugs)
```

Comme ça, vous pouvez facilement basculer entre les versions selon vos besoins ! 🎯

---

**Besoin d'aide ?** N'hésitez pas à consulter les autres guides du projet ou à tester différentes combinaisons de bugs pour trouver celle qui convient le mieux à vos élèves.

