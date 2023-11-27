import React from "react";
import "../Css/header.css";
import logo from "../images/darsi-logo.webp";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="top-header">
          <ul>
            <li>
              <Link className="item" to={'/Vendor/Signup'}>become a vendor</Link>
            </li>
            <li>
              <Link className="item">Signup as Refferer</Link>
            </li>
            <li>
              <Link className="item" to={'/signup'}>signup</Link>
            </li>
            <li>
              <Link className="item" to={'/login'}>login</Link>
            </li>
          </ul>
        </div>
        <div className="bottom-header">
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <input type="text" placeholder="search Questions" />
              <button>
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </li>
            <li><Link className="item">Home</Link></li>
            <li>
              <Link className="item" style={{textDecoration:"none"}} to={"/products"}>Products</Link>
            </li>
            <li><Link className="item">About</Link></li>
            <li>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "#fafcff" }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
