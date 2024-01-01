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
          Projects are based on categories, click show more for details
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "38px" }}>
          <Col md={4} className="project-card">
            <Projectlist
              imgPath={dataviz_icon}
              title="Data Processing and Visualization"
              description="Gathering, cleansing, and visualize data"
              link="/project_dataviz"
            />
          </Col>

          <Col md={4} className="project-card">
            <Projectlist
              imgPath={datascience_icon}
              title="Data Science"
              description="Gathering, cleansing, and visualize data"
              link="/project_datascience"
            />
          </Col>
          <Col md={4} className="project-card">
            <Projectlist
              imgPath={backend_icon}
              title="Back End"
              description="Gathering, cleansing, and visualize data"
              link="/project_backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectList;
