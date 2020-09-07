import React, { useEffect, useContext, useState } from "react";
import { usePagination } from "../../hooks/index";
import { ProductsContext } from "../../providers/index";
import Product from "./Product";
import FilterPanel from "./FilterPanel";
import "./products.scss";

const ITEMS_PER_PAGE = 16;

const ProductsList = () => {
  const { products, setProductResponse } = useContext(ProductsContext);

  const [filter, setFilter] = useState(0);

  useEffect(() => {
    if (!products) return;
  }, [products]);

  const { next, prev, currentData, currentAmount } = usePagination(
    products,
    ITEMS_PER_PAGE
  );

  const onPrev = () => {
    prev();
    window.scrollTo(0, 0);
  };
  const onNext = () => {
    next();
    window.scrollTo(0, 0);
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
  };

  if (products.length) {
    return (
      <>
        <FilterPanel
          currentAmount={currentAmount()}
          totalAmount={products.length}
          onFilter={handleFilter}
        />
        <div className="cards">
          {currentData().map((item, key) => {
            return (
              <Product item={item} key={key} onFetch={setProductResponse} />
            );
          })}
        </div>
        <div className="container-pagination">
          <div className="pagination">
            <ul>
              <button onClick={onPrev}>Previous</button>
              <button onClick={onNext}>Next</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
  return <div></div>;
};
export default ProductsList;
