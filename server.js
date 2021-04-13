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


function CorsMiddleWare(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin); // TODO: When this is deployed, change req.headers.origin to the actual domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
}

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});