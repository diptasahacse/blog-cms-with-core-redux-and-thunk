import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  
  
  return (
    <>
      <div style={{paddingTop: "19px",paddingBottom: "19px"}} className="flex navbar bg-secondary border-b border-[#f1f5f90d] z-50 sticky top-0 items-center justify-between">
        <h3 className="text-xl font-semibold">Dipta Saha</h3>
        <label
          htmlFor="dashboard-toggle-button"
          className="drawer-button lg:hidden"
        >
          <i
            className={`text-2xl ri-menu-fold-line px-2 text-gray-200 rounded-md`}
          ></i>
        </label>
      </div>
      <ul className="menu p-4">
        <li>
          <Link className={`${pathname === "/dashboard" && "active"}`} to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link className={`${pathname === "/dashboard/blogs" && "active"}`} to="/dashboard/blogs">Blogs</Link>
        </li>
        <li>
          <Link className={`${pathname === "/dashboard/users" && "active"}`} to="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link className={`${pathname === "/dashboard/profile" && "active"}`} to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link className={`${pathname === "/dashboard/profile-settings" && "active"}`} to="/dashboard/profile-settings">Settings</Link>
        </li>
        
      </ul>
    </>
  );
};

export default Sidebar;
