const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Vehicle = require('../../models/vehicle');
const seedVehicles = require('../../config/seed');

db.sync({ force: true }).then(() => seedVehicles());

router.get('/', (req, res) => {
  Vehicle.findAll().then(vehicles => res.json(vehicles));
});

module.exports = router;
