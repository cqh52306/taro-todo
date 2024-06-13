export const UPDATE_TITLE = "UPDATE_TITLE";

export const updateTitle = (title: string) => ({
  type: UPDATE_TITLE,
  payload: title,
});
