import React, { useEffect, useContext, useState } from "react";
import { usePagination } from "../../hooks/index";
import { ProductsContext } from "../../providers/index";
import Product from "./Product";
import FilterPanel from "./FilterPanel";
import { priceFilter } from "../../utils/index";
import "./products.scss";

const ITEMS_PER_PAGE = 16;

const ProductsList = () => {
  const { products, setProductResponse } = useContext(ProductsContext);

  useEffect(() => {
    if (!products) return;
  }, [products]);

  const [filteredProducts, setProducts] = useState(products);

  const { next, prev, currentData, currentAmount } = usePagination(
    filteredProducts,
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
    setProducts(products.filter(priceFilter(event.target.value)));
  };

  if (filteredProducts.length) {
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
  return (
    <div className="empty">
      <h1>No hay productos</h1>
    </div>
  );
};
export default ProductsList;
