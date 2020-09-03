import React from "react";
import coin from "../assets/coin.svg";

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

      <div className="coins-left">
        <span>You need: {cost}</span>
        <img src={coin} alt="Coins left" />
      </div>
    </div>
  );
};
export default Product;
