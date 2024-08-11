import React from "react";
import UseAxios from "../../Hooks/UseAxios";

const Booked = ({ booked, bookings, setBookings, handleConfirm }) => {
  const { _id, name, place, email, price, img, status } = booked;
  const axios = UseAxios();

  // deleted data
  const handleDeletedItem = (id) => {
    const proceed = "confirm your deleted id";
    if (proceed) {
      axios.delete(`booking/${id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          alert("Deleted Successfully");
          const recaning = bookings.filter((booking) => booking._id !== id);
          console.log(recaning);
          setBookings(recaning);
        }
      });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input
                    onClick={() => handleDeletedItem(_id)}
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{place}</div>
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
              </td>
              <td className="font-sans font-semibold">{price}</td>
              <th>
                {status ? (
                  <span className="text-blue-600">confirmed</span>
                ) : (
                  <button
                    onClick={() => handleConfirm(_id)}
                    className="btn btn-ghost btn-xs"
                  >
                    please Confirm
                  </button>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booked;
