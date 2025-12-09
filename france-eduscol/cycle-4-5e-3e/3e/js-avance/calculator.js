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
        case '%':
            // BUG: Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)
            result = prev * current; // Devrait être: prev * (current / 100)
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


// Fonctions mathématiques avancées (avec bugs)
function calculateAdvanced(func) {
    let value = parseFloat(currentInput);
    let result = 0;
    
    // Convertir en radians si nécessaire
    let radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            // BUG: Utilise cos au lieu de sin
            result = Math.cos(radians);
            break;
        case 'cos':
            // BUG: Utilise tan au lieu de cos
            result = Math.tan(radians);
            break;
        case 'tan':
            // BUG: Utilise sin au lieu de tan
            result = Math.sin(radians);
            break;
        case 'hyp':
            // BUG: Calcul hypothénuse incorrect (additionne au lieu de sqrt(a²+b²))
            // Pour simplifier, on utilise juste la valeur actuelle
            result = value + value; // Devrait calculer l'hypoténuse
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
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



