import React from "react";
import ProjectCard from "./ProjectCards";
import { SiPostman } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="BookShelf API"
        date="November 2022"
        content="loren ipsum"
        num_of_icon={2}
        icon1={() => <DiNodejs />}
        icon3={() => <SiPostman />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/BookShelfAPI"
      />
    </Container>
  );
}

export default ProjectList;
