import React from "react";
import "../Css/addproduct.css";
import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Addproduct() {
  let [coloraccordian, setcoloraccordian] = useState(false);
  let [sizeaccordian, setsizeaccordian] = useState(false);
  let [materialaccordian, setmaterialaccordian] = useState(false);
  let [styleaccordian, setstyleaccordian] = useState(false);

  function Accordian() {
    if (coloraccordian === true) {
      setcoloraccordian(false);
      console.log("false");
    }
    if (coloraccordian === false) {
      setcoloraccordian(true);
      console.log("true");
    }
    console.log("click");
  }
  function Sizeaccordian() {
    if (sizeaccordian === true) {
      setsizeaccordian(false);
    }
    if (sizeaccordian === false) {
      setsizeaccordian(true);
    }
  }
  function Materialaccordian() {
    if (materialaccordian === true) {
      setmaterialaccordian(false);
    }
    if (materialaccordian === false) {
      setmaterialaccordian(true);
    }
  }
  function Styleaccoridan() {
    if (styleaccordian === true) {
      setstyleaccordian(false);
    }
    if (styleaccordian === false) {
      setstyleaccordian(true);
    }
  }
  return (
    <>
      <div className="Add-products">
        <div className="heading-cros-button">
          <div className="heading">
            <p>Add Product Details</p>
          </div>
          <div className="crosbutton">
            <button> <Link to={'/Dashboard/Products'}>x</Link></button>
          </div>
        </div>
        <form>
          <div className="products-inputs">
            <div className="products-inputs-left">
              <label>Product Name</label>
              <br />
              <input type="text" placeholder="Product Name" />
              <br />
              <br />
              <div className="category">
                <label>Category</label>
                <br />
                <select placeholder="Category">
                  <option>Shoes</option>
                  <option>Copypencil</option>
                  <option>Books</option>
                  <option>lunch boxes</option>
                  <option>Water Bottles</option>
                  <option>Toys</option>
                  <option>Uniforms</option>
                  <option>Stationery Sets</option>
                  <option>School Bags</option>
                  <option>Darsi Publication</option>
                </select>
              </div>
              <div className="brand-product-inputs">
                <div className="brand">
                  <br />
                  <label>Brand</label>
                  <br />
                  <select placeholder="brands">
                    <option>Other</option>
                  </select>
                </div>
                <div className="product">
                  <br />
                  <label>Product Tags</label>
                  <br />
                  <input type="text" placeholder="product tags" />
                </div>
              </div>
              <div className="vendor-selling-stock">
                <div className="vendor">
                  <br />
                  <label>Vendor</label>
                  <input type="number" />
                </div>
                <div className="selling">
                  <br />
                  <label>Selling Price</label>
                  <input type="number" />
                </div>
                <div className="stock">
                  <br />
                  <label>In Stock</label>
                  <input type="number" />
                </div>
              </div>
              <div className="image-input">
                <br />
                <label>Upload Images</label>
                <input alt="submit" type="image" width="48" height="48" />
              </div>
              <div className="save-and-back-buttons">
                <div className="save">
                  <button>Save</button>
                </div>
                <div className="back">
                  <button>back</button>
                </div>
              </div>
            </div>
            <div className="products-inputs-right">
              <div className="subject-isbn">
                <div className="subject">
                  <label>Subject</label>
                  <br />
                  <input
                    autoComplete="false"
                    type="text"
                    placeholder="subject"
                  />
                </div>
                <div className="isbn">
                  <label>ISBN Number</label>
                  <br />
                  <input type="text" placeholder="isbn number" />
                </div>
              </div>
              <div className="age-target">
                <label>Age Target</label>
                <p>Age should be min 1</p>
                <input type="age" placeholder="Your Age" />
                <br />
              </div>
              <div className="isavailable">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1">Is Available</label>
              </div>
              <div onClick={Accordian} className="color-accoridan">
                <div className="title">
                  <p>Color</p>
                </div>
                <div className="icon">
                  {coloraccordian === false ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              </div>
              {coloraccordian === true ? (
                <div className="color-inputs">
                  <label>Value</label>
                  <br />
                  <input type="text" placeholder="Value" />
                </div>
              ) : (
                ""
              )}
              <div onClick={Sizeaccordian} className="color-accoridan">
                <div className="title">
                  <p>Size</p>
                </div>
                <div className="icon">
                  {sizeaccordian === false ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              </div>
              {sizeaccordian === true ? (
                <div className="color-inputs">
                  <label>Value</label>
                  <br />
                  <input type="text" placeholder="Value" />
                </div>
              ) : (
                ""
              )}
              <div onClick={Materialaccordian} className="color-accoridan">
                <div className="title">
                  <p>Material</p>
                </div>
                <div className="icon">
                  {materialaccordian === false ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              </div>
              {materialaccordian === true ? (
                <div className="color-inputs">
                  <label>Value</label>
                  <br />
                  <input type="text" placeholder="Value" />
                </div>
              ) : (
                ""
              )}
              <div onClick={Styleaccoridan} className="color-accoridan">
                <div className="title">
                  <p>Style</p>
                </div>
                <div className="icon">
                  {styleaccordian === false ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </div>
              </div>
              {styleaccordian === true ? (
                <div className="color-inputs">
                  <label>value</label>
                  <br />
                  <input type="text" placeholder="value" />
                </div>
              ) : (
                ""
              )}
              <div className="description">
                <label>Description</label>
                <br />
                <textarea
                  placeholder="Description"
                  rows={7}
                  cols={100}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
