// Logique Blockly Runtime - Détection et utilisation des fonctions créées dans Blockly

// Workspace global pour pouvoir le réutiliser plus tard
var runtimeWorkspace;

// Configuration des fonctions attendues
// Pour l'instant, on ne teste QUE le bouton d'addition.
// L'idée finale sera d'étendre ce mapping aux autres opérations.
// Fonction attendue côté Blockly : function calc_add(a, b) { ... }
var ADD_FUNCTION_CONFIG = {
    selector: '.btn.operator[data-operator="+"]',
    functionName: 'calc_add'
};

// Déclaration du bloc console_log (même logique que dans src/app.js)
if (typeof Blockly !== 'undefined') {
    Blockly.Blocks['console_log'] = {
        init: function() {
            this.appendValueInput('TEXT')
                .setCheck(null)
                .appendField('afficher (console)');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(20);
            this.setTooltip('Affiche une valeur dans la console');
            this.setHelpUrl('');
        }
    };

    Blockly.JavaScript['console_log'] = function(block) {
        var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT',
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
        var code = 'console.log(' + value_text + ');\n';
        return code;
    };

    // Optionnel : redéfinir text_print pour utiliser console.log
    Blockly.JavaScript['text_print'] = function(block) {
        var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT',
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
        var code = 'console.log(' + value_text + ');\n';
        return code;
    };
}

// Met à jour l'état (enabled / disabled) du bouton d'addition
// NOTE: Dans cette version, tous les boutons sont actifs par défaut
// Cette fonction est gardée pour compatibilité mais ne désactive plus les boutons
function updateOperationButtonsStatus() {
    var statusEl = document.getElementById('runtime-status');
    var fn = window[ADD_FUNCTION_CONFIG.functionName];
    var implemented = typeof fn === 'function';

    if (implemented) {
        statusEl.classList.remove('disconnected');
        statusEl.classList.add('connected');
        statusEl.textContent = '✅ Fonction calc_add détectée et utilisée pour l\'addition.';
    } else {
        statusEl.classList.remove('connected');
        statusEl.classList.add('disconnected');
        statusEl.textContent = 'Tous les boutons sont actifs. Crée une fonction calc_add(a, b) pour utiliser ta version Blockly.';
    }
}

function initRuntimeBlockly() {
    if (typeof Blockly === 'undefined') {
        console.error('Blockly non chargé');
        return;
    }

    runtimeWorkspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
        media: 'src/blockly/media/',
        trashcan: true
    });

    // À chaque changement dans les blocs, on génère le code et on (re)définit les fonctions runtime
    runtimeWorkspace.addChangeListener(function(event) {
        if (event.type === Blockly.Events.UI) {
            return;
        }

        var statusEl = document.getElementById('runtime-status');

        try {
            var code = Blockly.JavaScript.workspaceToCode(runtimeWorkspace);
            code = replaceVarWithLet(code);

            // Mettre à jour la console de code (read-only)
            updateCodeConsole(code);

            // On évalue le code dans le scope global pour créer / mettre à jour
            // les fonctions globales (par ex. function calc_add(a, b) { ... }).
            // Utiliser l'"indirect eval" garantit une exécution au niveau global.
            if (code && code.trim() !== '') {
                // On supprime d'abord d'anciennes versions éventuelles
                try {
                    delete window.calc_add;
                } catch (e) {
                    // certains environnements peuvent refuser delete, on ignore
                }
                (0, eval)(code);
            }

            updateOperationButtonsStatus();
        } catch (error) {
            console.error('Erreur lors de la génération/évaluation du code Blockly runtime:', error);
            statusEl.classList.remove('connected');
            statusEl.classList.add('disconnected');
            statusEl.textContent = '❌ Erreur dans les blocs : ' + error.message;
            // Les boutons restent actifs même en cas d'erreur (fallback sur calcul standard)
        }
    });

    // État initial
    updateOperationButtonsStatus();
}

