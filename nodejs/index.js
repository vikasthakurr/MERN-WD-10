// const figlet = require('figlet');
import figlet from "figlet";

figlet("Hello weekdays 10", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
