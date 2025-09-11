// Creating an object using the Object constructor (commented out example)
// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person);

// Creating an object using object literal syntax (commented out example)
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// Assigning one object to another variable creates a reference, not a copy
// let person1 = person;

// Shallow copy using spread operator (copies top-level properties only)
// let person1 = { ...person }
// person1.age = 51;
// console.log(person1);
// console.log(person);

// Creating a nested object with another object as a property
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   address: {
//     street: "123 main st",
//     city: "New York",
//     state: "NY",
//   },
// };

// Shallow copy using spread operator (does NOT deeply copy nested objects)
// let person1 = { ...person };
// person1.eyeColor = "green";

// Deep copy using structuredClone (copies all nested objects/arrays)
// let person1 = structuredClone(person); // method1

// Deep copy using JSON methods (works if object contains only serializable data)
// let person1 = JSON.stringify(person); // method2: converts object to JSON string
// console.log(person1); // Outputs the JSON string representation of the object
// console.log(typeof person1); // Outputs 'string'

// If you want to get the object back, use JSON.parse
// let person1 = JSON.parse(JSON.stringify(person));

// Changing a nested property after deep copy (uncomment to test)
// person1.address.city = "Los Angeles";
// console.log(person1);
// console.log(person);

// Primitive types (like strings) are copied by value, not by reference
// let name = "vikas";

// let name2 = name; // name2 is a copy of name
// name2 = "kumar"; // changing name2 does not affect name
// console.log(name2); // Outputs: kumar
// console.log(name);  // Outputs: vikas

/*
  NOTES:
  - Objects are assigned by reference, so changes to one affect the other unless you copy.
  - Spread operator {...obj} creates a shallow copy (nested objects are still shared).
  - structuredClone() and JSON methods can create deep copies, but JSON methods only work for serializable data (no functions, undefined, etc).
  - Primitives (string, number, boolean, etc) are always copied by value.
*/

let response = {
  status: 300,
  data: {
    name: "vikas",
    age: 30,
    isEmployed: true,
    address: {
      street: "123 main st",
      city: "New York",
      state: "NY",
    },
  },
};

// let { status } = response;
// console.log(status);

let {
  data: { name },
} = response;
// console.log(name);

//practice

let response1 = {
  status: 300,
  header: {
    type: "json",
    version: 1.1,
  },
  body: {
    name: "vikas",
    age: 30,
    isEmployed: true,
    address: {
      street: "123 main st",
      city: "New York",
      state: "NY",
    },
    footer: {
      type: "json",
      version: 1.1,
    },
  },
};

// function sum(a, b) {
//   return a + b;
// }

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

let res = sum(2, 4, 5, 6, 7, 8, 9, 6, 7, 8, 4, 4, 788);
console.log(res);
