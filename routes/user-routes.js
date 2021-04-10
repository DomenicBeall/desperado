const jwt = require("jsonwebtoken");
const jwtExpiryTime = 86400; // The expiry time of the login cookie (in seconds), set to a default of 24 hours

module.exports = (app) => {

    app.post('/api/login', (req, res) => {
        // Get the user details out of the request body
        const { username, password } = req.body;

        // Ensure that a username and password is passed correctly
        if (!username || !password) {
            return res.status(401).end();
        }

        // TODO: Some where right here it should check the username and password against the database of users... when the database exists

        // Create the JWT and put the user details in there
        // At the moment we're just using the username, but we might need more information later
        const token = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpiryTime,
        });
        
        // Set a cookie on the user
        res.cookie("token", token, { maxAge: jwtExpiryTime * 1000 });

        // TODO: Redirect the user to the user page
        res.end();
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

        // TODO: Check that the email address is not already in use

        // TODO: Create a new user using the register details, then login the user
    });

}