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
    if (a < 1) {
        return;
    }
    var prev = 0;
    var ans = 0;
    for (let i = 0; i < a; i++) {
        ans += prev;
        prev = ans;
    }
    return ans;
}


module.exports = {
    sum,
    subtract,
    divide,
    fibonacci,
};