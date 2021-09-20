const faker = require('faker');
const Vehicle = require('../models/vehicle');

const seedVehicles = () => {
  Vehicle.findAll({
    where: {
      id: 1
    }
  })
  .then((vehicles) => {
    if(!vehicles[0]) {
      for (let i = 0; i < 10; i++) {
        Vehicle.create({make: faker.vehicle.manufacturer(), model: faker.vehicle.model()});
      };
    }
  });
};

module.exports = seedVehicles;
