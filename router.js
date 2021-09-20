const express = require('express');
const router = express.Router();
const vehicleRouter = require('./controller/vehicles');

router.get('/api/vehicles', (req, res) => {
  vehicleRouter.getVehicle().then((vehicles) => res.json(vehicles));
});

module.exports = router;
