// Gestion du runtime Blockly - Détection et utilisation des fonctions créées

let workspace;
let calculateFunction = null; // Variable globale partagée avec calculator.js

function initWorkspace() {
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
        zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
        media: 'https://unpkg.com/blockly/media/',
        trashcan: true
    });
    
    workspace.addChangeListener(function(event) {
        if (event.type !== Blockly.Events.UI) {
            updateCalculatorFunction();
        }
    });
    
    updateCalculatorFunction();
}


function updateCalculatorFunction() {
    try {
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    if (code.includes('function calculer')) {
    eval(code);
    calculateFunction = window.calculer || null;

    var status = document.getElementById('status');
    if (calculateFunction) {
    status.className = 'status connected';
    status.textContent = '✅ Fonction connectée - La calculatrice utilise ton code !';
    } else {
    status.className = 'status disconnected';
    status.textContent = '⚠️ Fonction "calculer" non trouvée';
    }
    } else {
    calculateFunction = null;
    var status = document.getElementById('status');
    status.className = 'status disconnected';
    status.textContent = '⚠️ Crée une fonction "calculer" avec des conditions';
    }
    } catch (error) {
    console.error('Erreur:', error);
    calculateFunction = null;
    var status = document.getElementById('status');
    status.className = 'status disconnected';
    status.textContent = '❌ Erreur dans les blocs : ' + error.message;
    }
    }

    if (event.type !== Blockly.Events.UI) {
    }
    });


// Initialiser le workspace quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorkspace);
} else {
    initWorkspace();
}