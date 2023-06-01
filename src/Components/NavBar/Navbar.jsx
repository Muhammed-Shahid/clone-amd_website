import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              style={{ width: "110px" }}
              src={process.env.PUBLIC_URL + "/amd-header-logo.svg"}
              alt=""
            /> 
          </div>{" "}
        </a>

        <div className="navLeftSide">
          <ul className="nav-links">
            <div className="menu">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/about">Solutions</a>
              </li>

              <li style={{ cursor: "pointer" }}>Download & Support</li>
              <li>
                <a href="/contact">Shop</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="navRightSide"></div>
      </nav>
    </div>
  );
}

export default Navbar;
