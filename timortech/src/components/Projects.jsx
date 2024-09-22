import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    { title: 'Project Alpha', description: 'A comprehensive web solution for e-commerce.' },
    { title: 'Project Beta', description: 'An AI-powered platform for data analytics.' },
    { title: 'Project Gamma', description: 'A mobile app for task management and collaboration.' }
  ];

  return (
    <Row>
      {projectList.map((project, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="bg-dark text-white h-100">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
