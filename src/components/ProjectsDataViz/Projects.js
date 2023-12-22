import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              link="/project_dataviz/details_2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              title="Brazillian E-Commerce"
              date="November 2023"
              description="Analysis of brazillian e commerce dataset for year 2018-2022 and dashboard building using Streamlit"
              demoLink="https://brazillian-e-commerce.streamlit.app/"
              link="/project_dataviz/details_3"            
            />
          </Col>
        </Row>
              <Link to="/projectlist" className="back-button">
                  <Button variant="primary">Back</Button>
              </Link>
      </Container>
    </Container>
  );
}

export default ProjectsDataViz;