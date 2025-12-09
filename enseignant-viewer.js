// Outil Enseignant - Visualisation du code de manière compréhensible
// Le code est intégré directement pour fonctionner sans serveur

let codeContent = `// CALCULATRICE CASSÉE - À RÉPARER
// Cette calculatrice contient plusieurs bugs intentionnels
// Les tests dans tests.js vous aideront à identifier les problèmes

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// BUG 1: La fonction appendNumber ne gère pas correctement le zéro initial
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    // BUG: Ne vérifie pas si on ajoute un deuxième point décimal
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

// BUG 2: La fonction appendOperator ne réinitialise pas correctement
function appendOperator(op) {
    if (previousInput !== '' && operator !== null) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op;
    // BUG: shouldResetDisplay n'est pas défini ici
    currentInput = '0';
    updateDisplay();
}

// BUG 3: La fonction calculate contient plusieurs erreurs logiques
function calculate() {
    if (previousInput === '' || operator === null) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    // BUGS dans les opérations:
    switch(operator) {
        case '+':
            // BUG: Addition incorrecte (soustrait au lieu d'additionner)
            result = prev - current;
            break;
        case '-':
            // BUG: Soustraction incorrecte (additionne au lieu de soustraire)
            result = prev + current;
            break;
        case '*':
            // BUG: Multiplication incorrecte (divise au lieu de multiplier)
            result = prev / current;
            break;
        case '/':
            // BUG: Division incorrecte (multiplie au lieu de diviser)
            result = prev * current;
            // BUG: Ne vérifie pas la division par zéro
            break;
        case '%':
            // BUG: Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)
            result = prev * current; // Devrait être: prev * (current / 100)
            break;
        default:
            return;
    }
    
    // BUG: Ne gère pas correctement les nombres décimaux
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// Fonctions mathématiques avancées (avec bugs)
function calculateAdvanced(func) {
    let value = parseFloat(currentInput);
    let result = 0;
    
    // Convertir en radians si nécessaire
    let radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            // BUG: Utilise cos au lieu de sin
            result = Math.cos(radians);
            break;
        case 'cos':
            // BUG: Utilise tan au lieu de cos
            result = Math.tan(radians);
            break;
        case 'tan':
            // BUG: Utilise sin au lieu de tan
            result = Math.sin(radians);
            break;
        case 'hyp':
            // BUG: Calcul hypothénuse incorrect (additionne au lieu de sqrt(a²+b²))
            result = value + value; // Devrait calculer l'hypoténuse
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// BUG 4: La fonction updateDisplay peut afficher des valeurs incorrectes
function updateDisplay() {
    // BUG: Ne limite pas la longueur de l'affichage
    display.textContent = currentInput;
}

// Fonction utilitaire pour obtenir l'état actuel (utilisée par les tests)
function getCalculatorState() {
    return {
        currentInput: currentInput,
        previousInput: previousInput,
        operator: operator,
        display: display.textContent
    };
}

// Fonction utilitaire pour exécuter un calcul directement (utilisée par les tests)
function testCalculate(a, op, b) {
    clearDisplay();
    currentInput = a.toString();
    updateDisplay();
    appendOperator(op);
    currentInput = b.toString();
    updateDisplay();
    calculate();
    return parseFloat(currentInput);
}

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    clearDisplay();
    currentInput = value.toString();
    updateDisplay();
    calculateAdvanced(func);
    return parseFloat(currentInput);
}`;

let bugs = [];

// Charger le code (déjà intégré, fonctionne sans serveur)
function loadCode() {
    displayCode();
}

// Afficher le code avec coloration syntaxique
function displayCode(highlightBugs = false) {
    const viewer = document.getElementById('code-viewer');
    viewer.innerHTML = highlightCode(codeContent, false, highlightBugs);
}

