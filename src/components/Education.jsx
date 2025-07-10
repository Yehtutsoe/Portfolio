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
          <div className="row">
            <div className="col-4">
              <a
                href="/YeHtutSoe(Degree).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                View Degree Certificate (PDF)
              </a>
            </div>
            <div className="col-3">
              <a
                href="/Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2"
              >
                View Certificate (PDF)
              </a>
            </div>
          </div>
          
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Education;