import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark">
        <Link className="navbar-brand" to="/">
          WorldView
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/Login">
                <button type="button" class="btn btn-light">
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/Signup"}>
                <button type="button" class="btn btn-light">
                  Signup
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/AdminLogin"}>
                <button type="button" class="btn btn-light">
                  Admin Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
