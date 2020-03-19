import React from "react";
import Modal from "react-bootstrap/Modal";

import "./Modal.css";
import Button from "@material-ui/core/Button";

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
      <Modal.Body>{props.MBody}</Modal.Body>
      <Modal.Footer>
        <Button className={"purchase"}>{props.MFooter}</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalFunc;
