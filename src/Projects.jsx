import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>CloudPOS</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Inventory & Sales Web App</Card.Subtitle>
          <Card.Text>
            Built using ASP.NET MVC , EF Core with UnitOfWork pattern and MSSQL. Achieved 98% data accuracy and optimized time by 60%.
          </Card.Text>
          <Button variant="outline-primary" href="https://github.com/Yehtutsoe/CloudPOS" target="_blank">
            View on GitHub
          </Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>CloudHRMS</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">HR & Payroll Web App</Card.Subtitle>
          <Card.Text>
            Built using ASP.NET MVC and EF Core. Improved HR efficiency by 70%, and ensured 99% payroll accuracy.
          </Card.Text>
          <Button variant="outline-primary" href="https://github.com/Yehtutsoe/CloudHRMS" target="_blank">
            View on GitHub
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Projects;
