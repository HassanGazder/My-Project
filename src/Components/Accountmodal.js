import React from 'react'
import '../Css/accountmodal.css'
function Accountmodal(props) {
    function closemodal() {
        console.log('close modal');
        console.log('false');
        props.modal(false)
      }
  return (
    <div className="modal-parent">
    <div className="Modal-Box">
      <div className="heading-cross-button">
        <div className="heading">
          <p>Add UserAccount Details</p>
        </div>
        <div className="cros-button">
          <button onClick={closemodal}><i class="fa-solid fa-xmark" style={{color:"#c4c8cf"}}></i></button> 
        </div>
      </div>

      <div className="inputs-div">
        <label>Account Title</label>
        <br />
        <input id='account' type="text" placeholder='Enter your account name'/>
        <br />
        <br />
        <label>Select Type</label>
        <br />
        <select id='select'>
            <option>Easy Paisa</option>
            <option>Jazz Cash</option>
            <option>Bank</option>
        </select>
      <br/>
      <br/>
      <label>Account Number</label>
      <br/>
      <input id='accountnumber' type='text' placeholder='Enter your account name'/>
        <div className="submit-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Accountmodal