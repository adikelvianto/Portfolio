import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Icon } from '@iconify/react';
import { BiPlayCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const iconCols = [];

  // Generate Col components for icons based on the number provided in props
  for (let i = 1; i <= props.num_of_icon; i++) {
    const iconProp = props[`icon${i}`];
    if (iconProp) {
      if (typeof iconProp === 'function') {
        // Rendering if iconProp is a function (component)
        const DynamicIcon = iconProp(); // Call the function to get the component
        iconCols.push(
          <Col key={i} xs={4} md={2} className="tech-icons-detail">
            <div className="button-box">
              {DynamicIcon}
            </div>
          </Col>
        );
      } else {
        // Handling if iconProp is a string
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
  

  return(
    <Container fluid className="project-details-section">
      <Particle />
        <h1 className="project-details-heading">
          <strong className="purple">{props.title}</strong>
        </h1>
        <div className="project-details-subheading">
          {props.date}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "5px", maxWidth: "400px", margin: "0 auto" }}>
          {iconCols}
        </Row>

        <p style={{ color: "white" }}>
          {props.content}
        </p>

        <div style={{ marginTop: "20px" }}>
      {!props.hasGithub && props.hasDemo && (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          className="back-button"
        >
          <BiPlayCircle /> &nbsp;
          {"Demo"}
        </Button>
      )}

      {props.hasGithub && !props.hasDemo && (
        <Button
        variant="primary"
        href={props.ghLink}
        target="_blank"
        className="back-button"
      >
        <BsGithub /> &nbsp;
        {"Github"}
        </Button>
      )}

      {props.hasGithub && props.hasDemo && (
        <>
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="back-button"
          >
            <BiPlayCircle /> &nbsp;
            {"Demo"}
          </Button>

          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="back-button"
            style={{ marginLeft: "30px" }}
          >
            <BsGithub /> &nbsp;
            {"Github"}
          </Button>
        </>
      )}
    </div>

    <div style={{ marginTop: "40px" }}>
      <Link to="/project_backend" className="back-button">
        <Button variant="primary">Back</Button>
      </Link>
    </div>

    </Container>
  );
}


export default ProjectCards;
