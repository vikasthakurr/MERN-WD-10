import React from "react";
import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function sum() {
    console.log("i am a heavy task don't run me");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  // const res = sum();
  const res = useMemo(sum, []);
  return (
    <div>
      <p>result of heavy computation is: {res}</p>
      count is:{count}
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default App;
