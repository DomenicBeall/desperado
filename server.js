const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');

// Require in routes
const userRoutes = require('./routes/user-routes.js');
const apiRoutes = require('./routes/api-routes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/desperado", { useNewUrlParser: true });

userRoutes(app);
apiRoutes(app);

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});