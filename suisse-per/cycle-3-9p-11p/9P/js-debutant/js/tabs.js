// Système d'onglets calculatrice/console

// Gestion des onglets calculatrice/console
function initTabs() {
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetTab = btn.getAttribute('data-tab');
            
            // Retirer active de tous les boutons et contenus
            tabButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(function(content) {
                content.classList.remove('active');
            });
            
            // Activer le bouton et le contenu cliqués
            btn.classList.add('active');
            var targetContent = document.getElementById('tab-' + targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            });
    });
}

// Code utilisateur : éditeur + application du code
var defaultUserCode = `// Écris ici tes fonctions JavaScript pour corriger les bugs de la calculatrice.
// 
// EXEMPLE SIMPLE : Pour corriger l'addition qui soustrait, tu peux redéfinir la fonction calculate :
//
// function calculate() {
//     // Récupère les nombres et l'opérateur
//     var parts = currentInput.split('+');
//     if (parts.length === 2) {
//         var num1 = parseFloat(parts[0]);
//         var num2 = parseFloat(parts[1]);
//         // Calcule correctement l'addition
//         currentInput = (num1 + num2).toString();
//         updateDisplay();
//     }
// }
//
// ASTUCE : Regarde les tests qui échouent pour savoir quelle fonction corriger !
`;

function initCodeEditor() {
    var editor = document.getElementById('code-editor');
    if (!editor) return;
    if (!editor.value.trim()) {
        editor.value = defaultUserCode;
    }
}

function applyUserCode() {
    var editor = document.getElementById('code-editor');
    var status = document.getElementById('code-status');
    if (!editor) return;

    try {
        // Évaluer le code dans le scope global pour permettre la surcharge
        (0, eval)(editor.value);
        if (status) {
            status.textContent = 'Code appliqué (les fonctions sont maintenant surchargées)';
            status.style.color = '#2ecc71';
        }
    } catch (e) {
        console.error('Erreur dans le code utilisateur:', e);
        if (status) {
            status.textContent = 'Erreur : ' + e.message;
            status.style.color = '#e67e22';
        }
    }
}
