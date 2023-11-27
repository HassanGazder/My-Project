import React, { useState } from "react";
import "../Css/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let array = JSON.parse(localStorage.getItem("Userlogin")) || [];
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [emailvalidation, setemailvalidation] = useState("");
  let [passwordvalidate, setpasswordvalidate] = useState("");
  let [isaccountexist, setisaccountexist] = useState("");

  let navigate = useNavigate();
  function Userlogin(event) {
    event.preventDefault();
    let GetSignupData = localStorage.getItem("Usersignup");
    let ConverSignupData = JSON.parse(GetSignupData);


    // Step 1
    // --> check if any of the field is empty or incorrect
    // --> For all empty fields set errors accordingly
    // if any field is found empty or incorrect return with errors

      if(email === ""){
        setemailvalidation("email is required")
      }
      if (password === "") {
        setpasswordvalidate("password is required")
      }
      if (password.length <4) {
        setpasswordvalidate("password is to short")
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
          setisaccountexist("acount does not exist");
        } else {
          const Userlogin = {
            Loginemail: email,
            Loginpassword: password,
          };
          array.push(Userlogin);
          console.log(array);
          let converttoString = JSON.stringify(array);
          localStorage.setItem("Userlogin", converttoString);
          console.log("user logged in");
          navigate('/Dashboard')
        }
      }
    }
  }
  return (
    <>
      <div className="Container">
        <h4>Login</h4>
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
          <button type="submit" onClick={Userlogin}>
            Signup
          </button>
          <p className="accountnotexist">If you Already Have An Account <Link to="/signup">Signup</Link></p>
        </form>
      </div>
    </>
  );
}
