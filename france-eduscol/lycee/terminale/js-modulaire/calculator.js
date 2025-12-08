// CALCULATRICE CASSÉE - VERSION MODULAIRE
// Cette version utilise une structure modulaire avec plusieurs bugs subtils

const Calculator = {
    display: null,
    currentInput: '0',
    previousInput: '',
    operator: null,
    shouldResetDisplay: false,
    
    init() {
        this.display = document.getElementById('display');
    },
    
    appendNumber(number) {
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
        this.shouldResetDisplay = true;
        this.updateDisplay();
    },
    
    calculate() {
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
            default:
                return;
        }
        
        // BUG 7: Ne limite pas la longueur de l'affichage
        this.currentInput = result.toString();
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
    },
    
    clearDisplay() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    },
    
    updateDisplay() {
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