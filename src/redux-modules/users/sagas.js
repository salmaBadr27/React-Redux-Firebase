import { put, takeEvery, call } from "redux-saga/effects";
import { logInFail, signUpFail, signUpSuccess, logInSuccess } from "./actions";
import { LOGIN, SIGNUP } from "./constants";
import {
  reduxSagaFirebase,
  usersRef
} from "../../components/Firebase/firebase.js";
import AuthenticationError from "../../utils/handleError";
export function* LogIn({ payload }) {
  try {
    yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      payload.email,
      payload.password
    );
    yield put(logInSuccess(payload));
  } catch (error) {
    yield put(logInFail(AuthenticationError(error)));
  }
}
export function* signUp({ payload }) {
  try {
    const user = yield call(
      reduxSagaFirebase.auth.createUserWithEmailAndPassword,
      payload.email,
      payload.password
    );
    yield put(signUpSuccess(user));
    yield usersRef.push().set(payload);
  } catch (error) {
    yield put(signUpFail(AuthenticationError(error)));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, LogIn);
}
export function* watchSignUp() {
  yield takeEvery(SIGNUP, signUp);
}
