import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const sayHi = useCallback(() => {
    console.log("hii");
  }, []);

  // function sayHi2() {
  //   console.log("hii2");
  // }

  return (
    <>
      <div>
        <p>Value of Counter1: {count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>Increase1</button>
      </div>

      <br></br>
      <br></br>

      <div>
        <p>Value of Counter2: {count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>Increase2</button>
      </div>

      <br></br>
      <br></br>

      <Child count2={count2} sayHi={sayHi} />
    </>
  );
};

export default App;
