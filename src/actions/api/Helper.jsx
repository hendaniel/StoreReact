export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool,
});

