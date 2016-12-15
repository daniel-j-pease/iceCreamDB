const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  if (req.body.signupPassword === req.body.signupConfirm) {
    db.none('INSERT INTO users (username, password, total_workouts) VALUES ($1, $2, $3);',
      [req.body.signupUsername, bcrypt.hashSync(req.body.signupPassword, salt), 0])
      .then( () => {
        res.signupResult = {signup: true}
        next()
      })
    .catch(error => console.log(error))
  } else {
    res.signupResult = {signup: false}
    next();
    return;
  }
}

function authenticate(req, res, next) {
  console.log(req.body)
  db.one('SELECT * FROM users WHERE username = $/loginUsername/;', req.body)
    .then((data) => {
      const match = bcrypt.compareSync(req.body.loginPassword, data.password);
      if (match) {
        res.loginResult = data
        next();
      } else {
        res.loginResult = {failed: "failed"}
        next();
        return
      }
    })
  .catch(error => console.log(error))
}

function incrementTotalWorkouts(req, res, next) {
  console.log(req.body)
  db.none('UPDATE users SET total_workouts = $/total_workouts/ WHERE username = $/username/;', req.body)
    .then( () => {
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
  incrementTotalWorkouts
}
