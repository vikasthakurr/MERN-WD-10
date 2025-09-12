// function mailSender(to, sub, body) {
//   console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
// }
// mailSender("abc@gmail.com", "hello");

//currying approach...

function mailSender(to) {
  return function (sub) {
    return function (body) {
      console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
    };
  };
}
mailSender("abc@gmail.com")("sub")("hi");
