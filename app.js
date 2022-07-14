var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("Hello from Node.js Starter Application");
});
