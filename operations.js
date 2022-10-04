function sum(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function divide(a, b)
{
    return a / b;
}

function fibonacci(a)
{
    if (a <= 2) {
        if (a == 2) {
            return 1;
        } else if (a == 1) {
            return 0;
        } else {
            return a;
        }
    }
    return fibonacci(a - 1) + fibonacci(a - 2);
}


module.exports = {
    sum,
    subtract,
    divide,
    fibonacci,
};