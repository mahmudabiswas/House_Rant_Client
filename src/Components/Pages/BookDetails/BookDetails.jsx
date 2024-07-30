import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const loaderData = useLoaderData();
  const { _id, img, name, place, price } = loaderData;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name, data.date, data.email, data.amount);
  };

  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
          <h2 class="text-center  text-gray-600 mb-4 text-4xl border-b-4">
            Order Confirmation Form{" "}
            <span className=" text-indigo-600 font-extrabold">{name}</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Date
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                {...register("date")}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="dueAmount"
              >
                Due Amount
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dueAmount"
                type="number"
                placeholder="Amount"
                {...register("amount")}
              />
            </div>
            <div class="flex items-center justify-between">
              <input
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
