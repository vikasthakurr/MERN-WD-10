// import React from "react";

// const Card1 = (props) => {
//   return (
//     <div>
//       <h1>Name :{props.myname}</h1>
//       <p>Age:{props.age}</p>
//       <p>Salary:{props.salary}</p>
//     </div>
//   );
// };

// export default Card1;

import React from "react";
import Card2 from "./Card2";

const Card1 = ({ data }) => {
  return (
    <div>
      <Card2 data={data} />
    </div>
  );
};

export default Card1;
