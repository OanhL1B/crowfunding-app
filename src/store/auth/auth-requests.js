// chỗ chứa để mình gọi các phương thức api á

import axios from "api/axios";

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    // mình sẽ truyền data vào
    // data là 1 object
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestAuthFetMe = (token) => {
  console.log("token", token);
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/json",
    refreshToken: token,
  });
};
