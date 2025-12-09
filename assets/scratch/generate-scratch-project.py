#!/usr/bin/env python3
"""
Générateur de projets Scratch pour la calculatrice cassée

Ce script génère la structure JSON de base d'un projet Scratch avec :
- Variables nécessaires
- Scripts de base pour les boutons
- Bugs intentionnels selon le niveau
- Structure prête pour complétion manuelle

Usage:
    python generate-scratch-project.py --niveau 8P --output project.json
"""

import json
import uuid
import argparse
from typing import Dict, List, Any
from datetime import datetime

# Opcodes Scratch courants
OPCODES = {
    'event_whenflagclicked': 'event_whenflagclicked',
    'event_whenthisspriteclicked': 'event_whenthisspriteclicked',
    'data_setvariableto': 'data_setvariableto',
    'data_changevariableby': 'data_changevariableby',
    'operator_add': 'operator_add',
    'operator_subtract': 'operator_subtract',
    'operator_multiply': 'operator_multiply',
    'operator_divide': 'operator_divide',
    'operator_equals': 'operator_equals',
    'operator_gt': 'operator_gt',
    'control_if': 'control_if',
    'control_if_else': 'control_if_else',
    'control_repeat': 'control_repeat',
    'control_forever': 'control_forever',
    'looks_say': 'looks_say',
    'data_join': 'data_join',
    'operator_contains': 'operator_contains',
    'operator_not': 'operator_not',
}

def generate_id() -> str:
    """Génère un ID unique pour Scratch"""
    return str(uuid.uuid4()).replace('-', '')

def create_block(opcode: str, inputs: Dict = None, fields: Dict = None, 
                 next: str = None, parent: str = None, top_level: bool = False) -> Dict:
    """Crée un bloc Scratch"""
    block = {
        "opcode": opcode,
        "next": next,
        "parent": parent,
        "inputs": inputs or {},
        "fields": fields or {},
        "shadow": top_level,
        "topLevel": top_level,
        "x": 0,
        "y": 0
    }
    return block

def create_variable_block(var_name: str) -> Dict:
    """Crée un bloc de variable"""
    return {
        "name": var_name,
        "id": generate_id()
    }

def create_input_block(value: Any, input_id: str = None) -> List:
    """Crée un input pour un bloc"""
    if input_id is None:
        input_id = generate_id()
    
    if isinstance(value, (int, float)):
        return [1, [4, str(value)]]
    elif isinstance(value, str):
        return [1, [10, value]]
    else:
        return [1, [10, str(value)]]

def create_variable_input(var_id: str) -> List:
    """Crée un input de variable"""
    return [1, [12, var_id, None]]

def create_script_button_number(number: str, var_affichage_id: str, with_bug: bool = False) -> List[Dict]:
    """Crée un script pour un bouton numérique"""
    blocks = {}
    block_ids = []
    
    # Bloc "quand ce sprite est cliqué"
    click_id = generate_id()
    blocks[click_id] = create_block(
        OPCODES['event_whenthisspriteclicked'],
        top_level=True
    )
    block_ids.append(click_id)
    
    # Bloc "ajouter [number] à [affichage]"
    if with_bug:
        # BUG: Ajoute toujours, même si affichage = "0"
        join_id = generate_id()
        blocks[join_id] = create_block(
            OPCODES['data_join'],
            inputs={
                "STRING1": create_input_block(var_affichage_id),
                "STRING2": create_input_block(number)
            },
            parent=click_id
        )
        
        set_id = generate_id()
        blocks[set_id] = create_block(
            OPCODES['data_setvariableto'],
            inputs={
                "VALUE": [1, [join_id]]
            },
            fields={"VARIABLE": [var_affichage_id, None]},
            parent=join_id
        )
    else:
        # Version correcte : vérifier si affichage = "0"
        set_id = generate_id()
        blocks[set_id] = create_block(
            OPCODES['data_setvariableto'],
            inputs={
                "VALUE": create_input_block(number)
            },
            fields={"VARIABLE": [var_affichage_id, None]},
            parent=click_id
        )
    
    return blocks

