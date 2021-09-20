const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/vehicle');

router.get('/', (req, res) => {
  Vehicle.findAll().then(vehicles => res.json(vehicles));
});

module.exports = router;
