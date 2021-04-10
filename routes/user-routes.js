const jwt = require("jsonwebtoken");
const jwtExpiryTime = 86400; // The expiry time of the login cookie (in seconds), set to a default of 24 hours

const User = require("../models/user");

module.exports = (app) => {

    app.post('/api/login', (req, res) => {
        // Get the user details out of the request body
        const { email, password } = req.body;

        // Ensure that a username and password is passed correctly
        if (!email || !password) {
            return res.status(401).end();
        }

        // TODO: Some where right here it should check the username and password against the database of users... when the database exists
        User.findOne({ email: email, password: password}).then(user=> {
            if (user) {
                // The user has been found! What're the odds!

                // Create the JWT and put the user details in there
                // At the moment we're just using the whole user, but it's probably not necessary to store all of that
                const token = jwt.sign(user, process.env.JWT_KEY, {
                    algorithm: "HS256",
                    expiresIn: jwtExpiryTime,
                });
                
                // Set a cookie on the user
                res.cookie("token", token, { maxAge: jwtExpiryTime * 1000 });

                // TODO: Redirect the user to the user page
                res.send(`You successfully logged in, ${username}!`);
            } else {
                // A user with these details was not found
                return res.status(401).end();
            }
        });
    });

    app.post('/api/register', (req, res) => {

        // Get the sign up details out of the request body
        const { email, username, password, confirmPassword } = req.body;

        // TODO: Compact the next couple of checks into one if statement. At the moment it's broken up like this for readability.

        // Ensure that all of the fields are valid
        if (!email || !username || !password || !confirmPassword) {
            return res.status(401).end();   
        }

        // Ensure the password and confirmPassword are identical
        if (password !== confirmPassword) {
            return res.status(401).end();
        }

        // Check that the email address is not already in use
        User.findOne({ email: email} ).then(user=> {
            if (user) {
                return res.status(401).end();
            }
        });

        // Create a new user using the register details, then login the user
        User.create({ username: username, password: password, email: email })
            .then(user => {
                // Redirect the user to the login, with the same body
                res.redirect(307, '/api/login');
            })
            .catch(error => {
                res.status(401);
                res.json(error);
            });
    });

}