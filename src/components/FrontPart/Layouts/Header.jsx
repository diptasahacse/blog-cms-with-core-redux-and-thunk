import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  console.log()
  return (
    <div className="navbar z-10 sticky top-0 bg-[#1d1b31]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btb-info normal-case text-xl">Dipta Saha</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu text-gray-200 menu-horizontal px-1">
          <li>
            <Link className={`${location.pathname === '/' && 'active'}`} to="/">Home</Link>
          </li>
          <li>
            <Link className={`${location.pathname === '/blogs' && 'active'}`}  to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/sign-in">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          
          
          
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
