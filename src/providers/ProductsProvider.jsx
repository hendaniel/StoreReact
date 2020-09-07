import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productsService";

export const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  const [productResponse, setProductResponse] = useState({});

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [productResponse]);

  return (
    <ProductsContext.Provider value={{products, setProductResponse}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
