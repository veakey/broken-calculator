// Système d'onglets calculatrice/console

// Met à jour l'affichage du code généré dans la console
function updateCodeConsole(code) {
    var consoleEl = document.getElementById('code-console');
    if (consoleEl) {
        if (code && code.trim() !== '') {
            consoleEl.textContent = code;
        } else {
            consoleEl.textContent = '';
        }
    }
}

// Gestion des onglets calculatrice/console
function initTabs() {
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetTab = btn.getAttribute('data-tab');
            
            // Retirer active de tous les boutons et contenus
            tabButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(function(content) {
                content.classList.remove('active');
            });
            
            // Activer le bouton et le contenu cliqués
            btn.classList.add('active');
            var targetContent = document.getElementById('tab-' + targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

