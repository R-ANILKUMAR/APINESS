import axios from "axios";

export const logInActions = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/details");

  dispatch({
    type: "LOGIN_STATE",
    payLoad: response.data,
  });
};
export const dashBoardAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/users");

  dispatch({
    type: "FETCH_DATA",
    payLoad: response.data,
  });
};
