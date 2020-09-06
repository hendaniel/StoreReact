import * as API from "../api/API";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API.AUTH_TOKEN}`,
};

export const getUser = async () => {
  try {
    const response = await fetch(API.USER, { headers });
    const json = await response.json();
    return json;
  } catch (error) {
    return alert(JSON.stringify(error));
  }
};

export const addPoints = async (coins) => {
  try {
    const response = await fetch(API.ADD_POINTS, {
      method: "POST",
      body: JSON.stringify({ amount: coins }),
      headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return alert(JSON.stringify(error));
  }
};
