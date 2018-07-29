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
    vehicleOfInterest: "Civic"
  },
  {
    id: "stan-lee",
    firstName: "stan",
    lastName: "lee",
    email: "stan@lee.com",
    phoneNumber: "3453845678",
    vehicleOfInterest: "Accord"
  },
  {
    id: "kenny-smith",
    firstName: "kenny",
    lastName: "smith",
    email: "ken@smith.com",
    phoneNumber: "3457886678",
    vehicleOfInterest: "HRV"
  },
  {
    id: "jen-hernandez",
    firstName: "jen",
    lastName: "hernandez",
    email: "jhernandez@gmail.com",
    phoneNumber: "3464234345",
    vehicleOfInterest: "CRV"
  },
  {
    id: "mina-pui",
    firstName: "mina",
    lastName: "pui",
    email: "mp@mgail.com",
    phoneNumber: "2338765545",
    vehicleOfInterest: "Pilot"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = customers.findIndex(a => a.id == course.id);
          customers.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          customers.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = customers.findIndex(course => {
          course.id == courseId;
        });
        customers.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;