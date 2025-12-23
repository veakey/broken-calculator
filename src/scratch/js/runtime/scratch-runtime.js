// Logique Scratch VM Runtime - Détection et utilisation des fonctions créées dans Scratch

// VM global pour pouvoir le réutiliser plus tard
// Déclaré dans le scope global pour être accessible partout
var scratchVM;
var scratchWorkspace;

// Configuration des fonctions attendues
// Pour l'instant, on ne teste QUE le bouton d'addition.
// L'idée finale sera d'étendre ce mapping aux autres opérations.
// Fonction attendue côté Scratch : function calc_add(a, b) { ... }
var ADD_FUNCTION_CONFIG = {
    selector: '.btn.operator[data-operator="+"]',
    functionName: 'calc_add'
};

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
        statusEl.textContent = 'Tous les boutons sont actifs. Crée une fonction calc_add(a, b) pour utiliser ta version Scratch.';
    }
}

// -----------------------
// Modèle et rendu des tests
// -----------------------

// Définition des scénarios de test pour la calculatrice
// Chaque test décrit une séquence de touches et une valeur attendue
var SCRATCH_CALC_TESTS = [
    {
        id: 'add-basic',
        label: 'Addition : 5 + 3 = 8',
        sequence: ['5', '+', '3', '='],
        expected: 8
    },
    {
        id: 'sub-basic',
        label: 'Soustraction : 10 - 4 = 6',
        sequence: ['1', '0', '-', '4', '='],
        expected: 6
    },
    {
        id: 'mul-basic',
        label: 'Multiplication : 6 × 7 = 42',
        sequence: ['6', '*', '7', '='],
        expected: 42
    },
    {
        id: 'div-basic',
        label: 'Division : 20 ÷ 4 = 5',
        sequence: ['2', '0', '/', '4', '='],
        expected: 5
    },
    {
        id: 'decimals',
        label: 'Nombres décimaux : 3.5 + 2.5 = 6',
        sequence: ['3', '.', '5', '+', '2', '.', '5', '='],
        expected: 6
    }
];

// Met à jour l'affichage des tests dans l'onglet Tests
function renderTests(results) {
    var summaryEl = document.getElementById('tests-summary');
    var listEl = document.getElementById('tests-list');
    if (!summaryEl || !listEl) {
        return;
    }

    if (!results || results.length === 0) {
        summaryEl.textContent = 'Score : 0/0 tests exécutés';
        listEl.innerHTML = '';
        return;
    }

    var total = results.length;
    var passed = results.filter(function(r) { return r.ok; }).length;

    summaryEl.textContent = 'Score : ' + passed + '/' + total + ' tests réussis';

    var html = results.map(function(r) {
        var cls = 'test-item ' + (r.ok ? 'success' : 'fail');
        var details = 'Attendu : ' + r.expected + ' | Obtenu : ' + r.actual;
        var msg = r.message ? '<div class="test-item-details">' + r.message + '</div>' : '';
        return '' +
            '<div class="' + cls + '">' +
                '<div class="test-item-title">' + r.label + '</div>' +
                '<div class="test-item-details">' + details + '</div>' +
                msg +
            '</div>';
    }).join('');

    listEl.innerHTML = html;
}

// -----------------------
// Exécution des scénarios de test
// -----------------------

// Réinitialise la calculatrice en appelant la logique existante
function resetCalculatorForTests() {
    if (typeof handleClear === 'function') {
        handleClear();
    } else {
        var clearBtn = document.querySelector('.btn.clear[data-action="clear"]');
        if (clearBtn) {
            clearBtn.click();
        }
    }
}

