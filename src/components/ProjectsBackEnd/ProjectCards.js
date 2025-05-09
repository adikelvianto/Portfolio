import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiPlayCircle } from "react-icons/bi";
import { BsGithub, BsInfoCircle, BsPersonCircle } from "react-icons/bs";
import { FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { iconMap } from "../ProjectList/iconMap";


function ProjectCards(props) {
  // Determine icon based on project type
  const icon =
    props.projectType === "airline" ? (
      <FaPlane />
    ) : props.projectType === "personal" ? (
      <BsPersonCircle />
    ) : null;

   //  Techstack Icons
   const iconCols = [];

   for (let i = 1; i <= props.num_of_icon; i++) {
     const iconKey = props[`icon${i}`];
     const IconComponent = iconMap[iconKey];
   
     if (IconComponent) {
       iconCols.push(
         <Col key={i} xs={4} md={1} className="tech-icons-list">
           <div className="button-box-list">
             {typeof IconComponent === "function" ? <IconComponent /> : IconComponent}
           </div>
         </Col>
       );
     }
   }
   


  return (
    <Card className="project-card-view" style={{ position: "relative" }}>
           {icon && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#6c63ff",
            color: "white",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            zIndex: 1,
          }}
        >
          {icon}
        </div>
      )}

      <Card.Body>
         {/* Circular icon badge */}

        <Card.Title className="purple-card" style={{ marginTop: "20px" }}>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text>{props.date}</Card.Text>
        <Row style={{ justifyContent: "center", paddingBottom: "25px"}}>
            {iconCols}
        </Row>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* All three buttons (GitHub + Demo + Details) */}
        {props.hasDemo && props.hasGithub && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="primary" href={props.ghLink} target="_blank">
                  <BsGithub /> &nbsp; Github
                </Button>
                <Button variant="primary" href={props.demoLink} target="_blank">
                  <BiPlayCircle /> &nbsp; Demo
                </Button>
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
            >
              <Link to={props.link}>
                <Button>
                  <BsInfoCircle /> &nbsp; Details
                </Button>
              </Link>
            </div>
          </>
        )}

        {/* Only GitHub */}
        {props.hasGithub && !props.hasDemo && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp; Github
              </Button>
              <Link to={props.link}>
                <Button>
                  <BsInfoCircle /> &nbsp; Details
                </Button>
              </Link>
            </div>
          </>
        )}

        {/* Only Demo */}
        {props.hasDemo && !props.hasGithub && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Button variant="primary" href={props.demoLink} target="_blank">
                <BiPlayCircle /> &nbsp; Demo
              </Button>
              <Link to={props.link}>
                <Button>
                  <BsInfoCircle /> &nbsp; Details
                </Button>
              </Link>
            </div>
          </>
        )}

        {/* Neither GitHub nor Demo — just show Details */}
        {!props.hasDemo && !props.hasGithub && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
          >
            <Link to={props.link}>
              <Button>
                <BsInfoCircle /> &nbsp; Details
              </Button>
            </Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
