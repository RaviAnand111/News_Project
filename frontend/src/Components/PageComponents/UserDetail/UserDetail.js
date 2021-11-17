import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserDetail = (props) => {
  const [showValue, setShowValue] = useState(props.show);

  return (
    <div>
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
          <h3>Email</h3>
          <p></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Logout</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDetail;
