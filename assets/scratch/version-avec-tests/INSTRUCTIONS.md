# Instructions Complètes - Calculatrice avec Tests Unitaires

## Vue d'ensemble

Ce projet transforme une calculatrice Scratch fonctionnelle en une calculatrice avec des bugs intentionnels et un système de tests unitaires intégré.

## Objectifs pédagogiques

- Comprendre les tests unitaires
- Apprendre le débogage méthodique
- Valider les corrections automatiquement
- Développer une approche scientifique du débogage

## Étapes de création

### Phase 1 : Préparation (15 min)

1. **Ouvrir le projet original**
   - Ouvrir `source-from-zip/project.json` dans Scratch
   - OU ouvrir le fichier `.sb3` correspondant

2. **Créer une copie**
   - Fichier → Enregistrer sous → "Calculatrice-avec-tests"

3. **Identifier la structure**
   - Examiner les variables de la calculatrice
   - Identifier les scripts de calcul
   - Noter les broadcasts utilisés

### Phase 2 : Introduire les bugs (30 min)

Suivre le fichier `bugs-detaille.md` pour introduire les bugs un par un :

1. ✅ Bug Addition
2. ✅ Bug Soustraction
3. ✅ Bug Multiplication
4. ✅ Bug Division
5. ✅ Bug Clear
6. ✅ Bug Points décimaux
7. ✅ Bug Division par zéro

**Astuce :** Introduire 2-3 bugs d'abord, tester, puis ajouter les autres.

### Phase 3 : Créer le sprite Testeur (45 min)

1. **Créer un nouveau sprite**
   - Nom : "Testeur"
   - Ajouter un costume simple (cercle, carré, etc.)

2. **Créer les variables de test**
   - `test.nombreTests`
   - `test.nombreReussis`
   - `test.resultatActuel`
   - `test.resultatAttendu`
   - `test.nomTest`

3. **Créer les fonctions de test**
   - Suivre `tests-scratch.md`
   - Adapter selon votre structure de calculatrice
   - Tester chaque fonction individuellement

4. **Créer le script principal**
   - Script "quand le drapeau vert est cliqué"
   - Appeler toutes les fonctions de test
   - Afficher les résultats finaux

### Phase 4 : Interface de résultats (15 min)

**Option 1 : Utiliser le sprite Stage**
- Ajouter des blocs "dire" pour afficher les résultats
- Afficher le score

**Option 2 : Créer un sprite Résultats**
- Nouveau sprite avec costume texte
- Afficher dynamiquement les résultats
- Liste des tests réussis/échoués

### Phase 5 : Tests et ajustements (30 min)

1. **Tester le système**
   - Lancer les tests
   - Vérifier que les bugs sont détectés
   - Ajuster si nécessaire

2. **Documenter**
   - Noter les adaptations faites
   - Documenter les changements

## Adaptation nécessaire

Les scripts de test doivent être adaptés selon votre calculatrice :

### Variables à vérifier

- `calculator.answer` : Nom de la variable pour le résultat
- `calculator.equation` : Nom de la variable pour l'équation
- Autres variables spécifiques

### Broadcasts à vérifier

- `Equals` : Pour déclencher le calcul
- `Clear Problem` : Pour réinitialiser
- Autres broadcasts disponibles

### Méthode de simulation

**Option A : Utiliser les broadcasts**
- Créer des broadcasts pour chaque bouton
- Le sprite Testeur envoie ces broadcasts

**Option B : Modifier directement les variables**
- Définir directement `calculator.equation`
- Déclencher le calcul via broadcast

**Option C : Utiliser des clones/clics simulés**
- Plus complexe mais plus réaliste

## Structure finale du projet

```
Projet Scratch
├── Stage
│   ├── Variables globales
│   └── Affichage des résultats
├── Calculatrice (sprite)
│   ├── Scripts avec bugs
│   └── Variables locales
├── Boutons (sprites)
│   └── Scripts de clics
└── Testeur (sprite)
    ├── Variables de test
    ├── Fonctions de test
    └── Script principal
```

## Utilisation avec les élèves

### Pour les enseignants

1. Préparer le projet avec tous les bugs
2. Distribuer le fichier `.sb3`
3. Expliquer le système de tests
4. Guider les élèves dans le débogage

### Pour les élèves

1. Ouvrir le projet
2. Lancer les tests (drapeau vert)
3. Observer les tests qui échouent
4. Identifier les bugs correspondants
5. Corriger un bug à la fois
6. Relancer les tests
7. Valider que tous les tests passent

## Niveaux de difficulté

### Niveau 1 : Débutant
- 2-3 bugs simples
- Tests explicites
- Corrections directes

### Niveau 2 : Intermédiaire
- 5 bugs
- Tests plus complexes
- Gestion d'erreurs

### Niveau 3 : Avancé
- Tous les bugs (7)
- Tests complets
- Validation automatique

## Ressources

- `tests-scratch.md` : Scripts détaillés des tests
- `bugs-detaille.md` : Description des bugs
- `corrections.md` : Solutions complètes
- `README.md` : Vue d'ensemble

## Support

En cas de difficulté :
1. Vérifier les noms des variables
2. Vérifier les broadcasts disponibles
3. Tester chaque fonction individuellement
4. Adapter selon votre structure

