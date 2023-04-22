// chỗ chứa để mình gọi các phương thức api á

import axios from "api/axios";

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    // mình sẽ truyền data vào
    // data là 1 object
    ...data,
  });
};
