import React from "react";
import { useState } from "react";
import logo from "../../images/darsi-logo.webp";
import { Link } from "react-router-dom";
import "../../Css/Vendorcss/Vendorsignup.css";
import { useNavigate } from "react-router-dom";
export default function Vendorsignup() {
  // let getvendor_api = 'http://localhost:5000/register';
  // let getdata = fetch(getvendor_api, {method:"POST"})
  // console.log(getdata);
  let navigate = useNavigate();
  let array = JSON.parse(localStorage.getItem("VendorUsersignup")) || [];
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [cpassword, setcpassword] = useState("");
  let [Cpasswordvalidation, setCpasswordvalidation] = useState("");
  let [passawordvalidation, setpassawordvalidation] = useState("");
  let [emailvalidation, setemailvalidation] = useState("");
  let [fnamevalidation, setfnmaevalidation] = useState("");
  let [lnamevalidation, setlnmaevalidation] = useState("");
  function VendorSignup(event) {
    event.preventDefault();
    let getdata = localStorage.getItem("Vendorsignup");
    let convertGetdata = JSON.parse(getdata);

    // Step 1
    // --> check if any of the field is empty or incorrect
    // --> For all empty fields set errors accordingly
    // if any field is found empty or incorrect return with errors
    if (fname === "") {
      setfnmaevalidation("First name is required");
    }
    if (lname === "") {
      setlnmaevalidation("Last name is required");
    }
    if (email === "") {
      setemailvalidation("email is required");
    }
    if (password === "") {
      setpassawordvalidation("password is required");
    }
    if (cpassword === "") {
      setCpasswordvalidation("confirm password is required");
    }
    if (password.length < 4) {
      setpassawordvalidation("Password Is to Short");
    }
    if (cpassword !== password) {
      setCpasswordvalidation("Password Does Not Match");
    }

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      password === "" ||
      cpassword === "" ||
      password.length < 4 ||
      cpassword !== password
    ) {
      return;
    }

    // Step 2
    // with the given email check if any email already exists
    // if yes return error
    // if no then signup
    if (convertGetdata === null) {
      const Vendorsignupinfo = {
        firstname: fname,
        lastname: lname,
        Uemail: email,
        Upassword: password,
        confirmpassword: cpassword,
      };
      array.push(Vendorsignupinfo);
      console.log(array);
      console.log("final");
      let converttoString = JSON.stringify(array);
      localStorage.setItem("Vendorsignup", converttoString);
    } else if (convertGetdata !== null) {
      for (let index = 0; index < convertGetdata.length; index++) {
        console.log("local storage email", convertGetdata[index].Uemail);
        console.log("input email", convertGetdata[index].Uemail);
        if (email === convertGetdata[index].Uemail) {
          console.log("email exist");
          setemailvalidation("Email Already Exist");
          return;
        }
      }
      var Vendorsignupinfo = {
        firstname: fname,
        lastname: lname,
        Uemail: email,
        Upassword: password,
        confirmpassword: cpassword,
      };
      array.push(Vendorsignupinfo);
      console.log(array);
      console.log("final");
      let converttoString = JSON.stringify(array);
      localStorage.setItem("Vendorsignup", converttoString);
    }
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        "firstname": fname,
        "lastname": lname,
        "password": password,
        "email": email,
        "role": "Vendor",
      }),
    };
    let fetchdata = fetch("http://localhost:5000/register", options);
    console.log(fetchdata);
    fetchdata.then((data) =>
      data.json().then((d) => {
        console.log(d.message);
        setemailvalidation(d.message)
        console.log("data",data);
       navigate("/Dashboard");
      })
    );
  }
  return (
    <div className="VendorSignup-Container">
      <div className="form-container">
        <div className="image">
          <img alt="" src={logo} />
        </div>
        <h1>Welcome to Darsi!</h1>
        <form onSubmit={VendorSignup}>
          <input
            onChange={(ev) => setfname(ev.target.value)}
            type="text"
            placeholder="First Name"
            value={fname}
          />
          <p>{fnamevalidation}</p>
          <br />
          <input
            onChange={(ev) => setlname(ev.target.value)}
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lname}
          />
          <p>{lnamevalidation}</p>
          <br />
          <input
            onChange={(ev) => setemail(ev.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
          />
          <br />
          <p>{emailvalidation}</p>
          <br />
          <input
            onChange={(ev) => setpassword(ev.target.value)}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
          <br />
          <p>{passawordvalidation}</p>
          <br />
          <input
            onChange={(ev) => setcpassword(ev.target.value)}
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={cpassword}
          />
          <br />
          <p>{Cpasswordvalidation}</p>
          <br />
          <button type="submit">
            Signup
          </button>
          <p className="accountexist">
            If you Already Have An Account <Link to="/Vendor/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
