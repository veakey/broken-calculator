# Tests Unitaires - 11P

## Concept de test unitaire

Un test unitaire vérifie qu'une fonction individuelle fonctionne correctement.

## Structure d'un test

```javascript
function testAddition() {
    const result = testCalculate(5, '+', 3);
    const expected = 8;
    const passed = result === expected;
    
    // Enregistrer le résultat
    testResults.push({
        name: 'Addition : 5 + 3 = 8',
        passed: passed,
        expected: expected,
        actual: result
    });
}
```

## Types de tests

### Tests unitaires
- Testent une fonction spécifique
- Vérifient un comportement précis
- Faciles à isoler

### Tests fonctionnels
- Testent un scénario complet
- Vérifient l'intégration
- Plus complexes

## Bonnes pratiques

1. **Nommage clair** : Le nom du test doit expliquer ce qu'il teste
2. **Un test, une vérification** : Chaque test vérifie une chose
3. **Valeurs connues** : Utilise des valeurs dont tu connais le résultat
4. **Documentation** : Explique ce que le test vérifie

## Créer ses propres tests

1. Identifie ce que tu veux tester
2. Choisis des valeurs de test appropriées
3. Écris le test
4. Exécute et vérifie

## Compétences développées
- Compréhension des tests
- Création de tests
- Validation de code
- Assurance qualité

