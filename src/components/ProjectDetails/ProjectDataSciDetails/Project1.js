import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Boeing 747 Auto Land Machine Learning Model"
        date="September 2023"
        content="loren ipsum"
        num_of_icon={2}
        icon1={() => <DiPython />}
        icon2="cib:tensorflow"
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Auto_Landing_DL"
      />
    </Container>
  );
}

export default ProjectList;
