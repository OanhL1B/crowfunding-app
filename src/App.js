import LayoutDashboard from "layouts/LayoutDashboard";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layouts/LayoutPayment";

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
