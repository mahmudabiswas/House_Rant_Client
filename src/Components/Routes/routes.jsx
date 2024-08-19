import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import MainLayout from "../Home/Main/MainLayout";
import Login from "../Social/Login";
import Register from "../Social/Register";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Bookings from "../Pages/BookDetails/bookings";
import PrivateRoutes from "./PrivateRoutes";
import Footer from "../Pages/Footer.jsx/Footer";
import AboutMe from "../Pages/AboutMe/AboutMe";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoutes>
            <BookDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/house/${params.id}`),
      },

      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

export default Routes;
