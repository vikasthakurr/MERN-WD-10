// import React from "react";
// import { useState, useMemo } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   function sum() {
//     console.log("i am a heavy task don't run me");
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       sum = sum + i;
//     }
//     return sum;
//   }
//   // const res = sum();
//   const res = useMemo(sum, []);
//   return (
//     <div>
//       <p>result of heavy computation is: {res}</p>
//       count is:{count}
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleChange}></input>
//       <p>the value u are typing: {name}</p>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useRef } from "react";

// const App = () => {
//   const ref = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`what u r typing is ${ref.current.value}`);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="enter your name" ref={ref}></input>
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

// export default App;
