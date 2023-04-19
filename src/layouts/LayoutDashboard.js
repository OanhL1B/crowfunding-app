import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ childen }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div>{childen}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
