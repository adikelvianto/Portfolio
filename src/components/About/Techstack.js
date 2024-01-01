import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  SiPostgresql,
  SiStreamlit, 
  SiReact,
  SiMicrosoftexcel,
} from "react-icons/si";

import {
  DiJavascript1,
  DiNodejs,
  DiPython,
} from "react-icons/di";



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
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="bxl:flask" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="cib:r" />
      </Col>
    </Row>
  );
}

export default Techstack;
