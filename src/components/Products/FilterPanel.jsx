import React from "react";
import "./products.scss";

const optionsData = {
  price: {
    0: "Any price",
    1: "0 - 200 coins",
    2: "201 - 500 coins",
    3: "501 - 1000 coins",
    4: "1001 - 2000 coins",
    5: "+ 2000 coins",
  },
};

const FilterPanel = ({ currentAmount, totalAmount, onFilter }) => {
  return (
    <>
      <div className="filter-container">
        <div className="pagination-info">
          Showing {currentAmount} of {totalAmount} products
        </div>
        <div className="filter">Filter by:</div>
        <select className="filter-select" onChange={(e) => onFilter(e)}>
          {Object.entries(optionsData.price).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default FilterPanel;
