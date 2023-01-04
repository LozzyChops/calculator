const addition = (...args) => args.reduce((a, b) => a + b);

const subtraction = (...args) => args.reduce((a, b) => a - b);

const multiplication = (...args) => args.reduce((a, b) => a * b);

const division = (...args) => args.reduce((a, b) => a / b);

const operate = function(operator, a, b) {
    if (operator === "+") {
        return addition(a, b);
    } else if (operator === "-") {
        return subtraction(a, b);
    } else if (operator === "*") {
        return multiplication(a, b);
    } else {
        return division(a, b);
    }
};