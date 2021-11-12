import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                Politics
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                Sports
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                Business
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                World
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#">
                Native
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
