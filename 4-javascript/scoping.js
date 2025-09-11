//global scope

// let a = 10;s

// {
//   var a = 10;
// //   console.log(a);
// }
// console.log(a);

// function print() {
//   let a = 10;
// //   console.log(a);
// }
// print();
// console.log(a);

function outer() {
  let value = 10;

  function inner() {
    console.log(value);
  }
  return inner;
}
let res = outer();
console.log(res);
