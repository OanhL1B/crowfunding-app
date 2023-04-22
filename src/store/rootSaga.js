import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/auth-saga";

export default function* rootSaga() {
  // flow 2
  yield all([fork(authSaga)]);
}
