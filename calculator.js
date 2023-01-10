let displayValue = "";

let storedValue = "";

let storedOperand = "";

const resetDisplayValue = () => displayValue = "";

const resetStoredValue = () => storedValue = "";

const resetStoreOperand = () => storedOperand = "";

const addition = (...args) => args.reduce((a, b) => Number(a) + Number(b));

const subtraction = (...args) => args.reduce((a, b) => Number(a) - Number(b));

const multiplication = (...args) => args.reduce((a, b) => Number(a) * Number(b));

const division = (...args) => args.reduce((a, b) => Number(a) / Number(b));

const operate = function(storedOperand, storedValue, displayValue) {
    let answer;
    switch (storedOperand) {
        case "+":
            answer = addition(storedValue, displayValue);
            break;
        case "-":
            answer = subtraction(storedValue, displayValue);
            break;
        case "*" :
            answer = multiplication(storedValue, displayValue);
            break;
        case "/":
            if (displayValue === 0) {
                return "DIVIDING BY ZERO?";
            } else {
                answer = division(storedValue, displayValue);
            }
    }
    return answer;
};

const updateDisplay = function(displayValue) {
    if (displayValue.toString().length > 9) {
        document.getElementById("display").textContent = (Math.round(displayValue * 10000000000) / 10000000000);
    } else {
        document.getElementById("display").textContent = displayValue;
    }
};

const testDisplayEmpty = (displayValue) => (displayValue === "") ? true : false;

const testOperandEmpty = (storedOperand) => (storedOperand === "") ? true : false;

const testStorageEmpty = (storedValue) => (storedValue === "") ? true : false;

const display = document.querySelector('#display');

const button = document.querySelector('.button');

const buttonAll = Array.from(document.querySelectorAll('button'));

for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener('click', function (e) {
        switch(e.target.textContent) {
            case "1":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 1;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "1");
                    updateDisplay(displayValue);
                }
                break;
            case "2":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 2;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "2");
                    updateDisplay(displayValue);
                }
                break;
            case "3":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 3;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "3");
                    updateDisplay(displayValue);
                }
                break;
            case "4":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 4;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "4");
                    updateDisplay(displayValue);
                }
                break;
            case "5":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 5;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "5");
                    updateDisplay(displayValue);
                }
                break;
            case "6":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 6;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "6");
                    updateDisplay(displayValue);
                }
                break;
            case "7":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 7;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "7");
                    updateDisplay(displayValue);
                }
                break;
            case "8":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 8;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "8");
                    updateDisplay(displayValue);
                }
                break;
            case "9":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 9;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "9");
                    updateDisplay(displayValue);
                }
                break;
            case "0":
                if (testDisplayEmpty(displayValue)) {
                    displayValue = 0;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "0");
                    updateDisplay(displayValue);
                }
                break;
            case "/":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "/";
                    storedValue = displayValue;
                    resetDisplayValue();
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    resetDisplayValue();
                    storedOperand = "/";
                }
                break;
            case "*":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "*";
                    storedValue = displayValue;
                    resetDisplayValue();
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    resetDisplayValue();
                    storedOperand = "*";
                }
                break;
            case "+":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "+";
                    storedValue = displayValue;
                    resetDisplayValue();
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    resetDisplayValue();
                    storedOperand = "+";
                }
                break;
            case "-":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "-";
                    storedValue = displayValue;
                    resetDisplayValue();
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    resetDisplayValue();
                    storedOperand = "-";
                }
                break;
            case "=":
                if (!testOperandEmpty(storedOperand)) {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    resetStoreOperand();
                }
                break;
            case "C":
                resetDisplayValue();
                updateDisplay("0");
                resetStoreOperand();
                resetStoredValue();
        }
    })
}