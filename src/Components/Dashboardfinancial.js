import React, { useState } from "react";
import logo from "../images/darsi-logo.webp";
import "../Css/dashboardfinancial.css";
import { Link } from "react-router-dom";
import '../index.css'

export default function Dashboardfinancial() {
  let [switchtable, setswitchtable] = useState(true);

  function swicthtablefunction() {
    if (switchtable === true) {
      setswitchtable(false);
    }
    if (switchtable === false) {
      setswitchtable(true);
    }
  }
  let [darkmode, setdarkmode] = useState(false);
  function enabledarkmode() {
    console.log('click');
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
      <div className={`${darkmode === false ? "Header-container" : "Header-container darkmode-light"}`}>
        <div className="header-container-left">
          <img alt="" src={logo} />
        </div>
        <div className="header-container-right">
        <div onClick={enabledarkmode} className={`${darkmode === false ? "moon-icon" : "moon-icon-dark-mode"}`}>
            <i class={`${darkmode === false ? "fa-regular fa-moon" : "fa-regular fa-sun sun-icon dark-mode-i"}`}></i>
          </div>
          <div className={`${darkmode === false ? "user-icon" : "user-icon-dark-mode"}`}>
            <i class="fa-regular fa-user"></i>
          </div>

          <div  className={`${darkmode === false ? "vendor-info" : "vendor-info-darkmode"}`}>
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
          <div className={`${darkmode === false ? "content" : "content darkmode-light"}`}>
            <ul>
              <li>
                <i class="fa-solid fa-chart-line"></i>
                <Link className="item" to={'/Dashboard'}>
                <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-sliders"></i>
                <Link className="item" to={'/Dashboard/brands'}><p>Brands</p></Link>
              </li>
              <li>
                <i class="fa-solid fa-bucket"></i>
                <Link className="item" to={'/Dashboard/Products'}>
                <p>Products</p>
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
                <Link className="item" to={'/Dashboard/Orders'}>
                <p>Orders</p>
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-coins"></i>
                <Link className="item" to={'/Dashboard/Financial'}>
                <p>Financials</p>
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-coins"></i>
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

          <div className={`${darkmode === false ? "Sidebar-right-top" : "Sidebar-right-top darkmode-dark"}`}>
            <div className="content">
              <div className="Content-left">
                <label className={`${darkmode === false ? "" : "text-white"}`}>Financial</label>
              </div>
              <div className="content-right">
                <div className="Buttons">
                  <div className="button-1 request-button">
                    <button>Make a Request</button>
                  </div>
                </div>
              </div>
            </div>
            {/* wallet payable withdraw */}
            <div className="WWP">
              <div className="wallet">
                <p className={`${darkmode === false ? "" : "text-white"}`}>Wallet: 0.00</p>
              </div>
              <div className="withdraw">
                <p className={`${darkmode === false ? "" : "text-white"}`}>Withdraw: 0</p>
              </div>
              <div className="payable">
                <p className={`${darkmode === false ? "" : "text-white"}`}>Payable:</p>
              </div>
            </div>
            {/* wallet payable withdraw */}

            {/* financial entries payment requests */}
            <div className="financial-payment">
              <div className="financial">
                <button onClick={swicthtablefunction}>
                  {switchtable === true ? (
                    <p className={`${darkmode === false ? "" : "text-white"}`} style={{ borderBottom: "2px solid #228be6" }}>
                      Financial Entries
                    </p>
                  ) : (
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Financial Entries</p>
                  )}
                </button>
              </div>
              <div className="Payment-request">
                <button onClick={swicthtablefunction}>
                  {switchtable === false ? (
                    <p className={`${darkmode === false ? "" : "text-white"}`} style={{ borderBottom: "2px solid #228be6" }}>
                      Payment Request
                    </p>
                  ) : (
                    <p className={`${darkmode === false ? "" : "text-white"}`}>Payment Request</p>
                  )}
                </button>
              </div>
            </div>
            {/* financial entries payment requests */}

            {/* switch table */}
            {switchtable === true ? (
              <div className="table-box">
                <table>
                  <thead className={`${darkmode === false ? "" : "text-white"}`}>
                    <tr>
                      <div className="table-head-financial">
                        <th>#</th>
                        <th>User</th>
                        <th>Type</th>
                        <th>Order Name</th>
                        <th>Role</th>
                        <th>Amount</th>
                        <th>Created At</th>
                      </div>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="table-body">
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
            ) : (
              <div className="table-box">
                <table>
                  <thead className={`${darkmode === false ? "" : "text-white"}`}>
                    <tr>
                      <div className="table-head-payment">
                        <th>#</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Account</th>
                        <th>Account Type</th>
                        <th>Amount Request</th>
                        <th>Amount Accepted</th>
                        <th>Status</th>
                        <th>Created At</th>
                      </div>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="table-body">
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
            )}
            {/* switch table */}
          </div>
        </div>
      </div>
    </>
  );
}
