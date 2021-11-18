import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ProfileContext } from "../../../Context/ProfileContext";
import "./UserDetail.css";

const UserDetail = (props) => {
  const [showValue, setShowValue] = useState(props.show);
  const [userProfile, setUserProfile] = useContext(ProfileContext);
  const { f_name, l_name, email, dob, gender, phone, address } = userProfile;
  return (
    <div class="background">
      <Modal show={showValue}>
        <Modal.Header
          closeButton
          onClick={() => {
            setShowValue(false);
          }}
        >
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
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
        <Modal.Footer>
          <Button variant="secondary">Logout</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDetail;
