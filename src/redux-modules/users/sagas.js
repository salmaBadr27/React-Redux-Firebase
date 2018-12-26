import { put, takeEvery, call } from "redux-saga/effects";
import { logInFail, signUpFail, signUpSuccess, logInSuccess } from "./actions";
import { LOGIN, SIGNUP } from "./constants";
import firebase from "firebase";
import {
  usersRef,
  reduxSagaFirebase
} from "../../components/Firebase/firebase.js";

const authProvider = new firebase.auth.GoogleAuthProvider();
export function* LogIn() {
  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithPopup,
      authProvider
    );
    console.log(data);
    yield put(logInSuccess(data));
  } catch (error) {
    yield put(logInFail(error));
  }
}
export function* signUp({ payload }) {
  try {
    usersRef.push().set(payload);
    yield put(signUpSuccess(payload));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, LogIn);
}
export function* watchSignUp() {
  yield takeEvery(SIGNUP, signUp);
}
