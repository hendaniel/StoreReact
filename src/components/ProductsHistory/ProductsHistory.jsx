import React, { useEffect, useContext, useState } from "react";
import { usePagination } from "../../hooks/index";
import RedeemedProduct from "./RedeemedProduct";
import FilterPanel from "../FilterPanel/FilterPanel";
import { priceFilter } from "../../utils/index";
import { HistoryContext } from "../../providers/index";
import "./history.scss";

const ITEMS_PER_PAGE = 16;

const ProductsHistory = () => {
  const { history } = useContext(HistoryContext);

  const [filteredProducts, setHistory] = useState([]);

  useEffect(() => {
    if (!history) return;
    setHistory(history);
  }, [history]);

  const { next, prev, currentData, currentAmount, jump } = usePagination(
    filteredProducts,
    ITEMS_PER_PAGE
  );

  const handleFilter = (event) => {
    setHistory(history.filter(priceFilter(event.target.value)));
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
            return <RedeemedProduct item={item} key={key} />;
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
      <h1>No hay productos canjeados</h1>
    </div>
  );
};
export default ProductsHistory;
