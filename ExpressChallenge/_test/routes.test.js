// Importing chai
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { Game } = require("../persistence/models/game.js");
const server = require("../index.js");

// Using chai, use the chai-http module
// (rather than a different framework)
chai.use(chaiHttp);

// Test get test route
describe("Test the get route", function () {
    const testGame = {
        title: "Halo Infinite",
        price: 29.99,
        developer: "343",
        publisher: "Microsoft",
        releaseYear: 2021,
        category: [
            {
                nameOfCategory: "FPS",
                isCool: true,
            },
        ],
        platform: ["Xbox", "PC"],
    };

    let testId = null;

    before(function () {
        const game = new Game({
            title: "Test Gamee",
            price: 1.99,
            developer: "Bungie",
        });
        game.save();
        Game.findOne({ title: "Test Gamee" }, function (err, obj) {
            console.log(obj._id);
        });
    });

    // Test Get Route
    // it("should respond with 201 and 'Test path successful'", function (done) {
    //     // Arrange
    //     chai.request(server)
    //         .get("/games/test")
    //         .end((err, res) => {
    //             if (err) {
    //                 console.log("Error occured");
    //                 done(err);
    //             }
    //             expect(err).to.be.null;
    //             expect(res).to.have.status(201);
    //             expect(res).to.have.property("text", "Test path successful");
    //             done();
    //         });

    //     // Act

    //     // Assert
    // });

    // Test post route
    // it("should post to db and return <name> added to the database...", function (done) {
    //     chai.request(server)
    //         .post("/games/add")
    //         .send(testGame)
    //         .end((err, res) => {
    //             if (err) {
    //                 console.log("Error occured: ", err);
    //                 done(err);
    //             }
    //             expect(res).to.not.be.null;
    //             expect(res).to.have.status(201);
    //             expect(res).to.have.property(
    //                 "text",
    //                 `${testGame.title} has been added to the database...`
    //             );
    //             done();
    //         });
    // });

    // Test Get All Route
    // it("should return all games in the database", function (done) {
    //     chai.request(server)
    //         .get("/games/getAll")
    //         .end((err, res) => {
    //             if (err) {
    //                 console.log("Error occured: ", err);
    //                 done(err);
    //             }

    //             const resBody = res.body;
    //             expect(resBody).to.not.be.null;
    //             expect(res).to.have.status(200);

    //             resBody.map((item) => {
    //                 expect(item).to.be.a("Object");
    //                 expect(item).to.contain.keys("title");
    //                 expect(item).to.contain.keys("price");
    //                 expect(item).to.contain.keys("developer");
    //                 expect(item).to.contain.keys("publisher");
    //                 expect(item).to.contain.keys("releaseYear");
    //                 expect(item).to.contain.keys("category");
    //                 expect(item).to.contain.keys("platform");
    //             });

    //             done();
    //         });
    // });

    // Test the delete route
    it("should delete a game from the database", function (done) {
        chai.request(server)
            .delete(`/games/delete/`)
            .end((err, res) => {
                if (err) {
                    console.log("Error occured: ", err);
                    done(err);
                }
                expect(res).to.not.be.null;
                expect(res).to.have.status(204);
                done();
            });
    });

    // Test update of a game
    // it("should update a game in the database", function (done) {
    //     chai.request(server)
    //         .put("/games/update/61dd51f9d1f94c4ea06440c2")
    //         .send({ title: "Name Changed" })
    //         .end((err, res) => {
    //             if (err) {
    //                 console.log("Error occured: ", err);
    //                 done(err);
    //             }
    //             expect(res).to.not.be.null;
    //             expect(res).to.have.property("status", 200);
    //             expect(res).to.have.property(
    //                 "text",
    //                 "Game has been updated..."
    //             );
    //             done();
    //         });
    // });
});
