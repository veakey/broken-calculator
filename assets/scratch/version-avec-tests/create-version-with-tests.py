#!/usr/bin/env python3
"""
Script pour créer une version de la calculatrice avec bugs et tests unitaires
à partir du project.json original
"""

import json
import uuid
import random
import string

def generate_block_id():
    """Génère un ID unique pour un bloc Scratch"""
    return ''.join(random.choices(string.ascii_letters + string.digits + '!@#$%^&*()_+-={}[]|\\:";\'<>?,./', k=20))

def generate_variable_id():
    """Génère un ID unique pour une variable"""
    return generate_block_id()

def create_test_sprite(targets):
    """Crée un sprite Testeur avec des tests unitaires"""
    
    # Variables pour les tests
    test_vars = {
        generate_variable_id(): ["test.nombreTests", 0],
        generate_variable_id(): ["test.nombreReussis", 0],
        generate_variable_id(): ["test.resultatActuel", 0],
        generate_variable_id(): ["test.resultatAttendu", 0],
        generate_variable_id(): ["test.nomTest", ""],
    }
    
    # Broadcast pour démarrer les tests
    test_broadcast_id = generate_block_id()
    
    # Ajouter le broadcast au Stage
    stage = next((t for t in targets if t.get("isStage")), None)
    if stage:
        if "broadcasts" not in stage:
            stage["broadcasts"] = {}
        stage["broadcasts"][test_broadcast_id] = "Run Tests"
    
    # Créer les blocs pour le sprite Testeur
    blocks = {}
    
    # Script principal : quand le drapeau vert est cliqué
    main_block_id = generate_block_id()
    blocks[main_block_id] = {
        "opcode": "event_whenflagclicked",
        "next": generate_block_id(),
        "parent": None,
        "inputs": {},
        "fields": {},
        "shadow": False,
        "topLevel": True,
        "x": 0,
        "y": 0
    }
    
    # Script : initialiser les tests
    init_block_id = blocks[main_block_id]["next"]
    blocks[init_block_id] = {
        "opcode": "data_setvariableto",
        "next": generate_block_id(),
        "parent": main_block_id,
        "inputs": {
            "VALUE": [1, [10, "0"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreTests", list(test_vars.keys())[0]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    next_id = blocks[init_block_id]["next"]
    blocks[next_id] = {
        "opcode": "data_setvariableto",
        "next": None,
        "parent": init_block_id,
        "inputs": {
            "VALUE": [1, [10, "0"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreReussis", list(test_vars.keys())[1]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Fonction testAddition
    test_add_id = create_test_function(blocks, "testAddition", "5 + 3", 8, "+", "5", "3")
    
    # Fonction testSoustraction
    test_sub_id = create_test_function(blocks, "testSoustraction", "10 - 4", 6, "-", "10", "4")
    
    # Fonction testMultiplication
    test_mult_id = create_test_function(blocks, "testMultiplication", "6 × 7", 42, "*", "6", "7")
    
    # Fonction testDivision
    test_div_id = create_test_function(blocks, "testDivision", "20 ÷ 4", 5, "/", "20", "4")
    
    # Créer le sprite
    test_sprite = {
        "isStage": False,
        "name": "Testeur",
        "variables": test_vars,
        "lists": {},
        "broadcasts": {},
        "blocks": blocks,
        "comments": {},
        "currentCostume": 0,
        "costumes": [
            {
                "name": "costume1",
                "bitmapResolution": 1,
                "dataFormat": "svg",
                "assetId": generate_block_id(),
                "md5ext": f"{generate_block_id()}.svg",
                "rotationCenterX": 47,
                "rotationCenterY": 55
            }
        ],
        "sounds": [],
        "volume": 100,
        "layerOrder": 2,
        "visible": True,
        "x": 200,
        "y": 150,
        "size": 100,
        "direction": 90,
        "draggable": False,
        "rotationStyle": "all around"
    }
    
    return test_sprite

def create_test_function(blocks, function_name, test_desc, expected_result, operator, num1, num2):
    """Crée une fonction de test"""
    func_id = generate_block_id()
    
    # Définition de la fonction
    blocks[func_id] = {
        "opcode": "procedures_definition",
        "next": None,
        "parent": None,
        "inputs": {},
        "fields": {},
        "shadow": False,
        "topLevel": True,
        "x": 0,
        "y": 0,
        "mutation": {
            "tagName": "mutation",
            "children": [],
            "proccode": function_name,
            "argumentids": "[]",
            "argumentnames": "[]",
            "argumentdefaults": "[]",
            "warp": "false"
        }
    }
    
    # Corps de la fonction : incrémenter nombreTests
    inc_test_id = generate_block_id()
    blocks[inc_test_id] = {
        "opcode": "data_changevariableby",
        "next": generate_block_id(),
        "parent": func_id,
        "inputs": {
            "VALUE": [1, [10, "1"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreTests", generate_variable_id()]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Simuler le calcul (broadcast Clear, puis simuler les clics)
    # ... (code simplifié pour l'exemple)
    
    return func_id

def add_bugs_to_calculator(targets):
    """Ajoute des bugs intentionnels dans le sprite Calculator"""
    
    calculator = next((t for t in targets if t.get("name") == "Calculator"), None)
    if not calculator:
        return
    
    # Chercher les blocs d'opérations mathématiques et les modifier
    # Cette fonction devrait identifier les opérateurs et les inverser
    # Pour l'instant, on ajoute juste un commentaire dans le JSON
    
    if "comments" not in calculator:
        calculator["comments"] = {}
    
    bug_comment_id = generate_block_id()
    calculator["comments"][bug_comment_id] = {
        "blockId": None,
        "x": 0,
        "y": 0,
        "width": 200,
        "height": 100,
        "minimized": False,
        "text": "BUGS À INTRODUIRE:\n1. Addition: changer + en -\n2. Soustraction: changer - en +\n3. Multiplication: changer × en ÷\n4. Division: changer ÷ en ×"
    }
    
    return calculator

def main():
    """Fonction principale"""
    
    input_file = "source-from-zip/project.json"
    output_file = "version-avec-tests/project-avec-tests.json"
    
    print("🔧 Création de la version avec tests unitaires...")
    
    # Lire le fichier original
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            project = json.load(f)
        print(f"✅ Fichier {input_file} lu avec succès")
    except Exception as e:
        print(f"❌ Erreur lors de la lecture: {e}")
        return
    
    # Ajouter les bugs
    print("🐛 Ajout des bugs dans la calculatrice...")
    add_bugs_to_calculator(project["targets"])
    
    # Créer le sprite Testeur
    print("🧪 Création du sprite Testeur...")
    test_sprite = create_test_sprite(project["targets"])
    project["targets"].append(test_sprite)
    
    # Sauvegarder
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(project, f, ensure_ascii=False, indent=2)
        print(f"✅ Version avec tests sauvegardée dans {output_file}")
        print("\n📝 NOTE: Ce fichier est un template.")
        print("   Vous devez compléter les scripts de test selon votre structure de calculatrice.")
    except Exception as e:
        print(f"❌ Erreur lors de la sauvegarde: {e}")

if __name__ == "__main__":
    main()

