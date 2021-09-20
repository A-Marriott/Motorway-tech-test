const express = require('express');
const router = express.Router();
const getVehicle = require('../../controller/vehicles');

router.get('/', (req, res) => {
  getVehicle().then((vehicles) => res.json(vehicles));
});

module.exports = router;
