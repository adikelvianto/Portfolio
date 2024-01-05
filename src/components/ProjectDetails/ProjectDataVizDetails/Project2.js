import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiMicrosoftexcel } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Project Accomplishment Monitoring"
      date="September 2023"
      content="loren ipsum"
      num_of_icon={2}
      icon1="simple-icons:powerbi"
      icon2={() => <SiMicrosoftexcel />}
      hasDemo={true}
      hasGithub={false}
      demoLink="https://bit.ly/RepetitivePICADummy"
   />
   </Container>
  );
}

export default ProjectList;
