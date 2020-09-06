import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import coin from "../../assets/coin.svg";
import buy from "../../assets/buy-blue.svg";
import { SuccessModal } from "../Modals/index";
import { useModal } from "../../hooks/index";
import "./products.scss";

const Product = ({
  item: {
    name,
    category,
    cost,
    img: { url },
  },
}) => {
  const user = useContext(UserContext);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (!user) return;
  }, [user]);

  const { points } = user;

  const canBuy = cost <= points;

  const openBuyModal = () => {
    toggle();
  };

  return (
    <div className="card">
      <SuccessModal isShowing={isShowing} />

      <div className="img" style={{ backgroundImage: `url("${url}")` }}></div>
      <div className="info">
        <span className="category">{category}</span>
        <h3 className="title">{name}</h3>
      </div>
      {canBuy ? (
        <>
          <div className="can-buy">
            <img src={buy} alt="Buy" />
          </div>
          <div className="action-container">
            <div className="action">
              <h3>{cost}</h3>
              <img src={coin} alt="coin" />
              <button onClick={openBuyModal}>Redeem now</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="coins-left">
            <span>You need: {cost - points}</span>
            <img src={coin} alt="coins left" />
          </div>
          <div
            className="action-container"
            style={{ backgroundColor: "#92a2a7da" }}
          >
            <div className="action">
              <h3>{cost - points}</h3>
              <img src={coin} alt="coin" />
              <button>Get more coins</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
