// Zone de sortie pour capturer les affichages
var outputLog = [];

// Fonction pour ajouter une ligne à la sortie
function addOutput(text, isError) {
    outputLog.push({text: text, isError: isError || false});
    updateOutputDisplay();
}

// Fonction pour mettre à jour l'affichage de la sortie
function updateOutputDisplay() {
    var outputPanel = document.getElementById('outputPanel');
    if (outputLog.length === 0) {
        outputPanel.textContent = '';
        return;
    }
    
    var html = '';
    for (var i = 0; i < outputLog.length; i++) {
        var className = outputLog[i].isError ? 'output-error' : 'output-line';
        html += '<div class="' + className + '">' + 
                escapeHtml(outputLog[i].text) + 
                '</div>';
    }
    outputPanel.innerHTML = html;
    outputPanel.scrollTop = outputPanel.scrollHeight;
}

// Fonction pour échapper le HTML
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Fonction pour effacer la sortie
function clearOutput() {
    outputLog = [];
    updateOutputDisplay();
}

// Fonction pour exécuter le code
function runCode() {
    clearOutput();
    addOutput('=== Exécution du code ===', false);
    
    // Sauvegarder les fonctions originales dès le début
    var originalConsoleLog = console.log;
    var originalConsoleError = console.error;
    var originalAlert = window.alert;
    
    try {
        var code = Blockly.JavaScript.workspaceToCode(workspace);

        if (!code || code.trim() === '') {
            addOutput('Aucun code à exécuter. Créez d\'abord des blocs !', true);
            return;
        }
        
        // Fonction utilitaire pour formater les messages console.* dans la sortie
        function formatConsoleArgs() {
            var args = Array.prototype.slice.call(arguments);
            return args.map(function(arg) {
                if (arg === null) {
                    return 'null';
                }
                if (arg === undefined) {
                    return 'undefined';
                }
                if (typeof arg === 'object') {
                    try {
                        // Utiliser un replacer personnalisé pour gérer les fonctions et undefined
                        return JSON.stringify(arg, function(key, value) {
                            if (typeof value === 'function') {
                                return '[Function]';
                            }
                            if (value === undefined) {
                                return '[undefined]';
                            }
                            return value;
                        }, 2);
                    } catch (e) {
                        // Si JSON.stringify échoue (objets circulaires, etc.)
                        try {
                            return String(arg);
                        } catch (e2) {
                            return '[Object]';
                        }
                    }
                }
                return String(arg);
            }).join(' ');
        }
        
        // Remplacer console.log pour capturer les sorties "normales"
        console.log = function() {
            var message = formatConsoleArgs.apply(null, arguments);
            addOutput(message, false);
            originalConsoleLog.apply(console, arguments);
        };
        
        // Remplacer console.error pour capturer les erreurs (dont celles de Blockly)
        console.error = function() {
            var message = formatConsoleArgs.apply(null, arguments);
            addOutput(message, true);
            originalConsoleError.apply(console, arguments);
        };
        
        // Remplacer window.alert pour capturer les alertes
        window.alert = function(message) {
            addOutput('ALERT: ' + String(message), false);
            originalAlert(message);
        };
        
        // Remplacer "var" par "let" de manière plus intelligente
        code = replaceVarWithLet(code);
        
        // Exécuter le code dans un contexte isolé
        try {
            var func = new Function(code);
            func();
            addOutput('=== Exécution terminée ===', false);
        } catch (execError) {
            addOutput('ERREUR: ' + execError.message, true);
            originalConsoleError('Erreur d\'exécution:', execError);
        }
        
    } catch (error) {
        addOutput('ERREUR lors de la génération du code: ' + error.message, true);
        originalConsoleError('Erreur:', error);
    } finally {
        // Garantir la restauration des fonctions originales
        console.log = originalConsoleLog;
        console.error = originalConsoleError;
        window.alert = originalAlert;
    }
}

// Fonction helper pour remplacer "var" par "let" intelligemment
function replaceVarWithLet(code) {
    return code.replace(/\bvar\s+/g, function(match, offset, string) {
        // Vérifier si on est dans un for (en cherchant en arrière)
        var beforeMatch = string.substring(Math.max(0, offset - 50), offset);
        // Si on trouve "for" suivi de parenthèses avant le match, on garde "var"
        if (/for\s*\([^)]*$/.test(beforeMatch)) {
            return match; // Garder "var" dans les boucles for
        }
        return 'let '; // Remplacer "var" par "let"
    });
}

