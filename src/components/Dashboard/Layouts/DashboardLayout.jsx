import React from "react";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input
        id="dashboard-toggle-button"
        type="checkbox"
        className="drawer-toggle"
      />
      <DashboardContent />
      <div className="drawer-side">
        <label
          htmlFor="dashboard-toggle-button"
          className="drawer-overlay"
        ></label>
        <div
          id="dashboard-sidebar"
          className="  w-80 bg-secondary text-base-content"
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
