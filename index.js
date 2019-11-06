const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const db = require('./db');
const Team = require('./teams/model');
const logging = () => console.log(`Listening on : ${port} `);

app.listen(port, logging);
