homeRouter = require('express').Router()

homeRouter.route('/')
  .get((req, res) => res.json({message: 'home!'}));

module.exports = homeRouter;
