import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import backend_icon from "../../Assets/Projects/Back End Icon.png";

function ProjectsBackEnd() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="image-with-text">
          <strong className="purple">Back End</strong>
          <img src={backend_icon} alt="" className="aligned-image" />
        </h1>
        <br></br>
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Forum API"
              date="August 2023"
              hasDemo={true}
              hasGithub={false}
              link="/project_backend/details_1"
              description="CI CD Test of Forum API, Clean Architecture, ForumAPI for gamer platform study case"
              ghLink="https://github.com/adikelvianto/ForumAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Open Music API"
              date="July 2023"
              hasDemo={true}
              hasGithub={false}
              link="/project_backend/details_2"
              description="Open Music API - Dicoding Project"
              ghLink="https://github.com/adikelvianto/OpenMusicAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="BookShelf API"
              date="November 2022"
              hasDemo={true}
              hasGithub={false}
              link="/project_backend/details_2"
              description="CI CD Test of Forum API"
              ghLink="https://github.com/adikelvianto/ForumAPI"
            />
          </Col>
        </Row>
        <Link to="/projectlist" className="back-button">
          <Button variant="primary">Back to My Projects</Button>
        </Link>
      </Container>
    </Container>
  );
}

export default ProjectsBackEnd;