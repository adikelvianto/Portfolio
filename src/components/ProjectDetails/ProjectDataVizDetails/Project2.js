import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Aircraft Fault & Event Correlation Tracker"
      date="December 2022"
      content="loren ipsum"
      num_of_icon={2}
      icon1={() => <SiPalantir />}
      icon2={() => <SiMicrosoftexcel />}
      hasDemo={true}
      hasGithub={false}
      demoLink="https://bit.ly/RepetitivePICADummy"
   />
   </Container>
  );
}

export default ProjectList;
