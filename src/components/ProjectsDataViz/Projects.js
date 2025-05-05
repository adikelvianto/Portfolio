import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
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
              imgPath={ecommerce}
              hasDemo={true}
              hasGithub={true}
              title="Interactive Analysis of Brazilian E-Commerce with Streamlit Dashboard"
              date="November 2023"
              description="Conducted a full-cycle data analysis on the Brazilian Olist E-commerce dataset using Python, culminating in an interactive Streamlit dashboard.
               The project involved defining 9 key business questions, performing data wrangling, merging datasets, and creating insightful visualizations to extract trends and improve understanding of marketplace dynamics."
              demoLink="https://brazillian-e-commerce.streamlit.app/"
              link="/project_dataviz/details_2"  
              ghLink="https://github.com/adikelvianto/Brazilian_E-commerce_Dashboard"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={divvy}
              hasDemo={true}
              hasGithub={false}
              title="Cyclistic Membership Strategy Using R and Divvy 2021 Data"
              date="October 2022"
              description="A comprehensive case study utilizing the 2021 Divvy bike-share dataset was conducted using R to support Cyclistic’s marketing strategy.
               The goal was to analyze usage patterns between casual and annual riders to identify actionable insights that could help convert casual users into members."
              demoLink="https://www.kaggle.com/code/adikelvianto29/analysis-of-divvy-2021-dataset-using-r"
              link="/project_dataviz/details_1"            
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