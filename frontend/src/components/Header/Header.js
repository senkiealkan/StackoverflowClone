import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import bars from "../../assets/bars-solid.svg";

function Header (){

    return(
        <div className="header-container">
        <div className="navbar">
          <button className="slide-in-icon" >
            <img src={bars} alt="bars" width="15" />
          </button>
          <div className="navbar-1">
            <Link to="/" className="nav-item nav-logo">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
              About
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
              Products
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
              For Teams
            </Link>
            <form>
              <input type="text" placeholder="Search..." />
              <img src={search} alt="search" width="18" className="search-icon" />
            </form>
          </div>
          <div className="navbar-2">
            <Link to="/login" className="nav-item nav-links">
              Log in
            </Link>
            <Link to="/signup" className="nav-item nav-links">
              Sign up
            </Link>
      
          </div>
        </div>
      </div>
    );
}

export default Header;