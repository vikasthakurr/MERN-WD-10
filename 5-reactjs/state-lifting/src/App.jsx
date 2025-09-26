import React from "react";
import Child from "./Child";
import { useState } from "react";
import Child1 from "./Child1";

const App = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Child setName={setName} name={name} />
      <p>value of name inside parent: {name}</p>

      <Child1 name={name} />
    </>
  );
};

export default App;
