import React from 'react';
import { Modal } from 'react-bootstrap';

const VehicleModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Vehicle of Interest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h4>some text</h4>
      </Modal.Body>
    </Modal>
  );
};

export default VehicleModal;