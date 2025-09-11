// let arr = [1, 2, 3, 4, 5];

// arr.map((Element) => {
//   console.log(Element * 2);
// });

// arr.forEach((Element) => {
//   console.log(Element);
// });

let salary2 = [600, 700, 800, 900, 1000];

function calculateTenPercent(num) {
  return num * 0.1;
}

function calculateTwentyPercent(num) {
  return num * 0.2;
}

Array.prototype.calculateTax = function (calculateFn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(calculateFn(this[i]));
  }
  return res;
};
// let finalOutput = calculateTax(salary2, calculateTwentyPercent);
// let finalOutput2 = calculateTax(salary2, calculateTwentyPercent);
// console.log(finalOutput);
let salary = [100, 200, 300, 400, 500];

console.log(salary.calculateTax(calculateTwentyPercent));
