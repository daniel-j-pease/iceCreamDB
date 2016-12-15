const pg = require('pg')
const Client = require('pg').Client;

const db = new Client(process.env.DATABASE_URL);

module.exports = db
