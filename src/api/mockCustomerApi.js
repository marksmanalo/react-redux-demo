import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: "al-romero",
    firstName: "al",
    lastName: "romero",
    email: "al.romero@gmail.com",
    phoneNumber: "4561239874",
    vehicleId: "civic"
  },
  {
    id: "stan-lee",
    firstName: "stan",
    lastName: "lee",
    email: "stan@lee.com",
    phoneNumber: "3453845678",
    vehicleId: "accord"    
  },
  {
    id: "kenny-smith",
    firstName: "kenny",
    lastName: "smith",
    email: "ken@smith.com",
    phoneNumber: "3457886678",
    vehicleId: ""
  },
  {
    id: "jen-hernandez",
    firstName: "jen",
    lastName: "hernandez",
    email: "jhernandez@gmail.com",
    phoneNumber: "3464234345",
    vehicleId: ""    
  },
  {
    id: "mina-pui",
    firstName: "mina",
    lastName: "pui",
    email: "mp@mgail.com",
    phoneNumber: "2338765545",
    vehicleId: "crv"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) => {
  return customer.firstName.toLowerCase() + '-' + customer.lastName.toLowerCase();
};

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const phoneNumberLength = 10;
        if (customer.phoneNumber.length < phoneNumberLength || customer.phoneNumber.length > phoneNumberLength) {
          reject(`Phone Number must be ${phoneNumberLength} characters.`);
        }

        if (customer.id) {
          const existingCustomerIndex = customers.findIndex(a => a.id == customer.id);
          customers.splice(existingCustomerIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer);
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCustomerToDelete = customers.findIndex(customer => {
          customer.id == customerId;
        });
        customers.splice(indexOfCustomerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CustomerApi;