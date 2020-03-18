import React from "react";

// Modal imports
import Modal from "react-bootstrap/Modal";
import PayPal from "../Paypal/PayPal";

import "./Modal.css";

const ModalFunc = props => {
  return (
    <Modal
      centered
      size={"lg"}
      show={props.show}
      onHide={() => props.handleClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.MTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.MBody}
        {PayPal()}
      </Modal.Body>
      <Modal.Footer>{props.MFooter}</Modal.Footer>
    </Modal>
  );
};

export default ModalFunc;
