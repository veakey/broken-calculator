// GÉNÉRATEUR DE CODE AVEC BUGS PERSONNALISÉS
// Permet aux enseignants de créer leurs propres bugs

const baseCode = `// CALCULATRICE CASSÉE - À RÉPARER
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
    
    {{BUG_DECIMAL}}
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
            {{BUG_ADDITION}}
            break;
        case '-':
            {{BUG_SUBTRACTION}}
            break;
        case '*':
            {{BUG_MULTIPLICATION}}
            break;
        case '/':
            {{BUG_DIVISION}}
            {{BUG_DIVISION_ZERO}}
            break;
        case '%':
            {{BUG_PERCENTAGE}}
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

// Fonctions mathématiques avancées (avec bugs)
function calculateAdvanced(func) {
    let value = parseFloat(currentInput);
    let result = 0;
    
    // Convertir en radians si nécessaire
    let radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            {{BUG_SIN}}
            break;
        case 'cos':
            {{BUG_COS}}
            break;
        case 'tan':
            {{BUG_TAN}}
            break;
        case 'hyp':
            {{BUG_HYP}}
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

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    clearDisplay();
    currentInput = value.toString();
    updateDisplay();
    calculateAdvanced(func);
    return parseFloat(currentInput);
}
`;

function generateCode() {
    const bugs = {
        addition: document.getElementById('bug-addition').checked,
        subtraction: document.getElementById('bug-subtraction').checked,
        multiplication: document.getElementById('bug-multiplication').checked,
        division: document.getElementById('bug-division').checked,
        divisionZero: document.getElementById('bug-division-zero').checked,
        decimal: document.getElementById('bug-decimal').checked,
        percentage: document.getElementById('bug-percentage').checked,
        sin: document.getElementById('bug-sin').checked,
        cos: document.getElementById('bug-cos').checked,
        tan: document.getElementById('bug-tan').checked,
        hyp: document.getElementById('bug-hyp').checked
    };

    let code = baseCode;

    // Remplacer les placeholders
    code = code.replace('{{BUG_DECIMAL}}', bugs.decimal 
        ? '    // BUG: Ne vérifie pas si on ajoute un deuxième point décimal'
        : '    // CORRIGÉ: Vérifie si on ajoute un deuxième point décimal\n    if (number === \'.\' && currentInput.includes(\'.\')) {\n        return;\n    }');

    code = code.replace('{{BUG_ADDITION}}', bugs.addition
        ? '            // BUG: Addition incorrecte (soustrait au lieu d\'additionner)\n            result = prev - current;'
        : '            // CORRIGÉ: Addition correcte\n            result = prev + current;');

    code = code.replace('{{BUG_SUBTRACTION}}', bugs.subtraction
        ? '            // BUG: Soustraction incorrecte (additionne au lieu de soustraire)\n            result = prev + current;'
        : '            // CORRIGÉ: Soustraction correcte\n            result = prev - current;');

    code = code.replace('{{BUG_MULTIPLICATION}}', bugs.multiplication
        ? '            // BUG: Multiplication incorrecte (divise au lieu de multiplier)\n            result = prev / current;'
        : '            // CORRIGÉ: Multiplication correcte\n            result = prev * current;');

    code = code.replace('{{BUG_DIVISION}}', bugs.division
        ? '            // BUG: Division incorrecte (multiplie au lieu de diviser)\n            result = prev * current;'
        : '            // CORRIGÉ: Division correcte\n            result = prev / current;');

    code = code.replace('{{BUG_DIVISION_ZERO}}', bugs.divisionZero
        ? '            // BUG: Ne vérifie pas la division par zéro'
        : '            // CORRIGÉ: Vérifie la division par zéro\n            if (current === 0) {\n                currentInput = \'Erreur\';\n                previousInput = \'\';\n                operator = null;\n                shouldResetDisplay = true;\n                updateDisplay();\n                return;\n            }');

    code = code.replace('{{BUG_PERCENTAGE}}', bugs.percentage
        ? '            // BUG: Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)\n            result = prev * current; // Devrait être: prev * (current / 100)'
        : '            // CORRIGÉ: Pourcentage correct\n            result = prev * (current / 100);');

    code = code.replace('{{BUG_SIN}}', bugs.sin
        ? '            // BUG: Utilise cos au lieu de sin\n            result = Math.cos(radians);'
        : '            // CORRIGÉ: Utilise sin\n            result = Math.sin(radians);');

    code = code.replace('{{BUG_COS}}', bugs.cos
        ? '            // BUG: Utilise tan au lieu de cos\n            result = Math.tan(radians);'
        : '            // CORRIGÉ: Utilise cos\n            result = Math.cos(radians);');

    code = code.replace('{{BUG_TAN}}', bugs.tan
        ? '            // BUG: Utilise sin au lieu de tan\n            result = Math.sin(radians);'
        : '            // CORRIGÉ: Utilise tan\n            result = Math.tan(radians);');

    code = code.replace('{{BUG_HYP}}', bugs.hyp
        ? '            // BUG: Calcul hypothénuse incorrect (additionne au lieu de sqrt(a²+b²))\n            result = value + value; // Devrait calculer l\'hypoténuse'
        : '            // CORRIGÉ: Calcul hypothénuse correct\n            result = Math.sqrt(value * value + value * value);');

    // Afficher l'aperçu
    const preview = document.getElementById('code-preview');
    preview.textContent = code;
    
    // Stocker le code généré
    window.generatedCode = code;
}

function downloadCode() {
    if (!window.generatedCode) {
        alert('Générez d\'abord le code en cliquant sur "Générer le code"');
        return;
    }

    const blob = new Blob([window.generatedCode], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculator.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Générer le code par défaut au chargement
document.addEventListener('DOMContentLoaded', function() {
    generateCode();
});

