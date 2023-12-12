import React from "react";
import "../Css/addproduct.css";
function Addproduct() {
  return (
    <>
      <div className="Add-products">
        <div className="heading-cros-button">
          <div className="heading">
            <p>Add Product Details</p>
          </div>
          <div className="crosbutton">
            <button>x</button>
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
              <label>Category</label>
              <br />
              <input type="text" placeholder="Category" />
              <div className="brand-product-inputs">
                <div className="brand">
                  <br />
                  <label>Brand</label>
                  <br />
                  <input type="text" placeholder="brand" />
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
                  <input type="text" />
                </div>
                <div className="selling">
                  <br />
                  <label>Selling Price</label>
                  <input type="text" />
                </div>
                <div className="stock">
                  <br />
                  <label>In Stock</label>
                  <input type="text" />
                </div>
              </div>
              <div className="image-input">
                <br />
                <label>Upload Images</label>
                <input alt="submit" type="image" width="48" height="48" />
              </div>
            </div>
            <div className="products-inputs-right">
              <div className="subject-isbn">
                <div className="subject">
                  <label>Subject</label>
                  <br />
                  <input type="text" placeholder="subject" />
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
                <label for="vehicle1">Is Available</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
