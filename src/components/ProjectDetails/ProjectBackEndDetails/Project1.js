import React from "react";
import ProjectCard from "./ProjectCards";
import { AiFillGithub } from "react-icons/ai";
import { SiPostgresql, SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Forum API"
        date="August 2023"
        content="loren ipsum hahahaha"
        num_of_icon={5}
        icon1={() => <DiNodejs />}
        icon2={() => <SiPostgresql />}
        icon3={() => <SiPostman />}
        icon4={() => <FaAws />}
        icon5={() => <AiFillGithub />}
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/ForumAPI"
      />
    </Container>
  );
}

export default ProjectList;
