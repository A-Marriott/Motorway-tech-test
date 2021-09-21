const express = require('express');
const router = express.Router();
const vehicleRouter = require('./controller/vehicles');

router.get('/api/vehicles', (req, res, next) => {
  vehicleRouter.getVehicle()
  .then((vehicles) => res.json(vehicles))
  .catch(next)
});

module.exports = router;
