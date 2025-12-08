// CALCULATRICE CASSÉE - NIVEAU DÉBUTANT
// Cette calculatrice contient 2 bugs simples à identifier et corriger

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
    
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
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
    
    // BUG 1: L'addition est inversée
    switch(operator) {
        case '+':
            result = prev - current; // BUG ICI
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
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

function updateDisplay() {
    display.textContent = currentInput;
}

function getCalculatorState() {
    return {
        currentInput: currentInput,
        previousInput: previousInput,
        operator: operator,
        display: display.textContent
    };
}

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