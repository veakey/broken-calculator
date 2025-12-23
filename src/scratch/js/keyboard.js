// Gestion du clavier pour la calculatrice

// Fonction pour simuler le feedback visuel d'un clic sur un bouton
function simulateButtonPress(selector) {
    var btn = document.querySelector(selector);
    if (!btn) return;
    
    btn.classList.add('keyboard-pressed');
    setTimeout(function() {
        btn.classList.remove('keyboard-pressed');
    }, 150);
}

function initKeyboard() {
    document.addEventListener('keydown', function(event) {
        // Ne pas capturer les touches si l'utilisateur est en train de taper dans Blockly
        // ou dans un champ de saisie (input, textarea)
        var activeElement = document.activeElement;
        var isBlocklyFocused = activeElement && (
            activeElement.closest('#blocklyDiv') !== null ||
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );

        // Si Blockly ou un champ de saisie a le focus, on laisse passer les touches
        if (isBlocklyFocused) {
            return;
        }

        var key = event.key;

        // Chiffres 0-9
        if (key >= '0' && key <= '9') {
            simulateButtonPress('.btn.number[data-number="' + key + '"]');
            handleNumberClick(key);
            event.preventDefault();
            return;
        }

        // Point / virgule
        if (key === '.' || key === ',') {
            simulateButtonPress('.btn.number[data-number="."]');
            handleNumberClick('.');
            event.preventDefault();
            return;
        }

        // Opérateurs (tous actifs par défaut)
        if (key === '+' || key === '-' || key === '*' || key === '/') {
            var btn = document.querySelector('.btn.operator[data-operator="' + key + '"]');
            if (btn) {
                simulateButtonPress('.btn.operator[data-operator="' + key + '"]');
                handleOperatorClick(key);
            }
            event.preventDefault();
            return;
        }

        // Entrée ou signe égal -> exécuter le calcul
        if (key === 'Enter' || key === '=') {
            simulateButtonPress('.btn.equals[data-action="equals"]');
            performEquals();
            // Empêche le navigateur de "cliquer" le dernier bouton focus
            event.preventDefault();
            return;
        }

        // Clear via Escape ou touche C/c
        if (key === 'Escape' || key === 'c' || key === 'C') {
            simulateButtonPress('.btn.clear[data-action="clear"]');
            handleClear();
            event.preventDefault();
            return;
        }
    });
}

