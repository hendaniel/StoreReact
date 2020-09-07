import React, { useContext, useEffect } from "react";
import { UserContext, HistoryContext } from "../../providers/index";
import { coin, buy } from "../../assets/index";
import { SuccessModal, FailureModal, CoinsModal } from "../Modals/index";
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
  setProductResponse,
}) => {
  const { user, setUserResponse } = useContext(UserContext);
  const { setHistoryResponse } = useContext(HistoryContext);

  useEffect(() => {
    if (!user) return;
  }, [user]);

  const [errorModal, toggleErrorModal] = useModal();

  const [successModal, toggleSuccessModal] = useModal();

  const [coinsModal, toggleCoinsModal] = useModal();

  const { points } = user;

  const canBuy = cost <= points;

  const showResponseModal = () => {
    redeemProduct(_id)
      .then((res) => {
        toggleSuccessModal();
        setUserResponse(res);
        setHistoryResponse(res);
        setProductResponse(res);
      })
      .catch((err) => {
        toggleErrorModal();
      });
  };

  const showCoinsModal = () => {
    toggleCoinsModal();
  };

  return (
    <div className="card">
      {coinsModal && (
        <CoinsModal isShowing={coinsModal} hide={toggleCoinsModal} />
      )}
      {errorModal && (
        <FailureModal isShowing={errorModal} hide={toggleErrorModal} />
      )}
      {successModal && (
        <SuccessModal isShowing={successModal} hide={toggleSuccessModal} />
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
              <button onClick={showResponseModal}>Redeem now</button>
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
              <h3>{cost}</h3>
              <img src={coin} alt="coin" />
              <button onClick={showCoinsModal}>Get more coins</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
