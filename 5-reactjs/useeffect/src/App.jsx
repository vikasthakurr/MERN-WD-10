import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [count]);
  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default App;
