import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaGithub, FaFilePdf, FaDownload, FaTimes } from 'react-icons/fa';

const CustomNavbar = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            YE HTUT SOE
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#about" className="mx-2">About</Nav.Link>
              <Nav.Link href="#education" className="mx-2">Education</Nav.Link>
              <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
              <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
              
              <Button 
                variant="outline-light" 
                className="mx-2"
                onClick={() => setShowResumeModal(true)}
              >
                <FaFilePdf className="me-2" /> Resume
              </Button>
              
              <Nav.Link 
                href="https://github.com/Yehtutsoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ms-2"
              >
                <FaGithub size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Resume Modal */}
      <Modal 
        show={showResumeModal} 
        onHide={() => setShowResumeModal(false)} 
        size="lg" 
        centered
        backdrop="static"
        className="resume-modal"
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>
            <FaFilePdf className="me-2" /> YE HTUT SOE - RESUME
          </Modal.Title>
          <Button 
            variant="outline-light" 
            onClick={() => setShowResumeModal(false)}
            className="btn-sm"
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body className="p-0">
          <iframe 
            src="/Ye_Htut_Soe_Resume.pdf" 
            width="100%" 
            height="500px"
            title="Ye Htut Soe Resume"
            style={{ border: 'none' }}
          />
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowResumeModal(false)}
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

export default CustomNavbar;