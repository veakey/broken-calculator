// Logique de la calculatrice

var displayEl;
var currentInput = '0';
var previousInput = '';
var currentOperator = null;
var shouldResetDisplay = false;

function updateDisplay() {
    if (!displayEl) {
        displayEl = document.getElementById('display');
    }
    if (displayEl) {
        displayEl.textContent = currentInput;
    }
}

function handleNumberClick(value) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        if (value === '.' && currentInput.indexOf('.') !== -1) {
            return; // un seul point décimal
        }
        currentInput += value;
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    // Si on a déjà une opération complète ET qu'on change d'opérateur (pas le même),
    // on calcule d'abord pour permettre l'enchaînement : 3 * 3 + 2 = (calcule 9, puis 9 + 2)
    // Mais on ne calcule PAS si on clique sur le même opérateur (3 * 3 * ne doit pas calculer)
    if (previousInput !== '' && currentOperator !== null && currentOperator !== op) {
        // On vérifie qu'on n'est pas juste après avoir cliqué sur un opérateur
        // (shouldResetDisplay = true signifie qu'on vient de cliquer sur un opérateur,
        // donc currentInput n'a pas encore été modifié par l'utilisateur)
        if (!shouldResetDisplay) {
            // On calcule le résultat de l'opération précédente
            performEquals();
            // performEquals() a mis le résultat dans currentInput et reset previousInput
            // On remet le résultat comme previousInput pour la nouvelle opération
            previousInput = currentInput;
        }
    } else if (previousInput === '') {
        // Première opération : on mémorise juste le nombre courant
        previousInput = currentInput;
    }
    // Si on clique sur le même opérateur, on ne fait rien (juste mettre à jour l'opérateur)
    // Cela permet de faire 3 * 3 sans calculer automatiquement - il faut appuyer sur =
    currentOperator = op;
    shouldResetDisplay = true;
}

function handleClear() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function performEquals() {
    if (previousInput === '' || currentOperator === null) {
        return;
    }

    var a = parseFloat(previousInput);
    var b = parseFloat(currentInput);
    var result = 0;

    // Si l'utilisateur a défini calc_add et que l'opérateur est '+', on l'utilise
    if (currentOperator === '+' && typeof window.calc_add === 'function') {
        try {
            result = window.calc_add(a, b);
        } catch (e) {
            console.error('Erreur dans calc_add, fallback sur le calcul direct:', e);
            result = a + b;
        }
    } else {
        // Fallback : calcul direct classique
        switch (currentOperator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = b !== 0 ? a / b : 0; break;
            default: result = b;
        }
    }

    currentInput = String(result);
    previousInput = '';
    currentOperator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function initCalculator() {
    displayEl = document.getElementById('display');
    updateDisplay();

    // Boutons chiffres / point
    var numberButtons = document.querySelectorAll('.btn.number[data-number]');
    numberButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var value = btn.getAttribute('data-number');
            handleNumberClick(value);
        });
    });

    // Boutons opérateurs (tous actifs par défaut)
    var operatorButtons = document.querySelectorAll('.btn.operator[data-operator]');
    operatorButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var op = btn.getAttribute('data-operator');
            handleOperatorClick(op);
        });
    });

    // Bouton C
    var clearBtn = document.querySelector('.btn.clear[data-action="clear"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            handleClear();
        });
    }

    // Bouton =
    var equalsBtn = document.querySelector('.btn.equals[data-action="equals"]');
    if (equalsBtn) {
        equalsBtn.addEventListener('click', function() {
            performEquals();
        });
    }
}

