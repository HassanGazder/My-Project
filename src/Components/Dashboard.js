import React from "react";
import "../Css/dashboard.css";
import logo from "../images/darsi-logo.webp";
import { Link } from "react-router-dom";
import '../index.css'
import { useState } from "react";
function Dashboard() {
  let [darkmode, setdarkmode] = useState(false);
  function enabledarkmode() {
    if (darkmode === false) {
      setdarkmode(true);
    }
    if (darkmode === true) {
      setdarkmode(false);
    }
  }
  console.log("darkmode",darkmode);
  return (
    <>
      <div
        className={`${
          darkmode === false
            ? "Header-container"
            : "Header-container darkmode-light"
        }  `}
      >
        <div className="header-container-left">
          <img alt="" src={logo} />
        </div>
        <div className="header-container-right">
          <div onClick={enabledarkmode} className={`${darkmode === false ? "moon-icon" : "moon-icon-dark-mode"}`}>
            <i class={`${darkmode === false ? "fa-regular fa-moon" : "fa-regular fa-sun sun-icon dark-mode-i"}`}></i>
          </div>
          <div className={`${darkmode === false ? "user-icon" : "user-icon-dark-mode"}`}>
            <i className="fa-regular fa-user"></i>
          </div>
          <div  className={`${
              darkmode === false ? "vendor-info" : "vendor-info-darkmode"
            }`}>
            <h4>
              hassan gazder
              <p>Vendor</p>
            </h4>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="sidebar-container">
          <div className={`${darkmode === false ? "content" : "content darkmode-light"}`}>
            <ul>
              <li>
                <i className="fa-solid fa-chart-line"></i>
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
                <i className="fa-solid fa-bucket"></i>
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
                <i className="fa-solid fa-coins"></i>
                <Link className="item" to={'/Dashboard/Account'}>
                <p>Accounts</p>
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-coins"></i>
                <Link className="item" to={'/Dashboard/Category'}>
                <p>Category</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

          <div className={`${darkmode === false ? "sidebar-right" : "sidebar-right darkmode-dark"}`}>
            <div className="input-div">
              <label className={`${darkmode === false ? "" : "text-white"}`}>Sales Date</label>
              <br />
              <input className={`${darkmode === false ?""  : "darkmode-light outline-none"}`} type="date" placeholder="pick date range" />
            </div>
            <div className="order-description">
              <div className={`${darkmode === false ? "box" : "box darkmode-light"}`}>
                <div className="icon-head">
                  <div className="icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <p className={`${darkmode === false ? "" : "text-white"}`}>Orders</p>
                </div>
                <div className="box-bottom">
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Pending</p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Completed</p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Cancelled</p>
                  </div>
                </div>
              </div>
              <div className={`${darkmode === false ? "box" : "box darkmode-light"}`}>
                <div className="icon-head">
                  <div className="icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <p className={`${darkmode === false ? "" : "text-white"}`}>Revenue</p>
                </div>
                <div className="box-bottom">
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Total</p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Active </p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Feature</p>
                  </div>
                </div>
              </div>
              <div className={`${darkmode === false ? "box" : "box darkmode-light"}`}>
                <div className="icon-head">
                  <div className="icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <p className={`${darkmode === false ? "" : "text-white"}`}>Products</p>
                </div>
                <div className="box-bottom">
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Available Balance</p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Pending Balance</p>
                  </div>
                  <div className="vertical"></div>
                  <div className="content">
                    <p className={`${darkmode === false ? "" : "text-white"}`}>0</p>
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Withdraw</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-table">
              <div className="product-table-top">
                <div className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p className={`${darkmode === false ? "" : "text-white"}`}>Top</p>
                <div className="select-input">
                  <select name="cars">
                    <option value={"3"}>1</option>
                    <option value={"3"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"3"}>5</option>
                  </select>
                </div>
                <p className={`${darkmode === false ? "" : "text-white"}`}>Products</p>
              </div>
              <div className="product-table-bottom">
                <table>
                  <thead className={`${darkmode === false ? "" : "text-white"}`}>
                    <tr>
                      <th>#</th>
                      <th>Name</th>

                      <div className="table-right">
                        <th>purchasing</th>
                        <th>Qty</th>
                        <th>Price</th>
                      </div>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Dashboard;
