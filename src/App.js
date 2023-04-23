import LayoutDashboard from "layouts/LayoutDashboard";
import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layouts/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CampaignView = lazy(() => import("./modules/campaign/CampaignView"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  // const { user } = useSelector((state) => state.auth);
  // console.log("user", user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (user && user.id) {
  //     const { access_token } = getToken();

  //     dispatch(
  //       authUpdateUser({
  //         user: user,
  //         access_token: access_token,
  //       })
  //     );
  //   } else {
  //     console.log("working");
  //     const { refresh_token } = getToken();
  //     console.log("refreshToken", refresh_token);
  //     if (refresh_token) {
  //       dispatch(authRefreshToken(refresh_token));
  //     } else {
  //       dispatch(authUpdateUser({}));
  //       logOut();
  //     }
  //   }
  // }, [dispatch, user]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      console.log("useEffect ~ access_token:", access_token);
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
  return (
    <Suspense>
      <Routes>
        {/* tránh bị reload lại 2 thanh top and sidebar */}
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
          <Route
            path="/campaign"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
