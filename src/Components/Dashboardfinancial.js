import React from "react";
import logo from "../images/darsi-logo.webp";
import '../Css/dashboardfinancial.css';
export default function Dashboardfinancial() {
  return (
    <>
      <div className="Header-container">
        <div className="header-container-left">
          <img alt="" src={logo} />
        </div>
        <div className="header-container-right">
          <div className="moon-icon">
            <i class="fa-regular fa-moon"></i>
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
      <div className="hero-parent">
        <div className="hero-child">
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

          <div className="Sidebar-right-top">
            <div className="content">
              <div className="Content-left">
                <label>Financial</label>
              </div>
              <div className="content-right">
                <div className="buttons">
                  <div className="button-1">
                    <button>Add brand</button>
                  </div>
                  <div className="button-2">
                    <button>Brand</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="WWP">
              <div className="wallet">
                <p>Wallet: 0.00</p>
              </div>
              <div className="withdraw">
                <p>Withdraw: 0</p>
              </div>
              <div className="payable">
                <p>Payable:</p>
              </div>
            </div>
            <div className="table-box">
              <table>
                <thead>
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
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
