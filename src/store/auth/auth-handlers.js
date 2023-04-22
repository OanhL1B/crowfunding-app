// gennerator funtion
// này như kiểu action của mình đó

import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";

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
