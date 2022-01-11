// Imports
const { greeting, greetingString } = require("./index2");
const { add, minus, divide, multiply, pow, oddEven } = require("./calculator");
const snakeNames = require("snake-names");
const oneLinerJoke = require("one-liner-joke");
var figlet = require('figlet');

// Calling greeting functions
console.log(greeting(greetingString));

// Calling calculator functions
console.log(add(20, 4));
console.log(minus(20, 4));
console.log(minus(20, 4));
console.log(divide(20, 4));
console.log(multiply(20, 4));
console.log(pow(3, 3));
console.log(oddEven(20));

// Snake Names
// snakeNames.all.forEach(snake => console.log(snake));

// One liner jokes
// setInterval(() => {
//     let joke = oneLinerJoke.getRandomJoke();
//     console.log(joke);
// }, (Math.floor((Math.random() * 5) + 1)) * 100);

// ASCI art


setInterval(() => {
    figlet('Fuck off Harry', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    }); 
}, 1500);