import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });
  return <div>{Loading ? <Loader /> : <Card />}</div>;
};

export default App;
