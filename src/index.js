const express = require('express');

const helloRouter = require('./routes/hello.routes');

const app = express();

app.use('/hello', helloRouter);

app.listen(3000, () => {
    console.log(`App is running on http://localhost:3000`);
})
