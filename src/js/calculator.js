// CALCULATRICE CASSÉE - À RÉPARER
// Cette calculatrice contient plusieurs bugs intentionnels
// Les tests dans tests.js vous aideront à identifier les problèmes

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
let pendingAdvancedFunction = null; // Pour gérer la notation préfixe (tan puis 60)

// CORRIGÉ: La fonction appendNumber gère correctement le zéro initial et les points décimaux
// Supporte aussi la notation préfixe pour les fonctions avancées (tan puis 60)
function appendNumber(number) {
    // Si une fonction avancée est en attente (notation préfixe : "tan 60")
    if (pendingAdvancedFunction !== null) {
        // Construire le nombre progressivement
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
        return; // Ne pas exécuter la fonction tout de suite, attendre que l'utilisateur appuie sur =
    }
    
    // Comportement normal (notation postfixe ou opérations normales)
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
    // CORRIGÉ: shouldResetDisplay est maintenant défini
    shouldResetDisplay = true;
    currentInput = '0';
    updateDisplay();
}

// CORRIGÉ: La fonction calculate contient toutes les corrections
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
    
    // CORRIGÉ: Toutes les opérations sont maintenant correctes
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
            // CORRIGÉ: Division correcte avec vérification de division par zéro
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
    
    // CORRIGÉ: Gestion correcte des nombres décimaux avec arrondi si nécessaire
    // Limiter à 10 décimales pour éviter les erreurs de précision
    result = Math.round(result * 10000000000) / 10000000000;
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// CORRIGÉ: Fonctions mathématiques avancées
// Supporte deux notations :
// - Postfixe : "60 tan" (entrer 60 puis appuyer sur tan) - exécution immédiate
// - Préfixe : "tan 60" (appuyer sur tan puis entrer 60) - exécution après entrée du nombre
function calculateAdvanced(func) {
    const value = parseFloat(currentInput);
    
    // Détecter si on a une valeur à utiliser (notation postfixe : "60 tan")
    // On exécute immédiatement si :
    // - La valeur est valide (pas NaN)
    // - L'affichage n'est pas en attente de réinitialisation
    // - ET soit currentInput n'est pas "0", soit c'est "0" mais qu'il y a eu une interaction (operator ou previousInput)
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
            // CORRIGÉ: Utilise la bonne fonction sin
            result = Math.sin(radians);
            break;
        case 'cos':
            // CORRIGÉ: Utilise la bonne fonction cos
            result = Math.cos(radians);
            break;
        case 'tan':
            // CORRIGÉ: Utilise la bonne fonction tan
            result = Math.tan(radians);
            break;
        case 'hyp':
            // CORRIGÉ: Calcul de l'hypoténuse
            // Pour simplifier, on calcule l'hypoténuse d'un triangle rectangle
            // avec les deux côtés égaux à la valeur actuelle
            // hyp = sqrt(a² + b²) où a = b = value
            result = Math.sqrt(value * value + value * value);
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

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    clearDisplay();
    currentInput = value.toString();
    updateDisplay();
    calculateAdvanced(func);
    return parseFloat(currentInput);
}

