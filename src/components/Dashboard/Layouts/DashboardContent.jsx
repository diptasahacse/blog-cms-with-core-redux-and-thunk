import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DashboardContent = () => {
  return (
    <div className="drawer-content">
      <Navbar />
      <div className="p-2 lg:p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardContent;
