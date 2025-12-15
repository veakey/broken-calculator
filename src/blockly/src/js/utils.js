// Utilitaires partagés

// Helper pour remplacer "var" par "let" de manière raisonnable
function replaceVarWithLet(code) {
    if (!code) return code;
    return code.replace(/\bvar\s+/g, function(match, offset, string) {
        var beforeMatch = string.substring(Math.max(0, offset - 50), offset);
        if (/for\s*\([^)]*$/.test(beforeMatch)) {
            return match; // garder var dans les for
        }
        return 'let ';
    });
}

