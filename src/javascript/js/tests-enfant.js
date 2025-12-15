// TESTS ENFANT - Version visuelle et simplifiée des tests

// Surcharger displayTestResults pour la version enfant
const originalDisplayTestResults = displayTestResults;

displayTestResults = function() {
    const resultsDiv = document.getElementById('test-results');
    resultsDiv.innerHTML = '';
    
    const passedCount = testResults.filter(t => t.passed).length;
    const totalCount = testResults.length;
    
    // Score visuel
    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = `
        background: ${passedCount === totalCount ? 'rgba(39, 174, 96, 0.3)' : 'rgba(231, 76, 60, 0.3)'};
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        text-align: center;
        border: 3px solid ${passedCount === totalCount ? 'rgba(39, 174, 96, 0.5)' : 'rgba(231, 76, 60, 0.5)'};
        font-size: 1.3em;
        font-weight: bold;
        color: white;
    `;
    
    const statusText = passedCount === totalCount ? 'Réussi' : 'En cours';
    scoreDiv.innerHTML = `
        <div style="font-size: 1.2em; margin-bottom: 10px; font-weight: bold;">${statusText}</div>
        <div>Score : ${passedCount} / ${totalCount} tests réussis</div>
    `;
    
    resultsDiv.appendChild(scoreDiv);
    
    // Liste des tests avec visuels
    testResults.forEach(test => {
        const testDiv = document.createElement('div');
        testDiv.className = `test-item-enfant ${test.passed ? 'pass' : 'fail'}`;
        
        const icon = test.passed ? '✅' : '❌';
        const color = test.passed ? '#27ae60' : '#e74c3c';
        
        testDiv.innerHTML = `
            <span class="test-icon-enfant">${icon}</span>
            <div style="flex: 1;">
                <div style="font-weight: bold; margin-bottom: 5px; color: ${color};">
                    ${test.name}
                </div>
                <div class="test-details-enfant" style="font-size: 0.9em; opacity: 0.9;">
                    Attendu : <strong>${test.expected}</strong> | 
                    Obtenu : <strong>${test.actual}</strong>
                </div>
            </div>
        `;
        
        resultsDiv.appendChild(testDiv);
    });
    
    // Message final
    if (passedCount === totalCount) {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            background: rgba(39, 174, 96, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
            border: 3px solid rgba(39, 174, 96, 0.5);
            font-size: 1.2em;
            color: white;
            font-weight: bold;
        `;
        successDiv.innerHTML = `
            <div style="font-size: 1.5em; margin-bottom: 10px; font-weight: bold;">Bravo !</div>
            <div>Tu as réparé la calculatrice !</div>
        `;
        resultsDiv.appendChild(successDiv);
    } else {
        const continueDiv = document.createElement('div');
        continueDiv.style.cssText = `
            background: rgba(241, 196, 15, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 15px;
            margin-top: 20px;
            text-align: center;
            border: 2px solid rgba(241, 196, 15, 0.5);
            color: white;
        `;
        continueDiv.innerHTML = `
            <div style="font-size: 1.2em; margin-bottom: 5px; font-weight: bold;">Continue !</div>
            <div>Continue à chercher les erreurs !</div>
        `;
        resultsDiv.appendChild(continueDiv);
    }
};

