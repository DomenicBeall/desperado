module.exports = (app) => {

    app.post('/api/createChallenge', (req, res) => {
        // This needs access to the user ID, which should perhaps be sent in the request body
    });

    app.get('/api/challenge/:id', (req, res) => {
        // This will just return a json object of the challenge
    });

    app.delete('/api/challenge/:id', (req, res) => {
        // This will need to authenticate the user and then check if the correct user is trying to delete it
    });

    app.post('/api/modifyChallenge', (req, res) => {
        // This isn't really a top priority, but if possible the app should allow a challenge to be modified
        // The user must be the same as the user that created the challenge initially
    });

    app.get('/api/getAll', (req, res) => {
        // This will take in several possible parameters in the body and then return the appropriate list of challenges
    });

}