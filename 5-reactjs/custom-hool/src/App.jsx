import React from "react";
import Custom from "./Custom";

const App = () => {
  //we are receiving the data from custom hook from custom...
  const [data] = Custom("https://dummyjson.com/products");

  //we are printing the data to test the data if it is available
  console.log(data);
  return (
    <div>
      {data &&
        data.products.map((products) => {
          return <p key={products.id}>{products.title}</p>;
        })}
    </div>
  );
};

export default App;
