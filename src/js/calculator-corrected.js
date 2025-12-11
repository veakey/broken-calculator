// CALCULATRICE CORRIGÉE - VERSION SANS BUGS
// Cette version montre comment le code devrait être après correction

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// CORRIGÉ: La fonction appendNumber gère correctement le zéro initial et les points décimaux
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    // CORRIGÉ: Vérifie si on ajoute un deuxième point décimal
    if (number === '.' && currentInput.includes('.')) {
        return; // Ne pas ajouter un deuxième point
    }
    
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
    shouldResetDisplay = true; // CORRIGÉ: Défini correctement
    currentInput = '0';
    updateDisplay();
}

// CORRIGÉ: La fonction calculate contient toutes les corrections
function calculate() {
    if (previousInput === '' || operator === null) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    // CORRIGÉ: Toutes les opérations sont correctes
    switch(operator) {
        case '+':
            // CORRIGÉ: Addition correcte
            result = prev + current;
            break;
        case '-':
            // CORRIGÉ: Soustraction correcte
            result = prev - current;
            break;
        case '*':
            // CORRIGÉ: Multiplication correcte
            result = prev * current;
            break;
        case '/':
            // CORRIGÉ: Division correcte avec vérification division par zéro
            if (current === 0) {
                currentInput = 'Erreur';
                previousInput = '';
                operator = null;
                shouldResetDisplay = true;
                updateDisplay();
                return;
            }
            result = prev / current;
            break;
        case '%':
            // CORRIGÉ: Pourcentage correct
            result = prev * (current / 100);
            break;
        default:
            return;
    }
    
    // CORRIGÉ: Gestion correcte des nombres décimaux
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// CORRIGÉ: Fonctions mathématiques avancées sans bugs
function calculateAdvanced(func) {
    let value = parseFloat(currentInput);
    let result = 0;
    
    // Convertir en radians si nécessaire
    let radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            // CORRIGÉ: Utilise sin
            result = Math.sin(radians);
            break;
        case 'cos':
            // CORRIGÉ: Utilise cos
            result = Math.cos(radians);
            break;
        case 'tan':
            // CORRIGÉ: Utilise tan
            result = Math.tan(radians);
            break;
        case 'hyp':
            // CORRIGÉ: Calcul hypothénuse (simplifié pour l'exemple)
            // En réalité, il faudrait deux valeurs, mais pour l'exemple on utilise juste la valeur
            result = Math.sqrt(value * value + value * value); // sqrt(a² + a²) pour l'exemple
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
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
    // CORRIGÉ: Limite la longueur de l'affichage
    if (currentInput.length > 15) {
        currentInput = parseFloat(currentInput).toExponential(5);
    }
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

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    clearDisplay();
    currentInput = value.toString();
    updateDisplay();
    calculateAdvanced(func);
    return parseFloat(currentInput);
}

