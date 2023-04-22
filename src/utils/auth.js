// get token or save token, như kiểu bình thường mình lưu user vào local_storange á nhưng này mình dùng bằng cookie đi làm
// người ta thường làm như vậy á.
import Cookies from "js-cookie";

const accessTokenKey = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
