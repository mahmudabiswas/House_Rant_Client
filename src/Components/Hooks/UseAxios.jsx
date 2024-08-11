import axios from "axios";
import React from "react";

const UseAxios = () => {
  const AxiosSucre = axios.create({
    baseURL: "http://localhost:5000/",
  });
  return AxiosSucre;
};

export default UseAxios;
