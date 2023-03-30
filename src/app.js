const express = require('express');
const helloRouter = require('./routes/hello.routes');

const app = express();

app.use('/hello', helloRouter);
module.exports = app;
