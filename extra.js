// /*
//  * -------------------------------------------------------------------------------------
//  * Definition of 'this'
//  * -------------------------------------------------------------------------------------
//  * In JavaScript, the 'this' keyword is a special identifier that is automatically
//  * defined in the scope of every function. Its value is determined by how a function
//  * is called (the "call site"). It refers to the object that is currently executing the
//  * function.
//  * -------------------------------------------------------------------------------------
//  */

// /*
//  * =====================================================================================
//  * 1. 'this' in the Global Scope
//  * =====================================================================================
//  *
//  * Definition: In the global execution context (outside of any function), 'this'
//  * refers to the global object.
//  *
//  * - In a web browser, the global object is `window`.
//  * - In a Node.js environment, `this` at the top level of a module is not the
//  *   global object. It refers to the `exports` object for the current module,
//  *   which is why `console.log(this)` at the top-level of a file shows `{}`.
//  *   The true global object in Node is named `global`.
//  */
// // console.log("Global 'this':", this); // In Node.js, this will be `{}` (module.exports)
// // In a browser, this would be the `window` object.

// /*
//  * =====================================================================================
//  * 2. 'this' in a Regular Function (Simple Call)
//  * =====================================================================================
//  *
//  * Definition: The value of 'this' inside a regular function depends on whether the
//  * code is in "strict mode" or "non-strict mode".
//  *
//  */

// // --- Non-Strict Mode ---
// // In non-strict mode, if 'this' would otherwise be `null` or `undefined`, it gets
// // substituted with the global object.
// function demoNonStrict() {
//   // In a browser, `this` would be the `window` object.
//   // In Node.js, `this` will be the `global` object.
//   console.log("'this' in non-strict function:", this);
// }
// // demoNonStrict();

// // --- Strict Mode ---
// // In strict mode, 'this' remains whatever it was set to when entering the execution
// // context. For a simple function call, it is `undefined`.
// function demoStrict() {
//   "use strict";
//   // 'this' will be `undefined` in both browser and Node.js environments.
//   console.log("'this' in strict function:", this);
// }
// // demoStrict();

// /*
//  * =====================================================================================
//  * 3. 'this' as an Object Method
//  * =====================================================================================
//  *
//  * Definition: When a function is called as a method of an object (e.g., `obj.myMethod()`),
//  * 'this' refers to the object the method was called on (the object to the left of the dot).
//  *
//  */
// const myObject = {
//   value: 42,
//   print: function() {
//     // Here, 'this' refers to `myObject`.
//     console.log("'this' in an object method:", this.value); // Logs 42
//   }
// };
// // myObject.print();

// /*
//  * =====================================================================================
//  * 4. 'this' in an Arrow Function
//  * =====================================================================================
//  *
//  * Definition: Arrow functions do not have their own 'this' binding. Instead, they
//  * "lexically" inherit 'this' from the enclosing (parent) scope at the time they
//  * are defined. The value of 'this' is not determined by how the function is called.
//  *
//  */
// const lexicalExample = {
//   name: "Lexical Scope",
//   regularMethod: function() {
//     console.log("Regular method 'this':", this.name); // 'this' is lexicalExample

//     const arrowFunc = () => {
//       // This arrow function inherits 'this' from `regularMethod`.
//       // So, 'this' here also refers to `lexicalExample`.
//       console.log("Arrow function 'this':", this.name);
//     };
//     arrowFunc();
//   },
//   arrowMethod: () => {
//       // This arrow function is defined in the global scope (or module scope in Node).
//       // It inherits 'this' from that scope.
//       // In Node, `this` is `{}`, so `this.name` is undefined.
//       // In a browser, `this` would be `window`, so `this.name` would be `window.name`.
//       console.log("Arrow method on object 'this':", this.name);
//   }
// };
// // lexicalExample.regularMethod();
// // lexicalExample.arrowMethod();

// /*
//  * =====================================================================================
//  * 5. 'this' in a Class / Constructor Function
//  * =====================================================================================
//  *
//  * Definition: When a function is used as a constructor with the `new` keyword (or
//  * within a `class`), 'this' is bound to the new object instance being created.
//  *
//  */
// class Person {
//   constructor(name, age) {
//     // Inside the constructor, 'this' refers to the new instance being created.
//     this.name = name;
//     this.age = age;
//     console.log(`'this.name' in constructor: ${this.name}`);
//   }

//   greet() {
//     // In a class method, 'this' refers to the instance the method was called on.
//     console.log(`Hello from ${this.name}`);
//   }
// }

// // When we use `new`, a new object is created and `this` inside the constructor
// // refers to that object.
// const person1 = new Person("Alice", 30);
// // person1.greet(); // 'this' inside greet() refers to person1

// const person2 = new Person("Bob", 25);
// // person2.greet(); // 'this' inside greet() refers to person2

// /*
//  * =====================================================================================
//  * Explicitly Setting 'this': .call(), .apply(), and .bind()
//  * =====================================================================================
//  *
//  * Definition: JavaScript provides methods to explicitly set the value of 'this' when
//  * calling a function.
//  *
//  * - .call(thisArg, arg1, arg2, ...): Calls the function with a given `this` value and
//  *   arguments provided individually.
//  * - .apply(thisArg, [argsArray]): Calls the function with a given `this` value and
//  *   arguments provided as an array.
//  * - .bind(thisArg): Creates a new function that, when called, has its `this` keyword
//  *   set to the provided value.
//  *
//  */
// function introduce(greeting, punctuation) {
//   console.log(`${greeting}, I am ${this.name}${punctuation}`);
// }

// const user = { name: "Charlie" };

// // Using .call()
// // introduce.call(user, "Hi", "!"); // 'this' is set to `user`. Output: Hi, I am Charlie!

// // Using .apply()
// // introduce.apply(user, ["Hello", "."]); // 'this' is set to `user`. Output: Hello, I am Charlie.

// // Using .bind()
// const introduceCharlie = introduce.bind(user);
// // introduceCharlie("Hey", "..."); // 'this' is permanently bound to `user`. Output: Hey, I am Charlie...

//call,apply,bind.....
// const person = {
//   name: "aman",
//   age: 24,
//   print: function (city, country) {
//     console.log(this.name, this.age, city, country);
//   },
// };
// // person.print();

// const person2 = {
//   name: "akash",
//   age: 19,
// };
// // person.print.call(person2, "agra", "india");
// // person.print.apply(person2, ["agra", "india"]);

// const res = person.print.bind(person2, "agra", "india");
// res();



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🌐 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
