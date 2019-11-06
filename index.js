const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require('./teams/router');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const logging = () => console.log(`Listening on : ${port} `);

app.use(jsonParser);
app.use(teamRouter);

app.listen(port, logging);
