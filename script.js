const buttons = document.querySelectorAll('button');
const display = document.createElement('p');
display.style.cssText = "color: black;"
const parentElement = document.querySelector('#inputOutput');
//values in order to successfully run the equation
let number1 = null;
let number2 = null;
let operator = null;
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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator == null) {
            switch (button.id) {
                case 'zero':
                    number1 = 0;
                    display.textContent = `${number1}`
                    break;
                case '1':
                    number1 = 1;
                    display.textContent = `${number1}`
                    break;
                case '2':
                    number1 = 2;
                    display.textContent = `${number1}`
                    break;
                case '3':
                    number1 = 3;
                    display.textContent = `${number1}`
                    break;
                case '4':
                    number1 = 4;
                    display.textContent = `${number1}`
                    break;
                case '5':
                    number1 = 5;
                    display.textContent = `${number1}`
                    break;
                case '6':
                    number1 = 6;
                    display.textContent = `${number1}`
                    break;
                case '7':
                    number1 = 7;
                    display.textContent = `${number1}`
                    break;
                case '8':
                    number1 = 8;
                    display.textContent = `${number1}`
                    break;
                case '9':
                    number1 = 9;
                    display.textContent = `${number1}`
                    break;
                }
            } else if (number2 == null) {
                switch (button.id) {
                    case 'plus':
                        operator = add;
                        break;
                    case 'minus':
                        operator = subtract;
                        break;
                    case 'multiply':
                        operator = multiply;
                        break;
                    
                }

            } else if (operator != null) {
                switch (button.id) {
                    case 'zero':
                    number2 = 0;
                    display.textContent = `${number2}`
                    break;
                case '1':
                    number2 = 1;
                    display.textContent = `${number2}`
                    break;
                case '2':
                    number2 = 2;
                    display.textContent = `${number2}`
                    break;
                case '3':
                    number2 = 3;
                    display.textContent = `${number2}`
                    break;
                case '4':
                    number2 = 4;
                    display.textContent = `${number2}`
                    break;
                case '5':
                    number2 = 5;
                    display.textContent = `${number2}`
                    break;
                case '6':
                    number2 = 6;
                    display.textContent = `${number2}`
                    break;
                case '7':
                    number2 = 7;
                    display.textContent = `${number2}`
                    break;
                case '8':
                    number2 = 8;
                    display.textContent = `${number2}`
                    break;
                case '9':
                    number2 = 9;
                    display.textContent = `${number2}`
                    break;
                }
                console.log('works');
            } else {
                //start doing the equation, which I am going to do tomrw
            }
        });
    });
parentElement.appendChild(display);