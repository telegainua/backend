const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlwares
app.use(bodyParser.json());


//Import routes
const chanelsRoute = require('./routers/chanels');

app.use('/chanels', chanelsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/chanels', (req, res) => {
    res.send('We are on Chanels');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to DB!')
});

app.listen(3000);

