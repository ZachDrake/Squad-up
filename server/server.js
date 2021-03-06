require("dotenv").config();
const path = require('path'); 
const express = require('express'),
    app = express(),
    logger = require('morgan')

require('./connection');


let PORT = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cookie-parser')(process.env.SECRET));


app.use(express.static('public'));

app.use(require('./routes'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', '../public/index.html'));
});


app.listen(PORT, function () {
    console.log(`App running on port ${PORT}...`);
});

