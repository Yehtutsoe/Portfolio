import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Resume() {
  return (
    <Container id="resume" className="my-5">
      <h2>My Resume</h2>
      <Card>
        <Card.Body>
          <Card.Title>Resume of Ye Htut Soe</Card.Title>
          <Card.Text>
            Download my latest resume to learn more about my experience as a full-stack developer, my academic background, and certifications.
          </Card.Text>
          <Button 
            variant="primary" 
            href="/YeHtutSoe(Resume).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📄 Download Resume (PDF)
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Resume;
