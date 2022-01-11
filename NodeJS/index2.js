
const greeting = "Hello World!";

const printGreeting = (greeting) => {
    console.log(`${greeting} i've been exported`);
}

module.exports.greetingString = greeting;
module.exports.greeting = printGreeting;