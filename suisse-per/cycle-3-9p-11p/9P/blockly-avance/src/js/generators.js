// Générateurs JavaScript pour les blocs Blockly

Blockly.JavaScript['calculator_add_bug'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITION) || '0';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITION) || '0';
return ['(' + value_a + ' - ' + value_b + ')', Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript['calculator_subtract_bug'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';
return ['(' + value_a + ' + ' + value_b + ')', Blockly.JavaScript.ORDER_SUBTRACTION];
};

Blockly.JavaScript['calculator_multiply_bug'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATION) || '1';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATION) || '1';
return ['(' + value_a + ' / ' + value_b + ')', Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript['calculator_divide_bug'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_DIVISION) || '1';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_DIVISION) || '1';
return ['(' + value_a + ' * ' + value_b + ')', Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript['calculator_add_correct'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITION) || '0';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITION) || '0';
return ['(' + value_a + ' + ' + value_b + ')', Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript['calculator_subtract_correct'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';
return ['(' + value_a + ' - ' + value_b + ')', Blockly.JavaScript.ORDER_SUBTRACTION];
};

Blockly.JavaScript['calculator_multiply_correct'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATION) || '1';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATION) || '1';
return ['(' + value_a + ' * ' + value_b + ')', Blockly.JavaScript.ORDER_MULTIPLICATION];
};

Blockly.JavaScript['calculator_divide_correct'] = function(block) {
var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_DIVISION) || '1';
var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_DIVISION) || '1';
return ['(' + value_a + ' / ' + value_b + ')', Blockly.JavaScript.ORDER_DIVISION];
};

// Surcharger variables_set pour utiliser 'let'
var originalVariablesSet = Blockly.JavaScript['variables_set'];
Blockly.JavaScript['variables_set'] = function(block) {
var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
var varName = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
return 'let ' + varName + ' = ' + argument0 + ';\n';
};
