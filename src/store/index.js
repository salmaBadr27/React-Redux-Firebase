import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { fork, all } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "../redux-modules/users/sagas";
import { combineReducers, compose } from "redux";
import usersReducer from "../redux-modules/users/reducers";

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({ usersReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
function* rootSaga() {
  try {
    yield all([fork(watchLogin), fork(watchSignUp)]);
  } catch (err) {
    console.log("ERROR", err);
  }
}
sagaMiddleWare.run(rootSaga);

export default store;
