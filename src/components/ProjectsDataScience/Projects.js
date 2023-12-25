import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import datascience_icon from "../../Assets/Projects/Data Science Icon.png";


function ProjectsDataScience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="image-with-text">
          <strong className="purple">Data Science</strong>
          <img src={datascience_icon} alt="" className="aligned-image" />
        </h1>
        <br></br>
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Boeing 747 Auto Land Machine Learning Model"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_datasci/details_1"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Waypoint Following Business Jet Aircraft with Deep Learning"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_datasci/details_2"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Neural Style Transfer using AdaIn Method"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_datasci/details_3"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Avionics Component Failure Prediction"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              hasDetails={true}
              link="/project_datasci/details_3"
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

export default ProjectsDataScience;