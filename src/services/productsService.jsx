import * as API from "../API";

const requestHeaders = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API.AUTH_TOKEN}`,
  },
};

export const getProducts = async () => {
  try {
    const response = await fetch(API.PRODUCTS, requestHeaders);
    const json = await response.json();
    return json;
  } catch (error) {
    return alert(JSON.stringify(error));
  }
};
