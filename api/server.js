const express = require('express');
const server = express();
const morgan = require('morgan');
const recipesRouter = require('./recipes/recipesRouter');

const middleware = [
    express.json(),
    morgan('dev'),
]

server.use(middleware);

server.use('/recipes', recipesRouter);

server.use('/', (req, res) => {
    res.status(404).send('404 Not Found');
})

module.exports = server;