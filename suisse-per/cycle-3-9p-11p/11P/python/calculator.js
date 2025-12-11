// CALCULATRICE CASSÉE - VERSION PYTHON AVANCÉE (TRANSPOSÉE EN JS)
// Cette version simule les bugs qu'on pourrait avoir en Python (niveau avancé)
// Cette calculatrice contient plusieurs bugs intentionnels

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
let pendingAdvancedFunction = null; // Pour gérer la notation préfixe (tan puis 60)

// BUG 1: La fonction appendNumber ne gère pas correctement le zéro initial
// Supporte aussi la notation préfixe pour les fonctions avancées (tan puis 60)
function appendNumber(number) {
    // Si une fonction avancée est en attente (notation préfixe : "tan 60")
    if (pendingAdvancedFunction !== null) {
        // Construire le nombre progressivement
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
        return; // Ne pas exécuter la fonction tout de suite, attendre que l'utilisateur appuie sur =
    }
    
    // Comportement normal (notation postfixe ou opérations normales)
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
    shouldResetDisplay = true;
    currentInput = '0';
    updateDisplay();
}

// BUG 3: La fonction calculate contient plusieurs erreurs logiques
function calculate() {
    // Si une fonction avancée est en attente (notation préfixe), l'exécuter d'abord
    if (pendingAdvancedFunction !== null) {
        const value = parseFloat(currentInput);
        if (!isNaN(value)) {
            executeAdvancedFunction(pendingAdvancedFunction, value);
            return; // Ne pas continuer avec le calcul normal
        }
    }
    
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
    
    // BUG: Ne gère pas correctement les nombres décimaux (pas d'arrondi)
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// Fonctions mathématiques avancées (avec bugs)
// Supporte deux notations :
// - Postfixe : "60 tan" (entrer 60 puis appuyer sur tan) - exécution immédiate
// - Préfixe : "tan 60" (appuyer sur tan puis entrer 60) - exécution après entrée du nombre
function calculateAdvanced(func) {
    const value = parseFloat(currentInput);
    
    // Détecter si on a une valeur à utiliser (notation postfixe : "60 tan")
    const hasValue = !isNaN(value) && !shouldResetDisplay && 
                     (currentInput !== '0' || operator !== null || previousInput !== '');
    
    if (hasValue) {
        // Exécuter immédiatement avec la valeur actuelle (notation postfixe : "60 tan")
        executeAdvancedFunction(func, value);
    } else {
        // Sinon, stocker la fonction pour l'exécuter quand l'utilisateur entrera une valeur (notation préfixe : "tan 60")
        pendingAdvancedFunction = func;
        // Réinitialiser l'affichage pour que l'utilisateur puisse entrer une nouvelle valeur
        currentInput = '0';
        shouldResetDisplay = false;
        updateDisplay();
    }
}

// Fonction pour exécuter réellement la fonction avancée
function executeAdvancedFunction(func, value) {
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
            result = value + value; // Devrait être: Math.sqrt(value * value + value * value)
            break;
        default:
            return;
    }
    
    // Arrondir pour éviter les erreurs de précision
    result = Math.round(result * 10000000000) / 10000000000;
    currentInput = result.toString();
    shouldResetDisplay = true;
    pendingAdvancedFunction = null; // Réinitialiser
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    pendingAdvancedFunction = null; // Réinitialiser la fonction en attente
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
