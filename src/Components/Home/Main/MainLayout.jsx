import React from "react";
import Categori from "../Categori/Categori";
import Service from "../Services/Service";
import Login from "../../Social/Login";
import Banner from "../Home/Banner";

const MainLayout = () => {
  return (
    <div>
      <Banner />
      <Categori />
      <Service />
    </div>
  );
};

export default MainLayout;
