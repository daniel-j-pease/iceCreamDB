apiRouter = require('express').Router();
const { getAllSets,
        getCurrentSets,
        createSetsA,
        createSetsB,
        incrementSet
      } = require('../models/sets.js');

apiRouter.route('/sets')
  .get(getAllSets, (req, res, next) => res.json(res.allSets))
  .post(getCurrentSets, (req, res, next) => res.json(res.currentSets))

apiRouter.route('/sets/increment/:id')
.put(incrementSet, (req, res, next) => res.json({message: 'current set incremented'}));

apiRouter.route('/create/A')
  .post(createSetsA, (req, res, next) => res.json({message: 'A sets added'}));

apiRouter.route('/create/B')
  .post(createSetsB, (req, res, next) => res.json({message: 'B sets added'}));

module.exports = apiRouter;
