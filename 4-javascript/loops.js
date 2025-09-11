// In JavaScript, loops are used to repeat a block of code multiple times. 
// This is useful for iterating over arrays, objects, or executing the same code for a specific number of times.

// Let's start with an array that we will use for our loop examples.
let arr1 = [1, 2, 3, 4, 5];

// The traditional 'for' loop is the most common type of loop.
// It has three parts: initialization, condition, and increment.
// 1. Initialization: 'let i = 0' - This is where the loop starts. We declare a variable 'i' and set it to 0.
// 2. Condition: 'i < arr1.length' - The loop will continue to run as long as this condition is true.
// 3. Increment: 'i++' - This increases the value of 'i' by 1 after each iteration.
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// The 'for...of' loop is a more modern and cleaner way to iterate over arrays.
// It directly gives you the value of each element in the array.
// 'i' here is not an index, but the actual value from the array (e.g., 1, 2, 3, etc.).
// for (let i of arr1) {
//   console.log(i);
// }

// The 'for...in' loop is used to iterate over the properties of an object.
// When used with an array, it gives you the 'index' of each element as a string.
// It's generally not recommended to use 'for...in' to iterate over arrays because it can be slower and have unexpected behavior.
// for (let i in arr1) {
//   console.log(arr1[i]);
// }

// Now let's see how to iterate over an object.
// Objects store data in key-value pairs.
let person = {
  name: "vikas",
  age: 25,
  isEmployed: true,
};

// The 'for...in' loop is the standard way to iterate over the keys of an object.
// 'key' will be "name", "age", and "isEmployed" in each iteration.
// for (let key in person) {

//   console.log(key + ": " + person[key]);
// }