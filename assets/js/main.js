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

/* Get references to the operations button */
const btnEquals = document.getElementById('btn-equals');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnDivide = document.getElementById('btn-divide');
const btnMultiply = document.getElementById('btn-multiply');

/* reference for the calculator display */
const display = document.getElementById('calculator_result');

/* Handles a button click */
const onClick = (event) => {

    /* Check the button type that was clicked */
    switch(event.target.innerText) {
        case '1':
            display.value += '1';
            break;       
        case '2':
            display.value += '2';
            break;
        case '3':
            display.value += '3';
            break;
        case '4':
            display.value += '4';
            break;
        case '5':
            display.value += '5';
            break;
        case '6':
            display.value += '6';
            break;
        case '7':
            display.value += '7';
            break;
        case '8':
            display.value += '8';
            break;
        case '9':
            display.value += '9';
            break;
        case '0':
            display.value += '0';
            break;
        case '+':
            display.value += ' + ';
            break;
        case '-':
            display.value += ' - ';
            break;
        case '/':
            display.value += ' / ';
            break;
        case '*':
            display.value += ' * ';
            break;
        case '=':
            calculate();
            break;
        case 'CLR':
            display.value = '';
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

}