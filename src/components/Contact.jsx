import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Contact Me</h2>
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Get In Touch</Card.Title>
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="me-3" size={20} />
                  <a href="mailto:yeandzarforever@gmail.com">yeandzarforever@gmail.com</a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="me-3" size={20} />
                  <a href="tel:+959972869583">+95 997 286 9583</a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaGithub className="me-3" size={20} />
                  <a href="https://github.com/Yehtutsoe" target="_blank" rel="noopener noreferrer">
                    github.com/Yehtutsoe
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FaLinkedin className="me-3" size={20} />
                  <a href="https://www.linkedin.com/in/ye-htut-soe-10b51224b/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ye-htut-soe
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Send Me a Message</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;