import React, { useEffect } from "react";
import coin from "../assets/coin.svg";

const UserPanel = ({ user: { name, points, redeemHistory }, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

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
