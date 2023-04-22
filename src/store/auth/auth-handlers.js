// gennerator funtion
// này như kiểu action của mình đó

import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

//flow 4
export default function* handleAuthRegister(action) {
  // console.log("action", action);
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new  account successfully");
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }

    if (response.status === 201) {
      toast.success("Login is successfully");
    }
  } catch (error) {
    console.log("error", error);
  }
}

export { handleAuthLogin };
