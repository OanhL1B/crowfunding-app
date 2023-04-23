// gennerator funtion
// này như kiểu action của mình đó

import { call, put } from "redux-saga/effects";
import {
  requestAuthFetMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

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
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }

    if (response.status === 201) {
      toast.success("Login is successfully");
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    console.log("response", response);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetchMe({
        payload: response.data.accessToken,
      });
    } else {
      //logout
    }
  } catch (error) {}
}
export { handleAuthLogin, handleAuthFetchMe, handleAuthRefreshToken };
