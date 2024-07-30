import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Google from "./Google";
import UseAuth from "../Hooks/UseAuth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(data.name, data.photoUrl)
          .then((res) => {
            console.log(res.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    reset();
  };
  return (
    <div>
      <div class="dark:bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white   p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="Name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
                {...register("name")}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="Email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                {...register("email")}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="photoUrl"
              >
                Profile Image
              </label>
              <input
                class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photoUrl"
                type="photoUrl"
                {...register("photoUrl")}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="pleas enter your password"
                {...register("password")}
              />
            </div>
            <Google />
            <div class="flex items-center justify-between">
              <input
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                id="submit"
                type="submit"
              />

              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link to="/login">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// updateUserProfile(data.name, data.photoUrl)
// .then((res) => {
//   res.user;
// })
// .catch((error) => {
//   console.log(error);
// });
