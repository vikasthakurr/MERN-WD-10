import React from "react";
import { useContext } from "react";
import { dataDistributer } from "./App";
const Child2 = () => {
  const data = useContext(dataDistributer);
  console.log(data);
  return (
    <div>
      {data.fname}
      {data.lname}
    </div>
  );
};

export default Child2;
