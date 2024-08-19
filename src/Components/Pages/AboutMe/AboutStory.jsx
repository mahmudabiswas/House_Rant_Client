import React from "react";

const AboutStory = () => {
  return (
    <div className=" md:flex my-32 items-center ">
      <div className="flex-1 dark:text-white m-5 ">
        <p className="text-red-500 my-2">OUR STORY</p>
        <h1 className="text-5xl mb-9 font-semibold">
          Welcome To Hellix <br /> Architecture & Interior
        </h1>
        <p className="mr-12 text-justify">
          The basic philosophy of our studio is to create individual,
          aesthetically stunning solutions for our customers by lightning-fast
          development of projects employing unique styles and architecture. Even
          if you don’t have a ready sketch of what you want – we will help you
          to get the result you dreamed of.
        </p>
        <button className="btn mt-10 border-white"> DISCOVER MORE</button>
      </div>
      <div className="flex-1">
        <div className="relative w-[80%]">
          <img src="https://hellix.madrasthemes.com/wp-content/uploads/2022/03/7-1.jpg" />
          <img
            src="https://hellix.madrasthemes.com/wp-content/uploads/2022/03/6-portfolio-1-1536x1536.jpg"
            alt=""
            className="absolute left-1/2 right-1/2 top-[46%]   w-[75%]  "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
