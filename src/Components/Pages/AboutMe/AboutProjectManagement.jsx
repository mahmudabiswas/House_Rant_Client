import React from "react";

const AboutProjectManagement = () => {
  return (
    <div>
      <div className=" md:flex lg:justify-around my-32 items-center  border-blue-500 ">
        <div className="">
          <img src="https://hellix.madrasthemes.com/wp-content/uploads/2021/12/11.jpg" />
        </div>
        <div className=" dark:text-white ml-10 ">
          <p className="text-red-500 my-2">EXPLORE THE FEATURES</p>
          <h1 className="text-5xl mb-9 font-semibold">
            Full project
            <br /> management
          </h1>
          <p className="w-[80%]">
            The basic philosophy of our studio is to create individual,
            aesthetically stunning solutions for our customers by lightning-fast
            development of projects employing unique styles and architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProjectManagement;
