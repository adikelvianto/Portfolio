import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import backend_icon from "../../Assets/Projects/Back End Icon.png";

export const projects = [
  {
    title: "ForumAPI – Discussion Platform with Node.js, Hapi, and PostgreSQL",
    date: "August 2023",
    hasDemo: false,
    hasGithub: true,
    link: "/project_backend/details_1",
    description:
      "RESTful API that powers user authentication, threaded discussions, and nested commenting, built with clean architecture and robust error handling.",
    ghLink: "https://github.com/adikelvianto/ForumAPI",
    projectType: "personal",
    num_of_icon:5,
    icon1:"nodejs",
    icon2:"postgresql",
    icon3:"postman",
    icon4:"aws",
    icon5:"github",
  },
  {
    title: "OpenMusic API – Music Service with Node.js, RabbitMQ & Redis",
    date: "July 2023",
    hasDemo: false,
    hasGithub: true,
    link: "/project_backend/details_2",
    description:
      "A modular RESTful API for managing music, playlists, and user collaborations—featuring authentication, file uploads, caching with Redis, and background processing using RabbitMQ.",
    ghLink: "https://github.com/adikelvianto/OpenMusicAPI",
    projectType: "personal",
  },
  {
    title: "BookShelf API – CRUD Book Management with Node.js & Hapi API",
    date: "November 2022",
    hasDemo: false,
    hasGithub: true,
    link: "/project_backend/details_3",
    description:
      "The BookShelf API is a backend service for managing book collections, offering full CRUD functionality, robust input validation, and clear error handling using Hapi and Node.js.",
    ghLink: "https://github.com/adikelvianto/BookShelfAPI",
    projectType: "personal",
  },
];

function ProjectsBackEnd() {

  const location = useLocation();
  const navigate = useNavigate();

  
  
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
          <h1 className="image-with-text" style={{ margin: "0 auto", textAlign: "center" }}>
            <strong className="purple">Back End</strong>
            <img src={backend_icon} alt="" className="aligned-image" />
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
                  num_of_icon={project.num_of_icon}
                  icon1={project.icon1}
                  icon2={project.icon2}
                  icon3={project.icon3}
                  icon4={project.icon4}
                  icon5={project.icon5}  
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

export default ProjectsBackEnd;