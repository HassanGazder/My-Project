import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Protected from "./Proctected/Protected";
import Products from "./Components/Products";
// import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import Vendorsignup from "./Components/Vendor/Vendorsignup";
import Vendorlogin from "./Components/Vendor/Vendorlogin";
import Brands from "./Components/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  { path: "/Vendor/Signup", element: <Vendorsignup /> },
  { path: "/Vendor/Login", element: <Vendorlogin /> },
  {
    path: "/Dashboard",
    element: <Protected component={<Dashboard />} />,
  },
  {
    path:'/brands',
    element:<Brands/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
