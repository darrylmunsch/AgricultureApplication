import Axios from "axios";
import {
  ERROR,
  USER_LOADING,
  GET_USER,
  SAVE_USER,
  REMOVE_USER,
  LOGIN_USER,
} from "./Types";
import { baseurl } from "../../Constants";
import { AsyncStorage } from "react-native";

const api = Axios.create({
  baseURL: baseurl,
});
export const loginUser = (user) => ({
  type: "LOGIN_USER",
  payload: user,
});
export const getUser = (user) => ({
  type: "GET_USER",
  payload: user,
});
export const saveUser = (user) => ({
  type: "SAVE_USER",
  payload: user,
});
export const removeUser = () => ({
  type: "REMOVE_USER",
});
export const loading = (isLoading) => ({
  type: "USER_LOADING",
  payload: isLoading,
});
export const getError = (error) => ({
  type: "ERROR",
  payload: error,
});

// Login
export const loginCurrentUser = (userData) => (dispatch) => {
  const url = "/api/authentication/login";
  api
    .post(url, userData)
    .then((res) => {
      console.log("are we here yet?");
      const user = res.data;

      // save user to storage
      saveCurrentUser(JSON.stringify(user));
      dispatch(loginUser(user));
      console.log("Status Code: " + res.status);
      console.log("Found User: " + JSON.stringify(res.data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(getError(err.message || "ERROR"));
    });
};

// Logout
export const logoutUser = () => (dispatch) => {
  const url = "/api/authentication/logout";
  api.post(url).then((res) => {
    console.log("Logging out...", res.status);
  });
  dispatch(removeCurrentUser());
};

// Register
// TODO Add Register portion of Action/Reducer

export const getCurrentUser = () => (dispatch) => {
  AsyncStorage.getItem("user")
    .then((data) => {
      dispatch(loading(false));
      dispatch(getUser(data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(getError(err.message || "ERROR"));
    });
};
export const saveCurrentUser = (data) => (dispatch) => {
  AsyncStorage.setItem("user", data)
    .then(() => {
      dispatch(loading(false));
      dispatch(saveUser("user saved"));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });
};
export const removeCurrentUser = () => (dispatch) => {
  AsyncStorage.removeItem("user")
    .then((res) => {
      dispatch(loading(false));
      dispatch(removeUser(res));
      //set user to empty object (sets isLoggedIn false)
      dispatch(saveUser({}));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.message || "ERROR"));
    });
};
