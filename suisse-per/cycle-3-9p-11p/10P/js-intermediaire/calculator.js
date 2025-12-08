// CALCULATRICE CASSÉE - NIVEAU INTERMÉDIAIRE
// Cette calculatrice contient 4 bugs à identifier et corriger

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