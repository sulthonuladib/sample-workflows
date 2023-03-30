const { Router } = require('express');

const helloRouter = Router();

helloRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello',
  });
});

module.exports = helloRouter;
