import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import divvy from "../../Assets/Projects/divvy.png";
import dataviz_icon from "../../Assets/Projects/Data Viz Icon.png";


function ProjectsDataViz() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="image-with-text">
          <strong className="purple">Data Processing and Visualization</strong>
          <img src={dataviz_icon} alt="" className="aligned-image" />
        </h1>
        <br></br>
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              hasDemo={true}
              hasGithub={false}
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
              title="Repetitive Project Accomplishment Monitoring"
              date="September 2023"
              description="Dashboard to monitor several repetitive projects"
              demoLink="https://bit.ly/RepetitivePICADummy"
              link="/project_dataviz/details_2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              hasDemo={true}
              hasGithub={true}
              title="Brazillian E-Commerce"
              date="November 2023"
              description="Analysis of brazillian e commerce dataset for year 2018-2022 and dashboard building using Streamlit"
              demoLink="https://brazillian-e-commerce.streamlit.app/"
              link="/project_dataviz/details_3"  
              ghLink="https://github.com/adikelvianto/Brazilian_E-commerce_Dashboard"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={divvy}
              hasDemo={true}
              hasGithub={false}
              title="Analysis of Divvy Company Dataset in 2021 using R"
              date="October 2022"
              description="Analysis of divvy bike company using R language"
              demoLink="https://www.kaggle.com/code/adikelvianto29/analysis-of-divvy-2021-dataset-using-r"
              link="/project_dataviz/details_4"            
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

export default ProjectsDataViz;