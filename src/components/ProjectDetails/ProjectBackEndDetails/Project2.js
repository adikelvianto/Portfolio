import React from "react";
import ProjectCard from "./ProjectCards";
import { SiPostgresql, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Open Music API"
        date="July 2023"
        content="loren ipsum"
        num_of_icon={4}
        icon1={() => <DiNodejs />}
        icon2={() => <SiPostgresql />}
        icon3={() => <SiPostman />}
        icon4={() => <FaAws />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/OpenMusicAPI"
      />
    </Container>
  );
}

export default ProjectList;
