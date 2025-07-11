import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Education() {
  return (
    <Container id="education" className="my-5">
      <h2>Education</h2>
      <Card>
        <Card.Body>
          <Card.Title>Bachelor of Computer Science</Card.Title>
          <Card.Subtitle className="text-muted">University of Computer Studies, Yangon · 2023</Card.Subtitle>
          <Card.Text>
            Graduated with a focus on software engineering, algorithms, and web development.
          </Card.Text>
          
              <a
                href="/YeHtutSoe(Degree).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                View Degree Certificate (PDF)
              </a>
           
              <a
                href="/Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2 mr-2"
              >
                View Certificate (PDF)
              </a>
           
          
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Education;