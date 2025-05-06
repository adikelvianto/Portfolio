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
              title="Deep Learning-Based Elevator & Throttle Modeling for Boeing 747 Landings"
              date="October 2022"
              hasDemo={false}
              hasGithub={true}
              link="/project_datasci/details_1"
              description="Built a deep learning model for Boeing 747 auto-landing using real Flight Data Recorder (FDR) data. Trained separate models for elevator and throttle control to mimic landing behavior.
               Built with TensorFlow and preprocessed over 300 flight records."
              ghLink="https://github.com/adikelvianto/Auto_Landing_DL"
              projectType="airline"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fo_waypoint}
              title="Deep Learning-Based Fly-Over Waypoints Control System for Business Jet Aircraft"
              date="August 2022"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_2"
              description="Built a deep learning controller for Cirrus Vision SF50 to follow multiple waypoints using flight data from PID-based missions.
               Trained with categorized roll-angle data to evaluate how training characteristics affect model performance. Simulated with MATLAB, Simulink, and X-Plane."
              ghLink="https://github.com/adikelvianto/Fly-Over_Waypoints_DL"
              demoLink="https://user-images.githubusercontent.com/92104520/196455059-49da6a68-7dc4-442a-bf2d-cf279a6bc297.mp4"
              projectType="airline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artjuna}
              title="Personalized Product Image Generation using a Neural Style Transfer Model"
              date="June 2022"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_3"
              description='Built a Neural Style Transfer model as part of a social e-commerce platform for local artists called "Artjuna". Enabled users to generate personalized product designs by combining their photos with artisan art styles. Trained on ~18k images using TensorFlow.'
              ghLink="https://github.com/Artjuna/artjuna-monorepo/tree/main/model/style_transfer"
              demoLink="https://adain-demo.streamlit.app/" 
              projectType="personal"           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artjuna}
              title="Web-Based Avionic Subcomponent Failure Prediction Using Machine Learning"
              date="January 2022"
              hasDemo={true}
              hasGithub={false}
              link="/project_datasci/details_4"
              description="Developed a prototype website to predict failures of avionics components using real maintenance testing data. Trained models with scikit-learn and deployed via Flask and Streamlit for interactive user access."
              ghLink="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction"
              demoLink="https://adikelvianto00.pythonanywhere.com/"
              projectType="airline"              
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