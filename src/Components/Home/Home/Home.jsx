import React from "react";
import NavBar from "../Navbar/NavBar";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
