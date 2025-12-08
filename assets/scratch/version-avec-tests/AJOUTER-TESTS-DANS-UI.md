# Ajouter des Tests Unitaires dans l'UI - Guide Pratique

## Vue d'ensemble

Ce guide explique comment modifier directement le `project.json` pour ajouter un système de tests unitaires dans l'interface utilisateur de Scratch.

## Structure identifiée

D'après l'analyse du project.json original :
- **Stage** : Contient les variables globales (`calculator.answer`, `calculator.equation`)
- **Calculator** : Sprite principal avec 515 blocs
- **Broadcasts disponibles** : `Equals`, `Clear Problem`, `Delete`, etc.

## Étape 1 : Ajouter les Variables de Test au Stage

### Dans le Stage, section `variables`, ajouter :

```json
"test_nombreTests_id": ["test.nombreTests", 0],
"test_nombreReussis_id": ["test.nombreReussis", 0],
"test_resultatActuel_id": ["test.resultatActuel", 0],
"test_resultatAttendu_id": ["test.resultatAttendu", 0],
"test_nomTest_id": ["test.nomTest", ""],
"test_score_id": ["test.score", ""]
```

**Générer des IDs uniques** : Utiliser des chaînes aléatoires de 20 caractères comme les autres variables.

## Étape 2 : Ajouter un Broadcast pour les Tests

### Dans le Stage, section `broadcasts`, ajouter :

```json
"TEST_RUN_TESTS_ID": "Run Tests",
"TEST_RESULT_ID": "Test Result"
```

## Étape 3 : Créer le Sprite Testeur

### Ajouter un nouveau target (sprite) :

```json
{
  "isStage": false,
  "name": "Testeur",
  "variables": {},
  "lists": {},
  "broadcasts": {},
  "blocks": {
    // Scripts de test ici
  },
  "comments": {},
  "currentCostume": 0,
  "costumes": [
    {
      "name": "costume1",
      "bitmapResolution": 1,
      "dataFormat": "svg",
      "assetId": "test_sprite_svg_id",
      "md5ext": "test_sprite_svg_id.svg",
      "rotationCenterX": 47,
      "rotationCenterY": 55
    }
  ],
  "sounds": [],
  "volume": 100,
  "layerOrder": 2,
  "visible": true,
  "x": 200,
  "y": 150,
  "size": 100,
  "direction": 90,
  "draggable": false,
  "rotationStyle": "all around"
}
```

## Étape 4 : Créer les Scripts de Test

### Script Principal (quand drapeau vert)

Structure JSON d'un bloc :

```json
"main_test_block_id": {
  "opcode": "event_whenflagclicked",
  "next": "init_tests_block_id",
  "parent": null,
  "inputs": {},
  "fields": {},
  "shadow": false,
  "topLevel": true,
  "x": 0,
  "y": 0
}
```

### Script d'Initialisation

```json
"init_tests_block_id": {
  "opcode": "data_setvariableto",
  "next": "init_tests2_block_id",
  "parent": "main_test_block_id",
  "inputs": {
    "VALUE": [1, [10, "0"]]
  },
  "fields": {
    "VARIABLE": ["test.nombreTests", "test_nombreTests_id"]
  },
  "shadow": false,
  "topLevel": false
}
```

### Fonction de Test (exemple : testAddition)

```json
"test_addition_func_id": {
  "opcode": "procedures_definition",
  "next": null,
  "parent": null,
  "inputs": {},
  "fields": {},
  "shadow": false,
  "topLevel": true,
  "x": 0,
  "y": 100,
  "mutation": {
    "tagName": "mutation",
    "children": [],
    "proccode": "testAddition",
    "argumentids": "[]",
    "argumentnames": "[]",
    "argumentdefaults": "[]",
    "warp": "false"
  }
}
```

### Corps de la fonction testAddition

Séquence de blocs :
1. Incrémenter `test.nombreTests`
2. Définir `test.resultatAttendu` à 8
3. Simuler : Clear, ajouter "5" à equation, ajouter "+", ajouter "3", broadcast "Equals"
4. Lire `calculator.answer`
5. Comparer avec `test.resultatAttendu`
6. Si égal : incrémenter `test.nombreReussis` et dire "✅ Test réussi"
7. Sinon : dire "❌ Test échoué"

## Étape 5 : Ajouter une Interface de Résultats

### Option A : Utiliser des Variables Visuelles

Dans le Stage, rendre visibles les variables :
- `test.nombreTests`
- `test.nombreReussis`
- `test.score` (calculé : `test.nombreReussis / test.nombreReussis × 100`)

