import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { BiPlayCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const currentPage = queryParams.get("page") || 1;

  const iconCols = [];
  for (let i = 1; i <= props.num_of_icon; i++) {
    const iconProp = props[`icon${i}`];
    if (iconProp) {
      if (typeof iconProp === "function") {
        const DynamicIcon = iconProp();
        iconCols.push(
          <Col key={i} xs={4} md={2} className="tech-icons-detail">
            <div className="button-box">{DynamicIcon}</div>
          </Col>
        );
      } else {
        iconCols.push(
          <Col key={i} xs={4} md={2} className="tech-icons-detail">
            <div className="button-box">
              <Icon icon={iconProp} />
            </div>
          </Col>
        );
      }
    }
  }

  return (
    <Container fluid className="project-details-section">
      <Particle />
      <h1 className="project-details-heading">
        <strong className="purple">{props.title}</strong>
      </h1>
      <div className="project-details-subheading">{props.date}</div>

      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "5px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {iconCols}
      </Row>

      <div
        style={{ color: "white" }}
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>

      <div style={{ marginTop: "20px" }}>
        {!props.hasGithub && props.hasDemo && (
          <Button variant="primary" href={props.demoLink} target="_blank" className="back-button">
            <BiPlayCircle /> &nbsp; Demo
          </Button>
        )}

        {props.hasGithub && !props.hasDemo && (
          <Button variant="primary" href={props.ghLink} target="_blank" className="back-button">
            <BsGithub /> &nbsp; Github
          </Button>
        )}

        {props.hasGithub && props.hasDemo && (
          <>
            <Button variant="primary" href={props.demoLink} target="_blank" className="back-button">
              <BiPlayCircle /> &nbsp; Demo
            </Button>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="back-button"
              style={{ marginLeft: "30px" }}
            >
              <BsGithub /> &nbsp; Github
            </Button>
          </>
        )}
      </div>

      <div style={{ marginTop: "40px", position: "relative", zIndex: 2 }}>
        <Button
          variant="primary"
          onClick={() => navigate(`/project_dataviz?page=${currentPage}`)}
        >
          Back
        </Button>
      </div>
    </Container>
  );
}

export default ProjectCards;
