import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiMicrosoftexcel } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Airline Dispatch Reliability & Delay Monitoring Dashboard"
      date="January 2025"
      content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
      looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
      written in 45 BC  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ip de Finibus Bonorum et"
      num_of_icon={2}
      icon1="simple-icons:powerbi"
      icon2={() => <SiMicrosoftexcel />}
      hasDemo={false}
      hasGithub={false}  
   />
   </Container>
  );
}

export default ProjectList;
