import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Waypoint Following Business Jet Aircraft with Deep Learning"
        date="September 2023"
        content="loren ipsum"
        num_of_icon={3}
        icon1={() => <DiPython />}
        icon2="cib:tensorflow"
        icon3="file-icons:matlab"
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Fly-Over_Waypoints_DL"
      />
    </Container>
  );
}

export default ProjectList;
