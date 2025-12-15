// SUPPORT CLAVIER POUR LA CALCULATRICE
// Permet d'utiliser le clavier numérique et les raccourcis

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour déclencher l'effet hover sur un bouton
    function triggerButtonHover(button) {
        if (!button) return;
        
        // Ajouter la classe hover/active
        button.classList.add('keyboard-active');
        
        // Retirer la classe après un court délai
        setTimeout(() => {
            button.classList.remove('keyboard-active');
        }, 200);
    }
    
    // Fonction pour trouver un bouton par son contenu ou attribut
    function findButtonByText(text) {
        const buttons = document.querySelectorAll('.calculator .btn');
        for (let btn of buttons) {
            if (btn.textContent.trim().toLowerCase() === text.toLowerCase()) {
                return btn;
            }
        }
        return null;
    }
    
    // Fonction pour trouver un bouton par son onclick
    function findButtonByOnClick(funcName) {
        const buttons = document.querySelectorAll('.calculator .btn');
        for (let btn of buttons) {
            const onclick = btn.getAttribute('onclick');
            if (onclick && onclick.includes(funcName)) {
                return btn;
            }
        }
        return null;
    }
    
    // Mapping des touches clavier vers les fonctions avec leurs boutons
    const keyMap = {
        '0': {
            action: () => appendNumber('0'),
            button: () => findButtonByText('0')
        },
        '1': {
            action: () => appendNumber('1'),
            button: () => findButtonByText('1')
        },
        '2': {
            action: () => appendNumber('2'),
            button: () => findButtonByText('2')
        },
        '3': {
            action: () => appendNumber('3'),
            button: () => findButtonByText('3')
        },
        '4': {
            action: () => appendNumber('4'),
            button: () => findButtonByText('4')
        },
        '5': {
            action: () => appendNumber('5'),
            button: () => findButtonByText('5')
        },
        '6': {
            action: () => appendNumber('6'),
            button: () => findButtonByText('6')
        },
        '7': {
            action: () => appendNumber('7'),
            button: () => findButtonByText('7')
        },
        '8': {
            action: () => appendNumber('8'),
            button: () => findButtonByText('8')
        },
        '9': {
            action: () => appendNumber('9'),
            button: () => findButtonByText('9')
        },
        '.': {
            action: () => appendNumber('.'),
            button: () => findButtonByText('.')
        },
        '+': {
            action: () => appendOperator('+'),
            button: () => findButtonByText('+')
        },
        '-': {
            action: () => appendOperator('-'),
            button: () => findButtonByText('-')
        },
        '*': {
            action: () => appendOperator('*'),
            button: () => findButtonByText('×')
        },
        '/': {
            action: () => appendOperator('/'),
            button: () => findButtonByText('/')
        },
        '%': {
            action: () => appendOperator('%'),
            button: () => findButtonByText('%')
        },
        'Enter': {
            action: () => calculate(),
            button: () => findButtonByText('=')
        },
        '=': {
            action: () => calculate(),
            button: () => findButtonByText('=')
        },
        'Escape': {
            action: () => clearDisplay(),
            button: () => findButtonByText('C')
        },
        'Delete': {
            action: () => clearDisplay(),
            button: () => findButtonByText('C')
        },
        'Backspace': {
            action: () => {
                // Effacer le dernier caractère
                if (typeof currentInput !== 'undefined' && currentInput.length > 1) {
                    currentInput = currentInput.slice(0, -1);
                    updateDisplay();
                } else if (currentInput.length === 1) {
                    currentInput = '0';
                    updateDisplay();
                }
            },
            button: () => null // Pas de bouton pour backspace
        },
        // Fonctions avancées
        's': {
            action: () => calculateAdvanced('sin'),
            button: () => findButtonByOnClick("calculateAdvanced('sin')")
        },
        'c': {
            action: () => calculateAdvanced('cos'),
            button: () => findButtonByOnClick("calculateAdvanced('cos')")
        },
        't': {
            action: () => calculateAdvanced('tan'),
            button: () => findButtonByOnClick("calculateAdvanced('tan')")
        },
        'h': {
            action: () => calculateAdvanced('hyp'),
            button: () => findButtonByOnClick("calculateAdvanced('hyp')")
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
        
        // Convertir les majuscules en minuscules pour les fonctions avancées
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
            key = key.toLowerCase();
        }

        // Exécuter la fonction correspondante
        if (keyMap[key]) {
            event.preventDefault();
            
            // Déclencher l'effet hover sur le bouton correspondant
            const button = keyMap[key].button();
            if (button) {
                triggerButtonHover(button);
            }
            
            // Exécuter l'action
            keyMap[key].action();
        }
    });

    // Ajouter un indicateur visuel pour montrer que le clavier est supporté
    const calculator = document.getElementById('calculator');
    if (calculator) {
        calculator.setAttribute('title', 'Utilisez votre clavier : chiffres, +, -, *, /, Entrée (=), Escape (C), s (sin), c (cos), t (tan), h (hyp)');
    }
});

