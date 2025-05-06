import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projectlist from "./ProjectList";
import Particle from "../Particle";
import dataviz_icon from "../../Assets/Projects/Data Viz Icon.png";
import datascience_icon from "../../Assets/Projects/Data Science Icon.png";
import backend_icon from "../../Assets/Projects/Back End Icon.png";

function ProjectList() {
  return (
    <Container fluid className="project-list">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects are grouped by category. Click <strong className="purple">‘Show More’</strong> for details.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "38px" }}>
          <Col md={4} className="project-card">
            <Projectlist
              imgPath={dataviz_icon}
              title="Data Processing and Visualization"
              description="Collecting, cleansing, transforming, and presenting data
               through impactful visuals to support better decision-making."
              link="/project_dataviz"
              count={20}
            />
          </Col>

          <Col md={4} className="project-card">
            <Projectlist
              imgPath={datascience_icon}
              title="Data Science"
              description="Leveraging statistical methods or machine learning to uncover patterns,
               forecast trends, and extract valuable insights."
              link="/project_datascience"
              count={4}
            />
          </Col>
          <Col md={4} className="project-card">
            <Projectlist
              imgPath={backend_icon}
              title="Backend Development"
              description="Building robust APIs, managing databases, and ensuring seamless integration between services and front-end systems."
              link="/project_backend"
              count={3}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectList;