def create_script_operator(operator: str, var_nombre1_id: str, var_operateur_id: str, 
                          var_affichage_id: str, with_bug: bool = False) -> List[Dict]:
    """Crée un script pour un bouton opérateur"""
    blocks = {}
    
    click_id = generate_id()
    blocks[click_id] = create_block(
        OPCODES['event_whenthisspriteclicked'],
        top_level=True
    )
    
    # Mettre nombre1 à affichage
    set_nombre1_id = generate_id()
    blocks[set_nombre1_id] = create_block(
        OPCODES['data_setvariableto'],
        inputs={
            "VALUE": create_variable_input(var_affichage_id)
        },
        fields={"VARIABLE": [var_nombre1_id, None]},
        parent=click_id
    )
    
    # Mettre operateur à l'opérateur
    set_operateur_id = generate_id()
    blocks[set_operateur_id] = create_block(
        OPCODES['data_setvariableto'],
        inputs={
            "VALUE": create_input_block(operator)
        },
        fields={"VARIABLE": [var_operateur_id, None]},
        parent=set_nombre1_id,
        next=set_nombre1_id
    )
    
    # Mettre affichage à vide
    set_affichage_id = generate_id()
    blocks[set_affichage_id] = create_block(
        OPCODES['data_setvariableto'],
        inputs={
            "VALUE": create_input_block("")
        },
        fields={"VARIABLE": [var_affichage_id, None]},
        parent=set_operateur_id,
        next=set_operateur_id
    )
    
    return blocks

def create_script_equals(var_nombre1_id: str, var_nombre2_id: str, var_operateur_id: str,
                        var_affichage_id: str, var_resultat_id: str, with_bugs: Dict = None) -> List[Dict]:
    """Crée un script pour le bouton égal avec bugs optionnels"""
    if with_bugs is None:
        with_bugs = {}
    
    blocks = {}
    
    click_id = generate_id()
    blocks[click_id] = create_block(
        OPCODES['event_whenthisspriteclicked'],
        top_level=True
    )
    
    # Mettre nombre2 à affichage
    set_nombre2_id = generate_id()
    blocks[set_nombre2_id] = create_block(
        OPCODES['data_setvariableto'],
        inputs={
            "VALUE": create_variable_input(var_affichage_id)
        },
        fields={"VARIABLE": [var_nombre2_id, None]},
        parent=click_id
    )
    
    # Structure if/else pour les opérateurs
    # Pour simplifier, on crée juste la structure de base
    # Les bugs seront ajoutés manuellement dans Scratch
    
    return blocks

def create_stage_variables():
    """Crée les variables de base pour le Stage"""
    variables = {}
    var_ids = {}
    
    var_names = [
        "nombre1", "nombre2", "operateur", "affichage", "resultat"
    ]
    
    for var_name in var_names:
        var_id = generate_id()
        var_ids[var_name] = var_id
        variables[var_id] = {
            "name": var_name,
            "value": 0 if var_name != "operateur" and var_name != "affichage" else "",
            "isCloud": False
        }
    
    return variables, var_ids

