import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/Signup"}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
