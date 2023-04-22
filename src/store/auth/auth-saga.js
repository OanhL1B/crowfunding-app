import { takeLatest } from "redux-saga/effects";
import { authLogin, authRegister } from "./auth-slice";
import handleAuthRegister, { handleAuthLogin } from "./auth-handlers";
export default function* authSaga() {
  // coi lại chỗ yield này 1 xíu nè
  //flow: 3
  // takelatiest lấy cái mới nhất
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
}
