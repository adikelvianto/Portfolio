import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { SiMicrosoftexcel } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
        <ProjectCard
          title="Aircraft Transmission Monitoring"
          date="September 2023"
          content="lorem ipsum"
          num_of_icon={3}
          icon1="simple-icons:powerbi"
          icon2={() => <SiMicrosoftexcel />}
          icon3={() => <DiPython />}
          hasDemo={true}
          hasGithub={false}
          demoLink="https://bit.ly/AircraftTransmissonDummy"
        />
    </Container>
  );
}

export default ProjectList;
