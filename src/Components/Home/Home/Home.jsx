import React from "react";
import NavBar from "../Navbar/NavBar";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer.jsx/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
