#!/usr/bin/env python3
"""
Script pour analyser la structure de la calculatrice
et identifier où modifier pour ajouter les bugs et tests
"""

import json
import sys
from collections import defaultdict

def analyze_project(project_file):
    """Analyse le project.json et génère un rapport"""
    
    with open(project_file, 'r', encoding='utf-8') as f:
        project = json.load(f)
    
    print("=" * 60)
    print("ANALYSE DU PROJET SCRATCH")
    print("=" * 60)
    print()
    
    # Analyser les targets
    stage = None
    calculator = None
    
    for target in project["targets"]:
        if target.get("isStage"):
            stage = target
            print("📊 STAGE (Scène)")
            print(f"   Variables: {len(target.get('variables', {}))}")
            print(f"   Lists: {len(target.get('lists', {}))}")
            print(f"   Broadcasts: {len(target.get('broadcasts', {}))}")
            print(f"   Variables trouvées:")
            for var_id, var_data in list(target.get('variables', {}).items())[:5]:
                print(f"      - {var_data[0]} = {var_data[1]}")
            print(f"   Broadcasts trouvés:")
            for bc_id, bc_name in target.get('broadcasts', {}).items():
                print(f"      - {bc_name}")
        else:
            print(f"\n🎭 SPRITE: {target.get('name', 'Unknown')}")
            print(f"   Blocs: {len(target.get('blocks', {}))}")
            if target.get('name') == 'Calculator':
                calculator = target
    
    if calculator:
        print(f"\n🔧 ANALYSE DU SPRITE CALCULATOR")
        print("=" * 60)
        
        # Analyser les blocs
        blocks = calculator.get('blocks', {})
        opcodes = defaultdict(list)
        
        for block_id, block in blocks.items():
            opcode = block.get('opcode', 'unknown')
            opcodes[opcode].append(block_id)
        
        print(f"\n📦 Types de blocs trouvés:")
        important_opcodes = [
            'event_whenbroadcastreceived',
            'operator_add', 'operator_subtract',
            'operator_multiply', 'operator_divide',
            'data_setvariableto', 'data_itemoflist'
        ]
        
        for opcode in important_opcodes:
            if opcode in opcodes:
                print(f"   {opcode}: {len(opcodes[opcode])} blocs")
        
        # Trouver les broadcasts Equals
        print(f"\n🔍 Recherche du traitement du broadcast 'Equals':")
        equals_handlers = []
        
        for block_id, block in blocks.items():
            if block.get('opcode') == 'event_whenbroadcastreceived':
                inputs = block.get('inputs', {})
                if 'BROADCAST_INPUT' in inputs:
                    bc_input = inputs['BROADCAST_INPUT']
                    # Format: [1, [11, "Equals", "ID"]]
                    if isinstance(bc_input, list) and len(bc_input) > 1:
                        if isinstance(bc_input[1], list) and len(bc_input[1]) > 1:
                            bc_name = bc_input[1][1]
                            if 'Equals' in bc_name:
                                equals_handlers.append(block_id)
        
        print(f"   Blocs qui écoutent 'Equals': {len(equals_handlers)}")
        for handler_id in equals_handlers[:3]:
            print(f"      - {handler_id}")
        
        # Trouver les opérations mathématiques
        print(f"\n🔢 Opérations mathématiques trouvées:")
        math_ops = {
            'operator_add': [],
            'operator_subtract': [],
            'operator_multiply': [],
            'operator_divide': []
        }
        
        for block_id, block in blocks.items():
            opcode = block.get('opcode', '')
            for op_type in math_ops.keys():
                if opcode == op_type:
                    math_ops[op_type].append(block_id)
        
        for op_type, ids in math_ops.items():
            if ids:
                print(f"   {op_type}: {len(ids)} occurrence(s)")
                # Analyser le contexte des 3 premiers
                for block_id in ids[:3]:
                    block = blocks[block_id]
                    parent = block.get('parent')
                    if parent:
                        parent_block = blocks.get(parent, {})
                        parent_opcode = parent_block.get('opcode', 'unknown')
                        print(f"      - {block_id} (parent: {parent_opcode})")
    
    print(f"\n" + "=" * 60)
    print("✅ ANALYSE TERMINÉE")
    print("=" * 60)
    
    # Générer des recommandations
    print(f"\n💡 RECOMMANDATIONS:")
    print(f"   1. Les opérations mathématiques sont dans le sprite Calculator")
    print(f"   2. Modifier les opcodes pour introduire les bugs")
    print(f"   3. Créer un nouveau sprite 'Testeur' avec les tests")
    print(f"   4. Ajouter des variables de test au Stage")
    print(f"   5. Utiliser les broadcasts existants pour simuler les calculs")

if __name__ == "__main__":
    project_file = "source-from-zip/project.json"
    if len(sys.argv) > 1:
        project_file = sys.argv[1]
    
    try:
        analyze_project(project_file)
    except FileNotFoundError:
        print(f"❌ Fichier non trouvé: {project_file}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Erreur: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

