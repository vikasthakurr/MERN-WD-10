import React from "react";
import Card1 from "./Card1";

const App = () => {
  let data = {
    name: "vikas",
    age: 24,
  };
  return (
    <>
      <Card1 data={data} />
    </>
  );
};

export default App;
