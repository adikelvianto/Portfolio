import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { SiStreamlit } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Brazillian E-Commerce"
      date="September 2023"
      content="loren ipsum hahahaha"
      num_of_icon={2}
      icon1={() => <SiStreamlit />}
      icon2={() => <DiPython />}
      hasDemo={true}
      hasGithub={true}
      demoLink="https://brazillian-e-commerce.streamlit.app/"
      ghLink="https://github.com/adikelvianto/Brazilian_E-commerce_Dashboard"      
   />
   </Container>
  );
}

export default ProjectList;
