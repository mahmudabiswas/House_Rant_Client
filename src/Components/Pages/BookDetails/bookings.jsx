import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

import Booked from "./Booked";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = UseAuth();
  const [bookings, setBookings] = useState([]);
  const axios = UseAxiosSecure();

  // const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    //   using custom hook use axios
    //
    axios
      .get(`booking?email=${user?.email}`, { withCredentials: true })
      .then((res) => setBookings(res.data));

    //   using the fetch
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, []);

  // confirm id
  const handleConfirm = (id) => {
    console.log(id);
    // fetch(`http://localhost:5000/booking/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ status: "confirm" }),
    // })
    // .then((res) => { res.json()})
    axios.patch(`booking/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        const remaining = bookings.filter((booking) => booking._id !== id);
        const updating = bookings.find((book) => book._id === id);
        updating.status = "confirm";
        const newBookings = [updating, ...remaining];
        setBookings(newBookings);
      }
    });
  };

  return (
    <div>
      <h1 className="text-6xl text-red-700 text-center">
        {" "}
        Bookings {bookings.length}
      </h1>

      {bookings.map((booked) => (
        <Booked
          key={booked._id}
          booked={booked}
          bookings={bookings}
          setBookings={setBookings}
          handleConfirm={handleConfirm}
        />
      ))}
    </div>
  );
};

export default Bookings;