### Option B : Créer un Sprite Afficheur

Créer un sprite "Afficheur Résultats" qui :
- Affiche le score
- Liste les tests réussis/échoués
- Change de couleur selon le score

## Étape 6 : Modifier les Calculs pour Ajouter les Bugs

### Trouver les Blocs de Calcul

Dans le sprite Calculator, chercher les blocs qui :
- Écoutent le broadcast "Equals"
- Contiennent `operator_add`, `operator_subtract`, etc.

### Modifier l'Addition (BUG)

Chercher le bloc avec `"opcode": "operator_add"` dans le contexte de l'addition et le changer en :

```json
{
  "opcode": "operator_subtract",  // BUG: Soustrait au lieu d'additionner
  ...
}
```

### Modifier les Autres Opérations

Même principe pour :
- Soustraction : `operator_add` au lieu de `operator_subtract`
- Multiplication : `operator_divide` au lieu de `operator_multiply`
- Division : `operator_multiply` au lieu de `operator_divide`

## Script Python Helper

Un script Python peut automatiser certaines modifications :

```python
import json
import re

def modify_operation(opcode_old, opcode_new, blocks):
    """Modifie un opcode dans les blocs"""
    for block_id, block in blocks.items():
        if block.get("opcode") == opcode_old:
            block["opcode"] = opcode_new
            # Ajouter un commentaire pour tracer
            if "comments" not in block:
                block["comments"] = []
            block["comments"].append(f"MODIFIÉ: {opcode_old} → {opcode_new}")

# Utilisation
with open("project.json", "r") as f:
    project = json.load(f)

calculator = next(t for t in project["targets"] if t["name"] == "Calculator")
modify_operation("operator_add", "operator_subtract", calculator["blocks"])
```

## Validation

Après modification :

1. **Vérifier la syntaxe JSON**
   ```bash
   python3 -m json.tool project.json > /dev/null
   ```

2. **Tester dans Scratch**
   - Renommer en .sb3
   - Ouvrir dans Scratch
   - Vérifier que ça fonctionne

3. **Exécuter les tests**
   - Cliquer sur le drapeau vert
   - Vérifier que les tests s'exécutent
   - Vérifier que les bugs sont détectés

## Exemple Complet : Script d'Analyse

```python
#!/usr/bin/env python3
import json

def analyze_calculator_structure(project_file):
    """Analyse la structure de la calculatrice"""
    with open(project_file, 'r') as f:
        project = json.load(f)
    
    calculator = next((t for t in project["targets"] if t["name"] == "Calculator"), None)
    if not calculator:
        return
    
    # Trouver les blocs qui écoutent "Equals"
    equals_blocks = []
    for block_id, block in calculator["blocks"].items():
        if block.get("opcode") == "event_whenbroadcastreceived":
            inputs = block.get("inputs", {})
            if "BROADCAST_INPUT" in inputs:
                broadcast = inputs["BROADCAST_INPUT"]
                if isinstance(broadcast, list) and "Equals" in str(broadcast):
                    equals_blocks.append(block_id)
    
    print(f"Blocs qui écoutent 'Equals': {len(equals_blocks)}")
    
    # Trouver les opérateurs mathématiques
    operators = {
        "add": [],
        "subtract": [],
        "multiply": [],
        "divide": []
    }
    
    for block_id, block in calculator["blocks"].items():
        opcode = block.get("opcode", "")
        if "add" in opcode:
            operators["add"].append(block_id)
        elif "subtract" in opcode:
            operators["subtract"].append(block_id)
        elif "multiply" in opcode:
            operators["multiply"].append(block_id)
        elif "divide" in opcode:
            operators["divide"].append(block_id)
    
    print(f"Opérateurs trouvés:")
    for op, ids in operators.items():
        print(f"  {op}: {len(ids)}")

if __name__ == "__main__":
    analyze_calculator_structure("source-from-zip/project.json")
```

## Recommandation

**Pour un projet production** :

1. Utiliser Scratch visuellement pour créer les tests (plus simple)
2. Exporter en .sb3
3. Modifier le JSON seulement pour des ajustements fins

**Pour un projet automatisé** :

1. Utiliser le script Python pour analyser
2. Identifier les blocs à modifier
3. Modifier avec précaution
4. Valider dans Scratch

## Fichiers de Référence

- `MODIFIER-JSON.md` : Approche générale
- `tests-scratch.md` : Scripts de test à adapter
- `bugs-detaille.md` : Bugs à introduire
- `create-version-with-tests.py` : Script helper

