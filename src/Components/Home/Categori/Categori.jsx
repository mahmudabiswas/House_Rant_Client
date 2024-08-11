import React from "react";
import CategoriImg from "./CategoriImg";

const Categori = () => {
  return (
    <div className="  w-9/12 dark:text-white text-center justify-center m-auto py-20">
      <h1 className="text-4xl font-semibold font-sans text-blue-800 mb-3">
        Elplore Top Categories
      </h1>
      <p className="text-2xl font-bold ">
        Explore Our wide range of vacation rentals that cater to all types of
        travelers immerse yourself in the local culture, enjoy the comforts of
        home. and create unforgettable memories your dream destination
      </p>
      <CategoriImg />
    </div>
  );
};

export default Categori;
