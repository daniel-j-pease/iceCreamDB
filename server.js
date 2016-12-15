'use strict'
if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/user.js');
app.use('/api', apiRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {console.log('free hugs at port', PORT)});
