// 1. Require the readline-sync package
const readline = require('readline-sync');

// 2. Define the arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    // Handle division by zero
    if (num2 === 0) {
        return 'Error: Cannot divide by zero.';
    }
    return num1 / num2;
}

// 3. Get user input
const num1 = parseFloat(readline.question('Please enter your first number: '));
const num2 = parseFloat(readline.question('Please enter your second number: '));
const operation = readline.question(
    'Please enter the operation to perform (add, sub, mul, div): '
);

let result;

// 4. Perform the calculation based on the operation
switch (operation) {
    case 'add':
        result = add(num1, num2);
        break;
    case 'sub':
        result = subtract(num1, num2);
        break;
    case 'mul':
        result = multiply(num1, num2);
        break;
    case 'div':
        result = divide(num1, num2);
        break;
    default:
        result = 'Invalid operation entered.';
        break;
}

// 5. Print the result
console.log('The result is: ' + result);
