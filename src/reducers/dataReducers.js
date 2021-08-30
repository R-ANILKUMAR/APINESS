import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const initial = { user: {} };
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOGIN_STATE":
      return { ...state, user: action.payLoad };
    default:
      return state;
  }
};
const INITIAL_DASHBOARD = { user: [] };
const dashBoardReducer = (state = INITIAL_DASHBOARD, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        user: action.payLoad.user,
      };
    default: {
      return state;
    }
  }
};
export default combineReducers({
  userReducer: userReducer,
  form: formReducer,
  dashBoard: dashBoardReducer,
});
