import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import Signup from "./Components/Signup";
function App() {
  let signup = localStorage.getItem("Usersignup");
  let login = localStorage.getItem("Userlogin");
  let navigate = useNavigate();
  useEffect(() => {
    if (!signup && !login) {
      navigate("/signup");
    }
    if (signup !== null || login !== null) {
      navigate('/Dashboard')
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
