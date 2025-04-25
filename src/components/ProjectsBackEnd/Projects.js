import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import backend_icon from "../../Assets/Projects/Back End Icon.png";
import { TbArrowBackUp } from "react-icons/tb";

function ProjectsBackEnd() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/projectlist">
            <Button className="topleft-back-button">
              <TbArrowBackUp size={24}/>
            </Button>
          </Link>
    <h1 className="image-with-text" style={{ margin: "0 auto", textAlign: "center" }}>
      <strong className="purple">Back End</strong>
      <img src={backend_icon} alt="" className="aligned-image" />
    </h1>
  </div>
  <br />
  <h5 style={{ color: "white", fontSize: "1em" }}>
    Here are a few projects I've worked on recently.
  </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="ForumAPI – Discussion Platform with Node.js, Hapi, and PostgreSQL"
              date="August 2023"
              hasDemo={false}
              hasGithub={true}
              link="/project_backend/details_1"
              description={`ForumAPI leverages Node.js, Hapi, and PostgreSQL with a Test-Driven 
              Development approach to provide thread creation, comment handling, and deletion functionality. \n
               It features automated CI/CD pipelines via GitHub Actions for seamless AWS EC2/RDS deployments and enforces nginx rate limiting (90 req/min) alongside HTTPS for robust security.`}
              ghLink="https://github.com/adikelvianto/ForumAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="OpenMusic API – Music Service with Node.js, RabbitMQ & Redis"
              date="July 2023"
              hasDemo={false}
              hasGithub={true}
              link="/project_backend/details_2"
              description={`OpenMusic API is built using Node.js, Hapi, RabbitMQ, Redis, and PostgreSQL, providing comprehensive music data management capabilities.\n
               It supports album and song creation, retrieval, update, and deletion, alongside playlist management with user authentication.\n
                Features include song search via query parameters, playlist collaboration, song export via RabbitMQ, album cover uploads, and liking functionality with server-side caching powered by Redis. Email notifications are handled with Nodemailer for song export results.`}
              ghLink="https://github.com/adikelvianto/OpenMusicAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="BookShelf API – CRUD Book Management with Node.js & Hapi API"
              date="November 2022"
              hasDemo={false}
              hasGithub={true}
              link="/project_backend/details_2"
              description={`BookShelf API provides RESTful endpoints for creating, listing, retrieving, updating, and deleting book records. \n
               Built on Node.js with the Hapi framework, it includes comprehensive data validation and error handling to ensure reliable and user-friendly interactions.`}
              ghLink="https://github.com/adikelvianto/BookShelfAPI"
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