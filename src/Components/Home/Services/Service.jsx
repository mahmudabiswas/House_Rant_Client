import React, { useEffect, useState } from "react";
import ServicesArea from "./ServicesArea";

const Service = () => {
  const [categori, setCategori] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/house")
      .then((response) => response.json())
      .then((data) => setCategori(data));
  }, []);
  return (
    <div className="w-9/12 text-center  justify-center m-auto py-20">
      <h1 className="text-4xl text-red-700">Our Services Home</h1>
      <p className="py-2 text-gray-600 text-2xl font-bold font-serif">
        To convert 03:00-04:30 pm to a 24-hour clock time format, you would add
        12 to the hour portion of the time. So, 03:00 pm becomes 15:00 hours and
        04:30 pm becomes 16:30 hours. The time in 24-hour clock format is
        15:00-16:30 hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {categori.map((item) => (
          <ServicesArea key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
