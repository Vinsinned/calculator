const buttons = document.querySelectorAll('button');
const operands = document.querySelectorAll('.operator');
const startEquation = document.querySelector('#start');
const display = document.createElement('p');
display.style.cssText = "color: black;"
const parentElement = document.querySelector('#inputOutput');
//values in order to successfully run the equation
let answer = null;
let keepAnswer = null;
let number1 = '';
let number2 = '';
let operator = null;
let confirmNumber = false;
//basic operations for the calculator
function add(num1, num2) {
    return (num1 + num2);
}
function subtract(num1, num2) {
    return (num1 - num2);
}
function multiply(num1, num2) {
    return (num1 * num2);
}
function divide(num1, num2) {
    return (num1 / num2);
}
function operate(num1, operator, num2) {
    
}

//Event listeners for clicks in the 'equals', operand, and numbers button
startEquation.addEventListener('click', () => {
    //starts the equation depending on operand value
    let numb1 = parseInt(number1);
    let numb2 = parseInt(number2);
    if (operator != null && number1 != '' && number2 != '') {
        switch (operator) {
            case 'addition':
                answer = add(numb1, numb2);
                number1 = answer;
                number2 = '';
                operator = null;
                display.textContent = `${answer}`
                break;
            case 'subtraction':
                answer = subtract(numb1, numb2);
                number1 = answer;
                number2 = '';
                operator = null;
                display.textContent = `${answer}`
                break;
            case 'multiplication':
                answer = multiply(numb1, numb2);
                number1 = answer;
                number2 = '';
                operator = null;
                display.textContent = `${answer}`
                break;
            case 'division':
                answer = divide(numb1, numb2);
                number1 = answer;
                number2 = '';
                operator = null;
                display.textContent = `${answer}`
                break;
        }
    }
});

operands.forEach((button) => {
    button.addEventListener('click',() => {
        //assigns a value to operand and also officially stores number1 value and moves on to number2
            if (operator == null) {
                switch (button.id) {
                    case 'plus':
                        operator = 'addition';
                        confirmNumber = true;
                        break;
                    case 'minus':
                        operator = 'subtraction';
                        confirmNumber = true;
                        break;
                    case 'multiply':
                        operator = 'multiplication';
                        confirmNumber = true;
                        break;
                    case 'divide':
                        operator = 'division';
                        confirmNumber = true;
                        break;
                }
            } else {
                
            }
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator == null) {
            switch (button.id) {
                case 'zero':
                    number1 += '0';
                    display.textContent = `${number1}`
                    break;
                case '1':
                    number1 += '1';
                    display.textContent = `${number1}`
                    break;
                case '2':
                    number1 += '2';
                    display.textContent = `${number1}`
                    break;
                case '3':
                    number1 += '3';
                    display.textContent = `${number1}`
                    break;
                case '4':
                    number1 += '4';
                    display.textContent = `${number1}`
                    break;
                case '5':
                    number1 += '5';
                    display.textContent = `${number1}`
                    break;
                case '6':
                    number1 += '6';
                    display.textContent = `${number1}`
                    break;
                case '7':
                    number1 += '7';
                    display.textContent = `${number1}`
                    break;
                case '8':
                    number1 += '8';
                    display.textContent = `${number1}`
                    break;
                case '9':
                    number1 += '9';
                    display.textContent = `${number1}`
                    break;
                }
            } else if (confirm != false) {
                switch (button.id) {
                    case 'zero':
                    number2 += '0';
                    display.textContent = `${number2}`
                    break;
                case '1':
                    number2 += '1';
                    display.textContent = `${number2}`
                    break;
                case '2':
                    number2 += '2';
                    display.textContent = `${number2}`
                    break;
                case '3':
                    number2 += '3';
                    display.textContent = `${number2}`
                    break;
                case '4':
                    number2 += '4';
                    display.textContent = `${number2}`
                    break;
                case '5':
                    number2 += '5';
                    display.textContent = `${number2}`
                    break;
                case '6':
                    number2 += '6';
                    display.textContent = `${number2}`
                    break;
                case '7':
                    number2 += '7';
                    display.textContent = `${number2}`
                    break;
                case '8':
                    number2 += '8';
                    display.textContent = `${number2}`
                    break;
                case '9':
                    number2 += '9';
                    display.textContent = `${number2}`
                    break;
                }
                console.log('works');
            } else {

            }
        });
    });
parentElement.appendChild(display);