// Définition des blocs Blockly (bugs et corrects)

// Blocs avec bugs
Blockly.Blocks['calculator_add_bug'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Addition (BUG)');
        this.appendValueInput('B').setCheck('Number').appendField('+');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('Addition avec bug : soustrait au lieu d\'additionner');
    }
};

Blockly.Blocks['calculator_subtract_bug'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Soustraction (BUG)');
        this.appendValueInput('B').setCheck('Number').appendField('-');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('Soustraction avec bug : additionne au lieu de soustraire');
    }
};

Blockly.Blocks['calculator_multiply_bug'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Multiplication (BUG)');
        this.appendValueInput('B').setCheck('Number').appendField('×');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('Multiplication avec bug : divise au lieu de multiplier');
    }
};

Blockly.Blocks['calculator_divide_bug'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Division (BUG)');
        this.appendValueInput('B').setCheck('Number').appendField('÷');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip('Division avec bug : multiplie au lieu de diviser');
    }
};

// Blocs corrects
Blockly.Blocks['calculator_add_correct'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Addition');
        this.appendValueInput('B').setCheck('Number').appendField('+');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Addition correcte');
    }
};

Blockly.Blocks['calculator_subtract_correct'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Soustraction');
        this.appendValueInput('B').setCheck('Number').appendField('-');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Soustraction correcte');
    }
};

Blockly.Blocks['calculator_multiply_correct'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Multiplication');
        this.appendValueInput('B').setCheck('Number').appendField('×');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Multiplication correcte');
    }
};

Blockly.Blocks['calculator_divide_correct'] = {
    init: function() {
        this.appendValueInput('A').setCheck('Number').appendField('Division');
        this.appendValueInput('B').setCheck('Number').appendField('÷');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Division correcte');
    }
};

