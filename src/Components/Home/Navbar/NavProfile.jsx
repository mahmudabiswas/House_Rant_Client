import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const NavProfile = () => {
  const { user, logOut } = UseAuth();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="dropdown dropdown-left z-30">
        <div tabIndex={0} role="button" className=" m-1">
          <div className="avatar">
            <div className="w-12 rounded-full">
              {user && (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="border-red-50"
                />
              )}
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow"
        >
          {user ? (
            <li>
              <Link onClick={handleLogOut} to="/">
                logOut
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavProfile;
