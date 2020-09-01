import * as API from "../../API";
import * as Helper from "./Helper";

const requestHeaders = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API.AUTH_TOKEN}`,
  },
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(Helper.loadingError(false));

    dispatch(Helper.loadingInProgress(true));

    fetch(API.USER, requestHeaders)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        
        dispatch(Helper.loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch(Helper.loadingSuccess(json));
      })
      .catch(() => dispatch(Helper.loadingError(true)));
  };
};
