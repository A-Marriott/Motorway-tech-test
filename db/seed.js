const faker = require('faker');
const Vehicle = require('../models/vehicle');

const seedVehicles = () => {
  Vehicle.findOne()
  .then((vehicleCheck) => {
    if(!vehicleCheck) {
      for (let i = 0; i < 10; i++) {
        Vehicle.create({make: faker.vehicle.manufacturer(), model: faker.vehicle.model()});
      };
    }
  });
};

module.exports = seedVehicles;
