// TESTS SIMPLIFIÉS POUR NIVEAU DÉBUTANT
let testResults = [];

function runTests() {
    testResults = [];
    const resultsDiv = document.getElementById('test-results');
    resultsDiv.innerHTML = '<p>🔄 Exécution des tests en cours...</p>';
    
    testAddition();
    testSubtraction();
    testMultiplication();
    testDivision();
    testClearFunction();
    
    displayTestResults();
}

function testAddition() {
    const result = testCalculate(5, '+', 3);
    const expected = 8;
    const passed = result === expected;
    
    testResults.push({
        name: 'Addition : 5 + 3 = 8',
        passed: passed,
        expected: expected,
        actual: result
    });
}

function testSubtraction() {
    const result = testCalculate(10, '-', 4);
    const expected = 6;
    const passed = result === expected;
    
    testResults.push({
        name: 'Soustraction : 10 - 4 = 6',
        passed: passed,
        expected: expected,
        actual: result
    });
}

function testMultiplication() {
    const result = testCalculate(6, '*', 7);
    const expected = 42;
    const passed = result === expected;
    
    testResults.push({
        name: 'Multiplication : 6 × 7 = 42',
        passed: passed,
        expected: expected,
        actual: result
    });
}

function testDivision() {
    const result = testCalculate(20, '/', 4);
    const expected = 5;
    const passed = result === expected;
    
    testResults.push({
        name: 'Division : 20 ÷ 4 = 5',
        passed: passed,
        expected: expected,
        actual: result
    });
}

function testClearFunction() {
    clearDisplay();
    const state = getCalculatorState();
    const passed = state.currentInput === '0' && 
                   state.previousInput === '' && 
                   state.operator === null;
    
    testResults.push({
        name: 'Fonction Clear : Réinitialise correctement',
        passed: passed,
        expected: 'État réinitialisé',
        actual: passed ? 'OK' : 'Échec'
    });
}

function displayTestResults() {
    const resultsDiv = document.getElementById('test-results');
    let html = '<h3 style="color: rgba(255, 255, 255, 0.95); text-shadow: 1px 1px 4px rgba(0,0,0,0.2);">Résultats des Tests</h3>';
    
    const passedCount = testResults.filter(t => t.passed).length;
    const totalCount = testResults.length;
    
    const scoreBg = passedCount === totalCount 
        ? 'rgba(212, 237, 218, 0.3)' 
        : 'rgba(255, 243, 205, 0.3)';
    const scoreBorder = passedCount === totalCount 
        ? 'rgba(40, 167, 69, 0.5)' 
        : 'rgba(255, 193, 7, 0.5)';
    
    html += `<div style="margin: 15px 0; padding: 15px; background: ${scoreBg}; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 10px; border: 1px solid ${scoreBorder}; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <strong style="color: rgba(255, 255, 255, 0.95); font-size: 1.1em;">Score : ${passedCount}/${totalCount} tests réussis</strong>
    </div>`;
    
    testResults.forEach(test => {
        const status = test.passed ? '✅' : '❌';
        const className = test.passed ? 'pass' : 'fail';
        
        html += `
            <div class="test-item ${className}">
                <span style="font-size: 1.2em;">${status}</span>
                <div>
                    <strong>${test.name}</strong><br>
                    <small style="opacity: 0.9;">Attendu: ${test.expected} | Obtenu: ${test.actual}</small>
                </div>
            </div>
        `;
    });
    
    if (passedCount === totalCount) {
        html += `
            <div style="margin-top: 20px; padding: 20px; background: rgba(212, 237, 218, 0.3); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 15px; text-align: center; border: 1px solid rgba(40, 167, 69, 0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
                <h2 style="color: rgba(21, 87, 36, 0.95); margin-bottom: 10px;">🎉 Félicitations !</h2>
                <p style="color: rgba(21, 87, 36, 0.9);">La calculatrice est complètement réparée ! Tous les tests passent.</p>
            </div>
        `;
    }
    
    resultsDiv.innerHTML = html;
}

