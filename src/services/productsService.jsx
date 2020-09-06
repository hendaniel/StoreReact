import * as API from "../api/API";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API.AUTH_TOKEN}`,
};

export const getProducts = async () => {
  try {
    const response = await fetch(API.PRODUCTS, { headers });
    const json = await response.json();
    return json;
  } catch (error) {
    return alert(JSON.stringify(error));
  }
};

export const redeemProduct = async (id) => {
  try {
    console.log(id);
    const response = await fetch(API.REDEEEM, {
      headers,
      method: "POST",
      body: JSON.stringify({ productId: id }),
    });
    console.log("request", response);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error", error);
    return alert(JSON.stringify(error));
  }
};
