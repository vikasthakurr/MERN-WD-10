// const figlet = require('figlet');
// import figlet from "figlet";

// figlet("Hello weekdays 10", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

function sayHi(name) {
  return `Hi, ${name}`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//named export

// export { sayHi, add, subtract, multiply, divide };
//default export
export default { sayHi, add, subtract, multiply, divide };
