// src/components/FormModal.js

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormModal = ({ user, submitted, showModal, handleCloseModal }) => {

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted &&
            <>
              <p>Nice job!  Here is the information returned from the API:</p>
              <p><b>First name: </b>{user.firstname}</p>
              <p><b>Last name: </b>{user.lastname}</p>
              <p><b>Email: </b>{user.email}</p>
              <p><b>Phone: </b>{user.phone}</p>
              <p><b>Terms of service: </b>{user.communication}</p>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;