const db = require('../lib/db');

function getAllSets(req, res, next) {
  db.many('SELECT * FROM sets')
    .then(allSets => {
      res.allSets = allSets
      next();
    })
  .catch(error => console.log(error))
}

function getCurrentSets(req, res, next) {
  console.log(req.body)
  db.many('SELECT * FROM sets WHERE username = $/username/ AND wkt_date = $/wkt_date/ ORDER BY set_id ASC;',
    req.body)
    .then((currentSets) => {
      res.currentSets = currentSets
      next();
    })
  .catch(error => console.log(error))
}

function createSetsA(req, res, next) {
  console.log(req.body)
  db.none("INSERT INTO sets(ex,max,comp,weight,wkt_date,username,wkt_num) VALUES('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('P',5,0,$/P/,$/d/,$/u/,$/n/),('P',5,0,$/P/,$/d/,$/u/,$/n/),('P',5,0,$/P/,$/d/,$/u/,$/n/),('P',5,0,$/P/,$/d/,$/u/,$/n/),('P',5,0,$/P/,$/d/,$/u/,$/n/),('AR',5,0,$/AR/,$/d/,$/u/,$/n/),('AR',5,0,$/AR/,$/d/,$/u/,$/n/),('AR',5,0,$/AR/,$/d/,$/u/,$/n/),('AR',5,0,$/AR/,$/d/,$/u/,$/n/),('AR',5,0,$/AR/,$/d/,$/u/,$/n/),('B',8,0,$/B/,$/d/,$/u/,$/n/),('B',8,0,$/B/,$/d/,$/u/,$/n/),('B',8,0,$/B/,$/d/,$/u/,$/n/),('T',8,0,$/T/,$/d/,$/u/,$/n/),('T',8,0,$/T/,$/d/,$/u/,$/n/),('T',8,0,$/T/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('H',10,0,$/H/,$/d/,$/u/,$/n/),('H',10,0,$/H/,$/d/,$/u/,$/n/),('C',10,0,$/C/,$/d/,$/u/,$/n/),('C',10,0,$/C/,$/d/,$/u/,$/n/),('C',10,0,$/C/,$/d/,$/u/,$/n/);",
    req.body)
    .then( () => {
      next();
    })
  .catch(error => console.log(error));
};

function createSetsB(req, res, next) {
  db.none("INSERT INTO sets(ex,max,comp,weight,wkt_date,user_id,wkt_num) VALUES('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('S',5,0,$/S/,$/d/,$/u/,$/n/),('D',5,0,$/D/,$/d/,$/u/,$/n/),('O',5,0,$/O/,$/d/,$/u/,$/n/),('O',5,0,$/O/,$/d/,$/u/,$/n/),('O',5,0,$/O/,$/d/,$/u/,$/n/),('O',5,0,$/O/,$/d/,$/u/,$/n/),('O',5,0,$/O/,$/d/,$/u/,$/n/),('BR',5,0,$/BR/,$/d/,$/u/,$/n/),('BR',5,0,$/BR/,$/d/,$/u/,$/n/),('BR',5,0,$/BR/,$/d/,$/u/,$/n/),('BR',5,0,$/BR/,$/d/,$/u/,$/n/),('BR',5,0,$/BR/,$/d/,$/u/,$/n/),('G',8,0,$/G/,$/d/,$/u/,$/n/),('G',8,0,$/G/,$/d/,$/u/,$/n/),('G',8,0,$/G/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('I',8,0,$/I/,$/d/,$/u/,$/n/),('C',10,0,$/C/,$/d/,$/u/,$/n/),('C',10,0,$/C/,$/d/,$/u/,$/n/);",
    req.body)
    .then( () => {
      next();
    })
  .catch(error => console.log(error));
};

function incrementSet(req, res, next) {
  console.log(req.params)
  db.none("UPDATE sets SET comp = sets.comp + 1 WHERE set_id = $1;",
    [req.params.id])
    .then( () => {
      next();
    })
  .catch(error => console.log(error));
};

module.exports = {
  getAllSets,
  getCurrentSets,
  createSetsA,
  createSetsB,
  incrementSet,
}