// Générer le code JavaScript
function generateCode() {
    try {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        // Remplacer "var" par "let" pour un code plus moderne
        code = replaceVarWithLet(code);
        
        var codePreview = document.getElementById('codePreview');
        if (code && code.trim() !== '') {
            codePreview.textContent = code;
        } else {
            codePreview.textContent = '// Aucun bloc dans l\'espace de travail\n// Glissez des blocs depuis la boîte à outils pour commencer';
        }
    } catch (error) {
        // Afficher l'erreur dans l'aperçu de code
        document.getElementById('codePreview').textContent = 
            '// Erreur lors de la génération du code:\n// ' + error.message;
        
        // Et aussi dans le "terminal" de la page
        try {
            addOutput('ERREUR lors de la génération du code: ' + error.message, true);
        } catch (e) {
            // Si addOutput n'est pas encore défini pour une raison quelconque,
            // on ne casse pas l'application
        }
        
        console.error('Erreur:', error);
    }
}

// Copier le code dans le presse-papiers
function copyCode() {
    var code = document.getElementById('codePreview').textContent;
    if (!code || code.trim() === '' || code.includes('Aucun bloc')) {
        alert('Aucun code à copier. Générez d\'abord du code !');
        return;
    }
    
    navigator.clipboard.writeText(code).then(function() {
        alert('Code copié dans le presse-papiers !');
    }).catch(function(err) {
        // Fallback pour les navigateurs plus anciens
        var textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('Code copié dans le presse-papiers !');
        } catch (err) {
            alert('Impossible de copier le code. Veuillez le sélectionner manuellement.');
        }
        document.body.removeChild(textarea);
    });
}

// Effacer l'espace de travail
function clearWorkspace() {
    if (confirm('Voulez-vous vraiment effacer tout l\'espace de travail ?')) {
        workspace.clear();
        document.getElementById('codePreview').textContent = '';
    }
}

// Variable globale pour le workspace Blockly
var workspace;

// Initialiser l'application quand le DOM est prêt et Blockly chargé
function initApp() {
    // Vérifier que Blockly est chargé avant toute utilisation
    if (typeof Blockly === 'undefined') {
        document.body.innerHTML = '<div style="padding: 50px; text-align: center; color: white; font-size: 18px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center;"><div><h1>Erreur de chargement</h1><p>Blockly n\'a pas pu être chargé. Vérifiez votre connexion internet et rechargez la page.</p></div></div>';
        throw new Error('Blockly n\'est pas disponible');
    }
    
    // Définir le bloc personnalisé console_log AVANT l'initialisation du workspace
    Blockly.Blocks['console_log'] = {
        init: function() {
            this.appendValueInput('TEXT')
                .setCheck(null)
                .appendField('afficher');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(20);
            this.setTooltip('Affiche une valeur dans la console de sortie');
            this.setHelpUrl('');
        }
    };
    
    // Définir le générateur JavaScript pour console_log
    Blockly.JavaScript['console_log'] = function(block) {
        var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', 
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
        var code = 'console.log(' + value_text + ');\n';
        return code;
    };
    
    // Redéfinir le générateur pour text_print pour utiliser console.log
    Blockly.JavaScript['text_print'] = function(block) {
        var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', 
            Blockly.JavaScript.ORDER_NONE) || '\'\'';
        var code = 'console.log(' + value_text + ');\n';
        return code;
    };
    
    // Initialiser Blockly
    workspace = Blockly.inject('blocklyDiv', {
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
        // Utiliser les assets Blockly locaux (copiés depuis node_modules/blockly/media)
        // Le chemin est relatif à index.html
        media: 'src/blockly/media/',
        trashcan: true
    });
    
    // Mettre à jour le code automatiquement quand l'espace de travail change
    workspace.addChangeListener(function(event) {
        if (event.type !== Blockly.Events.UI) {
            console.log(event);
            generateCode();
        }
    });
    
    // Générer le code au chargement initial
    generateCode();
}

// Attendre que le DOM soit chargé et que Blockly soit disponible
function waitForBlockly() {
    if (typeof Blockly !== 'undefined') {
        initApp();
    } else {
        // Réessayer après un court délai
        setTimeout(waitForBlockly, 50);
    }
}

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForBlockly);
} else {
    // Le DOM est déjà chargé
    waitForBlockly();
}

