import React from "react";
import Child1 from "./Child1";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const dataDistributer = createContext();
const App = () => {
  let data = {
    fname: "vikas",
    lname: "thakur",
  };
  return (
    <dataDistributer.Provider value={data}>
      <div>
        <Child1 />

      </div>
    </dataDistributer.Provider>
  );
};

export default App;
