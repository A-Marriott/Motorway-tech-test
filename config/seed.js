const faker = require('faker');
const Vehicle = require('../models/vehicle');

const seedVehicles = () => {
  for (let i = 0; i < 10; i++) {
    Vehicle.create({make: faker.vehicle.manufacturer(), model: faker.vehicle.model()});
  };
};

module.exports = seedVehicles;
