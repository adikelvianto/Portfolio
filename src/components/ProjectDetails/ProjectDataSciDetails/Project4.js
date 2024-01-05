import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython, DiJavascript1 } from "react-icons/di";
import { SiStreamlit } from "react-icons/si";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Avionics Component Failure Prediction"
        date="September 2023"
        content="loren ipsum"
        num_of_icon={5}
        icon1={() => <DiPython />}
        icon2="devicon-plain:scikitlearn"
        icon3="bxl:flask"
        icon4={() => <DiJavascript1 />}
        icon5={() => <SiStreamlit />}
        hasDemo={true}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction"
        demoLink="https://adikelvianto00.pythonanywhere.com/"
      />
    </Container>
  );
}

export default ProjectList;
