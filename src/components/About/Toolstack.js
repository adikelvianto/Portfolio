import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  SiVisualstudiocode,
  SiPostman,
  SiNotion,
  SiPalantir,
  SiPowerautomate,
  SiMicrosoftexcel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="devicon-plain:jupyter-wordmark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPalantir/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:powerbi" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:tableau" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerautomate/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="file-icons:matlab" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FaAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
