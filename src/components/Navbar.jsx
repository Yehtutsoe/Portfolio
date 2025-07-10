import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaGithub, FaFilePdf, FaDownload, FaTimes } from 'react-icons/fa';

const CustomNavbar = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-2">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 me-4">
            YE HTUT SOE
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="px-3 mx-1">Home</Nav.Link>
              <Nav.Link href="#about" className="px-3 mx-1">About</Nav.Link>
              <Nav.Link href="#education" className="px-3 mx-1">Education</Nav.Link>
              <Nav.Link href="#projects" className="px-3 mx-1">Projects</Nav.Link>
              <Nav.Link href="#contact" className="px-3 mx-1">Contact</Nav.Link>
              
              <div className="d-flex ms-4">
                <Button 
                  variant="outline-light" 
                  onClick={() => setShowResumeModal(true)}
                  className="mx-2 px-3 py-2"
                >
                  <FaFilePdf className="me-2" /> View Resume
                </Button>
                
                <Nav.Link 
                  href="https://github.com/Yehtutsoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mx-2 px-2 py-2"
                >
                  <FaGithub size={20} />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Resume Modal */}
      <Modal 
        show={showResumeModal} 
        onHide={() => setShowResumeModal(false)} 
        size="xl" 
        centered
        className="resume-modal"
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="fs-5">
            <FaFilePdf className="me-2" /> YE HTUT SOE - PROFESSIONAL RESUME
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <iframe 
            src="/Ye_Htut_Soe_Resume.pdf#view=FitH" 
            width="100%" 
            height="600px"
            title="Ye Htut Soe Resume"
            style={{ border: 'none' }}
          />
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button 
            variant="primary" 
            href="/Ye_Htut_Soe_Resume.pdf" 
            download
            className="px-4"
          >
            <FaDownload className="me-2" /> Download PDF
          </Button>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowResumeModal(false)}
            className="px-4"
          >
            <FaTimes className="me-2" /> Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomNavbar;