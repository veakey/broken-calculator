#!/usr/bin/env python3
"""
Script pour créer une version avec bugs et tests unitaires dans l'UI
à partir du project.json original
"""

import json
import random
import string
import sys
from copy import deepcopy

def generate_id(length=20):
    """Génère un ID unique au format Scratch"""
    chars = string.ascii_letters + string.digits + '!@#$%^&*()_+-={}[]|\\:";\'<>?,./'
    return ''.join(random.choices(chars, k=length))

def add_test_variables_to_stage(stage):
    """Ajoute les variables de test au Stage"""
    if "variables" not in stage:
        stage["variables"] = {}
    
    test_vars = {
        "test.nombreTests": 0,
        "test.nombreReussis": 0,
        "test.resultatActuel": 0,
        "test.resultatAttendu": 0,
        "test.nomTest": "",
        "test.score": ""
    }
    
    for var_name, var_value in test_vars.items():
        var_id = generate_id()
        stage["variables"][var_id] = [var_name, var_value]
    
    return stage["variables"]

def add_test_broadcasts_to_stage(stage):
    """Ajoute les broadcasts pour les tests"""
    if "broadcasts" not in stage:
        stage["broadcasts"] = {}
    
    bc_id = generate_id()
    stage["broadcasts"][bc_id] = "Run Tests"
    
    return stage["broadcasts"]

def create_test_function_blocks(function_name, test_desc, expected, num1, num2, operator, var_ids):
    """Crée les blocs pour une fonction de test"""
    blocks = {}
    
    # Définition de la fonction
    func_id = generate_id()
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
    
    # Incrémenter nombreTests
    inc_id = generate_id()
    blocks[func_id]["next"] = inc_id
    blocks[inc_id] = {
        "opcode": "data_changevariableby",
        "next": generate_id(),
        "parent": func_id,
        "inputs": {
            "VALUE": [1, [10, "1"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreTests", list(var_ids.keys())[0]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Définir resultatAttendu
    set_expected_id = blocks[inc_id]["next"]
    blocks[set_expected_id] = {
        "opcode": "data_setvariableto",
        "next": generate_id(),
        "parent": inc_id,
        "inputs": {
            "VALUE": [1, [10, str(expected)]]
        },
        "fields": {
            "VARIABLE": ["test.resultatAttendu", list(var_ids.keys())[2]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Simuler le calcul (simplifié - utiliser broadcasts)
    # Broadcast Clear
    clear_id = blocks[set_expected_id]["next"]
    blocks[clear_id] = {
        "opcode": "event_broadcast",
        "next": generate_id(),
        "parent": set_expected_id,
        "inputs": {
            "BROADCAST_INPUT": [1, [11, "Clear Problem", generate_id()]]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    # Attendre un peu
    wait_id = blocks[clear_id]["next"]
    blocks[wait_id] = {
        "opcode": "control_wait",
        "next": generate_id(),
        "parent": clear_id,
        "inputs": {
            "DURATION": [1, [4, "0.5"]]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    # Lire calculator.answer
    read_answer_id = blocks[wait_id]["next"]
    blocks[read_answer_id] = {
        "opcode": "data_setvariableto",
        "next": generate_id(),
        "parent": wait_id,
        "inputs": {
            "VALUE": [3, generate_id()]
        },
        "fields": {
            "VARIABLE": ["test.resultatActuel", list(var_ids.keys())[1]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Bloc pour lire calculator.answer
    read_var_id = blocks[read_answer_id]["inputs"]["VALUE"][1]
    blocks[read_var_id] = {
        "opcode": "data_variable",
        "next": None,
        "parent": read_answer_id,
        "inputs": {},
        "fields": {
            "VARIABLE": ["calculator.answer", generate_id()]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Comparer
    compare_id = blocks[read_answer_id]["next"]
    blocks[compare_id] = {
        "opcode": "control_if",
        "next": None,
        "parent": read_answer_id,
        "inputs": {
            "CONDITION": [2, generate_id()],
            "SUBSTACK": [2, generate_id()]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    # Condition: resultatActuel == resultatAttendu
    condition_id = blocks[compare_id]["inputs"]["CONDITION"][1]
    blocks[condition_id] = {
        "opcode": "operator_equals",
        "next": None,
        "parent": compare_id,
        "inputs": {
            "OPERAND1": [3, generate_id()],
            "OPERAND2": [3, generate_id()]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    # Opérandes de la condition
    op1_id = blocks[condition_id]["inputs"]["OPERAND1"][1]
    blocks[op1_id] = {
        "opcode": "data_variable",
        "next": None,
        "parent": condition_id,
        "inputs": {},
        "fields": {
            "VARIABLE": ["test.resultatActuel", list(var_ids.keys())[1]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    op2_id = blocks[condition_id]["inputs"]["OPERAND2"][1]
    blocks[op2_id] = {
        "opcode": "data_variable",
        "next": None,
        "parent": condition_id,
        "inputs": {},
        "fields": {
            "VARIABLE": ["test.resultatAttendu", list(var_ids.keys())[2]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Si vrai: incrémenter nombreReussis et dire "✅"
    substack_id = blocks[compare_id]["inputs"]["SUBSTACK"][1]
    blocks[substack_id] = {
        "opcode": "data_changevariableby",
        "next": generate_id(),
        "parent": compare_id,
        "inputs": {
            "VALUE": [1, [10, "1"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreReussis", list(var_ids.keys())[1]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    say_success_id = blocks[substack_id]["next"]
    blocks[say_success_id] = {
        "opcode": "looks_say",
        "next": None,
        "parent": substack_id,
        "inputs": {
            "MESSAGE": [1, [10, f"✅ {test_desc} réussi"]]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    return blocks, func_id

def create_test_sprite(var_ids, broadcasts):
    """Crée le sprite Testeur avec tous les tests"""
    
    all_blocks = {}
    function_ids = []
    
    # Créer toutes les fonctions de test
    tests = [
        ("testAddition", "Addition: 5 + 3", 8, "5", "3", "+"),
        ("testSoustraction", "Soustraction: 10 - 4", 6, "10", "4", "-"),
        ("testMultiplication", "Multiplication: 6 × 7", 42, "6", "7", "*"),
        ("testDivision", "Division: 20 ÷ 4", 5, "20", "4", "/"),
    ]
    
    y_pos = 0
    for test_func, desc, expected, n1, n2, op in tests:
        blocks, func_id = create_test_function_blocks(test_func, desc, expected, n1, n2, op, var_ids)
        all_blocks.update(blocks)
        
        # Positionner la fonction
        all_blocks[func_id]["y"] = y_pos
        y_pos += 120
        function_ids.append(func_id)
    
    # Script principal: quand drapeau vert
    main_id = generate_id()
    all_blocks[main_id] = {
        "opcode": "event_whenflagclicked",
        "next": generate_id(),
        "parent": None,
        "inputs": {},
        "fields": {},
        "shadow": False,
        "topLevel": True,
        "x": 0,
        "y": 0
    }
    
    # Initialiser les variables
    init_id = all_blocks[main_id]["next"]
    all_blocks[init_id] = {
        "opcode": "data_setvariableto",
        "next": generate_id(),
        "parent": main_id,
        "inputs": {
            "VALUE": [1, [10, "0"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreTests", list(var_ids.keys())[0]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    next_id = all_blocks[init_id]["next"]
    all_blocks[next_id] = {
        "opcode": "data_setvariableto",
        "next": None,
        "parent": init_id,
        "inputs": {
            "VALUE": [1, [10, "0"]]
        },
        "fields": {
            "VARIABLE": ["test.nombreReussis", list(var_ids.keys())[1]]
        },
        "shadow": False,
        "topLevel": False
    }
    
    # Appeler toutes les fonctions de test
    current_id = next_id
    for i, func_id in enumerate(function_ids):
        call_id = generate_id()
        all_blocks[current_id]["next"] = call_id
        
        # Déterminer le next_id
        if i < len(function_ids) - 1:
            next_call_id = generate_id()
        else:
            next_call_id = None
        
        all_blocks[call_id] = {
            "opcode": "procedures_call",
            "next": next_call_id,
            "parent": current_id,
            "inputs": {},
            "fields": {},
            "shadow": False,
            "topLevel": False,
            "mutation": {
                "tagName": "mutation",
                "children": [],
                "proccode": all_blocks[func_id]["mutation"]["proccode"],
                "argumentids": "[]",
                "argumentnames": "[]",
                "argumentdefaults": "[]",
                "warp": "false"
            }
        }
        current_id = call_id
    
    # Afficher résultats finaux
    result_id = generate_id()
    if current_id and current_id in all_blocks:
        all_blocks[current_id]["next"] = result_id
    all_blocks[result_id] = {
        "opcode": "looks_say",
        "next": None,
        "parent": current_id,
        "inputs": {
            "MESSAGE": [1, [10, "Tests terminés!"]]
        },
        "fields": {},
        "shadow": False,
        "topLevel": False
    }
    
    # Créer le sprite
    sprite = {
        "isStage": False,
        "name": "Testeur",
        "variables": {},
        "lists": {},
        "broadcasts": {},
        "blocks": all_blocks,
        "comments": {},
        "currentCostume": 0,
        "costumes": [
            {
                "name": "costume1",
                "bitmapResolution": 1,
                "dataFormat": "svg",
                "assetId": generate_id(),
                "md5ext": f"{generate_id()}.svg",
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
    
    return sprite

def add_bugs_to_calculator(calculator):
    """Ajoute des bugs dans le sprite Calculator"""
    blocks = calculator.get("blocks", {})
    modifications = []
    
    # Trouver et modifier les opérations
    # Note: Cette approche est simplifiée, il faudrait analyser le contexte
    
    for block_id, block in blocks.items():
        opcode = block.get("opcode", "")
        
        # BUG 1: Changer certaines additions en soustractions
        if opcode == "operator_add":
            # Vérifier le contexte avant de modifier (simplifié ici)
            parent = block.get("parent")
            if parent:
                parent_block = blocks.get(parent, {})
                parent_opcode = parent_block.get("opcode", "")
                
                # Si dans un data_setvariableto pour calculator.answer, c'est probablement le calcul
                if parent_opcode == "data_setvariableto":
                    # Vérifier si c'est pour calculator.answer
                    fields = parent_block.get("fields", {})
                    variable = fields.get("VARIABLE", [])
                    if isinstance(variable, list) and len(variable) > 0:
                        if "answer" in str(variable[0]):
                            # C'est probablement le calcul d'addition - le changer en soustraction
                            block["opcode"] = "operator_subtract"
                            modifications.append(f"BUG: Addition → Soustraction (bloc {block_id})")
    
    return modifications

def main():
    input_file = "../source-from-zip/project.json"
    output_file = "project-avec-tests-ui.json"
    
    print("🔧 Création de la version avec tests unitaires dans l'UI...")
    print()
    
    # Lire le projet
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            project = json.load(f)
        print(f"✅ Fichier lu: {input_file}")
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return
    
    # Trouver le Stage
    stage = next((t for t in project["targets"] if t.get("isStage")), None)
    if not stage:
        print("❌ Stage non trouvé")
        return
    
    # Ajouter variables de test
    print("📊 Ajout des variables de test au Stage...")
    var_ids = add_test_variables_to_stage(stage)
    print(f"   ✅ {len(var_ids)} variables ajoutées")
    
    # Ajouter broadcasts
    print("📡 Ajout des broadcasts de test...")
    broadcasts = add_test_broadcasts_to_stage(stage)
    print(f"   ✅ Broadcasts ajoutés")
    
    # Créer sprite Testeur
    print("🧪 Création du sprite Testeur...")
    test_sprite = create_test_sprite(var_ids, broadcasts)
    project["targets"].append(test_sprite)
    print(f"   ✅ Sprite créé avec {len(test_sprite['blocks'])} blocs")
    
    # Ajouter bugs au Calculator
    print("🐛 Ajout des bugs dans Calculator...")
    calculator = next((t for t in project["targets"] if t.get("name") == "Calculator"), None)
    if calculator:
        modifications = add_bugs_to_calculator(calculator)
        print(f"   ✅ {len(modifications)} modification(s)")
        for mod in modifications:
            print(f"      - {mod}")
    else:
        print("   ⚠️  Calculator non trouvé")
    
    # Sauvegarder
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(project, f, ensure_ascii=False, indent=2)
        print(f"\n✅ Version sauvegardée: {output_file}")
        print("\n📝 PROCHAINES ÉTAPES:")
        print("   1. Renommer en .sb3: mv project-avec-tests-ui.json project-avec-tests-ui.sb3")
        print("   2. Ouvrir dans Scratch")
        print("   3. Compléter les scripts de test selon votre structure")
        print("   4. Vérifier que les bugs sont bien présents")
    except Exception as e:
        print(f"❌ Erreur lors de la sauvegarde: {e}")

if __name__ == "__main__":
    main()

