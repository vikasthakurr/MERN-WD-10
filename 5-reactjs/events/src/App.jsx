// Import the React library to use React features like components.
import React from "react";
// Import the useState hook from React to manage state in functional components.
import { useState } from "react";

// Define a functional component named App.
const App = () => {
  // Use the useState hook to create a state variable 'count' and a function 'setCount' to update it.
  // The initial value of 'count' is 0.
  const [count, setCount] = useState(0);

  // This function is called when the "Increment" button is clicked.
  function increment() {
    // 'setCount' is used to update the 'count' state.
    // React re-renders the component when the state changes.
    setCount(count + 1);
    // IMPORTANT: State updates in React are asynchronous.
    // This console.log will show the 'count' value from the *previous* render, not the updated one.
    console.log(count);
  }

  // This is a simple event handler function that could be used with a button.
  // function handleClick() {
  //   console.log("Button clicked");
  // }

  // This is the traditional JavaScript way to handle events, which is not how we do it in React.
  // In React, we use JSX event handlers like 'onClick' directly on the elements.
  // let btn = document.getElementById("btn");
  // btn.addEventListener("click", () => {
  //   console.log("Button clicked");
  // });

  // The component returns JSX, which describes the UI.
  return (
    <div>
      {/* 
      This is how you would attach an event handler in React.
      The 'onClick' attribute is set to the function you want to execute.
      <button onClick={handleClick}>Click me</button> 
      This is a standard HTML button for comparison with the traditional JS approach above.
      <button id="btn">click me</button> 
      */}

      {/* Display the current value of the 'count' state variable. */}
      <p>value of a : {count}</p>
      
      {/* 
      This button has an 'onClick' event handler that calls the 'increment' function.
      When clicked, it will update the state and cause the component to re-render.
      */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// What are Event Handlers in React?
//
// Event handlers are functions that are triggered in response to user actions like clicks, key presses, mouse movements, etc.
// In React, handling events is very similar to handling events on DOM elements, but with a few syntax differences:
//
// 1. Naming Convention: React events are named using camelCase, rather than lowercase.
//    For example, the 'onclick' attribute in HTML becomes 'onClick' in React.
//
// 2. Passing Functions: With JSX, you pass a function as the event handler, rather than a string.
//    - HTML: <button onclick="increment()">Increment</button>
//    - React: <button onClick={increment}>Increment</button>
//
// 3. Preventing Default Behavior: You cannot return 'false' to prevent default behavior in React.
//    You must call 'preventDefault' explicitly. For example: `event.preventDefault()`

// Export the App component so it can be imported and used in other files (like main.jsx).
export default App;
