import * as API from "../../API";
import * as Helper from "./Helper";

const requestHeaders = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API.AUTH_TOKEN}`,
  },
};

export const getProducts = () => {
  return (dispatch) => {
    dispatch(Helper.loadingError(false));

    dispatch(Helper.loadingInProgress(true));

    fetch(API.PRODUCTS, requestHeaders)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(Helper.loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadingSuccess(json));
      })
      .catch(() => dispatch(Helper.loadingError(true)));
  };
};

const loadingSuccess = (data) => ({
  type: "LOADING_SUCCESS",
  name: "PRODUCTS",
  data,
});
