import Axios from "axios";
import {
  ERROR,
  USER_LOADING,
  GET_USER,
  SAVE_USER,
  REMOVE_USER,
  LOGIN_USER,
  REGISTER_USER,
} from "./Types";
import { baseurl } from "../../Constants";
import { AsyncStorage } from "react-native";

const api = Axios.create({
  baseURL: baseurl,
});

export const registerUserAction = (user) => ({
  type: "REGISTER_USER",
  payload: user,
});
export const loginUserAction = (user) => ({
  type: "LOGIN_USER",
  payload: user,
});
export const getUserAction = (user) => ({
  type: "GET_USER",
  payload: user,
});
export const saveUserAction = (user) => ({
  type: "SAVE_USER",
  payload: user,
});
export const removeUserAction = () => ({
  type: "REMOVE_USER",
});
export const loadingAction = (bool) => ({
  type: "USER_LOADING",
  payload: bool,
});
export const getErrorAction = (error) => ({
  type: "ERROR",
  payload: error,
});

// Register
export const registerUser = (userData) => (dispatch) => {
  loadingAction(true);
  const url = "api/customers";
  api
    .post(url, userData)
    .then((res) => {
      if (res.status >= 200 <= 299) {
        dispatch(registerUserAction(userData));
        dispatch(loadingAction(false));
      } else {
        dispatch(getErrorAction(res.data.description));
      }
    })
    .catch((err) => {
      dispatch(loadingAction(false));
      dispatch(getErrorAction(err.response.data[0].description || "ERROR"));
    });
};

// Login
export const loginUser = (userData) => (dispatch) => {
  const url = "/api/authentication/login";
  api
    .post(url, userData)
    .then((res) => {
      const user = res.data;

      // save user to storage
      saveCurrentUser(JSON.stringify(user));
      dispatch(loadingAction(false));
      dispatch(loginUserAction(user));
      console.log("Status Code: " + res.status);
      console.log("Found User: " + JSON.stringify(res.data));
    })
    .catch((err) => {
      dispatch(loadingAction(false));
      dispatch(getErrorAction(err.message || "ERROR"));
    });
};

// Logout
export const logoutUser = () => (dispatch) => {
  loadingAction(true);
  const url = "/api/authentication/logout";
  api.post(url).then((res) => {
    console.log("Logging out...", res.status);
  });
  dispatch(removeCurrentUser());
};

export const getCurrentUser = () => (dispatch) => {
  AsyncStorage.getItem("user")
    .then((data) => {
      dispatch(loadingAction(false));
      dispatch(getUserAction(data));
    })
    .catch((err) => {
      dispatch(loadingAction(false));
      dispatch(getErrorAction(err.message || "ERROR"));
    });
};
export const saveCurrentUser = (data) => (dispatch) => {
  AsyncStorage.setItem("user", data)
    .then(() => {
      dispatch(loadingAction(false));
      dispatch(saveUserAction("user saved"));
    })
    .catch((err) => {
      dispatch(loadingAction(false));
      dispatch(getErrorAction(err.message || "ERROR"));
    });
};
export const removeCurrentUser = () => (dispatch) => {
  AsyncStorage.removeItem("user")
    .then((res) => {
      dispatch(loadingAction(false));
      dispatch(removeUserAction(res));
      //set user to empty object (sets isLoggedIn false)
      dispatch(saveUserAction({}));
    })
    .catch((err) => {
      dispatch(loadingAction(false));
      dispatch(getErrorAction(err.message || "ERROR"));
    });
};