// Joue une séquence de touches sur la calculatrice
function playSequence(sequence) {
    sequence.forEach(function(token) {
        if (token === '=') {
            if (typeof performEquals === 'function') {
                performEquals();
            } else {
                var eqBtn = document.querySelector('.btn.equals[data-action="equals"]');
                if (eqBtn) eqBtn.click();
            }
            return;
        }

        if (token === '+' || token === '-' || token === '*' || token === '/') {
            if (typeof handleOperatorClick === 'function') {
                handleOperatorClick(token);
            } else {
                var opBtn = document.querySelector('.btn.operator[data-operator="' + token + '"]');
                if (opBtn) opBtn.click();
            }
            return;
        }

        // Sinon, c'est un chiffre ou un point
        if (typeof handleNumberClick === 'function') {
            handleNumberClick(token);
        } else {
            var numBtn = document.querySelector('.btn.number[data-number="' + token + '"]');
            if (numBtn) numBtn.click();
        }
    });
}

// Lit la valeur actuelle affichée par la calculatrice
function getDisplayValue() {
    var display = document.getElementById('display');
    if (!display) return NaN;
    var text = display.textContent || display.innerText || '';
    var num = parseFloat(text.replace(',', '.'));
    return num;
}

// Exécute tous les tests définis dans SCRATCH_CALC_TESTS
function runScratchTests() {
    var results = [];

    SCRATCH_CALC_TESTS.forEach(function(test) {
        resetCalculatorForTests();
        playSequence(test.sequence);
        var actual = getDisplayValue();
        var ok = !isNaN(actual) && Math.abs(actual - test.expected) < 1e-9;
        var message = '';

        if (!ok) {
            message = 'Test échoué pour ' + test.label;
        }

        results.push({
            id: test.id,
            label: test.label,
            expected: test.expected,
            actual: isNaN(actual) ? 'NaN' : actual,
            ok: ok,
            message: message
        });
    });

    renderTests(results);
}

// Convertit les blocs Scratch en JavaScript
// Note: Scratch VM n'a pas de générateur JavaScript direct comme Blockly
// Cette fonction crée un wrapper qui utilise le runtime Scratch VM
function convertScratchBlocksToJS(vm) {
    var code = '';
    
    try {
        // Récupérer tous les sprites et leurs scripts
        var targets = vm.runtime.targets;
        console.log('Nombre de targets:', targets ? targets.length : 0);
        
        if (!targets || targets.length === 0) {
            console.log('Aucun target trouvé dans le runtime Scratch VM');
            return code;
        }
        
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];
            console.log('Target', i, ':', target.name, target.isStage ? '(Stage)' : '(Sprite)');
            
            if (!target.blocks) {
                console.log('  Pas de blocs pour ce target');
                continue;
            }
            
            var blocks = target.blocks;
            var blockCount = blocks._blocks ? Object.keys(blocks._blocks).length : 0;
            console.log('  Nombre de blocs:', blockCount);
            
            if (blockCount === 0) {
                console.log('  Aucun bloc dans ce target');
                continue;
            }
            
            // Chercher les fonctions définies (procédures)
            for (var blockId in blocks._blocks) {
                var block = blocks.getBlock(blockId);
                
                if (block && block.opcode === 'procedures_definition') {
                    // C'est une définition de fonction
                    var procName = block.mutation.proccode || 'procedure';
                    console.log('  Fonction trouvée:', procName);
                    
                    // Extraire les paramètres
                    var params = [];
                    if (block.mutation.argumentids) {
                        params = block.mutation.argumentnames || [];
                    }
                    console.log('  Paramètres:', params);
                    
                    // Générer le code JavaScript pour cette fonction
                    code += generateFunctionFromScratchBlock(vm, block, procName, params);
                }
            }
        }
        
        if (code === '') {
            console.log('Aucune fonction trouvée dans les blocs Scratch');
        } else {
            console.log('Code généré:', code);
        }
    } catch (error) {
        console.error('Erreur lors de la conversion des blocs Scratch:', error);
    }
    
    return code;
}

