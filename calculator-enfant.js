// CALCULATRICE ENFANT - Version avec affichage visuel des étapes
// Cette version montre visuellement ce qui se passe lors des calculs

let visualStepsContainer = null;
let stepCounter = 0;

// Fonction pour ajouter une étape visuelle
function addVisualStep(message, type = 'info') {
    if (!visualStepsContainer) {
        visualStepsContainer = document.getElementById('visual-steps');
        if (!visualStepsContainer) return;
    }
    
    stepCounter++;
    const step = document.createElement('div');
    step.className = `step-item ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'correct') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'info') icon = '🔢';
    
    step.innerHTML = `
        <span class="step-icon">${icon}</span>
        <span>${message}</span>
    `;
    
    visualStepsContainer.appendChild(step);
    
    // Limiter à 5 étapes visibles
    if (visualStepsContainer.children.length > 5) {
        visualStepsContainer.removeChild(visualStepsContainer.firstChild);
    }
    
    // Scroll vers le bas
    visualStepsContainer.scrollTop = visualStepsContainer.scrollHeight;
}

// Fonction pour effacer les étapes visuelles
function clearVisualSteps() {
    if (!visualStepsContainer) {
        visualStepsContainer = document.getElementById('visual-steps');
    }
    if (visualStepsContainer) {
        visualStepsContainer.innerHTML = '';
        stepCounter = 0;
    }
}

// Attendre que le DOM et calculator.js soient chargés
window.addEventListener('load', function() {
    visualStepsContainer = document.getElementById('visual-steps');
    
    // Surcharger appendNumber pour ajouter l'affichage visuel
    const originalAppendNumber = window.appendNumber;
    window.appendNumber = function(number) {
        addVisualStep(`J'ai appuyé sur : ${number}`, 'info');
        originalAppendNumber(number);
            setTimeout(() => {
                const current = typeof currentInput !== 'undefined' ? currentInput : window.currentInput;
                addVisualStep(`L'écran affiche : ${current}`, 'info');
            }, 100);
    };
    
    // Surcharger appendOperator pour ajouter l'affichage visuel
    const originalAppendOperator = window.appendOperator;
    window.appendOperator = function(op) {
        const opSymbol = op === '+' ? '+' : op === '-' ? '-' : op === '*' ? '×' : op === '/' ? '÷' : op;
        const current = typeof currentInput !== 'undefined' ? currentInput : window.currentInput;
        addVisualStep(`J'ai choisi l'opération : ${opSymbol}`, 'info');
        addVisualStep(`Premier nombre : ${current}`, 'info');
        originalAppendOperator(op);
    };
    
    // Surcharger calculate pour afficher les étapes du calcul
    const originalCalculate = window.calculate;
    window.calculate = function() {
        const prevInput = typeof previousInput !== 'undefined' ? previousInput : window.previousInput;
        const currInput = typeof currentInput !== 'undefined' ? currentInput : window.currentInput;
        const op = typeof operator !== 'undefined' ? operator : window.operator;
        
        if (prevInput === '' || op === null) {
            return;
        }
        
        const prev = parseFloat(prevInput);
        const current = parseFloat(currInput);
        const opSymbol = op === '+' ? '+' : op === '-' ? '-' : op === '*' ? '×' : op === '/' ? '÷' : op;
        
        // Afficher le calcul en cours
        addVisualStep(`Je calcule : ${prev} ${opSymbol} ${current}`, 'info');
        
        // Calculer
        originalCalculate();
        
        setTimeout(() => {
            const resultInput = typeof currentInput !== 'undefined' ? currentInput : window.currentInput;
            const result = parseFloat(resultInput);
            const currentOp = typeof operator !== 'undefined' ? operator : window.operator;
            
            // Vérifier si le résultat est correct (simplifié pour les enfants)
            let isCorrect = false;
            let expected = 0;
            
            switch(currentOp) {
                case '+':
                    expected = prev + current;
                    isCorrect = Math.abs(result - expected) < 0.0001;
                    break;
                case '-':
                    expected = prev - current;
                    isCorrect = Math.abs(result - expected) < 0.0001;
                    break;
                case '*':
                    expected = prev * current;
                    isCorrect = Math.abs(result - expected) < 0.0001;
                    break;
                case '/':
                    if (current !== 0) {
                        expected = prev / current;
                        isCorrect = Math.abs(result - expected) < 0.0001;
                    }
                    break;
            }
            
            if (isCorrect) {
                addVisualStep(`✅ Résultat correct : ${result}`, 'correct');
            } else {
                addVisualStep(`❌ Erreur ! J'ai obtenu ${result} mais j'aurais dû avoir ${expected}`, 'error');
            }
        }, 100);
    };
    
    // Surcharger clearDisplay
    const originalClearDisplay = window.clearDisplay;
    window.clearDisplay = function() {
        addVisualStep('J\'ai effacé la calculatrice', 'info');
        clearVisualSteps();
        originalClearDisplay();
    };
    
    // Message d'accueil
    setTimeout(() => {
        addVisualStep('👋 Bienvenue ! Teste la calculatrice pour trouver les erreurs.', 'info');
    }, 500);
});

