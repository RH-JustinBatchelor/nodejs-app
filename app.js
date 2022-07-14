var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hello from Node.js Starter Application");
});


server.listen(8080, () => {
    console.log(`App started on PORT 3000`);
});