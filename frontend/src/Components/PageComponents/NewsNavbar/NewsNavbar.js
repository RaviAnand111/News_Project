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
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("general")}
            >
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("business")}
            >
              Business <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("sports")}
            >
              Sports <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("health")}
            >
              Health <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("entertainment")}
            >
              Entertainment <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("science")}
            >
              Science <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="#"
              onClick={() => props.setCategory("technology")}
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
            className="user-icon me-5"
            onClick={() => {
              showModal ? setShowModal(false) : setShowModal(true);
            }}
          >
            {props.admin ? (
              <FontAwesomeIcon icon={faUserLock} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
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
