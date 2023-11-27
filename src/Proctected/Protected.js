import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
    let navigate = useNavigate();
    useEffect(()=>{
        let signup = localStorage.getItem("Usersignup");
        let login = localStorage.getItem("Userlogin");
        if (!signup && !login) {
            navigate('/signup')
        }
    })
    
  return (
    <div>{props.component}</div>
  )
}
