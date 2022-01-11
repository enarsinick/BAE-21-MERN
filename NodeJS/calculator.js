const add = (x, y) => x + y;
const minus = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;
const pow = (x, y) => Math.pow(x, y);
const oddEven = (x) => (x % 2) == 0 ? "Even" : "Odd";

module.exports = {add, minus, divide, multiply, pow, oddEven};