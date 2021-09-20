const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Vehicle = require('../../models/vehicle');

db.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Vehicle.bulkCreate([
      { make: '1st', model: 'also 1st' },
      { make: '2nt', model: 'also 2st' }
    ]).then(function() {
      return Vehicle.findAll();
    }).then(function(vehicles) {
      console.log(vehicles);
    });
  });


router.get('/', (req, res) => {
  res.json({test: 'hello'})
});

module.exports = router;
