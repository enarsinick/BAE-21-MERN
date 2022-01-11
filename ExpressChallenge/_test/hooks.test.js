describe("hooks", function () {
    before(function () {
        console.log("Run once before first test in this describe");
    });

    it("should print hello world", function () {
        console.log("Hello World");
    });

    it("should print goodbye world", function () {
        console.log("Goodbye World");
    });

    after(function () {
        console.log("Run once after first test in this describe");
    });

    beforeEach(function () {
        console.log("---------------------------------");
    });

    afterEach(function () {
        console.log("---------------------------------");
    });
});
