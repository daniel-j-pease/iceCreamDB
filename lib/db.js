const pg = require('pg-promise')({});

const pgConfig = {  host:     process.env.PG_HOST,
                    port:     process.env.PG_PORT,
                    database: process.env.PG_DATABASE,
                    user:     process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

const db = pg(`postgres://ijukyzyypyyqgf:320fb032a68c40e9721e5923d868d5b599397a123f08572c9a6a04185a26822b@ec2-54-243-185-132.compute-1.amazonaws.com:5432/dc16cjsjbr7sqo`);

module.exports = db;
