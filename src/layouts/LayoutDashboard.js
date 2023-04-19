import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ childen }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div>
        <DashboardSidebar></DashboardSidebar>
        <div>{childen}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
