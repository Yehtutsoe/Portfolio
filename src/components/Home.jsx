import React from 'react';
import ResumeModal from './ResumeModal';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="py-5 bg-light w-100">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">Ye Htut Soe</h1>
            <h2 className="text-muted mb-4">C# ASP.NET Developer</h2>
            <p className="lead mb-4">
              Career-transitioning from Banking Sector with over 10 years of experience
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="mailto:yeandzarforever@gmail.com" className="btn btn-primary btn-lg mt-3">
                Email Me
              </a>
              <a href="tel:+959972869583" className="btn btn-outline-secondary btn-lg mt-3">
                Call Me
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Ye Htut Soe" 
                className="img-fluid rounded-circle border border-5 border-primary"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;