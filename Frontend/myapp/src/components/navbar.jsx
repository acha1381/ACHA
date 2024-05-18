import React from "react";
import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => {
  return (
    <div className="NavBar">
    <div className="title">
    <h1> A C H A </h1>
    <h6>Transport Logistic and Management</h6>
      </div>
<div className="link-style">
    <Link to="/" className="link">Home </Link>
    <Link to="/About"  className="link">About</Link>
    <Link to="/Services"  className="link">Services</Link>
    <Link to="/Contact"  className="link">Contact</Link>
</div>

    </div>
  )
}

export default Navbar;