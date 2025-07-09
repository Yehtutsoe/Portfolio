import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="#home">Ye Htut Soe</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#certifications">Certifications</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
