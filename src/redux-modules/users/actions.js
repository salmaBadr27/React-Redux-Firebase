import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "./constants";

export const logIn =  ()=> ({
  type: LOGIN

});
export const logInSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});
export const logInFail = payload => ({
  type: LOGIN_FAIL,
  payload
});
export const signUp = payload => ({
  type: SIGNUP,
  payload
});
export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});
export const signUpFail = payload => ({
  type: SIGNUP_FAIL,
  payload
});
