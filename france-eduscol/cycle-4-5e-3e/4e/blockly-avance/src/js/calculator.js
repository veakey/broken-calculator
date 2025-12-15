let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
// calculateFunction est défini dans runtime.js et partagé globalement

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        if (number === '.' && currentInput.includes('.')) {
    return;
        }
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (previousInput !== '' && operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || operator === null) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    if (calculateFunction) {
        try {
    window.nombre1 = prev;
    window.nombre2 = current;
    window.operation = operator;
    window.resultat = 0;
    calculateFunction();
    result = window.resultat;
        } catch (error) {
    console.error('Erreur:', error);
    result = performCalculation(prev, current, operator);
        }
    } else {
        result = performCalculation(prev, current, operator);
    }
    
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function performCalculation(a, b, op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 0;
        default: return 0;
    }
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
