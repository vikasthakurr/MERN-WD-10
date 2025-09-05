// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   };

// let person1 = person;

//shallow copy
// let person1 ={...person}
// person1.age = 51;
// console.log(person1);
// console.log(person);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  address: {
    street: "123 main st",
    city: "New York",
    state: "NY",
  },
};

// let person1 = { ...person };
// person1.eyeColor = "green";
// let person1 = structuredClone(person); //method1
let person1 = JSON.stringify(person); //method2
console.log(person1);
console.log(typeof person1);
// person1.address.city = "Los Angeles";
// console.log(person1);
// console.log(person);

let name = "vikas";

let name2 = name;
name2 = "kumar";
console.log(name2);
console.log(name);
