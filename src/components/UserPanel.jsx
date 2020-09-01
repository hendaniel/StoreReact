import React, { useEffect } from "react";

const UserPanel = ({ user, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>{user.name}</div>;
};
export default UserPanel;
