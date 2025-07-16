import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import profileImage from '../assets/profile1.jpg'

const Home = () => {
  return (
    <section id="home" className="section bg-light">
      <div className="section-container">
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Ye Htut Soe</h1>
            <h2 className="text-primary mb-4">C# .NET Developer</h2>
            <p className="lead mb-4">
              Career-transitioning from Banking Sector with over 10 years of experience
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Button variant="primary" size="lg" href="#contact">
                Contact Me
              </Button>
              <Button variant="outline-primary" size="lg" href="mailto:yeandzarforever@gmail.com">
                Email Me
              </Button>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Ye Htut Soe"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Home