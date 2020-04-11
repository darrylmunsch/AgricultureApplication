import { ERROR } from "../Actions/Types";

const initialState = {
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}
