import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const vehicles = [
  {
    id: 'civic',
    miles: '10000',
    color: 'White',
    model: 'Civic',
    year: 2017
  },
  {
    id: 'crv',
    miles: '20000',
    color: 'Black',
    model: 'CRV',
    year: 2018
  },
  {
    id: 'accord',
    miles: '2000',
    color: 'Silver',
    model: 'Accord',
    year: 2010
  },
  {
    id: 'pilot',
    miles: '30000',
    color: 'Green',
    model: 'Pilot',
    year: 2016
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (vehicle) => {
  return vehicle.model.toLowerCase();
};

class VehicleApi {
  static getAllVehicles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], vehicles));
      }, delay);
    });
  }

  static saveVehicle(vehicle) {
	vehicle = Object.assign({}, vehicle); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVehicleMileage = 1000;
        if (vehicle.miles.length < minVehicleMileage) {
          reject(`Mileage must be at least ${minVehicleMileage} characters.`);
        }

        if (vehicle.id) {
          const existingVehicleIndex = vehicles.findIndex(a => a.id == vehicle.id);
            vehicles.splice(existingVehicleIndex, 1, vehicle);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new vehicles in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          vehicle.id = generateId(vehicle);
          vehicles.push(vehicle);
        }

        resolve(vehicle);
      }, delay);
    });
  }

  static deleteVehicle(vehicleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVehicleToDelete = vehicles.findIndex(vehicle => {
          vehicle.id == vehicleId;
        });
        vehicles.splice(indexOfVehicleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VehicleApi;