import React, { useEffect, useState, useContext } from "react";
import coin from "../assets/coin.svg";
import { UserContext } from "../providers/UserProvider";

const UserPanel = () => {
  const user = React.useContext(UserContext);

  useEffect(() => {
    if (!user) return;
  }, [user]);

  const { name, points } = user;
  return (
    <div className="user-panel">
      <div>{name}</div>
      <div className="coins-user">
        <img src={coin} alt="Coins" />
        <span className="points">{points}</span>
      </div>
    </div>
  );
};
export default UserPanel;
