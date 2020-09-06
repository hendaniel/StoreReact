import * as API from "../API";

const requestHeaders = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API.AUTH_TOKEN}`,
  },
};

export const getUser = async () => {
  try {
        const response = await fetch(API.USER, requestHeaders);
        const json = await response.json();
        return json;
    }
    catch (error) {
        return alert(JSON.stringify(error));
    }
};
