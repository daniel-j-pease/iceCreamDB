const pg = require('pg')
const Client = require('pg').Client;

const client = new Client(process.env.DATABASE_URL);

module.exports = client
