# CALCULATRICE CASSÉE - VERSION PYTHON
# Cette calculatrice contient plusieurs bugs à identifier et corriger

class Calculatrice:
    def __init__(self):
        self.current_input = '0'
        self.previous_input = ''
        self.operator = None
        self.should_reset = False
    
    def append_number(self, number):
        """Ajoute un chiffre à l'affichage"""
        if self.should_reset:
            self.current_input = '0'
            self.should_reset = False
        
        # BUG 1: Ne vérifie pas si on ajoute un deuxième point décimal
        if self.current_input == '0' and number != '.':
            self.current_input = number
        else:
            self.current_input += number
    
    def append_operator(self, op):
        """Définit l'opérateur"""
        if self.previous_input != '' and self.operator is not None:
            self.calculate()
        
        self.previous_input = self.current_input
        self.operator = op
        self.should_reset = True
    
    def calculate(self):
        """Effectue le calcul"""
        if self.previous_input == '' or self.operator is None:
            return
        
        prev = float(self.previous_input)
        current = float(self.current_input)
        result = 0
        
        # BUGS dans les opérations:
        if self.operator == '+':
            # BUG 2: Addition incorrecte (soustrait au lieu d'additionner)
            result = prev - current
        elif self.operator == '-':
            # BUG 3: Soustraction incorrecte (additionne au lieu de soustraire)
            result = prev + current
        elif self.operator == '*':
            # BUG 4: Multiplication incorrecte (divise au lieu de multiplier)
            result = prev / current
        elif self.operator == '/':
            # BUG 5: Division incorrecte (multiplie au lieu de diviser)
            result = prev * current
            # BUG 6: Ne vérifie pas la division par zéro
        
        self.current_input = str(result)
        self.previous_input = ''
        self.operator = None
        self.should_reset = True
    
    def clear(self):
        """Réinitialise la calculatrice"""
        self.current_input = '0'
        self.previous_input = ''
        self.operator = None
        self.should_reset = False
    
    def get_display(self):
        """Retourne la valeur à afficher"""
        return self.current_input


# Tests unitaires
def test_calculatrice():
    """Fonction de test pour valider les réparations"""
    calc = Calculatrice()
    
    # Test addition
    calc.current_input = '5'
    calc.append_operator('+')
    calc.current_input = '3'
    calc.calculate()
    assert calc.get_display() == '8', f"Erreur addition: attendu 8, obtenu {calc.get_display()}"
    print("✅ Test addition réussi")
    
    # Test soustraction
    calc.clear()
    calc.current_input = '10'
    calc.append_operator('-')
    calc.current_input = '4'
    calc.calculate()
    assert calc.get_display() == '6', f"Erreur soustraction: attendu 6, obtenu {calc.get_display()}"
    print("✅ Test soustraction réussi")
    
    # Test multiplication
    calc.clear()
    calc.current_input = '6'
    calc.append_operator('*')
    calc.current_input = '7'
    calc.calculate()
    assert calc.get_display() == '42', f"Erreur multiplication: attendu 42, obtenu {calc.get_display()}"
    print("✅ Test multiplication réussi")
    
    # Test division
    calc.clear()
    calc.current_input = '20'
    calc.append_operator('/')
    calc.current_input = '4'
    calc.calculate()
    assert calc.get_display() == '5', f"Erreur division: attendu 5, obtenu {calc.get_display()}"
    print("✅ Test division réussi")
    
    print("\n🎉 Tous les tests passent ! La calculatrice est réparée.")


if __name__ == "__main__":
    print("🧪 Exécution des tests...\n")
    test_calculatrice()

