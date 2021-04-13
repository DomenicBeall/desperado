const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');

// Require in routes
const userRoutes = require('./routes/user-routes.js');
const apiRoutes = require('./routes/api-routes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(CorsMiddleWare);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/desperado", { useNewUrlParser: true });

userRoutes(app);
apiRoutes(app);


// TODO: This bit of code seems to be insecure, but I don't fully understand CORS and it's the only thing that works. More research must be done.
function CorsMiddleWare(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});