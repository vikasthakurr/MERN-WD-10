import React from "react";
import { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // let ref = 0;
  const ref = useRef();
  // const ref2 = useRef();

  if (!ref.current) {
    return null;
  } else {
    ref.current.style.innerText = "pratyush";
  }
  // console.log(ref.current);
  // console.log(ref.current);

  const handleClick = () => {
    setCount(count + 1);
    // ref.current = ref.current + 1;
    // ref = ref + 1;
  };
  return (
    <div>
      <p>value of count: {count}</p>
      <h1 ref={ref}>Vikas</h1>

      <button onClick={handleClick}>increase</button>
    </div>
  );
};

export default App;
