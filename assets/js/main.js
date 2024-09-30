/* Get references to the various buttons */
const btnOne = document.getElementById('btn-1');
const btnTwo = document.getElementById('btn-2');
const btnThree = document.getElementById('btn-3');
const btnFor = document.getElementById('btn-4');
const btnFive = document.getElementById('btn-5');
const btnSix = document.getElementById('btn-6');
const btnSeven  = document.getElementById('btn-7');
const btnEight = document.getElementById('btn-8');
const btnNine = document.getElementById('btn-9');
const btZero = document.getElementById('btn-0');
const btDot = document.getElementById('btn-dot');

/* Get references to the operations button */
const btnEquals = document.getElementById('btn-equals');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnDivide = document.getElementById('btn-divide');
const btnMultiply = document.getElementById('btn-multiply');

/* reference for the calculator display */
const display = document.getElementById('calculator_result');

/* Handles if we have just calculated a result, we do this so that the 
   display is reset when a new number is pressed after the equals button. */
let calculated = false;

/*  Updates the display on the calculator */
const updateDisplay = (value) => {

    /* If we have just calculated a result then when a new digit
       is pressed it should clear out the old display first to ensure
       the old number is not used in the new calculation */
    if(calculated) {
        display.value = value;
        /* Reset the calculated value */
        calculated = false;
    } else {
        display.value += value;
    }

};

/* If we have just calculated a result but then click on a operator like add or minus etc
   then we should use the previous result as the new starting digit for the operation rather
   than clearing the display */
const updateDisplayForOperation = value => {

    if(display.value != ''){
        
        /* Reset the calculated var so the display is not cleared before hand */
        calculated = false;

    }

    updateDisplay(value);

}

/* Handles a button click */
const onClick = (event) => {

    /* Check the button type that was clicked */
    switch(event.target.innerText) {
        case '1':
            updateDisplay('1');
            break;       
        case '2':
            updateDisplay('2');
            break;
        case '3':
            updateDisplay('3');
            break;
        case '4':
            updateDisplay('4');
            break;
        case '5':
            updateDisplay('5');
            break;
        case '6':
            updateDisplay('6');
            break;
        case '7':
            updateDisplay('7');
            break;
        case '8':
            updateDisplay('8');
            break;
        case '9':
            updateDisplay('9');
            break;
        case '0':
            updateDisplay('0');
            break;
        case '+':
            updateDisplayForOperation(' + ');
            break;
        case '-':
            updateDisplayForOperation(' - ');
            break;
        case '/':
            updateDisplayForOperation(' / ');
            break;
        case '*':
            updateDisplayForOperation(' * ');
            break;
        case '=':
            calculate();
            break;
        case 'C':
            display.value = '';
            break;
        case '.':
            display.value += '.';
            break;
    }
    
}

/* Handles the calculation */
const calculate = () => {

    /* Check we have a value to actually calculate */
    if(display.value == '') return;

    /* Get the result as the time of clicking the equals button and clear out the display */
    const input = display.value;
    display.innerText = '';

    /* Caluclate the result and display it */
    const result = math.evaluate(input);
    display.value = result;

    /* Update to say we have just calculated a result */
    calculated = true;

}