// Génère le code JavaScript pour une fonction Scratch
function generateFunctionFromScratchBlock(vm, block, functionName, params) {
    // Pour l'instant, on crée un wrapper qui appelle le runtime Scratch VM
    // Plus tard, on pourra améliorer pour générer du vrai JavaScript
    
    var paramList = params.join(', ');
    var functionCode = 'function ' + functionName + '(' + paramList + ') {\n';
    functionCode += '    // Wrapper pour fonction Scratch\n';
    functionCode += '    if (!window._scratchVM) return 0;\n';
    functionCode += '    \n';
    functionCode += '    // Appeler la fonction via le runtime Scratch VM\n';
    functionCode += '    try {\n';
    functionCode += '        var result = window._scratchVM.runtime.callProcedure(\'' + functionName + '\', [' + paramList + ']);\n';
    functionCode += '        return result;\n';
    functionCode += '    } catch (e) {\n';
    functionCode += '        console.error(\'Erreur dans ' + functionName + ':\', e);\n';
    functionCode += '        return 0;\n';
    functionCode += '    }\n';
    functionCode += '}\n\n';
    
    return functionCode;
}

// Met à jour les fonctions runtime depuis Scratch VM
function updateRuntimeFunctions() {
    var statusEl = document.getElementById('runtime-status');
    
    try {
        if (!scratchVM || !scratchVM.runtime) {
            console.warn('Scratch VM non initialisé');
            return;
        }
        
        // Exposer le VM globalement pour que les wrappers puissent l'utiliser
        window._scratchVM = scratchVM;
        
        // Convertir les blocs en JavaScript
        var code = convertScratchBlocksToJS(scratchVM);
        
        // Si on a du code, l'exécuter
        if (code && code.trim() !== '') {
            // Nettoyer les anciennes fonctions
            try {
                delete window.calc_add;
            } catch (e) {
                // Ignorer si delete échoue
            }
            
            // Exécuter le code généré
            code = replaceVarWithLet(code);
            (0, eval)(code);
            
            // Mettre à jour la console de code
            updateCodeConsole(code);
        } else {
            // Pas de code généré, nettoyer
            updateCodeConsole('');
        }
        
        updateOperationButtonsStatus();
    } catch (error) {
        console.error('Erreur lors de la mise à jour des fonctions runtime Scratch:', error);
        if (statusEl) {
            statusEl.classList.remove('connected');
            statusEl.classList.add('disconnected');
            statusEl.textContent = '❌ Erreur dans les blocs Scratch : ' + error.message;
        }
    }
}

// Écoute les changements dans Scratch VM
function setupScratchVMListeners() {
    if (!scratchVM || !scratchVM.runtime) {
        return;
    }
    
    // Écouter les changements de blocs via les événements du runtime
    // Scratch VM émet des événements quand les blocs changent
    scratchVM.runtime.on('PROJECT_LOADED', function() {
        console.log('Projet Scratch chargé');
        updateRuntimeFunctions();
    });
    
    // Écouter les changements dans les scripts
    // Note: Scratch VM n'a pas d'événement direct "BLOCKS_UPDATE" comme Blockly
    // On utilise un polling ou on écoute les changements de workspace si disponible
    
    // Alternative: utiliser un interval pour détecter les changements
    // (solution temporaire, à améliorer avec une vraie API d'événements)
    var lastBlocksHash = '';
    var checkInterval = setInterval(function() {
        if (!scratchVM || !scratchVM.runtime) {
            clearInterval(checkInterval);
            return;
        }
        
        try {
            // Calculer un hash des blocs actuels pour détecter les changements
            var currentHash = JSON.stringify(scratchVM.runtime.targets.map(function(t) {
                return t.blocks ? Object.keys(t.blocks._blocks || {}).length : 0;
            }));
            
            if (currentHash !== lastBlocksHash) {
                lastBlocksHash = currentHash;
                updateRuntimeFunctions();
            }
        } catch (e) {
            // Ignorer les erreurs de polling
        }
    }, 500); // Vérifier toutes les 500ms
}

