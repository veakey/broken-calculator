// CALCULATRICE CASSÉE - VERSION PYTHON INTERMÉDIAIRE (TRANSPOSÉE EN JS)
// Cette version simule les bugs qu'on pourrait avoir en Python (niveau intermédiaire)
// Cette calculatrice contient 4-5 bugs à identifier et corriger

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    // BUG 1: Ne vérifie pas si on ajoute un deuxième point décimal
    // (Gardé comme bug pour le niveau intermédiaire)
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

// CORRIGÉ: La fonction appendOperator réinitialise correctement
function appendOperator(op) {
    if (previousInput !== '' && operator !== null) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op;
    // CORRIGÉ: shouldResetDisplay est maintenant défini et currentInput réinitialisé
    shouldResetDisplay = true;
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || operator === null) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    // BUGS dans les opérations:
    switch(operator) {
        case '+':
            result = prev - current; // BUG 2: Addition inversée
            break;
        case '-':
            result = prev + current; // BUG 3: Soustraction inversée
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            // BUG 4: Ne vérifie pas la division par zéro
            break;
        case '%':
            // BUG 5: Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)
            result = prev * current; // BUG ICI - devrait être prev * (current / 100)
            break;
        default:
            return;
    }
    
    // CORRIGÉ: Gestion correcte des nombres décimaux avec arrondi si nécessaire
    // Limiter à 10 décimales pour éviter les erreurs de précision
    result = Math.round(result * 10000000000) / 10000000000;
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// CORRIGÉ: La fonction updateDisplay limite la longueur de l'affichage
function updateDisplay() {
    // CORRIGÉ: Limite la longueur de l'affichage à 15 caractères
    let displayValue = currentInput;
    if (displayValue.length > 15) {
        // Si c'est un nombre décimal, on peut le formater en notation scientifique
        const num = parseFloat(displayValue);
        if (!isNaN(num)) {
            displayValue = num.toExponential(8);
        } else {
            displayValue = displayValue.substring(0, 15);
        }
    }
    display.textContent = displayValue;
}

// Fonction utilitaire pour obtenir l'état actuel (utilisée par les tests)
function getCalculatorState() {
    return {
        currentInput: currentInput,
        previousInput: previousInput,
        operator: operator,
        display: display.textContent
    };
}

// Fonction utilitaire pour exécuter un calcul directement (utilisée par les tests)
function testCalculate(a, op, b) {
    clearDisplay();
    currentInput = a.toString();
    updateDisplay();
    appendOperator(op);
    currentInput = b.toString();
    updateDisplay();
    calculate();
    return parseFloat(currentInput);
}
