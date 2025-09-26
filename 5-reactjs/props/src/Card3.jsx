import React from "react";

const Card3 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>name:{data.name}</p>
      <p>age:{data.age}</p>
    </div>
  );
};

export default Card3;
