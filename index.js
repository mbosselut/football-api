const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const logging = () => console.log(`Listening on : ${port} `);

app.listen(port, logging);
