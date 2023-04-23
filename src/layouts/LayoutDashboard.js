import Overlay from "components/common/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import RequiredAuthPage from "pages/RequiredAuthPage";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router";

const LayoutDashboard = () => {
  return (
    <RequiredAuthPage>
      <div className="min-h-screen p-10 bg-lite">
        <ReactModal
          isOpen={false}
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          className="content"
        ></ReactModal>
        <Overlay></Overlay>
        <DashboardTopbar></DashboardTopbar>
        <div className="flex items-start gap-x-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
            {/* outlet những thứ ở giữa */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  );
};

export default LayoutDashboard;
