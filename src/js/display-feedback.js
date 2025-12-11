// SYSTÈME DE FEEDBACK VISUEL POUR L'AFFICHAGE
// Ajoute des animations de clignotement pour indiquer les erreurs/corrections

function showDisplayFeedback(type) {
    const display = document.getElementById('display');
    if (!display) return;
    
    // Retirer les classes précédentes
    display.classList.remove('error', 'correct');
    
    // Ajouter la classe appropriée
    if (type === 'error') {
        display.classList.add('error');
    } else if (type === 'correct') {
        display.classList.add('correct');
    }
    
    // Retirer la classe après l'animation
    setTimeout(() => {
        display.classList.remove('error', 'correct');
    }, 1500); // 3 clignotements × 0.5s = 1.5s
}

// Fonction pour vérifier si un calcul est correct
function checkCalculationResult(prev, op, current, result) {
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
    
    if (isCorrect) {
        showDisplayFeedback('correct');
    } else {
        showDisplayFeedback('error');
    }
    
    return isCorrect;
}

// Surcharger la fonction calculate pour ajouter le feedback
document.addEventListener('DOMContentLoaded', function() {
    if (typeof calculate !== 'undefined') {
        const originalCalculate = window.calculate;
        window.calculate = function() {
            const prev = parseFloat(previousInput);
            const op = operator;
            const curr = parseFloat(currentInput);
            
            // Exécuter le calcul original
            originalCalculate();
            
            // Vérifier le résultat après un court délai
            setTimeout(() => {
                const result = parseFloat(currentInput);
                checkCalculationResult(prev, op, curr, result);
            }, 100);
        };
    }
});

