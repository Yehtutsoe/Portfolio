import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Certifications() {
  return (
    <Container id="certifications" className="my-5">
      <h2>Certifications</h2>
      <Card>
        <Card.Body>
          <Card.Title>Enterprise Web Application Development (.NET 8)</Card.Title>
          <Card.Subtitle className="text-muted">ProDev Institute · Aug 2024</Card.Subtitle>
          <Card.Text>
            Training focused on ASP.NET Identity, EF Core, MVC, and more. Final project: Point of Sale system.
          </Card.Text>
          // ...existing code...
          <Card.Text>
            Training focused on ASP.NET Identity, EF Core, MVC, and more. Final project: Point of Sale system.
          </Card.Text>
          <a 
            href="/Certificate.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary mt-2"
          >
            View Certificate (PDF)
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Certifications;
