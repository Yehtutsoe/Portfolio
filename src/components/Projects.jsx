import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Project Highlights</h2>
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>CloudPOS - Retail Point-of-Sale System</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Stack: C#, WinForms, MSSQL</Card.Subtitle>
                <Card.Text>
                  A desktop application designed for phone shops to automate inventory and streamline daily sales operations.
                </Card.Text>
                <ul>
                  <li>Liaised with a cross-functional team to outline requirements and consolidate key business functions into modules</li>
                  <li>Implemented real-time data updates and local database synchronization</li>
                  <li>Reduced manual invoice processing time by 60%</li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" href="https://github.com/Yehtutsoe/CloudPOS.git" target="_blank">
                  View on GitHub
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>CloudHRMS - Human Resource Management System</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Stack: ASP.NET MVC, EF Core, MSSQL</Card.Subtitle>
                <Card.Text>
                  A web-based application built to streamline HR functions such as employee records, payroll, and attendance management for SMEs.
                </Card.Text>
                <ul>
                  <li>Designed and developed core modules for attendance tracking and payroll processing</li>
                  <li>Built secure login system with user role permissions</li>
                  <li>Automated monthly salary calculations and data entry</li>
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" href="https://github.com/Yehtutsoe/CloudHRMS.git" target="_blank">
                  View on GitHub
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;