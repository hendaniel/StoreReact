import React, { useEffect, useContext } from "react";
import { coin } from "../../assets/index";
import { UserContext } from "../../providers/UserProvider";
import "./user.scss";

const UserPanel = () => {
  const user = useContext(UserContext);

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
