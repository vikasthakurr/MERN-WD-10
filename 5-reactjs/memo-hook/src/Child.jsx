import React from "react";
import { memo } from "react";

const Child = (props) => {
  console.log("child rendered again");
  return <div>Value of Counter2: {props.count2}</div>;
};

export default memo(Child);
