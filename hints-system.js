// SYSTÈME D'INDICES PROGRESSIFS
// Donne des indices de plus en plus précis pour aider à trouver les bugs

const hints = {
    addition: [
        "💡 Indice 1 : L'erreur concerne l'addition",
        "💡 Indice 2 : L'addition ne fait pas ce qu'elle devrait faire",
        "💡 Indice 3 : L'addition fait l'opération inverse",
        "💡 Indice 4 : Regarde la ligne 55 dans calculator.js"
    ],
    soustraction: [
        "💡 Indice 1 : L'erreur concerne la soustraction",
        "💡 Indice 2 : La soustraction ne fait pas ce qu'elle devrait faire",
        "💡 Indice 3 : La soustraction fait l'opération inverse",
        "💡 Indice 4 : Regarde la ligne 59 dans calculator.js"
    ],
    multiplication: [
        "💡 Indice 1 : L'erreur concerne la multiplication",
        "💡 Indice 2 : La multiplication ne fait pas ce qu'elle devrait faire",
        "💡 Indice 3 : La multiplication fait une autre opération",
        "💡 Indice 4 : Regarde la ligne 63 dans calculator.js"
    ],
    division: [
        "💡 Indice 1 : L'erreur concerne la division",
        "💡 Indice 2 : La division ne fait pas ce qu'elle devrait faire",
        "💡 Indice 3 : La division fait l'opération inverse",
        "💡 Indice 4 : Regarde la ligne 67 dans calculator.js"
    ],
    decimal: [
        "💡 Indice 1 : L'erreur concerne les nombres décimaux",
        "💡 Indice 2 : On peut ajouter plusieurs points décimaux",
        "💡 Indice 3 : Il manque une vérification dans appendNumber",
        "💡 Indice 4 : Regarde la ligne 18 dans calculator.js"
    ],
    divisionZero: [
        "💡 Indice 1 : L'erreur concerne la division par zéro",
        "💡 Indice 2 : On peut diviser par zéro sans vérification",
        "💡 Indice 3 : Il manque une vérification avant de diviser",
        "💡 Indice 4 : Regarde la ligne 68 dans calculator.js"
    ],
    pourcentage: [
        "💡 Indice 1 : L'erreur concerne le pourcentage",
        "💡 Indice 2 : Le pourcentage ne calcule pas correctement",
        "💡 Indice 3 : Le pourcentage multiplie au lieu de calculer",
        "💡 Indice 4 : Regarde la ligne 72 dans calculator.js"
    ],
    sin: [
        "💡 Indice 1 : L'erreur concerne la fonction sin",
        "💡 Indice 2 : La fonction sin utilise une autre fonction",
        "💡 Indice 3 : La fonction sin utilise cos au lieu de sin",
        "💡 Indice 4 : Regarde la ligne 97 dans calculator.js"
    ],
    cos: [
        "💡 Indice 1 : L'erreur concerne la fonction cos",
        "💡 Indice 2 : La fonction cos utilise une autre fonction",
        "💡 Indice 3 : La fonction cos utilise tan au lieu de cos",
        "💡 Indice 4 : Regarde la ligne 101 dans calculator.js"
    ],
    tan: [
        "💡 Indice 1 : L'erreur concerne la fonction tan",
        "💡 Indice 2 : La fonction tan utilise une autre fonction",
        "💡 Indice 3 : La fonction tan utilise sin au lieu de tan",
        "💡 Indice 4 : Regarde la ligne 105 dans calculator.js"
    ],
    hyp: [
        "💡 Indice 1 : L'erreur concerne la fonction hyp",
        "💡 Indice 2 : La fonction hyp ne calcule pas l'hypoténuse",
        "💡 Indice 3 : La fonction hyp additionne au lieu de calculer sqrt(a²+b²)",
        "💡 Indice 4 : Regarde la ligne 110 dans calculator.js"
    ]
};

let hintLevels = {
    addition: 0,
    soustraction: 0,
    multiplication: 0,
    division: 0,
    decimal: 0,
    divisionZero: 0,
    pourcentage: 0,
    sin: 0,
    cos: 0,
    tan: 0,
    hyp: 0
};

function showHint(bugType) {
    const hintType = hints[bugType];
    if (!hintType) return;
    
    const level = hintLevels[bugType];
    if (level >= hintType.length) {
        return "💡 Tu as déjà tous les indices pour ce bug !";
    }
    
    const hint = hintType[level];
    hintLevels[bugType]++;
    
    // Afficher l'indice dans une zone dédiée ou dans les étapes visuelles
    const hintContainer = document.getElementById('hints-container');
    if (hintContainer) {
        const hintElement = document.createElement('div');
        hintElement.className = 'hint-item';
        hintElement.textContent = hint;
        hintContainer.appendChild(hintElement);
        hintContainer.scrollTop = hintContainer.scrollHeight;
    } else {
        // Fallback : afficher dans la console ou dans une alerte
        console.log(hint);
        if (typeof addVisualStep !== 'undefined') {
            addVisualStep(hint, 'info');
        }
    }
    
    return hint;
}

function resetHints() {
    for (let key in hintLevels) {
        hintLevels[key] = 0;
    }
    const hintContainer = document.getElementById('hints-container');
    if (hintContainer) {
        hintContainer.innerHTML = '';
    }
}

// Fonction pour obtenir un indice basé sur un test qui échoue
function getHintForFailedTest(testName) {
    const testToBugMap = {
        'Addition : 5 + 3 = 8': 'addition',
        'Soustraction : 10 - 4 = 6': 'soustraction',
        'Multiplication : 4 × 3 = 12': 'multiplication',
        'Division : 15 ÷ 3 = 5': 'division',
        'Saisie décimale : 3.14': 'decimal',
        'Division par zéro': 'divisionZero',
        'Pourcentage : 50 % de 20 = 10': 'pourcentage',
        'Sinus : sin(30°) ≈ 0.5': 'sin',
        'Cosinus : cos(60°) = 0.5': 'cos',
        'Tangente : tan(45°) ≈ 1': 'tan',
        'Hypoténuse : hyp(3, 4) = 5': 'hyp'
    };
    
    const bugType = testToBugMap[testName];
    if (bugType) {
        return showHint(bugType);
    }
    
    return null;
}

