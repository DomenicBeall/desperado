const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    // Get the JWT out of the cookies
    const authToken = req.cookies.token;

    if (authToken) {
        jwt.verify(authToken, process.env.JWT_KEY, (err, payload) => {
            if (err) res.status(401).end();
    
            req.user = payload;
    
            next();
        });    
    } else {
        res.status(401).end();
    }
}