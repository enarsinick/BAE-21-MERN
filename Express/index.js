const express = require("express");
const cors = require("cors");
const app = express();

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

app.use((req, res, next) => {
    const rand = Math.floor(Math.random() * 100 + 1);
    console.log(`The random number is ${rand}`);
    next();
});

const auth = (req, res, next) => {
    if (req.query.name) {
        console.log(`user authenticated: ${req.query.name}`);
        next();
    } else {
        res.status(401).send("Access Denied").end();
    }
};

// Import routes
const myRoutes = require("./routes/myRoutes");

// Use imported routes
app.use("/routes", myRoutes);

// Routes //
//Nested middleware practice route
app.use("/nested", auth, (req, res, next) => {
    res.status(200).send("Hello there General Kenobi");
});

// app.get("/get", (req, res) => {
//     res.status(200).send(req.query.name);
// });

app.post("/post", (req, res) => {
    res.status(201).json(req.body);
});

app.put("/put/:id", (req, res) => {
    res.status(200).json(`ID is ${req.params.id} and body is ${req.body.name}`);
});

app.delete("/delete/:id", (req, res) => {
    res.status(202).send(req.params.id);
});

// Listening on server port
const server = app.listen(5015, () => {
    console.log(`Listening on port ${server.address().port}`);
});
