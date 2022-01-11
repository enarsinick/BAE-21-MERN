// --------- Imports --------- //
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initializing express
const app = express();

// Import Routes
const gameRoutes = require("./routes/games");
const usersRoutes = require("./routes/users");

// --------- Middleware --------- //

// Common Middleware
app.use(express.json());
app.use(cors());

// Custom Middleware
app.use((req, res, next) => {
    const date = new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    console.log(`The current date is: ${date}`);
    next();
});

// --------- Database Connection --------- //
mongoose.connect(
    "mongodb://localhost:27017/games_shop",
    { useNewUrlParser: true },
    (error) => {
        error
            ? console.log("Can't connect to DB")
            : console.log("Database connected!...");
    }
);

// --------- Routes --------- //
app.use("/games", gameRoutes);
app.use("/users", usersRoutes);

// Homepage route
app.get("/", (req, res, next) => {
    res.status(200).send("Welcome to the homepage");
});

// --------- Error Handling Middleware --------- //
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

// --------- Listen on 5015 --------- //
const server = app.listen(5015, () => {
    console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
