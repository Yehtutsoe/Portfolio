import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Certifications from './Certifications';
import Education from './Education';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#certifications">Certifications</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Certifications />
        <Education />
      </main>
    </>
  );
}
export default App;