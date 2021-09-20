const express = require('express');
const app = express();
const port = 3000;

const db = require('./config/database');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/api/vehicles', require('./routes/api/vehicles'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
