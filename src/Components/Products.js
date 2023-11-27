import React from "react";
import "../Css/products.css";
import cardimage from "../images/cardimage.webp";
import { useState } from "react";
export default function Products() {
  let [accordian, setaccordian] = useState(false);

  function Accordian() {
    if (accordian === true) {
      setaccordian(false);
      // console.log(true);
    }
    if (accordian === false) {
      setaccordian(true);
    }
  }
  return (
    <>
      <div className="parent-div">
        <div className="box">
          <h2>Products</h2>
          <div className="accordian">
            <button onClick={Accordian}>
              <div className="icon-title">
                <div className="title">
                  <p>Filters</p>
                </div>
                <div className="icon">
                  {accordian === false ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              </div>
            </button>
            {accordian === true ? (
              <div className="accordian-inputs">
                <label>
                  Category
                  <select name="cars">
                    <option value={"3"}>1</option>
                    <option value={"3"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"3"}>5</option>
                  </select>
                </label>
                <label>
                  recent
                  <select name="cars">
                    <option value={"3"}>1</option>
                    <option value={"3"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"3"}>5</option>
                  </select>
                </label>
                <label>
                  age
                  <select name="cars">
                    <option value={"3"}>1</option>
                    <option value={"3"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"3"}>5</option>
                  </select>
                </label>
                <label>
                  brands
                  <select name="cars">
                    <option value={"3"}>1</option>
                    <option value={"3"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"3"}>5</option>
                  </select>
                </label>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="All-cards">
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
            <div className="card">
              <img src={cardimage} alt="" />
              <div className="product-description">
                <p className="name">Smart Copy Series Urdu 3 in 1</p>
                <p className="price">RS.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
