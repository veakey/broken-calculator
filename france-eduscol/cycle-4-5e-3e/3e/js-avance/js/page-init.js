// Logique spécifique à la page index.html (version JavaScript de la calculatrice)

// Fonction pour obtenir un indice basé sur les tests qui échouent
function showHintForSelectedBug() {
    const testResults = document.querySelectorAll('#test-results .test-item');
    const failedTests = [];

    testResults.forEach(test => {
        if (test.classList.contains('failed')) {
            const nameEl = test.querySelector('.test-name');
            const testName = nameEl ? nameEl.textContent : '';
            failedTests.push(testName);
        }
    });

    if (failedTests.length === 0) {
        alert('Tous les tests passent ! Pas besoin d\'indices.');
        return;
    }

    // Prendre le premier test qui échoue
    const hint = typeof getHintForFailedTest === 'function'
        ? getHintForFailedTest(failedTests[0])
        : null;

    if (!hint) {
        alert('Indice : Regarde les tests qui échouent pour identifier les bugs !');
    }
}

// Initialiser les onglets de la calculatrice et l'éditeur de code
document.addEventListener('DOMContentLoaded', function () {
    if (typeof initTabs === 'function') {
        initTabs();
    }
    if (typeof initCodeEditor === 'function') {
        initCodeEditor();
    }
});


