import React from "react";
import { Link, NavLink } from "react-router-dom";
import ColorTheem from "./ColorTheem";
import NavProfile from "./NavProfile";
import logo from "../../../assets/manName/favicon.ico";
const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/course">Course</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/footer">Footer</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar lg:overflow-hidden  dark:text-white bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <div className="text-center  text-blue-800">
            <Link className=" text-5xl my-2">
              <img src={logo} alt="" className="w-14 m-auto" />
            </Link>
            <span
              className="uppercase hidden lg:block "
              style={{ letterSpacing: "14px" }}
            >
              quack explore
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end w-full">
          <NavProfile />
          {/* toggle button */}
          <ColorTheem />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
