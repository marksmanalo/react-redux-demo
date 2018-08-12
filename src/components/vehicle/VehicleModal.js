import React from 'react';
import { Modal } from 'react-bootstrap';
import VehicleTable from './VehicleTable';

const VehicleModal = ({show, handleClose, vehicle}) => {
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Vehicle of Interest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VehicleTable vehicle={vehicle} />
      </Modal.Body>
    </Modal>
  );
};

export default VehicleModal;