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

const updateDisplay = (displayValue) => document.getElementById("display").textContent = displayValue;

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
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 1;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "1");
                    updateDisplay(displayValue);
                }
                break;
            case "2":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 2;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "2");
                    updateDisplay(displayValue);
                }
                break;
            case "3":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 3;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "3");
                    updateDisplay(displayValue);
                }
                break;
            case "4":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 4;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "4");
                    updateDisplay(displayValue);
                }
                break;
            case "5":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 5;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "5");
                    updateDisplay(displayValue);
                }
                break;
            case "6":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 6;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "6");
                    updateDisplay(displayValue);
                }
                break;
            case "7":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 7;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "7");
                    updateDisplay(displayValue);
                }
                break;
            case "8":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 8;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "8");
                    updateDisplay(displayValue);
                }
                break;
            case "9":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
                    displayValue = 9;
                    updateDisplay(displayValue);
                } else {
                    displayValue = Number(displayValue + "9");
                    updateDisplay(displayValue);
                }
                break;
            case "0":
                if (testDisplayEmpty(displayValue) || !(testStorageEmpty(storedValue))) {
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
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    storedOperand = "/";
                }
                break;
            case "*":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "*";
                    storedValue = displayValue;
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    storedOperand = "*";
                }
                break;
            case "+":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "+";
                    storedValue = displayValue;
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
                    storedOperand = "+";
                }
                break;
            case "-":
                if (testOperandEmpty(storedOperand)) {
                    storedOperand = "-";
                    storedValue = displayValue;
                } else {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedValue = displayValue;
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

/*
for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener('click', function (e) {
        if (storedOperand !== "") {
            switch (e.target.textContent) {
                case "/":
                    storedValue = displayValue;
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "/";
                    break;
                case "*":
                    storedValue = displayValue;
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "*";
                    break;
                case "+":
                    storedValue = displayValue;
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "+";
                    break;
                case "-":
                    storedValue = displayValue;
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "-";
                    break;
                case "=":
                    storedValue = displayValue;
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "";
                    break;
            };
        } else {
            storedOperand = e.target.textContent;
            storedValue = displayValue;
        };
        if (displayValue === 0) {
            displayValue = e.target.textContent;
            updateDisplay(displayValue);
        } else {
            displayValue = displayValue.toString + e.target.textContent;
            Number(displayValue);
            updateDisplay(displayValue);
        };
        if (e.target.textContent === "C") {
            resetDisplayValue();
            resetStoredValue();
            resetStoreOperand();
            updateDisplay(displayValue);
        }
    })
};
*/

/*
for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener('click', function (e) {
        switch (e.target.textContent) {
            case "0":
                if (testIfZero(displayValue)) {
                    break;
                } else {
                    displayValue.toString() += "0";
                    updateDisplay(displayValue);
                    Number(displayValue);
                }
                break;                
            case "1":
                if (testIfZero(displayValue)) {
                    displayValue = 1;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 1;
                    updateDisplay(displayValue);
                    Number(displayValue);
                };                
                break;
            case "2":
                if (testIfZero(displayValue)) {
                    displayValue = 2;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 2;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "3":
                if (testIfZero(displayValue)) {
                    displayValue = 3;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 3;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "4":
                if (testIfZero(displayValue)) {
                    displayValue = 4;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 4;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "5":
                if (testIfZero(displayValue)) {
                    displayValue = 5;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 5;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "6":
                if (testIfZero(displayValue)) {
                    displayValue = 6;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 6;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "7":
                if (testIfZero(displayValue)) {
                    displayValue = 7;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 7;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "8":
                if (testIfZero(displayValue)) {
                    displayValue = 8;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 8;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "9":
                if (testIfZero(displayValue)) {
                    displayValue = 9;
                    updateDisplay(displayValue);
                } else {
                    storedValue = displayValue;
                    displayValue = 9;
                    updateDisplay(displayValue);
                    Number(displayValue);
                }                
                break;
            case "C":
                resetDisplayValue();
                resetStoredValue();
                resetStoreOperand();
                updateDisplay(displayValue);
                break;
            case "/":
                if (storedOperand !== "") {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "/";
                } else {
                    storedOperand = "/";
                    storedValue = displayValue;
                    document.getElementById("display").textContent = storedValue;
                    displayValue = 0;
                };
                break;
            case "*":
                if (storedOperand !== "") {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "*"
                } else {
                    storedOperand = "*";
                    storedValue = displayValue;
                    document.getElementById("display").textContent = storedValue;
                    displayValue = 0;
                };
                break;
            case "+":
                if (storedOperand !== "") {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "+";
                } else {
                    storedOperand = "+";
                    storedValue = displayValue;
                    document.getElementById("display").textContent = storedValue;
                    displayValue = 0;
                };
                break;
            case "-":
                if (storedOperand !== "") {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "-";
                } else {
                    storedOperand = "-";
                    storedValue = displayValue;
                    document.getElementById("display").textContent = storedValue;
                    displayValue = 0;
                };
                break;
            case "=":
                if (storedOperand !== "") {
                    displayValue = operate(storedOperand, storedValue, displayValue);
                    updateDisplay(displayValue);
                    storedOperand = "";
                };
        };
    });
};
*/