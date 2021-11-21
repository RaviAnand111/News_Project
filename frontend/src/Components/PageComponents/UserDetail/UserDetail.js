import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ProfileContext } from "../../../Context/ProfileContext";
import { useNavigate } from "react-router";
import "./UserDetail.css";

const UserDetail = (props) => {
  var navigate = useNavigate();
  const [userProfile, setUserProfile] = useContext(ProfileContext);
  const retrieveProfile = localStorage.setItem(
    "profile",
    JSON.stringify(userProfile)
  );
  const { f_name, l_name, email, dob, gender, phone, address } = userProfile;
  console.log(localStorage.getItem("profile"));

  function logout() {
    localStorage.removeItem("admintoken");
    navigate("/", { replace: true });
  }

  return (
    <div className="background">
      <Modal show={props.showModal}>
        <Modal.Header
          closeButton
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          <Modal.Title>{props.admin ? "Admin" : "User Profile"}</Modal.Title>
        </Modal.Header>
        {props.admin ? (
          <h2>ADMIN</h2>
        ) : (
          <Modal.Body>
            <h5>Name</h5>
            <p>{`${[f_name]} ${[l_name]}`}</p>
            <h5>Email</h5>
            <p>{[email]}</p>
            <h5>DOB</h5>
            <p>{[dob]}</p>
            <h5>Gender</h5>
            <p>{[gender]}</p>
            <h5>Phone</h5>
            <p>{[phone]}</p>
            <h5>Address</h5>
            <p>{[address]}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDetail;
