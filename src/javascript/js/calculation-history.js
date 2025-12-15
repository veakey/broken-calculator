// SYSTÈME D'HISTORIQUE DES CALCULS
// Enregistre tous les calculs effectués avec indication des erreurs

let calculationHistory = [];

function addToHistory(prev, op, current, result) {
    // Vérifier si ce calcul a déjà été fait (éviter les doublons)
    const opSymbol = op === '+' ? '+' : op === '-' ? '-' : op === '*' ? '×' : op === '/' ? '÷' : op === '%' ? '%' : op;
    const calculationString = `${prev} ${opSymbol} ${current}`;
    
    // Vérifier si le dernier calcul dans l'historique est identique
    if (calculationHistory.length > 0) {
        const lastCalc = calculationHistory[calculationHistory.length - 1];
        if (lastCalc.calculation === calculationString && 
            Math.abs(lastCalc.result - result) < 0.0001) {
            // Le calcul a déjà été fait, ne pas l'ajouter à nouveau
            return;
        }
    }
    
    let expected = 0;
    let isCorrect = false;
    
    switch(op) {
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
        case '%':
            expected = prev * (current / 100);
            isCorrect = Math.abs(result - expected) < 0.0001;
            break;
    }
    
    calculationHistory.push({
        calculation: calculationString,
        result: result,
        expected: expected,
        isCorrect: isCorrect,
        timestamp: new Date()
    });
    
    // Limiter à 20 calculs
    if (calculationHistory.length > 20) {
        calculationHistory.shift();
    }
    
    updateHistoryDisplay();
}

// Fonction pour ajouter les fonctions avancées à l'historique
function addAdvancedFunctionToHistory(func, value, result) {
    // Vérifier si ce calcul a déjà été fait (éviter les doublons)
    const funcName = func === 'sin' ? 'sin' : func === 'cos' ? 'cos' : func === 'tan' ? 'tan' : 'hyp';
    const calculationString = `${funcName}(${value}°)`;
    
    // Vérifier si le dernier calcul dans l'historique est identique
    if (calculationHistory.length > 0) {
        const lastCalc = calculationHistory[calculationHistory.length - 1];
        if (lastCalc.calculation === calculationString && 
            Math.abs(lastCalc.result - result) < 0.0001) {
            // Le calcul a déjà été fait, ne pas l'ajouter à nouveau
            return;
        }
    }
    
    let expected = 0;
    let isCorrect = false;
    
    const radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            expected = Math.sin(radians);
            isCorrect = Math.abs(result - expected) < 0.0001;
            break;
        case 'cos':
            expected = Math.cos(radians);
            isCorrect = Math.abs(result - expected) < 0.0001;
            break;
        case 'tan':
            expected = Math.tan(radians);
            isCorrect = Math.abs(result - expected) < 0.0001;
            break;
        case 'hyp':
            // Pour hyp, on calcule l'hypoténuse avec deux côtés égaux à la valeur
            expected = Math.sqrt(value * value + value * value);
            isCorrect = Math.abs(result - expected) < 0.0001;
            break;
    }
    
    calculationHistory.push({
        calculation: calculationString,
        result: result,
        expected: expected,
        isCorrect: isCorrect,
        timestamp: new Date()
    });
    
    // Limiter à 20 calculs
    if (calculationHistory.length > 20) {
        calculationHistory.shift();
    }
    
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyContainer = document.getElementById('calculation-history');
    if (!historyContainer) return;
    
    if (calculationHistory.length === 0) {
        historyContainer.innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center; padding: 20px;">Aucun calcul effectué</p>';
        return;
    }
    
    let html = '<h3 style="color: rgba(255,255,255,0.95); margin-bottom: 15px;">Historique des calculs</h3>';
    
    // Afficher les 10 derniers calculs
    const recentHistory = calculationHistory.slice(-10).reverse();
    
    recentHistory.forEach(calc => {
        const status = calc.isCorrect ? '✅' : '❌';
        const statusClass = calc.isCorrect ? 'history-correct' : 'history-error';
        const expectedText = calc.isCorrect ? '' : ` (devrait être ${calc.expected})`;
        
        html += `
            <div class="history-item ${statusClass}">
                <span class="history-status">${status}</span>
                <div class="history-content">
                    <strong>${calc.calculation} = ${calc.result}${expectedText}</strong>
                </div>
            </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

function clearHistory() {
    calculationHistory = [];
    updateHistoryDisplay();
}

// Surcharger la fonction calculate pour enregistrer l'historique
document.addEventListener('DOMContentLoaded', function() {
    if (typeof calculate !== 'undefined') {
        const originalCalculate = window.calculate;
        window.calculate = function() {
            const prev = parseFloat(previousInput);
            const op = operator;
            const curr = parseFloat(currentInput);
            
            // Exécuter le calcul original
            originalCalculate();
            
            // Enregistrer dans l'historique après un court délai
            setTimeout(() => {
                const result = parseFloat(currentInput);
                if (!isNaN(result) && isFinite(result)) {
                    addToHistory(prev, op, curr, result);
                }
            }, 100);
        };
    }
    
    // Surcharger la fonction executeAdvancedFunction pour enregistrer l'historique
    // Les fonctions avancées sont enregistrées quand elles sont exécutées (tan 60 enter ou 60 tan enter)
    if (typeof executeAdvancedFunction !== 'undefined') {
        const originalExecuteAdvancedFunction = window.executeAdvancedFunction;
        window.executeAdvancedFunction = function(func, value) {
            // Exécuter le calcul original
            originalExecuteAdvancedFunction(func, value);
            
            // Enregistrer dans l'historique après un court délai
            setTimeout(() => {
                const result = parseFloat(currentInput);
                if (!isNaN(result) && isFinite(result)) {
                    addAdvancedFunctionToHistory(func, value, result);
                }
            }, 100);
        };
    }
});

