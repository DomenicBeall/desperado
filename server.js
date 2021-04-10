const cookieParser = require('cookie-parser');
const express = require('express');
const userRoutes = require('./routes/user-routes.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

userRoutes(app);

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
})