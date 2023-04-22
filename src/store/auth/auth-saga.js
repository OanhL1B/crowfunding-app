import { takeLatest } from "redux-saga/effects";
import { authRegister } from "./auth-slice";
import handleAuthRegister from "./auth-handlers";
export default function* authSaga() {
  // coi lại chỗ yield này 1 xíu nè
  //flow: 3
  // takelatiest lấy cái mới nhất
  yield takeLatest(authRegister.type, handleAuthRegister);
}
