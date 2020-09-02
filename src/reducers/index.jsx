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

const data = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.data;
    default:
      return state;
  }
};

const createDataWrapperReducer = (reducerFunction, reducerName) => {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;

    return reducerFunction(state, action);
  };
};

export default combineReducers({
  user: createDataWrapperReducer(data, "USER"),
  products: createDataWrapperReducer(data, "PRODUCTS"),
  loadingError,
  loadingInProgress,
});
