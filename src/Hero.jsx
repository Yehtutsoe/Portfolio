import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="bg-primary text-white text-center py-5">
      <Container>
        <h1>Hi, I'm Ye Htut Soe</h1>
        <p>C# Asp.NET Developer ·</p>
        <Button variant="light" href="#projects">View Projects</Button>
      </Container>
    </div>
  );
}

export default Hero;
