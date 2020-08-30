import * as API from "../../API";
import * as Helper from "./api/Helper";

export const getUser = () => {
  return (dispatch) => {
    dispatch(Helper.loadingError(false));

    dispatch(Helper.loadingInProgress(true));

    fetch(API.USER)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(Helper.loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        json = json.slice(0, 10);
        dispatch(Helper.loadingSuccess(json));
      })
      .catch(() => dispatch(Helper.loadingError(true)));
  };
};
