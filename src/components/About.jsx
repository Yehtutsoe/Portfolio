import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-5">About Me</h2>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <p className="lead">
                  I'm a career-transitioning C# .NET Developer with over 10 years of extensive experience in the banking sector.
                </p>
                <p>
                  I'm a strategist in bridging technology with real-world business challenges by automating workflows and streamlining operations. 
                  I possess in-depth knowledge in building various full-functional software solutions and have successfully launched enterprise 
                  systems such as CloudPOS and CloudHRMS using C#, ASP.NET MVC, and MSSQL.
                </p>
                <p>
                  I have a solid background in using various software tools and am confident in bringing my expertise to deliver outstanding 
                  results to the team. I'm currently seeking to join either in-house development or outsourcing teams in Thailand and international markets.
                </p>
                
                <h5 className="mt-4">Technical Skills</h5>
                <ul className="list-unstyled row">
                  <li className="col-md-6"><strong>Languages & Frameworks:</strong> C#, ASP.NET MVC, EF Core, LINQ, JavaScript</li>
                  <li className="col-md-6"><strong>Frontend Tools:</strong> HTML, CSS, jQuery, Ajax</li>
                  <li className="col-md-6"><strong>Databases:</strong> MSSQL, MySQL, MongoDB</li>
                  <li className="col-md-6"><strong>Tools & IDEs:</strong> Git, GitHub, Visual Studio, WinForms</li>
                  <li className="col-md-6"><strong>Other:</strong> OOP, REST APIs, Agile Basics</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;