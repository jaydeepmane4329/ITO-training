"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter a first Number:\n");
    var operator = (0, readline_sync_1.question)('Enter operator');
    var secondStr = (0, readline_sync_1.question)("enter second number");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    console.log(validInput);
    if (validInput) {
        console.log("valid Input");
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("invalid input");
    }
}
function calculate(firstNum, operator, secondNum) {
    if (operator == '+') {
        return firstNum + secondNum;
    }
    else if (operator == '-') {
        return firstNum - secondNum;
    }
    else if (operator == '*') {
        return firstNum * secondNum;
    }
    else {
        return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var mayBeNum = parseInt(str);
    var isNum = !isNaN(mayBeNum);
    return isNum;
}
main();
