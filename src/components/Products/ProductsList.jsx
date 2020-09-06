import React, { useEffect, useContext } from "react";
import { usePagination } from "../../hooks/index";
import Product from "./Product";
import { ProductsContext } from "../../providers/index";
import "./products.scss";

const ProductsList = () => {
  const products = useContext(ProductsContext);

  useEffect(() => {
    if (!products) return;
  }, [products]);

  const { next, prev, currentData } = usePagination(products, 16);

  if (products.length > 0) {
    return (
      <>
        <div className="cards">
          {currentData().map((item, key) => {
            return <Product item={item} key={key}></Product>;
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
  }
  return <div></div>;
};
export default ProductsList;
