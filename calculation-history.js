// SYSTÈME D'HISTORIQUE DES CALCULS
// Enregistre tous les calculs effectués avec indication des erreurs

let calculationHistory = [];

function addToHistory(prev, op, current, result) {
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
    
    const opSymbol = op === '+' ? '+' : op === '-' ? '-' : op === '*' ? '×' : op === '/' ? '÷' : op === '%' ? '%' : op;
    
    calculationHistory.push({
        calculation: `${prev} ${opSymbol} ${current}`,
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
    
    let html = '<h3 style="color: rgba(255,255,255,0.95); margin-bottom: 15px;">📊 Historique des calculs</h3>';
    
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
});

