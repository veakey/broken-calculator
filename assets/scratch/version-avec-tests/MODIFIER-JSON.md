# Comment Modifier le project.json pour Ajouter les Tests

## Approche Recommandée

Au lieu de modifier directement le JSON (très complexe), voici deux approches :

## Approche 1 : Modification dans Scratch (RECOMMANDÉ)

1. **Ouvrir le projet original dans Scratch**
   - Ouvrir `source-from-zip/project.json` (renommer en .sb3 ou importer directement)

2. **Introduire les bugs manuellement**
   - Suivre `bugs-detaille.md` pour modifier les scripts
   - Tester que les bugs fonctionnent

3. **Créer le sprite Testeur dans Scratch**
   - Nouveau sprite "Testeur"
   - Créer les variables de test
   - Créer les scripts selon `tests-scratch.md`

4. **Exporter en .sb3**
   - Fichier → Enregistrer sur votre ordinateur
   - Vous avez maintenant le projet complet avec tests

## Approche 2 : Script Python (AVANCÉ)

Le script `create-version-with-tests.py` peut :
- Lire le project.json original
- Ajouter un sprite Testeur de base
- Ajouter des commentaires sur les bugs à introduire

**Limitation** : Le script ne peut pas facilement modifier les blocs existants car :
- Les IDs de blocs sont complexes
- Les dépendances entre blocs sont nombreuses
- La structure est très imbriquée

### Utilisation du script

```bash
cd assets/scratch/version-avec-tests
python3 create-version-with-tests.py
```

Le script créera `project-avec-tests.json` avec :
- Le sprite Testeur de base
- Les variables de test
- Des commentaires sur les bugs à introduire

Vous devrez ensuite :
1. Ouvrir ce fichier dans Scratch
2. Compléter les scripts de test
3. Introduire les bugs manuellement

## Structure du project.json

Un fichier Scratch .sb3 contient :

```json
{
  "targets": [
    {
      "isStage": true,
      "name": "Stage",
      "variables": {...},
      "broadcasts": {...}
    },
    {
      "isStage": false,
      "name": "Calculator",
      "blocks": {
        "block_id": {
          "opcode": "...",
          "inputs": {...},
          "fields": {...},
          "next": "next_block_id",
          "parent": "parent_block_id"
        }
      }
    }
  ]
}
```

## Identifier les Calculs

Pour trouver où sont les calculs dans le JSON :

1. Chercher `"opcode": "event_whenbroadcastreceived"` avec "Equals"
2. Suivre la chaîne de blocs via `"next"` et `"parent"`
3. Chercher les opcodes :
   - `operator_add` → Addition
   - `operator_subtract` → Soustraction
   - `operator_multiply` → Multiplication
   - `operator_divide` → Division

## Exemple de Modification

Pour changer l'addition en soustraction :

```json
{
  "opcode": "operator_add",  // AVANT
  ...
}

// Devenir

{
  "opcode": "operator_subtract",  // APRÈS (BUG)
  ...
}
```

## Recommandation Finale

**Pour un projet utilisable** :
1. Ouvrir dans Scratch
2. Modifier visuellement
3. Tester dans Scratch
4. Exporter en .sb3

C'est beaucoup plus simple et moins sujet à erreurs que de modifier le JSON directement.

## Outils Utiles

- **Scratch Desktop** : Pour modifier localement
- **Scratch en ligne** : Pour partager
- **Éditeur JSON** : VS Code avec formatage JSON
- **Validateur JSON** : Vérifier la syntaxe

