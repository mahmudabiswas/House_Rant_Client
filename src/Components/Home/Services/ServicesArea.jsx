import React from "react";
import { Link } from "react-router-dom";

const ServicesArea = ({ item }) => {
  const { _id, img, name, place, price } = item;
  return (
    <div>
      <div className="services-area dark:text-white">
        <div class="max-w-sm rounded-lg border border-gray-200 p-5 shadow">
          <img src={img} class="mb-2 rounded-lg" />
          <h2 class="mb-2 text-4xl font-bold tracking-tight ">{name}</h2>
          <div class="flex flex-col items-start">
            <p class="mb-3  font-semibold">{place}</p>
            <p class="mb-3 text-2xl font-extrabold"> $ {price}</p>
            <Link to={`/bookDetails/${_id}`}>
              <button class="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
