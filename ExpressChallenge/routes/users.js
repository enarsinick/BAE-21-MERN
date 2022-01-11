const router = require("express").Router();
const { auth } = require("../middleware/auth");

// Create a new user into the DB
router.post("/new-user", (req, res, next) => {
    res.status(201).send(
        `A new user by the name of ${req.body.name} has been created...`
    );
});

// Login with existing account
router.post("/login", (req, res, next) => {
    res.status(201).send(
        `Welcome, ${req.body.email} - you have been successfully logged in...`
    );
});

// // Update a game in the database
// router.put("/update/:id", (req, res, next) => {
//     res.status(200).send(`${req.body.name} has been updated`);
// });

// // Delete a game from the database
// router.delete("/delete/:id", (req, res, next) => {
//     res.status(202).send(`${req.body.name} has been deleted...`);
// });

// // Return one game from the database
// router.get("/:id", (req, res, next) => {
//     res.status(200).send(`You are viewing ${req.query.name}`);
// });

// // Return JSON object of all games
// router.get("/getAll", (req, res, next) => {
//     const games = [
//         {
//             name: "Halo Infinite",
//             publisher: "343",
//         },
//         {
//             name: "Call of Duty",
//             publisher: "Infinity Ward",
//         },
//     ];
//     res.status(200).send(games);
// });

module.exports = router;
