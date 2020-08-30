import React, { useEffect } from "react";

const UserPanel = ({user}) => {
  useEffect(() => {
    console.log("Hola");
    user();
  }, []);
  return <div></div>;
};
export default UserPanel;
