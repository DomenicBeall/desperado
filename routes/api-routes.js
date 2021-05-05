const mongoose = require("mongoose");
const Authenticate = require("../middleware/authenticate.js");

const Game = require("../models/game");

module.exports = (app) => {

    app.post('/api/createChallenge', (req, res) => {

        console.log("The create challenge endpoint has been hit. Body = " + JSON.stringify(req.body));

        // This needs access to the user ID, which should perhaps be sent in the request body
        const { user, location, time } = req.body;

        Game.create({ location: location, time: time, challenger: mongoose.Types.ObjectId(user)})
            .then((game) => {
                console.log("A new game has been created!");
                res.status(201).end();
            })
            .catch((error) => {
                console.log(error);
                res.status(400).end();
            });

    });

    app.get('/api/challenge/:id', (req, res) => {
        // This will just return a json object of the challenge
    });

    app.delete('/api/challenge/:id',  Authenticate, (req, res) => {
        // This will need to authenticate the user and then check if the correct user is trying to delete it

        // TODO: Pretty simple, find the challenge with that id, if it exists, check the user ID against the id of the logged in user
        // bobs your uncle
    });

    app.post('/api/modifyChallenge/:id', Authenticate, (req, res) => {
        // This isn't really a top priority, but if possible the app should allow a challenge to be modified
        // The user must be the same as the user that created the challenge initially

        // TODO: Find a challenge by that id, check it was made by the current user, user the request body to update the challenge
    });

    app.get('/api/getAll', (req, res) => {
        // This will take in several possible parameters in the body and then return the appropriate list of challenges
    });

}