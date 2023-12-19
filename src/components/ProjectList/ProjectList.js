import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectList(props) {
  return (
    <Card className="project-card-view">
    <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ width: '200px', margin: '0 auto', display: 'block' }} />
    <Card.Body>
    <Card.Title><b>{props.title}</b></Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
          <Link to = {props.link}>
            <Button> Show More </Button>
          </Link>
      {"\n"}
      {"\n"}
  
    </Card.Body>
    </Card>
    );
}
export default ProjectList;
