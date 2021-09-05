// create Express app
const express = require('express');
const app = express();

// Express middleware
const cors = require('cors');

app.use(express.urlencoded({ extended: true })); // helps with parsing application/x-www-form-urlencoded
app.use(express.json()); // uses middleware to parse json
app.use(cors()); // for whitelisting

const productRoute = require('./routes/product.routes');
app.use('/api/', productRoute);

module.exports = app;