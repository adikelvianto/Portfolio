import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artjuna from "../../Assets/Projects/artjuna.png";
import autoland from "../../Assets/Projects/autoland.png";
import fo_waypoint from "../../Assets/Projects/fo_waypoint.png";
import datascience_icon from "../../Assets/Projects/Data Science Icon.png";


function ProjectsDataScience() {

  const location = useLocation();
  const navigate = useNavigate();
  
  const projects = [
    {
      imgPath: autoland,
      hasDemo: false,
      hasGithub: true,
      title: "Deep Learning-Based Elevator & Throttle Modeling for Boeing 747 Landings",
      date: "October 2022",
      description:
        "Built a deep learning model for Boeing 747 auto-landing using real Flight Data Recorder (FDR) data. Trained separate models for elevator and throttle control to mimic landing behavior. Built with TensorFlow and preprocessed over 300 flight records.",
      link: "/project_datasci/details_1",
      ghLink: "https://github.com/adikelvianto/Auto_Landing_DL",
      projectType: "airline",
    },
    {
      imgPath: fo_waypoint,
      hasDemo: true,
      hasGithub: false,
      title: "Deep Learning-Based Fly-Over Waypoints Control System for Business Jet Aircraft",
      date: "August 2022",
      description:
        "Built a deep learning controller for Cirrus Vision SF50 to follow multiple waypoints using flight data from PID-based missions. Trained with categorized roll-angle data to evaluate how training characteristics affect model performance. Simulated with MATLAB, Simulink, and X-Plane.",
      link: "/project_datasci/details_2",
      demoLink: "https://user-images.githubusercontent.com/92104520/196455059-49da6a68-7dc4-442a-bf2d-cf279a6bc297.mp4",
      projectType: "airline",
    },
    {
      imgPath: artjuna,
      hasDemo: true,
      hasGithub: false,
      title: "Personalized Product Image Generation using a Neural Style Transfer Model",
      date: "June 2022",
      description:
        'Built a Neural Style Transfer model as part of a social e-commerce platform for local artists called "Artjuna". Enabled users to generate personalized product designs by combining their photos with artisan art styles. Trained on ~18k images using TensorFlow.',
      link: "/project_datasci/details_3",
      demoLink: "https://adain-demo.streamlit.app/",
      ghLink: "https://github.com/Artjuna/artjuna-monorepo/tree/main/model/style_transfer",
      projectType: "personal",
    },
    {
      imgPath: artjuna,
      hasDemo: true,
      hasGithub: false,
      title: "Web-Based Avionic Subcomponent Failure Prediction Using Machine Learning",
      date: "January 2022",
      description:
        "Developed a prototype website to predict failures of avionics components using real maintenance testing data. Trained models with scikit-learn and deployed via Flask and Streamlit for interactive user access.",
      link: "/project_datasci/details_4",
      demoLink: "https://adikelvianto00.pythonanywhere.com/",
      ghLink: "https://github.com/adikelvianto/Avionic-Components-Failure-Prediction",
      projectType: "airline",
    },
  ];

  // Read page query from URL
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(initialPage);
  const projectsPerPage = 4;

  useEffect(() => {
    const newPage = parseInt(new URLSearchParams(location.search).get("page")) || 1;
    setCurrentPage(newPage);
  }, [location.search]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    navigate(`?page=${pageNumber}`);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container fluid className="project-sub-section">
        <h1 className="image-with-text">
          <strong className="purple">Data Science</strong>
          <img src={datascience_icon} alt="" className="aligned-image" />
        </h1>
        <br />
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>

        {/* Pagination Controls */}
        <div style={{ textAlign: "center", marginTop: "20px", position: "relative", zIndex: 2 }}>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Button
                key={index}
                variant={pageNumber === currentPage ? "primary" : "outline-primary"}
                onClick={() => handlePageChange(pageNumber)}
                style={{ margin: "0 5px" }}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>
          {/* Map through the current projects based on pagination */}
          {currentProjects.map((project, index) => (
            <Col md={3} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                hasDemo={project.hasDemo}
                hasGithub={project.hasGithub}
                title={project.title}
                date={project.date}
                description={project.description}
                link={`${project.link}?page=${currentPage}`}
                demoLink={project.demoLink || ""}
                ghLink={project.ghLink || ""}
                projectType={project.projectType}
              />
            </Col>
          ))}
        </Row>
        

        <div style={{ textAlign: "center"}}>
          <Link to="/projectlist" className="back-button">
            <Button variant="primary">Back to My Projects</Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default ProjectsDataScience;