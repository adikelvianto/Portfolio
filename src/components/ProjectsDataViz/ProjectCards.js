import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiPlayCircle } from "react-icons/bi";
import { BsGithub, BsInfoCircle, BsPersonCircle } from "react-icons/bs";
import { FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const icon =
    props.projectType === "airline" ? (
      <FaPlane />
    ) : props.projectType === "personal" ? (
      <BsPersonCircle />
    ) : null;

  return (
    <Card className="project-card-view" style={{ position: "relative", marginBottom: "20px" }}>
      {icon && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#6c63ff",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            zIndex: 1,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          {icon}
        </div>
      )}

      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          style={{
            pointerEvents: "none",
            userSelect: "none",
            maxHeight: "200px",
            objectFit: "cover",
          }}
        />
      )}

      <Card.Body>
        <Card.Title className="purple-card">
          <strong>{props.title || "Untitled Project"}</strong>
        </Card.Title>
        <Card.Text>{props.date || "No Date Provided"}</Card.Text>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description || "No description available for this project."}
        </Card.Text>

        {props.hasDemo && props.hasGithub && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "10px",
              }}
            >
              <Button variant="primary" href={props.ghLink} target="_blank" aria-label="View GitHub Repository">
                <BsGithub /> &nbsp; Github
              </Button>
              <Button variant="primary" href={props.demoLink} target="_blank" aria-label="View Demo">
                <BiPlayCircle /> &nbsp; Demo
              </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <Link to={props.link}>
                <Button>
                  <BsInfoCircle /> &nbsp; Details
                </Button>
              </Link>
            </div>
          </>
        )}

        {!props.hasDemo && !props.hasGithub && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
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