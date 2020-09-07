import React, { useState, useEffect } from "react";
import { getHistory } from "../services/userService";

export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  const [productResponse, setProductResponse] = useState({});

  useEffect(() => {
    getHistory().then((products) => {
      setProducts(products);
    });
  }, [productResponse]);

  return (
    <HistoryContext.Provider value={{ products, setProductResponse }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
