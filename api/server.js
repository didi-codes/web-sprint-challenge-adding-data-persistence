const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./project/router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('api/project', projectRouter);

server.get('*', (req, res) => {
  res.status(200).json({
    message: 'Welcome To Lambda Projects API',
  });
});

module.exports = server;
