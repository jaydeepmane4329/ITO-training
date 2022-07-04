import { question } from "readline-sync";


type operator = '+' | '-' | "*" | "/";



function main(): void {
    const firstStr: string = question("Enter a first Number:\n");
    const operator: string = question('Enter operator');
    const secondStr: string = question("enter second number");

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    console.log(validInput);

    if (validInput) {
        console.log("valid Input");

        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as operator, secondNum);
        console.log(result);

    } else {
        console.log("invalid input");
    }

}

function calculate(firstNum: number, operator: operator, secondNum: number) {
    if (operator == '+') {
        return firstNum + secondNum;
    } else if (operator == '-') {
        return firstNum - secondNum;
    } else if (operator == '*') {
        return firstNum * secondNum;
    } else {
        return firstNum / secondNum;
    }
}

function isOperator(operator: string): boolean {
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


function isNumber(str: string): boolean {

    const mayBeNum = parseInt(str);
    const isNum: boolean = !isNaN(mayBeNum);
    return isNum;
}

main();
