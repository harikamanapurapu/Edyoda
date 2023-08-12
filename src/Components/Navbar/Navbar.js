import React from "react";
import "./Navbar.css";
import searchIcon from "../assets/searchIcon.png"
import logo from "../assets/logo.png"
import down from "../assets/downIcon.png"

const Navbar=()=>{
    return(
        <div className="Navbar-main">
            <div className="Left-content">
                <img src={logo} alt="logo" className="logo"/>
                <div className="options">
                    <p className="navbar-options">Courses </p>
                    <img src={down} alt="down" className="down"/>
                </div>
                <div className="options">
                    <p className="navbar-options">Programs </p>
                    <img src={down} alt="down" className="down"/>
                </div>
            </div>
            <div className="Right-content">
                <img src={searchIcon} alt="search" className="search"/>
                <p className="login">Log in</p>
                <button className="join">JOIN NOW</button>
            </div>

        </div>
    )
}

export default Navbar