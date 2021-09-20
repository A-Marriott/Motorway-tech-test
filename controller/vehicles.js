const Vehicle = require('../models/vehicle');

const getVehicle = () => {
  return Vehicle.findAll();
};

exports.getVehicle = getVehicle;
