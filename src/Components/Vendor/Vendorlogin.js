import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Vendorcss/venderlogin.css";
import logo from "../../images/darsi-logo.webp";
import { useNavigate } from "react-router-dom";
export default function Vendorlogin() {
  let navigate = useNavigate()
  let array = JSON.parse(localStorage.getItem("Userlogin")) || [];
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [emailvalidation, setemailvalidation] = useState("");
  let [passwordvalidate, setpasswordvalidate] = useState("");
  let [isaccountexist, setisaccountexist] = useState("");

  function Vendorlogin(event) {
    event.preventDefault();
    let GetSignupData = localStorage.getItem("Vendorsignup");
    let ConverSignupData = JSON.parse(GetSignupData);

    // Step 1
    // --> check if any of the field is empty or incorrect
    // --> For all empty fields set errors accordingly
    // if any field is found empty or incorrect return with errors

    if (email === "") {
      setemailvalidation("email is required");
    }
    if (password === "") {
      setpasswordvalidate("password is required");
    }
    if (password.length < 4) {
      setpasswordvalidate("password is to short");
    }

    if (ConverSignupData === null) {
      setisaccountexist("acount does not exist");
    } else {
      for (let index = 0; index < ConverSignupData.length; index++) {
        if (
          ConverSignupData[index].Uemail !== email ||
          ConverSignupData[index].Upassword !== password
        ) {
          console.log("done");
          setisaccountexist("Email or Password Does not Match");
        } else {
          const Vendorlogin = {
            Loginemail: email,
            Loginpassword: password,
          };
          array.push(Vendorlogin);
          console.log(array);
          let converttoString = JSON.stringify(array);
          localStorage.setItem("Vendorlogin", converttoString);
          console.log("user logged in");
          navigate('/Dashboard')
        }
      }
    }
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        "password": password,
        "email": email,
      }),
    };
    let fetchlogindata = fetch('http://localhost:5000/auth',options);

    fetchlogindata.then((data)=>{
      data.json().then((d)=>{
        console.log(d.message);
      })
    })


  }
  return (
    <div className="Vendor-login-Container">
      <div className="form-container">
        <div className="image">
          <img alt="" src={logo} />
        </div>
        <h1>Welcome back!</h1>
        <form>
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
            type="password"
            placeholder="Password"
          />
          <p>{passwordvalidate}</p>
          <br />
          <p>{isaccountexist}</p>
          <button type="submit" onClick={Vendorlogin}>
            Signup
          </button>
          <p className="accountnotexist">
            If you Already Have An Account{" "}
            <Link to="/Vendor/Signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