def create_basic_project(niveau: str = "basique", include_advanced: bool = False) -> Dict:
    """Crée la structure de base d'un projet Scratch"""
    
    # Structure de base du projet
    project = {
        "targets": [],
        "monitors": [],
        "extensions": [],
        "meta": {
            "semver": "3.0.0",
            "vm": "0.2.0",
            "agent": "Mozilla/5.0"
        }
    }
    
    # Créer le Stage
    stage = {
        "isStage": True,
        "name": "Stage",
        "variables": {},
        "lists": {},
        "broadcasts": {},
        "blocks": {},
        "comments": {},
        "currentCostume": 0,
        "costumes": [],
        "sounds": [],
        "volume": 100,
        "layerOrder": 0,
        "tempo": 60,
        "videoTransparency": 50,
        "videoState": "on",
        "textToSpeechLanguage": None
    }
    
    # Ajouter les variables
    variables, var_ids = create_stage_variables()
    stage["variables"] = variables
    
    # Ajouter des variables supplémentaires selon le niveau
    if niveau in ["intermediaire", "avance", "expert"]:
        var_id = generate_id()
        stage["variables"][var_id] = {
            "name": "en_attente",
            "value": False,
            "isCloud": False
        }
        var_ids["en_attente"] = var_id
    
    if niveau in ["expert"]:
        var_id = generate_id()
        stage["variables"][var_id] = {
            "name": "mode_decimale",
            "value": False,
            "isCloud": False
        }
        var_ids["mode_decimale"] = var_id
    
    # Créer un sprite Calculatrice de base
    calculator_sprite = {
        "isStage": False,
        "name": "Calculatrice",
        "variables": {},
        "lists": {},
        "broadcasts": {},
        "blocks": {},
        "comments": {},
        "currentCostume": 0,
        "costumes": [
            {
                "name": "costume1",
                "bitmapResolution": 1,
                "dataFormat": "svg",
                "assetId": generate_id(),
                "md5ext": f"{generate_id()}.svg",
                "rotationCenterX": 0,
                "rotationCenterY": 0
            }
        ],
        "sounds": [],
        "volume": 100,
        "layerOrder": 1,
        "visible": True,
        "x": 0,
        "y": 0,
        "size": 100,
        "direction": 90,
        "draggable": False,
        "rotationStyle": "all around"
    }
    
    # Script d'affichage sur le sprite Calculatrice
    display_script_id = generate_id()
    calculator_sprite["blocks"][display_script_id] = create_block(
        OPCODES['event_whenflagclicked'],
        top_level=True
    )
    
    forever_id = generate_id()
    calculator_sprite["blocks"][forever_id] = create_block(
        OPCODES['control_forever'],
        parent=display_script_id
    )
    
    say_id = generate_id()
    calculator_sprite["blocks"][say_id] = create_block(
        OPCODES['looks_say'],
        inputs={
            "MESSAGE": create_variable_input(var_ids["affichage"])
        },
        parent=forever_id
    )
    
    project["targets"].append(stage)
    project["targets"].append(calculator_sprite)
    
    return project, var_ids

def generate_project(niveau: str = "basique", include_advanced: bool = False, 
                    output_file: str = "project.json") -> None:
    """Génère un projet Scratch complet"""
    
    print(f"🔧 Génération du projet Scratch - Niveau: {niveau}")
    print(f"   Fonctions avancées: {'Oui' if include_advanced else 'Non'}")
    
    project, var_ids = create_basic_project(niveau, include_advanced)
    
    # Ajouter des commentaires dans le JSON pour guider
    project["_meta"] = {
        "generated": datetime.now().isoformat(),
        "niveau": niveau,
        "include_advanced": include_advanced,
        "variables": var_ids,
        "instructions": [
            "Ce fichier a été généré automatiquement",
            "Vous devez compléter manuellement :",
            "1. Créer les sprites des boutons (0-9, +, -, ×, ÷, =, C)",
            "2. Ajouter les scripts pour chaque bouton",
            "3. Ajouter les bugs intentionnels selon bugs-detaille.md",
            "4. Si include_advanced=True, ajouter les boutons sin, cos, tan, hyp, %",
            "5. Créer le sprite Testeur pour les tests unitaires"
        ]
    }
    
    # Sauvegarder
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(project, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Projet généré : {output_file}")
    print(f"   Variables créées : {len(var_ids)}")
    print(f"   Sprites créés : {len(project['targets'])}")
    print(f"\n📝 Prochaines étapes :")
    print(f"   1. Ouvrir {output_file} dans Scratch")
    print(f"   2. Compléter selon les instructions dans _meta")
    print(f"   3. Voir bugs-detaille.md pour les bugs à introduire")

def main():
    parser = argparse.ArgumentParser(
        description="Générateur de projets Scratch pour calculatrice cassée"
    )
    parser.add_argument(
        '--niveau',
        choices=['basique', 'intermediaire', 'avance', 'expert'],
        default='basique',
        help='Niveau de difficulté'
    )
    parser.add_argument(
        '--advanced',
        action='store_true',
        help='Inclure les fonctions avancées (sin, cos, tan, hyp, %)'
    )
    parser.add_argument(
        '--output',
        default='project-generated.json',
        help='Fichier de sortie'
    )
    
    args = parser.parse_args()
    
    generate_project(
        niveau=args.niveau,
        include_advanced=args.advanced,
        output_file=args.output
    )

if __name__ == "__main__":
    main()

