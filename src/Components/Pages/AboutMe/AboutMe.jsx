import React from "react";
import "./About.css";

import "aos/dist/aos.css";
import AboutStory from "./AboutStory";
import AboutProjectManagement from "./AboutProjectManagement";
const AboutMe = () => {
  return (
    <div>
      <div className="background-image">
        <div className="overlay">
          <div data-aos="zoom-out-up">
            <h1 className="text-center text-5xl " data-aos="zoom-out-left">
              ABOUT ME
            </h1>
          </div>
        </div>
      </div>
      <AboutStory />
      <AboutProjectManagement />
    </div>
  );
};

export default AboutMe;
