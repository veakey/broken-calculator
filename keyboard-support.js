// SUPPORT CLAVIER POUR LA CALCULATRICE
// Permet d'utiliser le clavier numérique et les raccourcis

document.addEventListener('DOMContentLoaded', function() {
    // Mapping des touches clavier vers les fonctions
    const keyMap = {
        '0': () => appendNumber('0'),
        '1': () => appendNumber('1'),
        '2': () => appendNumber('2'),
        '3': () => appendNumber('3'),
        '4': () => appendNumber('4'),
        '5': () => appendNumber('5'),
        '6': () => appendNumber('6'),
        '7': () => appendNumber('7'),
        '8': () => appendNumber('8'),
        '9': () => appendNumber('9'),
        '.': () => appendNumber('.'),
        '+': () => appendOperator('+'),
        '-': () => appendOperator('-'),
        '*': () => appendOperator('*'),
        '/': () => appendOperator('/'),
        '%': () => appendOperator('%'),
        'Enter': () => calculate(),
        '=': () => calculate(),
        'Escape': () => clearDisplay(),
        'Delete': () => clearDisplay(),
        'Backspace': () => {
            // Effacer le dernier caractère
            if (typeof currentInput !== 'undefined' && currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
                updateDisplay();
            } else if (currentInput.length === 1) {
                currentInput = '0';
                updateDisplay();
            }
        }
    };

    // Gestion des touches numériques du pavé numérique
    const numpadMap = {
        'Numpad0': '0',
        'Numpad1': '1',
        'Numpad2': '2',
        'Numpad3': '3',
        'Numpad4': '4',
        'Numpad5': '5',
        'Numpad6': '6',
        'Numpad7': '7',
        'Numpad8': '8',
        'Numpad9': '9',
        'NumpadDecimal': '.',
        'NumpadAdd': '+',
        'NumpadSubtract': '-',
        'NumpadMultiply': '*',
        'NumpadDivide': '/',
        'NumpadEnter': 'Enter'
    };

    // Écouter les événements clavier
    document.addEventListener('keydown', function(event) {
        // Ignorer si on est dans un input ou textarea
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        let key = event.key;
        let code = event.code;

        // Gérer le pavé numérique
        if (numpadMap[code]) {
            key = numpadMap[code];
        }

        // Exécuter la fonction correspondante
        if (keyMap[key]) {
            event.preventDefault();
            keyMap[key]();
        }
    });

    // Ajouter un indicateur visuel pour montrer que le clavier est supporté
    const calculator = document.getElementById('calculator');
    if (calculator) {
        calculator.setAttribute('title', 'Utilisez votre clavier : chiffres, +, -, *, /, Entrée (=), Escape (C)');
    }
});

