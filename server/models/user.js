const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Users require a username"
    }, 
    password: {
        type: String,
        trim: true,
        required: "Users require a password",
        validate: [({length}) => length >= 6, "Passwords must be greater than 6 characters in length."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;