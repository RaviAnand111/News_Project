import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserLock,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./NewsNavbar.css";
import UserDetail from "../UserDetail/UserDetail";
import AddNews from "../AddNews/AddNews";

function NewsNavbar(props) {
  const [showModal, setShowModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  // props.setCategory("science");

  function clicked(e) {
    props.setCategory(e.target.name);
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.name === e.target.name) {
        e.target.style.borderBottom = "1px solid black";
      } else {
        link.style.border = "none";
      }
    });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          <span className="brand">WorldView</span>
        </Link>
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
            <Link
              name="general"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="business"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Business <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="sports"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Sports <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="health"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Health <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="entertainment"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Entertainment <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="science"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Science <span className="sr-only">(current)</span>
            </Link>
            <Link
              name="technology"
              className="nav-item nav-link active"
              to="#"
              onClick={clicked}
            >
              Technology <span className="sr-only">(current)</span>
            </Link>
          </div>
          {props.admin && (
            <div
              className="add-icon"
              onClick={() => {
                showNewsModal
                  ? setShowNewsModal(false)
                  : setShowNewsModal(true);
              }}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="2x" />
            </div>
          )}
          {props.admin && showNewsModal && (
            <AddNews
              showNews={showNewsModal}
              showNewsModal={setShowNewsModal}
            />
          )}
          {props.admin && (
            <p
              className="add-news"
              onClick={() => {
                showNewsModal
                  ? setShowNewsModal(false)
                  : setShowNewsModal(true);
              }}
            >
              Add News
            </p>
          )}
          <div
            className="user me-5"
            onClick={() => {
              showModal ? setShowModal(false) : setShowModal(true);
            }}
          >
            {props.admin ? (
              <FontAwesomeIcon
                className="admin-icon"
                icon={faUserLock}
                size="2x"
              />
            ) : (
              <FontAwesomeIcon
                className="user-icon"
                icon={faUserCircle}
                size="2x"
              />
            )}
          </div>
          {showModal === true && (
            <UserDetail
              showModal={showModal}
              setShowModal={setShowModal}
              admin={props.admin}
            />
          )}
        </div>
      </nav>
    </div>
  );
}

export default NewsNavbar;
