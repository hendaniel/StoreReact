import React, { useState, useEffect } from "react";
import { getUser } from "../services/userService";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [userResponse, setUserResponse] = useState({});

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, [userResponse]);

  return (
    <UserContext.Provider value={{ user, setUserResponse }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
