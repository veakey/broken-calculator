# Guide Final - Version avec Tests Unitaires dans l'UI

## ✅ Ce qui a été créé

Le script `create-with-tests-ui.py` a généré un fichier `project-avec-tests-ui.json` qui contient :

1. **Variables de test ajoutées au Stage**
   - `test.nombreTests`
   - `test.nombreReussis`
   - `test.resultatActuel`
   - `test.resultatAttendu`
   - `test.nomTest`
   - `test.score`

2. **Broadcasts de test**
   - `Run Tests`

3. **Sprite Testeur créé**
   - 60+ blocs de scripts
   - 4 fonctions de test (Addition, Soustraction, Multiplication, Division)
   - Script principal qui exécute tous les tests

4. **Bug introduit**
   - Addition changée en Soustraction

## 📋 Utilisation

### Étape 1 : Convertir en .sb3

```bash
cd assets/scratch/version-avec-tests
# Créer une archive ZIP
zip -r project-avec-tests-ui.sb3 project-avec-tests-ui.json
```

OU renommer simplement :
```bash
mv project-avec-tests-ui.json project-avec-tests-ui.sb3
```

### Étape 2 : Ouvrir dans Scratch

1. Scratch Desktop : Fichier → Charger depuis votre ordinateur
2. Scratch en ligne : Fichier → Charger depuis votre ordinateur

### Étape 3 : Compléter les scripts

Les scripts de test créés sont des **templates de base**. Vous devez :

1. **Analyser la structure de votre calculatrice**
   - Identifier comment les boutons ajoutent des éléments à `calculator.equation`
   - Comprendre comment le broadcast "Equals" fonctionne
   - Voir comment `calculator.answer` est mis à jour

2. **Compléter les fonctions de test**
   - Modifier les scripts pour simuler correctement les clics
   - Utiliser les broadcasts ou modifier directement `calculator.equation`
   - Lire correctement `calculator.answer`

3. **Ajouter les bugs manquants**
   - Le script n'en a introduit qu'un (Addition)
   - Suivre `bugs-detaille.md` pour ajouter les autres bugs

### Étape 4 : Tester

1. Cliquer sur le drapeau vert
2. Observer l'exécution des tests
3. Vérifier que les bugs sont détectés
4. Corriger les bugs
5. Relancer les tests

## 🔧 Améliorations possibles

### Ajouter tous les bugs automatiquement

Modifier `create-with-tests-ui.py` pour :
- Trouver tous les contextes d'opérations mathématiques
- Introduire tous les bugs (Addition, Soustraction, Multiplication, Division)
- Ajouter les bugs de gestion (Clear, décimales, division par zéro)

### Compléter les scripts de test

Les fonctions de test créées sont simplifiées. Pour les compléter :

1. **Simuler les clics sur les boutons**
   - Utiliser les broadcasts existants
   - OU modifier directement `calculator.equation`

2. **Exemple de simulation complète** :
   ```
   // Pour tester 5 + 3
   broadcaster "Clear Problem"
   ajouter "5" à calculator.equation
   ajouter "+" à calculator.equation  
   ajouter "3" à calculator.equation
   broadcaster "Equals"
   attendre 0.5 secondes
   lire calculator.answer
   ```

3. **Adapter selon votre structure**
   - Voir `analyze-calculator.py` pour comprendre la structure
   - Adapter les scripts en conséquence

## 📊 Structure du fichier généré

```
project-avec-tests-ui.json
├── targets
│   ├── Stage
│   │   ├── variables (avec test.* ajoutées)
│   │   └── broadcasts (avec "Run Tests")
│   ├── Calculator
│   │   └── blocks (avec bugs introduits)
│   └── Testeur (NOUVEAU)
│       ├── blocks (scripts de test)
│       └── costumes
```

## 🎯 Avantages de cette approche

✅ **Tests intégrés dans l'UI** : Visible directement dans Scratch  
✅ **Exécution automatique** : Au clic du drapeau vert  
✅ **Feedback visuel** : Affichage des résultats en temps réel  
✅ **Modifiable** : Facilement ajustable dans Scratch  

## 📝 Limitations actuelles

⚠️ **Scripts simplifiés** : Les tests doivent être complétés manuellement  
⚠️ **Un seul bug introduit** : Les autres bugs doivent être ajoutés manuellement  
⚠️ **Adaptation nécessaire** : Selon la structure exacte de votre calculatrice  

## 🔄 Workflow recommandé

1. **Utiliser le script** pour créer la base
2. **Ouvrir dans Scratch** pour compléter visuellement
3. **Ajouter les bugs** selon `bugs-detaille.md`
4. **Compléter les tests** selon votre structure
5. **Tester et ajuster**
6. **Exporter en .sb3** pour distribution

## 📚 Fichiers de référence

- `create-with-tests-ui.py` : Script de génération
- `analyze-calculator.py` : Analyse de la structure
- `tests-scratch.md` : Scripts de test détaillés
- `bugs-detaille.md` : Description des bugs
- `AJOUTER-TESTS-DANS-UI.md` : Guide technique

## 🎓 Pour les élèves

Une fois le projet complet :

1. Ouvrir le fichier .sb3
2. Cliquer sur le drapeau vert
3. Observer les tests qui échouent
4. Identifier les bugs grâce aux messages
5. Corriger un par un
6. Relancer les tests
7. Voir le score s'améliorer jusqu'à 100%

