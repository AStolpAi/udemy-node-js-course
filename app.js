//Core Node Modules
const http = require('http');

//Third Party
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("anthony");
    next();
});

app.use((req, res, next) => {
    console.log("I am the next middleware function");
})

const server = http.createServer(app);

server.listen(3000);