import React from "react";

// Modal imports
import Modal from "react-bootstrap/Modal";

const ModalFunc = props => {
  return (
    <Modal show={props.show} onHide={() => props.handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{props.MTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.MBody}</Modal.Body>
      <Modal.Footer>{props.MFooter}</Modal.Footer>
    </Modal>
  );
};

export default ModalFunc;
