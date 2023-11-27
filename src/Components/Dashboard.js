import React from "react";
import "../Css/dashboard.css";
// import svg from "../Components/moon.svg";
// import accountsvg from "./account.svg";
import logo from "../images/darsi-logo.webp";
function Dashboard() {
  return (
    <>
      <div className="Header-container">
        <div className="header-container-left">
          <img alt="" src={logo} />
        </div>
        <div className="header-container-right">
          <div className="moon-icon">
            <i class="fa-regular fa-moon" style={{ color: "#5392fd" }}></i>
          </div>
          <div className="user-icon">
            <i class="fa-regular fa-user"></i>
          </div>

          <div className="vendor-info">
            <h4 className="Vendor-name">
              hassan gazder
              <p>Vendor</p>
            </h4>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="sidebar-container">
          <div className="content">
            <ul>
              <li>
                <i class="fa-solid fa-chart-line"></i>
                <p>Dashboard</p>
              </li>
              <li>
                <i class="fa-solid fa-sliders"></i>
                <p>Brands</p>
              </li>
              <li>
                <i class="fa-solid fa-bucket"></i>
                <p>Products</p>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Orders</p>
              </li>
              <li>
                <i class="fa-solid fa-coins"></i>
                <p>Financials</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-right">
          <div className="input-div">
            <label>Sales Date</label>
            <br />
            <input type="date" placeholder="pick date range" />
          </div>
          <div className="order-description">
            <div className="box">
              <div className="icon-head">
                <div className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p>Orders</p>
              </div>
              <div className="box-bottom">
                <div className="content">
                  <p>0</p>
                  <p>Pending</p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Completed</p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Cancelled</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="icon-head">
                <div className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p>Revenue</p>
              </div>
              <div className="box-bottom">
                <div className="content">
                  <p>0</p>
                  <p>Total</p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Active </p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Feature</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="icon-head">
                <div className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p>Products</p>
              </div>
              <div className="box-bottom">
                <div className="content">
                  <p>0</p>
                  <p>Available Balance</p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Pending Balance</p>
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <p>0</p>
                  <p>Withdraw</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-table">
            <div className="product-table-top">
              <div className="icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <p>Top</p>
              <div className="select-input">
                <select name="cars">
                  <option value={"3"}>1</option>
                  <option value={"3"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"3"}>5</option>
                </select>
              </div>
              <p>Products</p>
            </div>
            <div className="product-table-bottom">
              <table>
                <thead>
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
