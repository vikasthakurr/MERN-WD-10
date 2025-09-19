//this in global scope...
// console.log(this); //refer to global object
//inside browser global object is different..
//inside node global object is {}

//inside a function
//when in non strict mode - refer to window..
//when in strict mode - refer to undefined..

// function demo() {
//   console.log(this);
// }
// demo();

//this in non-strict mode (this substitution)
//this substitution--> if the value of this is undefined then it will be replaced with global object in strict mode
// "use strict";
// function demo() {
//   console.log(this);
// }
// demo();

//this is different function calling....
//by name calling...
// demo();

//window calling...
// window.demo();

//this inside a object
// const person = {
//   name: "vikas",
//   age: 25,
//   isEmployed: true,
//   print: function () {
//     console.log(this);
//   },
// };
// person.print();
