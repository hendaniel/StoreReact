import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { coin } from "../../assets/index";
import { UserContext } from "../../providers/UserProvider";
import { CoinsModal } from "../Modals/index";
import { useModal } from "../../hooks/index";
import { routes } from "../../routes";

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

  const links = routes.map((route, key) => {
    return (
      <li key={key}>
        <NavLink
          className="nav-item"
          to={route.path}
          activeClassName="selected-nav"
        >
          {route.linkname}
        </NavLink>
      </li>
    );
  });
  return (
    <>
      <div className="profile">
        {coinsModal && (
          <CoinsModal isShowing={coinsModal} hide={toggleCoinsModal} />
        )}
        <div className="navigation">
          <ul className="options">{links}</ul>
        </div>
        <div className="user-panel">
          <div>{name}</div>
          <div className="coins-user">
            <img src={coin} onClick={openCoinsModal} alt="Coins" />
            <span className="points">{points}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserPanel;
