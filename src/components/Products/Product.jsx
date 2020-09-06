import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/index";
import { coin, buy } from "../../assets/index";
import { SuccessModal, FailureModal } from "../Modals/index";
import { useModal } from "../../hooks/index";
import { redeemProduct } from "../../services/productsService";
import "./products.scss";

const Product = ({
  item: {
    _id,
    name,
    category,
    cost,
    img: { url },
  },
}) => {
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) return;
  }, [user]);

  const [error, setError] = useState(false);

  const { isShowing, toggle } = useModal();

  const { points } = user;

  const canBuy = cost <= points;

  const showModal = () => {
    redeemProduct(_id)
      .then((res) => {
        toggle();
      })
      .catch((err) => {
        setError(true);
        toggle();
      });
  };

  return (
    <div className="card">
      {error ? (
        <FailureModal isShowing={isShowing} hide={toggle} />
      ) : (
        <SuccessModal isShowing={isShowing} hide={toggle} />
      )}

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
              <button onClick={showModal}>Redeem now</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="coins-left">
            <span>You need: {cost - (points | 0)}</span>
            <img src={coin} alt="coins left" />
          </div>
          <div
            className="action-container"
            style={{ backgroundColor: "#92a2a7da" }}
          >
            <div className="action">
              <h3>{cost - (points | 0)}</h3>
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
