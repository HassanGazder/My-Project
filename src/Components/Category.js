import React from "react";
import { useState } from "react";
import logo from "../images/darsi-logo.webp";
import { Link } from "react-router-dom";
export default function Category() {
  let [darkmode, setdarkmode] = useState(false);
  function enabledarkmode() {
    console.log("click");
    if (darkmode === false) {
      setdarkmode(true);
    }
    if (darkmode === true) {
      setdarkmode(false);
    }
    console.log(darkmode);
  }
  return (
    <>
      <div
        className={`${
          darkmode === false
            ? "Header-container"
            : "Header-container darkmode-light"
        }`}
      >
        <div className="header-container-left">
          <img alt="" src={logo} />
        </div>
        <div className="header-container-right">
          <div
            onClick={enabledarkmode}
            className={`${
              darkmode === false ? "moon-icon" : "moon-icon-dark-mode"
            }`}
          >
            <i
              class={`${
                darkmode === false
                  ? "fa-regular fa-moon"
                  : "fa-regular fa-sun sun-icon dark-mode-i"
              }`}
            ></i>
          </div>
          <div
            className={`${
              darkmode === false ? "user-icon" : "user-icon-dark-mode"
            }`}
          >
            <i class="fa-regular fa-user"></i>
          </div>
          <div
            className={`${
              darkmode === false ? "vendor-info" : "vendor-info-darkmode"
            }`}
          >
            <h4 className="Vendor-name">
              hassan gazder
              <p>Vendor</p>
            </h4>
          </div>
        </div>
      </div>
      <div className="hero-parent">
        <div className="hero-child">
          <div className="sidebar-container">
            <div
              className={`${
                darkmode === false ? "content" : "content darkmode-light"
              }`}
            >
              <ul>
                <li>
                  <i class="fa-solid fa-chart-line"></i>
                  <Link className="item" to={"/Dashboard"}>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-sliders"></i>
                  <Link className="item" to={"/Dashboard/brands"}>
                    <p>Brands</p>
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-bucket"></i>
                  <Link className="item" to={"/Dashboard/Products"}>
                    <p>Products</p>
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <Link className="item" to={"/Dashboard/Orders"}>
                    <p>Orders</p>
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-coins"></i>
                  <Link className="item" to={"/Dashboard/Financial"}>
                    <p>Financials</p>
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-coins"></i>
                  <Link className="item" to={"/Dashboard/Account"}>
                    <p>Accounts</p>
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-coins"></i>
                  <Link className="item" to={"/Dashboard/Account"}>
                    <p>Category</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${
              darkmode === false
                ? "Sidebar-right-top"
                : "Sidebar-right-top darkmode-dark"
            }`}
          >
            <div className="content">
              <div className="Content-left">
                <label className={`${darkmode === false ? "" : "text-white"}`}>
                  Category
                </label>
                <br />
                <input
                  className={`${
                    darkmode === false ? "input" : "input darkmode-light"
                  }`}
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="content-right">
                <div className="Buttons">
                  <div className="button-1">
                    <button>Add Category</button>
                  </div>
                  <div className="button-2">
                    <button>Category</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Table-box">
              <table>
                <thead className={`${darkmode === false ? "" : "text-white"}`}>
                  <tr>
                    <div className="table-head">
                      <th>#</th>
                      <th>Title</th>
                      <th>Image Url</th>
                      <th>Is Active</th>
                      <th>Is Featured</th>
                      <th>Actions</th>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <div
                    className={`${
                      darkmode === false
                        ? "table-body"
                        : "table-body darkmode-light"
                    }`}
                  >
                    <div className="icon-text">
                      <i class="fa-regular fa-folder-open"></i>
                      <p>No Record</p>
                    </div>
                  </div>
                  <div className="no-records">
                    <p>No records</p>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
