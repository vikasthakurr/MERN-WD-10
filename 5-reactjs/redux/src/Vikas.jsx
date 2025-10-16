import React from "react";
import { useSelector } from "react-redux";

const Vikas = () => {
  const todos = useSelector((state) => state.todos);
  //   console.log(`i am inside vikas component`);

  return (
    <div>
      <h1>this is inside vikas component</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Vikas;
