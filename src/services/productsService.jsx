import * as API from "../Utils/API";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API.AUTH_TOKEN}`,
};

export const getProducts = () => {
  return fetch(API.PRODUCTS, { headers })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
};

export const redeemProduct = (id) => {
  return fetch(API.REDEEEM, {
    headers,
    method: "POST",
    body: JSON.stringify({ productId: id }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
};
