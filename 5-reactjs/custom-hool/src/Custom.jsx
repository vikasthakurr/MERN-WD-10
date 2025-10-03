import React from "react";
import { useState, useEffect } from "react";

const Custom = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    //api call using promises then consume....

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};

export default Custom;
