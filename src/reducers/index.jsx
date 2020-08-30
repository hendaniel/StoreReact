import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return action.isLoading;
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.news;
    case "CLEAR_NEWS":
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  products,
  loadingError,
  loadingInProgress,
});
