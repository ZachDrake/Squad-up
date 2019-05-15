const express = require('express'),
    app = express(),
    path = require('path');

app.get("/hello", (req, res) => {

    res.send("hello");
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
})








app.listen(3001);

