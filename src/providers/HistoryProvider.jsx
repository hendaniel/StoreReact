import React, { useState, useEffect } from "react";
import { getHistory } from "../services/userService";

export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState({});

  const [historyResponse, setHistoryResponse] = useState([]);

  useEffect(() => {
    getHistory().then((products) => {
      setHistory(products);
    });
  }, [historyResponse]);
  return (
    <HistoryContext.Provider value={{ history, setHistoryResponse }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
