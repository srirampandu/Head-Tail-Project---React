import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./Head & Tail Project/Navbar";
import Home from "./Head & Tail Project/Home";
import HeadTail from "./Head & Tail Project/Head & Tail Game";
import About from "./Head & Tail Project/About";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    // element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Head & Tail Game",
        element: <HeadTail />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
