import React from 'react';
import { Container, Badge } from 'react-bootstrap';

function Skills() {
  const skills = [
    "C#", "ASP.NET MVC", "EF Core", "MSSQL",
    "MongoDB", "WinForms", "Git/GitHub",
    "HTML", "CSS", "JavaScript", "Bootstrap", "React"
  ];

  return (
    <Container id="skills" className="my-5">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Badge key={index} bg="secondary" className="m-1">{skill}</Badge>
      ))}
    </Container>
  );
}

export default Skills;
