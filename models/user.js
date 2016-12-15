const client = require('../lib/db.js')
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  if (req.body.signupPassword === req.body.signupConfirm) {
    client.connect()
    client.query('INSERT INTO users (username, password, total_workouts) VALUES ($1, $2, $3);',
      [req.body.signupUsername, bcrypt.hashSync(req.body.signupPassword, salt), 0])
      .then( () => {
        res.signupResult = {signup: true}
        next()
        client.end()
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
  client.connect()
  client.query('SELECT * FROM users WHERE username = $/loginUsername/;', req.body)
    .then((data) => {
      const match = bcrypt.compareSync(req.body.loginPassword, data.password);
      if (match) {
        res.loginResult = data
        next();
        client.end();
      } else {
        res.loginResult = {failed: "failed"}
        next();
        client.end();
        return
      }
    })
  .catch(error => console.log(error))
}

function incrementTotalWorkouts(req, res, next) {
  console.log(req.body)
  client.connect()
  client.query('UPDATE users SET total_workouts = $/total_workouts/ WHERE username = $/username/;', req.body)
    .then( () => {
      next();
      client.end();
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
  incrementTotalWorkouts
}
