const express = require('express');
const app = express();
const port = 3000;

const initdb = require('./db/initdb');

initdb();

app.use('/', require('./router'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
