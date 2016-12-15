const userRouter = require('express').Router()
const { createUser,
        authenticate,
        incrementTotalWorkouts 
      } = require('../models/user.js')

userRouter.route('/signup')
  .post(createUser, (req, res, next) => res.json(res.signupResult));

userRouter.route('/login')
  .post(authenticate, (req, res, next) => res.json(res.loginResult));

userRouter.route('/count')
  .put(incrementTotalWorkouts, (req, res, next) => res.json({message: 'workouts incremented'}))

module.exports = userRouter;