function initRuntimeScratch() {
    console.log('initRuntimeScratch appelé');
    console.log('VirtualMachine disponible:', typeof VirtualMachine !== 'undefined');
    
    // Vérifier que Scratch VM est disponible
    // Scratch VM peut être chargé de différentes façons :
    // 1. Via CDN : window.VirtualMachine
    // 2. Via npm : require('scratch-vm')
    // 3. Via import ES6 : import VM from 'scratch-vm'
    
    if (typeof VirtualMachine !== 'undefined') {
        // Scratch VM chargé globalement (CDN ou script tag)
        console.log('Initialisation de Scratch VM depuis VirtualMachine...');
        scratchVM = new VirtualMachine();
        // Exposer globalement pour être sûr qu'il soit accessible
        window.scratchVM = scratchVM;
    } else if (typeof require !== 'undefined') {
        // Essayer de charger depuis node_modules si on est dans un environnement Node
        try {
            var VM = require('scratch-vm');
            scratchVM = new VM();
        } catch (e) {
            console.error('Impossible de charger Scratch VM:', e);
            var statusEl = document.getElementById('runtime-status');
            if (statusEl) {
                statusEl.textContent = '❌ Scratch VM non disponible. Chargez la bibliothèque scratch-vm.';
            }
            return;
        }
    } else {
        console.error('Scratch VM non chargé. Assurez-vous d\'inclure scratch-vm dans la page.');
        var statusEl = document.getElementById('runtime-status');
        if (statusEl) {
            statusEl.textContent = '❌ Scratch VM non disponible. Chargez la bibliothèque scratch-vm.';
        }
        return;
    }
    
    // Initialiser le runtime
    if (scratchVM && scratchVM.runtime) {
        // Ne pas charger de projet automatiquement au démarrage
        // L'utilisateur devra cliquer sur "Charger projet vide" manuellement
        // Cela évite les erreurs d'encodage au chargement initial
        console.log('Scratch VM initialisé, prêt à charger un projet');
        
        // Mettre à jour le statut
        var statusEl = document.getElementById('runtime-status');
        if (statusEl) {
            statusEl.textContent = 'Scratch VM prêt. Cliquez sur "Charger projet vide" pour commencer.';
            statusEl.classList.remove('connected');
            statusEl.classList.add('disconnected');
        }
        
        // Ne pas charger de projet ici, laisser l'utilisateur le faire manuellement
        // setupScratchVMListeners();
        // updateRuntimeFunctions();
        
    // État initial
    updateOperationButtonsStatus();
        return;
        
        /* Code commenté - chargement automatique désactivé pour éviter les erreurs
        // Créer un projet minimal avec uniquement des caractères ASCII
        var emptyProject = {
            targets: [{
                isStage: true,
                name: 'Stage',
                blocks: {},
                variables: {},
                lists: {},
                broadcasts: {},
                comments: {},
                currentCostume: 0,
                costumes: [],
                sounds: [],
                volume: 100,
                layerOrder: 0,
                tempo: 60,
                videoTransparency: 50,
                videoState: 'off'
            }],
            monitors: [],
            extensions: [],
            meta: {
                semver: '3.0.0',
                vm: '1.5.0'
            }
        };
        
        // Convertir en ArrayBuffer pour éviter les problèmes d'encodage
        var projectJson = JSON.stringify(emptyProject);
        var projectBuffer = new TextEncoder().encode(projectJson).buffer;
        
        scratchVM.loadProject(projectBuffer).then(function() {
            console.log('✅ Projet Scratch vide chargé avec succès');
            setupScratchVMListeners();
            updateRuntimeFunctions();
            
            // Mettre à jour le statut
            var statusEl = document.getElementById('runtime-status');
            if (statusEl) {
                statusEl.textContent = '✅ Projet Scratch vide chargé. Vous pouvez maintenant créer des fonctions.';
                statusEl.classList.remove('disconnected');
                statusEl.classList.add('connected');
            }
        }).catch(function(error) {
            console.error('❌ Erreur lors du chargement du projet Scratch:', error);
            var statusEl = document.getElementById('runtime-status');
            if (statusEl) {
                statusEl.textContent = '❌ Erreur: ' + error.message;
                statusEl.classList.remove('connected');
                statusEl.classList.add('disconnected');
            }
        });
        */
    }
    
    // État initial
    updateOperationButtonsStatus();
}

// Initialisation du bouton \"Lancer les tests\"
function initScratchTestsUI() {
    var runBtn = document.getElementById('run-tests-button');
    if (runBtn) {
        runBtn.addEventListener('click', function() {
            runScratchTests();
        });
    }
}

