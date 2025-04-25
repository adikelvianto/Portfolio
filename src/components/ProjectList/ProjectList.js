import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectList(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ width: "200px", margin: "0 auto", display: "block" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <strong className="purple">{props.title}</strong>
          <br />
          <br />
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          <Link to={props.link}>
            <Button>Show More</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectList;