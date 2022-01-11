const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    nameOfCategory: String,
    isCool: Boolean,
});

// --------- Game Schema --------- //
const gameSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
        min: [1, "Price is too low"],
        max: [100, "Price is too high"],
    },
    developer: {
        type: String,
        required: true,
    },
    publisher: String,
    releaseYear: Number,
    category: [categorySchema],
    platform: [String],
});

// Creating the new game model
const Game = model("Game", gameSchema);
module.exports = { Game: Game };
