import React, { useEffect } from "react";
import { usePagination } from "../hooks/index";
import Product from "./Product";

const ProductsList = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const { next, prev, jump, currentData } = usePagination(products, 16);

  return (
    <>
      <div className="cards">
        {currentData().map((item) => {
          return <Product item={item}></Product>;
        })}
      </div>
      <div className="container-pagination">
        <div className="pagination">
          <ul>
            <button onClick={() => prev()}>Previous</button>
            <button onClick={() => next()}>Next</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductsList;
