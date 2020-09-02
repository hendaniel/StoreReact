import React, { useEffect } from "react";
import { usePagination } from "../hooks/index";
import Product from "./Product";

const ProductsList = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const { next, prev, jump, currentData } = usePagination(products, 10);

  return (
    <div className="cards">
      {currentData().map((item) => {
        return <Product item={item}></Product>;
      })}
    </div>
  );
};
export default ProductsList;
