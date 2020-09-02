import React, { useEffect } from "react";

const UserPanel = ({ user: { name, points, redeemHistory }, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="user-panel">
      <div>{name}</div>
      {points}
    </div>
  );
};
export default UserPanel;
