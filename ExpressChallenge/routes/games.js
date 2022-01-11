const router = require("express").Router();

// Import in the game models
const { Game } = require("../persistence/models/game.js");

router.get("/test", (req, res, next) => {
    res.status(201).send("Test path successful");
});

// Post a game to the database from the body
router.post("/add", (req, res, next) => {
    console.log(req.body);
    const game = new Game(req.body);
    game.save()
        .then((result) => {
            res.status(201).send(
                `${result.title} has been added to the database...`
            );
        })
        .catch((error) => {
            const err = new Error(error.message);
            next(err);
        });
});

// Return one game from the database
router.get("/get/:id", (req, res, next) => {
    Game.findById(req.params.id, (error, game) => {
        res.status(200).send(game);
    });
});

// Return JSON object of all games
router.get("/getAll", (req, res, next) => {
    Game.find((error, games) => res.status(200).send(games));
});

// Update a game in the database
router.put("/update/:id", (req, res, next) => {
    // res.status(200).send(`${req.params.id} has been updated`);
    Game.findByIdAndUpdate(
        "61dd51f9d1f94c4ea06440c2",
        { title: req.body.title },
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(`Game has been updated...`);
            }
        }
    );
});

// Delete a game from the database
router.delete("/delete/:id", (req, res, next) => {
    Game.findByIdAndDelete(req.params.id, (error) => {
        res.status(204).end();
    });
});

module.exports = router;
