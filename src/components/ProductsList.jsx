import React, { useEffect } from "react";
import Product from "./Product";

const ProductsList = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  if(!products){
    console.log(products);
    return <div></div>
  }
  return (
    <div className="cards">
      {products.map((item) => {
        return <Product item={item}></Product>;
      })}
    </div>
  );
};
export default ProductsList;
