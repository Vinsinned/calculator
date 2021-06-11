//work on rounding and design and DONE after almost a week!
const buttons = document.querySelectorAll('button');
const operands = document.querySelectorAll('.operator');
const startEquation = document.querySelector('#start');
const display = document.createElement('p');
const clearNum = document.querySelector('#clear');
const backspace = document.querySelector('#back');
const parentElement = document.querySelector('#inputOutput');
const dot = document.querySelector('#decimal');
display.style.cssText = "color: black;"
//values in order to successfully run the equation
let answer = null;
let number1 = '';
let number2 = '';
let operator = null;
let confirmNumber = false;
let numb1 = '';
let numb2 = '';
//basic operations for the calculator
function add(num1, num2) {
    return round((num1 + num2));
}
function subtract(num1, num2) {
    return round((num1 - num2));
}
function multiply(num1, num2) {
    return round((num1 * num2));
}
function divide(num1, num2) {
    return round((num1 / num2));
}
function round(answer) {
    return +(Math.round(answer + "e+2")  + "e-2");
}
function operate() {
    //turns the strings into integers
    numb1 = parseFloat(number1);
    numb2 = parseFloat(number2);
    if (operator != null && number1 != '' && number2 != '') {
        switch (operator) {
            //checks operator value and runs respective equation, turns number1 into the answer and the rest back to empty
            case 'addition':
                answer = add(numb1, numb2);
                number1 = answer;
                number2 = '';
                 //operator is turned into null so that the operand function can keep working!
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
                if (number1 == 0 && number2 == 0) {
                    alert("You can't do that!")
                } else {
                    answer = divide(numb1, numb2);
                    number1 = answer.toFixed(2);
                    number2 = '';
                    operator = null;
                    display.textContent = `${answer}`
                    break;
                }
        }
    }
}

clearNum.addEventListener('click', () => {
    answer = null;
    number1 = '';
    number2 = '';
    operator = null;
    confirmNumber = false;
    numb1 = '';
    numb2 = '';
    display.textContent = `${number1} ${number2}`
})
backspace.addEventListener('click', () => {
    if (operator == null) {
        number1 = number1.substring(0, number1.length -1);
        display.textContent = `${number1}`
    } else if (confirmNumber == true) {
        number2 = number2.substring(0, number2.length - 1);
        display.textContent = `${number2}`
    }
});

startEquation.addEventListener('click', () => {
    //when clicked, operate function is called back and since it is ran before this function, it works
    operate();
});

operands.forEach((button) => {
    button.addEventListener('click',() => {
        //if operator is already defined, call back operate() and it will turn the operator back to null!
        if (operator != null) {
            operate();
        } else {
            // sets operator value and also makes confirmNumber true to set number2 and not number1
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
        }
        
    });
});

dot.addEventListener('click', () => {
    if(operator == null) {
        if (number1.includes('.')) {
            alert('the value already contains a dot!');
        } else if (number1 != '') {
            number1 += '.';
            display.textContent = `${number1}`
        }
    } else if (confirmNumber != false) {
        if (number2.includes('.')) {
            alert('the value already contains a dot!');
        } else if (number2 != '') {
            number2 += '.';
            display.textContent = `${number2}`
        }
    }
})

buttons.forEach((button) => {
    //adds value to number1 and number2
    button.addEventListener('click', () => {
        //if operator is not pressed yet, define number1
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
            // else if confirm is false from the operands function, sets number2
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
            }
        });
    });

display.textContent = `${number1}`
parentElement.appendChild(display);