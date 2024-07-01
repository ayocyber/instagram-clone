import React from "react";
import "../Style/Navbar.css"
import pic1 from "../Data/logo.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Menu";

function NavBar(){
    return(
        <div className="navbar-container">
            <div className="container">
                <img src={pic1} className="logo" alt="logo" width="50px"/>
            <div className="search">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="search"/>
            </div>
             <Menu />
            </div>
        </div>
    )
}

export default NavBar