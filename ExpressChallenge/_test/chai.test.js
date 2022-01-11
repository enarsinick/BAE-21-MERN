// Importing chai
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Using chai, use the chai-http module
// (rather than a different framework)
chai.use(chaiHttp);

// describe("Basic testing process", function () {
//     it("Should return 2 when 1 + 1", function () {
//         // Arrange - declaring variables
//         let num1 = 1;
//         let num2 = 1;
//         let sum;

//         // Act - What am I testing
//         sum = num1 + num2;

//         // Assert - Uses expect from our chai
//         expect(sum).to.equal(2).to.be.a("number");
//     });
// });

// Tests for challenge
describe("basic tests for challenges", function () {
    before(function () {
        console.log("All test are about to start");
    });

    // Multiplying 5 by 4 should return 20
    it("should equal to 20", function () {
        let sum1 = 5;
        let sum2 = 4;
        let sum;

        sum = sum1 * sum2;

        expect(sum).to.equal(20).to.be.a("number");
    });

    // Should print a string saying "Hello <name>
    it("should print the string saying hello Nick", function () {
        const name = "Nick";
        const message = `Hello ${name}`;
        expect(message).to.contain(name).to.equal("Hello Nick");
    });

    // Should return the value of 1 + 2 + 3 + 4
    it("should return a sub total of numbers", function () {
        const num1 = 1;
        const num2 = 2;
        const num3 = 3;
        const num4 = 4;
        let sum;

        sum = num1 + num2 + num3 + num4;

        expect(sum).to.be.a("number").to.equal(10);
    });

    // The text "hello" should be a string
    it("should be a string", function () {
        expect("hello").to.be.a("string");
    });

    // The number 12 should not be undefined
    it("should not be undefined", function () {
        let number = 12;
        expect(number).to.not.be.undefined;
    });

    // An object should have a property of "name"
    it("should have a property of 'name'", function () {
        const example = { name: "Nick", occupation: "Software Engineer" };
        expect(example).to.have.a.property("name");
    });

    after(function () {
        console.log("All test should have been finished");
    });
});
