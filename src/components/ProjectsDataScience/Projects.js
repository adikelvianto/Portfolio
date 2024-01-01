import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artjuna from "../../Assets/Projects/artjuna.png";
import autoland from "../../Assets/Projects/autoland.png";
import fo_waypoint from "../../Assets/Projects/fo_waypoint.png";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoland}
              title="Boeing 747 Auto Land Machine Learning Model"
              date="September 2023"
              hasDemo={false}
              hasGithub={true}
              link="/project_datasci/details_1"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/adikelvianto/Auto_Landing_DL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fo_waypoint}
              title="Waypoint Following Business Jet Aircraft with Deep Learning"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_2"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/adikelvianto/Fly-Over_Waypoints_DL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artjuna}
              title="Neural Style Transfer using AdaIn Method"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_3"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Artjuna/artjuna-monorepo/tree/main/model/style_transfer"
              demoLink="https://adain-demo.streamlit.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artjuna}
              title="Avionics Component Failure Prediction"
              date="September 2023"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_4"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction"
              demoLink="https://adikelvianto00.pythonanywhere.com/"              
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

export default ProjectsDataScience;