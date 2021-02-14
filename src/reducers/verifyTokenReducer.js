import * as types from "../actions";

export default function verifyTokenReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.VERIFY_TOKEN_SUCCESS:
      return { ...state, response };
    case types.VERIFY_TOKEN_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