// Fonction pour mettre en forme le code avec coloration syntaxique
function highlightCode(code, isCorrected = false, highlightBugs = false) {
    const lines = code.split('\n');
    let html = '';
    
    lines.forEach((line, index) => {
        const lineNum = index + 1;
        const isBug = !isCorrected && bugs.some(bug => bug.line === lineNum);
        
        let formattedLine = escapeHtml(line);
        
        // Coloration syntaxique simple
        formattedLine = formattedLine
            .replace(/(function|let|const|var|if|else|switch|case|break|return|true|false)/g, 
                '<span class="keyword">$1</span>')
            .replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, 
                '<span class="function">$1</span>(')
            .replace(/(['"`])(.*?)\1/g, 
                '<span class="string">$1$2$1</span>')
            .replace(/\/\/.*$/g, 
                '<span class="comment">$&</span>');
        
        // Mettre en évidence les corrections dans le code corrigé
        if (isCorrected) {
            formattedLine = formattedLine.replace(/CORRIGÉ:/g, '<span style="color: #28a745; font-weight: bold;">CORRIGÉ:</span>');
        }
        
        const bugClass = isBug && highlightBugs ? 'bug' : '';
        const bugMarker = isBug && highlightBugs ? '<span class="bug-marker">🐛</span> ' : '';
        
        html += `
            <div class="code-line ${bugClass}">
                <span class="line-number">${lineNum.toString().padStart(3, '0')}</span>
                ${bugMarker}${formattedLine}
            </div>
        `;
    });
    
    return html;
}

// Échapper le HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Identifier les bugs dans le code
function identifyBugs() {
    bugs = [
        {
            line: 19,
            description: 'Ne vérifie pas si on ajoute un deuxième point décimal',
            type: 'logique'
        },
        {
            line: 36,
            description: 'shouldResetDisplay n\'est pas défini ici',
            type: 'variable'
        },
        {
            line: 55,
            description: 'Addition incorrecte (soustrait au lieu d\'additionner)',
            type: 'opération'
        },
        {
            line: 59,
            description: 'Soustraction incorrecte (additionne au lieu de soustraire)',
            type: 'opération'
        },
        {
            line: 63,
            description: 'Multiplication incorrecte (divise au lieu de multiplier)',
            type: 'opération'
        },
        {
            line: 67,
            description: 'Division incorrecte (multiplie au lieu de diviser)',
            type: 'opération'
        },
        {
            line: 68,
            description: 'Ne vérifie pas la division par zéro',
            type: 'sécurité'
        },
        {
            line: 72,
            description: 'Pourcentage incorrect (multiplie au lieu de calculer le pourcentage)',
            type: 'opération'
        },
        {
            line: 93,
            description: 'Ne limite pas la longueur de l\'affichage',
            type: 'affichage'
        },
        {
            line: 105,
            description: 'Sinus utilise cos au lieu de sin',
            type: 'fonction'
        },
        {
            line: 109,
            description: 'Cosinus utilise tan au lieu de cos',
            type: 'fonction'
        },
        {
            line: 113,
            description: 'Tangente utilise sin au lieu de tan',
            type: 'fonction'
        },
        {
            line: 117,
            description: 'Hypoténuse additionne au lieu de calculer',
            type: 'fonction'
        }
    ];
}

// Afficher les bugs
function showBugs() {
    identifyBugs();
    displayCode(true);
    displayBugList();
}

// Afficher la liste des bugs
function displayBugList() {
    const explanationsDiv = document.getElementById('explanations');
    
    let html = `
        <div class="explanation">
            <h3>🐛 Bugs identifiés dans le code</h3>
            <p>Voici tous les bugs intentionnels présents dans la calculatrice :</p>
        </div>
        <ul class="bug-list">
    `;
    
    bugs.forEach((bug, index) => {
        const typeEmoji = {
            'logique': '🧠',
            'variable': '📦',
            'opération': '➕',
            'sécurité': '🔒',
            'affichage': '📺',
            'fonction': '⚙️'
        };
        
        html += `
            <li>
                <strong>Bug ${index + 1} (Ligne ${bug.line})</strong> ${typeEmoji[bug.type] || '🐛'}
                <br>
                ${bug.description}
                <br>
                <small style="color: #666;">Type : ${bug.type}</small>
            </li>
        `;
    });
    
    html += '</ul>';
    
    explanationsDiv.innerHTML = html;
}

// Afficher les explications
function showExplanations() {
    const explanationsDiv = document.getElementById('explanations');
    
    explanationsDiv.innerHTML = `
        <div class="explanation">
            <h3>📖 Structure du code</h3>
            <p>Le code de la calculatrice est organisé en plusieurs fonctions :</p>
            <ul style="margin-top: 10px; margin-left: 20px;">
                <li><strong>appendNumber()</strong> : Ajoute un chiffre à l'affichage</li>
                <li><strong>appendOperator()</strong> : Sélectionne une opération (+, -, ×, ÷)</li>
                <li><strong>calculate()</strong> : Effectue le calcul (contient des bugs)</li>
                <li><strong>clearDisplay()</strong> : Efface tout</li>
                <li><strong>calculateAdvanced()</strong> : Fonctions mathématiques avancées</li>
            </ul>
        </div>
        
        <div class="explanation">
            <h3>🔍 Comment trouver les bugs ?</h3>
            <p>Pour aider les élèves à trouver les bugs :</p>
            <ol style="margin-top: 10px; margin-left: 20px;">
                <li>Regardez les commentaires dans le code (lignes avec //)</li>
                <li>Comparez les opérations : est-ce que + fait vraiment une addition ?</li>
                <li>Testez avec des calculs simples (5 + 3 devrait donner 8)</li>
                <li>Vérifiez les cas limites (division par zéro, points décimaux multiples)</li>
            </ol>
        </div>
        
        <div class="explanation">
            <h3>💡 Conseils pédagogiques</h3>
            <ul style="margin-top: 10px; margin-left: 20px;">
                <li>Commencez par montrer le code sans les bugs mis en évidence</li>
                <li>Demandez aux élèves de tester la calculatrice d'abord</li>
                <li>Puis montrez le code et demandez-leur de trouver les erreurs</li>
                <li>Utilisez la version "enfant" pour les plus jeunes (index-enfant.html)</li>
            </ul>
        </div>
        
        <div class="explanation">
            <h3>🎯 Objectifs pédagogiques</h3>
            <p>Cet outil permet de :</p>
            <ul style="margin-top: 10px; margin-left: 20px;">
                <li>Visualiser le code de manière claire</li>
                <li>Comprendre la structure d'un programme</li>
                <li>Identifier les erreurs de programmation</li>
                <li>Apprendre à déboguer méthodiquement</li>
            </ul>
        </div>
    `;
}

// Fonction pour basculer entre le mode normal et le mode comparaison
let comparisonMode = false;

function toggleComparison() {
    comparisonMode = !comparisonMode;
    const mainContent = document.getElementById('main-content');
    const comparisonModeDiv = document.getElementById('comparison-mode');
    
    if (comparisonMode) {
        mainContent.style.display = 'none';
        comparisonModeDiv.style.display = 'block';
        loadComparisonCode();
    } else {
        mainContent.style.display = 'grid';
        comparisonModeDiv.style.display = 'none';
    }
}

// Fonction pour charger le code avant/après
function loadComparisonCode() {
    // Code avec bugs (déjà chargé dans codeContent)
    const beforeViewer = document.getElementById('code-before-viewer');
    beforeViewer.innerHTML = highlightCode(codeContent);
    
    // Code corrigé
    const correctedCode = `// CALCULATRICE CORRIGÉE - VERSION SANS BUGS
// Cette version montre comment le code devrait être après correction

let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// CORRIGÉ: La fonction appendNumber gère correctement le zéro initial et les points décimaux
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    // CORRIGÉ: Vérifie si on ajoute un deuxième point décimal
    if (number === '.' && currentInput.includes('.')) {
        return; // Ne pas ajouter un deuxième point
    }
    
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

// CORRIGÉ: La fonction appendOperator réinitialise correctement
function appendOperator(op) {
    if (previousInput !== '' && operator !== null) {
        calculate();
    }
    
    previousInput = currentInput;
    operator = op;
    shouldResetDisplay = true; // CORRIGÉ: Défini correctement
    currentInput = '0';
    updateDisplay();
}

// CORRIGÉ: La fonction calculate contient toutes les corrections
function calculate() {
    if (previousInput === '' || operator === null) {
        return;
    }
    
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result = 0;
    
    // CORRIGÉ: Toutes les opérations sont correctes
    switch(operator) {
        case '+':
            // CORRIGÉ: Addition correcte
            result = prev + current;
            break;
        case '-':
            // CORRIGÉ: Soustraction correcte
            result = prev - current;
            break;
        case '*':
            // CORRIGÉ: Multiplication correcte
            result = prev * current;
            break;
        case '/':
            // CORRIGÉ: Division correcte avec vérification division par zéro
            if (current === 0) {
                currentInput = 'Erreur';
                previousInput = '';
                operator = null;
                shouldResetDisplay = true;
                updateDisplay();
                return;
            }
            result = prev / current;
            break;
        case '%':
            // CORRIGÉ: Pourcentage correct
            result = prev * (current / 100);
            break;
        default:
            return;
    }
    
    // CORRIGÉ: Gestion correcte des nombres décimaux
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// CORRIGÉ: Fonctions mathématiques avancées sans bugs
function calculateAdvanced(func) {
    let value = parseFloat(currentInput);
    let result = 0;
    
    // Convertir en radians si nécessaire
    let radians = value * (Math.PI / 180);
    
    switch(func) {
        case 'sin':
            // CORRIGÉ: Utilise sin
            result = Math.sin(radians);
            break;
        case 'cos':
            // CORRIGÉ: Utilise cos
            result = Math.cos(radians);
            break;
        case 'tan':
            // CORRIGÉ: Utilise tan
            result = Math.tan(radians);
            break;
        case 'hyp':
            // CORRIGÉ: Calcul hypothénuse (simplifié pour l'exemple)
            result = Math.sqrt(value * value + value * value);
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// CORRIGÉ: La fonction updateDisplay limite la longueur de l'affichage
function updateDisplay() {
    // CORRIGÉ: Limite la longueur de l'affichage
    if (currentInput.length > 15) {
        currentInput = parseFloat(currentInput).toExponential(5);
    }
    display.textContent = currentInput;
}

// Fonction utilitaire pour obtenir l'état actuel (utilisée par les tests)
function getCalculatorState() {
    return {
        currentInput: currentInput,
        previousInput: previousInput,
        operator: operator,
        display: display.textContent
    };
}

// Fonction utilitaire pour exécuter un calcul directement (utilisée par les tests)
function testCalculate(a, op, b) {
    clearDisplay();
    currentInput = a.toString();
    updateDisplay();
    appendOperator(op);
    currentInput = b.toString();
    updateDisplay();
    calculate();
    return parseFloat(currentInput);
}

// Fonction utilitaire pour tester les fonctions avancées (utilisée par les tests)
function testAdvancedFunction(value, func) {
    clearDisplay();
    currentInput = value.toString();
    updateDisplay();
    calculateAdvanced(func);
    return parseFloat(currentInput);
}`;
    
    const afterViewer = document.getElementById('code-after-viewer');
    afterViewer.innerHTML = highlightCode(correctedCode, true);
}

// Initialiser - Afficher le code automatiquement
window.addEventListener('load', function() {
    identifyBugs();
    loadCode(); // Afficher le code automatiquement
    showExplanations();
});

