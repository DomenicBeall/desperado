const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    location: {
        type: String,
        required: "Games require a location"
    }, 
    time: {
        type: Date,
        required: "Games require a time"
    },
    challenger: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Games require there to be a challenger"
    },
    responder: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;