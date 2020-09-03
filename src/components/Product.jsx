import React from "react";

const Product = ({
  item: {
    name,
    category,
    cost,
    img: { url },
  },
}) => {
  return (
    <div className="card">
      <div className="img" style={{ backgroundImage: `url("${url}")` }}></div>
      <div className="info">
        <span className="category">{category}</span>
        <h3 className="title">{name}</h3>
      </div>
      <button className="card-action">Te faltan: {cost}</button>
    </div>
  );
};
export default Product;
