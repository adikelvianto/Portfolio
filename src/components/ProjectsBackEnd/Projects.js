import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function ProjectsBackEnd() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Back End</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Open Music API"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_backend/details_1"
              description="Open Music API - Dicoding Project"
              ghLink="https://github.com/adikelvianto/OpenMusicAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Bits-0f-C0de"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_backend/details_2"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_backend/details_3"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
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

export default ProjectsBackEnd;