import { UPDATE_TITLE } from "../actions/navigationActions";

const initialState = {
  title: "首页",
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
