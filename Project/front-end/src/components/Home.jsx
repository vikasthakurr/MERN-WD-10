import React from "react";
import Card from "./Card.jsx";
import products from "../product-api/product.js";

const Home = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product) => (
          <Card key={product.id} productObj={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
