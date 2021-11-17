import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import UserDetail from "../UserDetail/UserDetail";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          WorldView
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
            {/* <Link className="nav-item nav-link active" to="#">
              <button type="button" class="btn btn-outline-dark">
                Dark
              </button>
            </Link> */}
            <div
              className="user-icon me-5"
              onClick={() => {
                showModal ? setShowModal(false) : setShowModal(true);
              }}
            >
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>
            {showModal === true && <UserDetail show={true} />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
