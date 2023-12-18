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
import App from "../src/App";
import Vendorsignup from "./Components/Vendor/Vendorsignup";
import Vendorlogin from "./Components/Vendor/Vendorlogin";
import Brands from "./Components/Brands";
import DashboardProducts from "./Components/DashboardProducts";
import Dasboardaccount from "./Components/Dasboardaccount";
import Dashboarorder from "./Components/Dashboarorder";
import Dashboardfinancial from "./Components/Dashboardfinancial";
import Category from './Components/Category';
import Addproduct from "./Components/Addproduct";

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
    path: "/Dashboard/brands",
    element: <Protected componentbrands={<Brands />} />,
  },
  {
    path: "/Dashboard/Products",
    element: <Protected componentProducts={<DashboardProducts />} />,
  },
  {
    path: "/Dashboard/Account",
    element: <Protected componentAccount={<Dasboardaccount />} />,
  },
  {
    path: "/Dashboard/Orders",
    element: <Protected componentOrders={<Dashboarorder />} />,
  },
  {
    path: "/Dashboard/Financial",
    element: <Protected componentFinancial={<Dashboardfinancial />} />,
  },
  {
    path: "/Dashboard/Category",
    element: <Protected componentCategory={<Category/>} />,
  },
  {
    path: "/Dashboard/Addproducts",
    element: <Protected componentaddproducts={<Addproduct/>} />,
  },
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
