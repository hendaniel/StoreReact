import React, { useEffect } from "react";
import Product from "./Product";

const ProductsList = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const productMap = products.map(item => {
    return <Product item={item}></Product>
  })

return <div>{productMap}</div>;
};
export default ProductsList;
