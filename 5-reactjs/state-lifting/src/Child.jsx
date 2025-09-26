import React from "react";

const Child = (props) => {
  console.log(props);
  function handleChange(e) {
    props.setName(e.target.value);
  }
  return (
    <div>
      <input
        onChange={handleChange}
        name="name"
        placeholder="enter any name"
      ></input>

      <p>the value in child is :{props.name}</p>
    </div>
  );
};

export default Child;
