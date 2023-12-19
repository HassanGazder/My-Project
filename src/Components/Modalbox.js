import React from "react";
import "../Css/modal.css";
export default function Modalbox(props) {
  function closemodal() {
    props.closemodal(false);
    console.log('close modal');
    console.log('false');
  }
  return (
    <div className="modal-parent">
      <div className="Modal-Box">
        <div className="heading-cross-button">
          <div className="heading">
            <p>{props.title}</p>
          </div>
          <div className="cros-button">
            <button onClick={closemodal}><i class="fa-solid fa-xmark" style={{color:"#c4c8cf"}}></i></button> 
          </div>
        </div>

        <div className="inputs-div">
          <label>{props.label}</label>
          <br />
          <input id="brand" type="text" placeholder={props.placeholder} />
          <br />
          <br />
          <label>Image</label>
          <br />
          <input id="image" alt="submit" type="image" width="48" height="48" />
          <div className="Feature-active-input">
            <div className="isFeature">
              <input id="isfeathure" type="checkbox" />
              <label>Is Feature</label>
            </div>
            <div className="isactive">
              <input id="isactive" type="checkbox" />
              <label>Is Active</label>
            </div>
          </div>
          <div className="submit-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
