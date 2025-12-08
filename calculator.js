// CALCULATRICE CASSÉE - À RÉPARER
// Cette calculatrice contient plusieurs bugs intentionnels
// Les tests dans tests.js vous aideront à identifier les problèmes

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// BUG 1: La fonction appendNumber ne gère pas correctement le zéro initial
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    // BUG: Ne vérifie pas si on ajoute un deuxième point décimal
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

// BUG 2: La fonction appendOperator ne réinitialise pas correctement
function appendOperator(op) {
    if (previousInput !== '' && operator !== null) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op;
    // BUG: shouldResetDisplay n'est pas défini ici
    currentInput = '0';
    updateDisplay();
}

// BUG 3: La fonction calculate contient plusieurs erreurs logiques
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
            // BUG: Addition incorrecte (soustrait au lieu d'additionner)
            result = prev - current;
            break;
        case '-':
            // BUG: Soustraction incorrecte (additionne au lieu de soustraire)
            result = prev + current;
            break;
        case '*':
            // BUG: Multiplication incorrecte (divise au lieu de multiplier)
            result = prev / current;
            break;
        case '/':
            // BUG: Division incorrecte (multiplie au lieu de diviser)
            result = prev * current;
            // BUG: Ne vérifie pas la division par zéro
            break;
        default:
            return;
    }
    
    // BUG: Ne gère pas correctement les nombres décimaux
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

// BUG 4: La fonction updateDisplay peut afficher des valeurs incorrectes
function updateDisplay() {
    // BUG: Ne limite pas la longueur de l'affichage
    display.textContent = currentInput;
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

