import React from "react";

const CategoriImg = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 gap-10">
      <img
        src="https://i.ibb.co/PwkYFYf/beach-cat.jpg"
        alt=""
        className="hover:rotate-1"
      />

      <img
        src="https://i.ibb.co/z8zjYqR/camping-cat.jpg"
        alt=""
        className="hover:rotate-1"
      />
      <img
        src="https://i.ibb.co/2ywS2W9/cave-cat.jpg"
        alt=""
        className="hover:rotate-1"
      />
      <img
        src="https://i.ibb.co/dLNfzH8/countryside-cat.webp"
        alt=""
        className="hover:rotate-1"
      />
      <img
        src="https://i.ibb.co/7rkFnH1/desert-cat.webp"
        alt=""
        className="hover:rotate-1"
      />
      <img
        src="https://i.ibb.co/mtX9kJk/island-cat.webp"
        alt=""
        className="hover:rotate-1"
      />
    </div>
  );
};

export default CategoriImg;
