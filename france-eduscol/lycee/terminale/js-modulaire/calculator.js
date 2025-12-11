// CALCULATRICE CASSÉE - VERSION MODULAIRE
// Cette version utilise une structure modulaire avec plusieurs bugs subtils

const Calculator = {
    display: null,
    currentInput: '0',
    previousInput: '',
    operator: null,
    shouldResetDisplay: false,
    pendingAdvancedFunction: null, // Pour gérer la notation préfixe (tan puis 60)
    
    init() {
        this.display = document.getElementById('display');
    },
    
    appendNumber(number) {
        // Si une fonction avancée est en attente (notation préfixe : "tan 60")
        if (this.pendingAdvancedFunction !== null) {
            // Construire le nombre progressivement
            if (this.shouldResetDisplay) {
                this.currentInput = '0';
                this.shouldResetDisplay = false;
            }
            
            // BUG 1: Ne vérifie pas les points décimaux multiples
            if (this.currentInput === '0' && number !== '.') {
                this.currentInput = number;
            } else {
                this.currentInput += number;
            }
            
            this.updateDisplay();
            return; // Ne pas exécuter la fonction tout de suite, attendre que l'utilisateur appuie sur =
        }
        
        // Comportement normal (notation postfixe ou opérations normales)
        if (this.shouldResetDisplay) {
            this.currentInput = '0';
            this.shouldResetDisplay = false;
        }
        
        // BUG 1: Ne vérifie pas les points décimaux multiples
        if (this.currentInput === '0' && number !== '.') {
            this.currentInput = number;
        } else {
            this.currentInput += number;
        }
        
        this.updateDisplay();
    },
    
    appendOperator(op) {
        if (this.previousInput !== '' && this.operator !== null) {
            this.calculate();
        }
        
        this.previousInput = this.currentInput;
        this.operator = op;
        // CORRIGÉ: shouldResetDisplay est maintenant défini et currentInput réinitialisé
        this.shouldResetDisplay = true;
        this.currentInput = '0';
        this.updateDisplay();
    },
    
    calculate() {
        // Si une fonction avancée est en attente (notation préfixe), l'exécuter d'abord
        if (this.pendingAdvancedFunction !== null) {
            const value = parseFloat(this.currentInput);
            if (!isNaN(value)) {
                this.executeAdvancedFunction(this.pendingAdvancedFunction, value);
                return; // Ne pas continuer avec le calcul normal
            }
        }
        
        if (this.previousInput === '' || this.operator === null) {
            return;
        }
        
        let prev = parseFloat(this.previousInput);
        let current = parseFloat(this.currentInput);
        let result = 0;
        
        // BUGS dans les opérations:
        switch(this.operator) {
            case '+':
                result = prev - current; // BUG 2
                break;
            case '-':
                result = prev + current; // BUG 3
                break;
            case '*':
                result = prev / current; // BUG 4
                break;
            case '/':
                result = prev * current; // BUG 5
                // BUG 6: Pas de vérification division par zéro
                break;
            case '%':
                // BUG: Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)
                result = prev * current; // Devrait être: prev * (current / 100)
                break;
            default:
                return;
        }
        
        // BUG 7: Ne gère pas correctement les nombres décimaux (pas d'arrondi)
        this.currentInput = result.toString();
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
    },
    
    // Fonctions mathématiques avancées (avec bugs)
    // Supporte deux notations :
    // - Postfixe : "60 tan" (entrer 60 puis appuyer sur tan) - exécution immédiate
    // - Préfixe : "tan 60" (appuyer sur tan puis entrer 60) - exécution après entrée du nombre
    calculateAdvanced(func) {
        const value = parseFloat(this.currentInput);
        
        // Détecter si on a une valeur à utiliser (notation postfixe : "60 tan")
        const hasValue = !isNaN(value) && !this.shouldResetDisplay && 
                         (this.currentInput !== '0' || this.operator !== null || this.previousInput !== '');
        
        if (hasValue) {
            // Exécuter immédiatement avec la valeur actuelle (notation postfixe : "60 tan")
            this.executeAdvancedFunction(func, value);
        } else {
            // Sinon, stocker la fonction pour l'exécuter quand l'utilisateur entrera une valeur (notation préfixe : "tan 60")
            this.pendingAdvancedFunction = func;
            // Réinitialiser l'affichage pour que l'utilisateur puisse entrer une nouvelle valeur
            this.currentInput = '0';
            this.shouldResetDisplay = false;
            this.updateDisplay();
        }
    },
    
    // Fonction pour exécuter réellement la fonction avancée
    executeAdvancedFunction(func, value) {
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
        this.currentInput = result.toString();
        this.shouldResetDisplay = true;
        this.pendingAdvancedFunction = null; // Réinitialiser
        this.updateDisplay();
    },
    
    clearDisplay() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.pendingAdvancedFunction = null; // Réinitialiser la fonction en attente
        this.updateDisplay();
    },
    
    // BUG 7: La fonction updateDisplay ne limite pas la longueur de l'affichage
    updateDisplay() {
        // BUG: Ne limite pas la longueur de l'affichage
        this.display.textContent = this.currentInput;
    },
    
    getState() {
        return {
            currentInput: this.currentInput,
            previousInput: this.previousInput,
            operator: this.operator,
            display: this.display.textContent
        };
    }
};

// Initialisation
Calculator.init();

// Fonctions globales pour les boutons
function appendNumber(number) {
    Calculator.appendNumber(number);
}

function appendOperator(op) {
    Calculator.appendOperator(op);
}

function calculate() {
    Calculator.calculate();
}

function clearDisplay() {
    Calculator.clearDisplay();
}

function calculateAdvanced(func) {
    Calculator.calculateAdvanced(func);
}

function getCalculatorState() {
    return Calculator.getState();
}

function testCalculate(a, op, b) {
    Calculator.clearDisplay();
    Calculator.currentInput = a.toString();
    Calculator.updateDisplay();
    Calculator.appendOperator(op);
    Calculator.currentInput = b.toString();
    Calculator.updateDisplay();
    Calculator.calculate();
    return parseFloat(Calculator.currentInput);
}

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    Calculator.clearDisplay();
    Calculator.currentInput = value.toString();
    Calculator.updateDisplay();
    Calculator.calculateAdvanced(func);
    return parseFloat(Calculator.currentInput);
}
