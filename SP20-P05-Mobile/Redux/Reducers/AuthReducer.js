import {
  LOGIN_USER,
  GET_USER,
  REMOVE_USER,
  SAVE_USER,
  USER_LOADING,
  ERROR,
} from "../Actions/Types";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case "USER_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "REMOVE_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
