import React, { useEffect, useContext } from "react";
import { coin } from "../../assets/index";
import { UserContext } from "../../providers/UserProvider";
import { CoinsModal } from "../Modals/index";
import { useModal } from "../../hooks/index";
import { Switch, Route } from "react-router-dom";
import ProductsList from "../Products/ProductsList";
import "./user.scss";

const UserPanel = () => {
  const { user } = useContext(UserContext);

  const [coinsModal, toggleCoinsModal] = useModal();

  useEffect(() => {
    if (!user) return;
  }, [user]);

  const openCoinsModal = () => {
    toggleCoinsModal();
  };

  const { name, points } = user;
  return (
    <>
    <Switch>
      <Route exact path="/" component={ProductsList} />
      <Route exact path="/" component={ProductsList} />

    </Switch>
      {coinsModal && (
        <CoinsModal isShowing={coinsModal} hide={toggleCoinsModal} />
      )}
      <div className="user-panel">
        <div>{name}</div>
        <div className="coins-user">
          <img src={coin} onClick={openCoinsModal} alt="Coins" />
          <span className="points">{points}</span>
        </div>
      </div>
    </>
  );
};
export default UserPanel;
