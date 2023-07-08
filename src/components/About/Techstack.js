import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="cib:tensorflow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon-plain:scikitlearn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="file-icons:matlab" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="cib:r" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="bxl:flask" />
      </Col>
    </Row>
  );
}

export default Techstack;
