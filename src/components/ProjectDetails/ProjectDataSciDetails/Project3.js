import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { SiStreamlit } from "react-icons/si";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Neural Style Transfer using AdaIn Method"
        date="September 2023"
        content="loren ipsum"
        num_of_icon={3}
        icon1={() => <DiPython />}
        icon2="cib:tensorflow"
        icon3={() => <SiStreamlit />}
        hasDemo={true}
        hasGithub={true}
        ghLink="https://github.com/Artjuna/artjuna-monorepo/tree/main/model/style_transfer"
        demoLink="https://adain-demo.streamlit.app/"
      />
    </Container>
  );
}

export default ProjectList;
