// CONTRÔLES D'ACCESSIBILITÉ
// Taille de police ajustable, mode sombre/clair et mode daltonien

let fontSize = 100; // Pourcentage de la taille de base
let darkMode = false;

function increaseFontSize() {
    fontSize = Math.min(fontSize + 10, 150); // Max 150%
    applyFontSize();
    saveSettings();
}

function decreaseFontSize() {
    fontSize = Math.max(fontSize - 10, 80); // Min 80%
    applyFontSize();
    saveSettings();
}

function applyFontSize() {
    document.documentElement.style.fontSize = fontSize + '%';
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    saveSettings();
}

function saveSettings() {
    localStorage.setItem('calculator-fontSize', fontSize);
    localStorage.setItem('calculator-darkMode', darkMode);
}

function loadSettings() {
    const savedFontSize = localStorage.getItem('calculator-fontSize');
    const savedDarkMode = localStorage.getItem('calculator-darkMode');
    
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
        applyFontSize();
    }
    
    if (savedDarkMode === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
    }
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
});

