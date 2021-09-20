const db = require('../config/database');
const seedVehicles = require('./seed');

const initdb = () => {
  db.sync().then(() => {
    seedVehicles()
  });
};

module.exports = initdb;
