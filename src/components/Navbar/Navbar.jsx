import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import img from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={img} alt="" />
      <nav ref={navRef} onClick={showNavbar}>
        <Link to="/">
          <i className="fas fa-home" aria-label="Home icon" />
          &nbsp;Home
        </Link>
        <Link to="/about">
          <i className="fas fa-address-card" aria-label="Home icon" />
          &nbsp;About
        </Link>
        <button className="nav-btn nav-close-btn" onClick={!showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
