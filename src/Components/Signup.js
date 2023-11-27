import React from "react";
import "../Css/signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let array = JSON.parse(localStorage.getItem("Usersignup")) || [];
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

  let navigate = useNavigate()
  function Usersignup(event) {
    event.preventDefault();
    let getdata = localStorage.getItem("Usersignup");
    let convertGetdata = JSON.parse(getdata);
    // let Isemailexist;

    // Step 1
    // --> check if any of the field is empty or incorrect
    // --> For all empty fields set errors accordingly
    // if any field is found empty or incorrect return with errors
    if (fname === "") {
      setfnmaevalidation("First name is required");
      // return;
    }
    if (lname === "") {
      setlnmaevalidation("Last name is required");
      // return;
    }
    if (email === "") {
      setemailvalidation("email is required");
      // return;
    }
    if (password === "") {
      setpassawordvalidation("password is required");
      // return;
    }
    if (cpassword === "") {
      setCpasswordvalidation("confirm password is required");
      // return;
    }
    if (password.length < 4) {
      setpassawordvalidation("Password Is to Short");
      // return;
    }
    if (cpassword !== password) {
      setCpasswordvalidation("Password Does Not Match");
      // return;
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
      const usersignupinfo = {
        firstname: fname,
        lastname: lname,
        Uemail: email,
        Upassword: password,
        confirmpassword: cpassword,
      };
      array.push(usersignupinfo);
      console.log(array);
      console.log("final");
      let converttoString = JSON.stringify(array);
      localStorage.setItem("Usersignup", converttoString);
      alert("no data available");
      navigate('/Dashboard')


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
      const usersignupinfo = {
        firstname: fname,
        lastname: lname,
        Uemail: email,
        Upassword: password,
        confirmpassword: cpassword,
      };
      array.push(usersignupinfo);
      console.log(array);
      console.log("final");
      let converttoString = JSON.stringify(array);
      localStorage.setItem("Usersignup", converttoString);
      navigate('/Dashboard')
      

    }
  }
  return (
    <>
      <div className="container">
        <h4>Signup</h4>
        <form>
          <input
            onChange={(ev) => setfname(ev.target.value)}
            required
            type="text"
            placeholder="First Name"
          />
          <p>{fnamevalidation}</p>
          <br />
          <input
            onChange={(ev) => setlname(ev.target.value)}
            required
            type="text"
            placeholder="Last Name"
          />
          <p>{lnamevalidation}</p>
          <br />
          <input
            onChange={(ev) => setemail(ev.target.value)}
            // required
            type="email"
            placeholder="Email"
          />
          <br />
          <p>{emailvalidation}</p>
          <br />
          <input
            onChange={(ev) => setpassword(ev.target.value)}
            required
            type="password"
            placeholder="Password"
          />
          <br />
          <p>{passawordvalidation}</p>
          <br />
          <input
            onChange={(ev) => setcpassword(ev.target.value)}
            required
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <p>{Cpasswordvalidation}</p>
          <br />
          <button type="submit" onClick={Usersignup}>
            Signup
          </button>
          <p className="accountexist">If you Already Have An Account <Link to="/login">Login</Link></p>
        </form>
      </div>
    </>
  );
}
