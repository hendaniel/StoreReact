import * as API from "../API";

export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool,
});

export const loadingSuccess = (products) => ({
  type: "LOADING_SUCCESS",
  products,
});

export const getProducts = () => {
  return (dispatch) => {
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(API.PRODUCTS)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => {
        json = json.slice(0, 10);
        dispatch(loadingSuccess(json));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
