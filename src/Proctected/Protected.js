import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
    let navigate = useNavigate();
    useEffect(()=>{
        let signup = localStorage.getItem("Vendorsignup");
        let login = localStorage.getItem("Vendorlogin");
        if (!signup && !login) {
            navigate('/Vendor/Signup')
        }
    })
    
  return (
    <>
    <div>{props.component}</div>
    <div>{props.componentbrands}</div>
    <div>{props.componentProducts}</div>
    <div>{props.componentAccount}</div>
    <div>{props.componentOrders}</div>
    <div>{props.componentFinancial}</div>
    <div>{props.componentCategory}</div>
    <div>{props.componentaddproducts}</div>
    </>
  )
}
