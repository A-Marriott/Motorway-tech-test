const express = require('express');
const app = express();
const port = 3000;

const initdb = require('./db/initdb');

initdb();

app.use('/api/vehicles', require('./routes/api/vehicles'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
