// function sum(a, b, callback) {
//   let res = a + b;
//   callback(res);
// }

// function printValue(res) {
//   console.log(res);
// }

// sum(10, 20, printValue);

function makeMaggi(raw, cb) {
  console.log("we are going to make maggi");
  cb();
}
function boilWater(cb) {
  console.log("boiling the water");
  cb();
}
function finalStep(cb) {
  console.log("adding masala into maggi");
  cb();
}
makeMaggi("raw", function () {
  boilWater(function () {
    finalStep(function () {
      console.log("maggi is ready");
    });
  });
});
