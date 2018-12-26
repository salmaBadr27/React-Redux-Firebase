import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "./constants";

const initialState = {
  login: {
    data: {},
    error: "",
    isWaiting: false
  },
  signup: {
    data: {},
    error: "",
    isWaiting: false
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: { ...initialState.login, isWaiting: true }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...initialState.login, data: action.payload }
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          ...initialState.login,
          error: action.payload
        }
      };
    case SIGNUP:
      return {
        ...state,
        signup: { ...initialState.signup, isWaiting: true }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: { ...initialState.signup, data: action.payload }
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          ...initialState.signup,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
export default usersReducer;
