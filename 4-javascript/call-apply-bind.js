// Definition: The call() method calls a function with a given 'this' value and arguments provided individually.
// Use: It is used when you want to invoke a method of an object on another object. It allows you to borrow a method from one object and use it for another.
// Importance: It's crucial for controlling the 'this' context of a function, especially in scenarios like inheritance or when working with different object contexts.

// Definition: The apply() method is similar to call(), but it takes arguments as an array.
// Use: It's useful when you have an array of arguments to pass to a function, or when the number of arguments is not known beforehand.
// Importance: It provides a flexible way to pass arguments to a function, especially when dealing with dynamic argument lists.

// Definition: The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// Use: It is used to create a new function with a specific 'this' context, which can be called later. This is particularly useful in event handlers and asynchronous operations.
// Importance: It ensures that a function is always called with a specific 'this' context, preventing issues with 'this' losing its context in callbacks or event listeners.

let obj1 = {
  name: "vikas",
  age: 25,
  print: function (city, country) {
    console.log(
      `name is ${this.name} and age is ${this.age} and city is ${city} and country is ${country}`
    );
  },
};
// obj1.print();

let obj2 = {
  name: "akash",
  age: 19,
};

//call method....
// obj1.print.call(obj2, "bangalore", "india");

//apply method
// obj1.print.apply(obj2, ["bangalore", "india"]);

//bind
obj1.print.bind(obj2, "bangalore", "india")();