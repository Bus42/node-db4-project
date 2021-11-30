const express = require('express');
const server = express();
const morgan = require('morgan');
const middleware = [
    express.json(),
    morgan('dev'),
]

server.use('/', (req, res) => {
    res.status(200).send(`request from ${req.url}`);
})

module.exports = server;