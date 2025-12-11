// SYSTÈME DE STATISTIQUES DES ERREURS
// Enregistre et affiche des statistiques sur les bugs et les corrections

let errorStats = {
    bugs: {},
    corrections: {},
    testRuns: 0,
    totalTime: 0
};

function recordBugAttempt(bugName, success, timeSpent) {
    if (!errorStats.bugs[bugName]) {
        errorStats.bugs[bugName] = {
            attempts: 0,
            successes: 0,
            totalTime: 0,
            averageTime: 0
        };
    }
    
    errorStats.bugs[bugName].attempts++;
    errorStats.bugs[bugName].totalTime += timeSpent;
    errorStats.bugs[bugName].averageTime = errorStats.bugs[bugName].totalTime / errorStats.bugs[bugName].attempts;
    
    if (success) {
        errorStats.bugs[bugName].successes++;
    }
    
    saveStats();
}

function recordTestRun(timeSpent) {
    errorStats.testRuns++;
    errorStats.totalTime += timeSpent;
    saveStats();
}

function displayStatistics() {
    const statsContainer = document.getElementById('error-statistics');
    if (!statsContainer) return;
    
    if (Object.keys(errorStats.bugs).length === 0) {
        statsContainer.innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center; padding: 20px;">Aucune statistique disponible</p>';
        return;
    }
    
    let html = '<h3 style="color: rgba(255,255,255,0.95); margin-bottom: 15px;">Statistiques des Erreurs</h3>';
    
    // Statistiques générales
    html += `<div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
        <p><strong>Tests effectués :</strong> ${errorStats.testRuns}</p>
        <p><strong>Temps total :</strong> ${(errorStats.totalTime / 1000).toFixed(1)}s</p>
        <p><strong>Temps moyen par test :</strong> ${errorStats.testRuns > 0 ? (errorStats.totalTime / errorStats.testRuns / 1000).toFixed(1) : 0}s</p>
    </div>`;
    
    // Graphique de difficulté des bugs
    html += '<h4 style="color: rgba(255,255,255,0.9); margin: 15px 0 10px 0;">Difficulté des bugs (temps moyen)</h4>';
    
    const bugsArray = Object.entries(errorStats.bugs)
        .map(([name, stats]) => ({
            name: name,
            averageTime: stats.averageTime,
            attempts: stats.attempts,
            successRate: stats.attempts > 0 ? (stats.successes / stats.attempts * 100) : 0
        }))
        .sort((a, b) => b.averageTime - a.averageTime);
    
    bugsArray.forEach(bug => {
        const maxTime = Math.max(...bugsArray.map(b => b.averageTime));
        const percentage = maxTime > 0 ? (bug.averageTime / maxTime * 100) : 0;
        
        html += `
            <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: rgba(255,255,255,0.9);">${bug.name}</span>
                    <span style="color: rgba(255,255,255,0.7);">${(bug.averageTime / 1000).toFixed(1)}s</span>
                </div>
                <div style="background: rgba(0,0,0,0.3); border-radius: 5px; height: 20px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, #e74c3c 0%, #f39c12 50%, #27ae60 100%); 
                                height: 100%; 
                                width: ${percentage}%; 
                                transition: width 0.3s ease;
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;
                                padding-right: 5px;
                                color: white;
                                font-size: 0.8em;
                                font-weight: bold;">
                    </div>
                </div>
                <small style="color: rgba(255,255,255,0.6);">Taux de réussite: ${bug.successRate.toFixed(1)}% (${bug.attempts} tentatives)</small>
            </div>
        `;
    });
    
    statsContainer.innerHTML = html;
}

function saveStats() {
    localStorage.setItem('calculator-errorStats', JSON.stringify(errorStats));
}

function loadStats() {
    const saved = localStorage.getItem('calculator-errorStats');
    if (saved) {
        errorStats = JSON.parse(saved);
    }
}

function clearStats() {
    errorStats = {
        bugs: {},
        corrections: {},
        testRuns: 0,
        totalTime: 0
    };
    saveStats();
    displayStatistics();
}

// Initialiser
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
    
    // Enregistrer les tentatives de correction basées sur les tests
    if (typeof testResults !== 'undefined') {
        const originalDisplayTestResults = window.displayTestResults;
        window.displayTestResults = function() {
            const startTime = performance.now();
            originalDisplayTestResults();
            const endTime = performance.now();
            recordTestRun(endTime - startTime);
            displayStatistics();
        };
    }
});

