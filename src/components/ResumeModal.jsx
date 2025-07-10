import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaFilePdf, FaDownload, FaTimes } from 'react-icons/fa';

const ResumeModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Trigger Button - Add this where you want the button to appear */}
      <Button 
        variant="primary" 
        onClick={() => setShow(true)}
        className="me-2"
      >
        <FaFilePdf className="me-2" /> View Resume
      </Button>

      {/* Modal */}
      <Modal 
        show={show} 
        onHide={() => setShow(false)} 
        size="lg" 
        centered
        backdrop="static"
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>
            <FaFilePdf className="me-2" /> Ye Htut Soe - Resume
          </Modal.Title>
          <Button 
            variant="outline-light" 
            onClick={() => setShow(false)}
            className="btn-sm"
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body className="p-0">
          <iframe 
            src="/YeHtutSoe(Resume).pdf" 
            width="100%" 
            height="500px"
            title="Ye Htut Soe Resume"
            style={{ border: 'none' }}
          />
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button 
            variant="outline-secondary" 
            onClick={() => setShow(false)}
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            href="/Ye_Htut_Soe_Resume.pdf" 
            download
            className="ms-2"
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResumeModal;