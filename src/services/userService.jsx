import * as API from "../Utils/API";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API.AUTH_TOKEN}`,
};

export const getUser = () => {
  return fetch(API.USER, { headers })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
};

export const addPoints = (coins) => {
  return fetch(API.ADD_POINTS, {
    headers,
    method: "POST",
    body: JSON.stringify({ amount: coins }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
};
