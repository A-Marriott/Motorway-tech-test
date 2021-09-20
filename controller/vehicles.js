const Vehicle = require('../models/vehicle');

const getVehicle = () => {
  return Vehicle.findAll();
};

module.exports = getVehicle;
