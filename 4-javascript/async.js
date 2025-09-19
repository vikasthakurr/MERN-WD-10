// const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
// // console.log(response);
// response
//   .then((res) => {
//     const data = res.json();
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("promises completed");
//   });

// const p1 = Promise.reject("404 not found");
// p1.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

//promises method...
// const p1 = Promise.reject("404 not found");
// const p2 = Promise.resolve("success");
// const P3 = Promise.reject("success 2");

// Promise.any([p1, p2, P3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getData() {
  try {
    const res = await fetch("https://api.github.com/users/vikasthakurr");

    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
