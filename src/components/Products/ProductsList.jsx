import React, { useEffect, useContext, useState } from "react";
import { usePagination } from "../../hooks/index";
import { ProductsContext } from "../../providers/index";
import Product from "./Product";
import FilterPanel from "../FilterPanel/FilterPanel";
import { priceFilter } from "../../utils/index";
import "./products.scss";

const ITEMS_PER_PAGE = 16;

const ProductsList = () => {
  const { products, setProductResponse } = useContext(ProductsContext);

  const [filteredProducts, setProducts] = useState([]);

  useEffect(() => {
    if (!products) return;
    setProducts(products);
  }, [products]);

  const { next, prev, currentData, currentAmount, jump } = usePagination(
    filteredProducts,
    ITEMS_PER_PAGE
  );

  const handleFilter = (event) => {
    setProducts(products.filter(priceFilter(event.target.value)));
    jump(1);
  };

  if (filteredProducts.length) {
    return (
      <>
        <FilterPanel
          currentAmount={currentAmount()}
          totalAmount={filteredProducts.length}
          onFilter={handleFilter}
        />
        <div className="cards">
          {currentData().map((item, key) => {
            return (
              <Product
                item={item}
                key={key}
                setProductResponse={setProductResponse}
              />
            );
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
  return (
    <div className="empty">
      <h1>No hay productos</h1>
    </div>
  );
};
export default ProductsList;
