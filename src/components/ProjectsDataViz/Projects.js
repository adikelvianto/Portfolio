import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import Card from "react-bootstrap/Card";

function ProjectsDataViz() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Data Processing and Visualization</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              title="Aircraft Transmission Monitoring"
              date="November 2023"
              description="Dashboard to monitor aircraft transmission status"
              demoLink="https://bit.ly/AircraftTransmissonDummy"
              link="/project_dataviz/details_1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              title="Repetitive Project Accomplishment Monitoring"
              date="September 2023"
              description="Dashboard to monitor several repetitive projects"
              demoLink="https://bit.ly/RepetitivePICADummy"
              link="/project_dataviz/details_1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              hasDemo={true}
              hasGithub={true}
              hasDetails={true}
              title="Editor.io"
              date="September 2023"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              link="/project_dataviz/details_1"            
            />
          </Col>
        </Row>
        <Card className="project-card-view">
          <Card.Body>
              <Link to="/projectlist">
                  <Button variant="primary">Back</Button>
              </Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default ProjectsDataViz;