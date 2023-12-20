import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiPlayCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text>{props.date}</Card.Text>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/*GitHub & Details Only*/}
        {props.hasDetails && props.hasGithub && !props.hasDemo &&  (
          <>
             <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub /> &nbsp;
              {"Github"}
            </Button>
            <Link to = {props.link}>
              <Button
                style={{ marginLeft: "10px" }}
              >
                <BsInfoCircle /> &nbsp;
                {"Details"}
              </Button>
            </Link>
          </>
        )}

        {/*Condition where has demo has details and doesnt have github*/}
        {props.hasDemo && props.hasDetails && !props.hasGithub && (
          <>
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BiPlayCircle /> &nbsp;
              {"Demo"}
            </Button>
            <Link to = {props.link}>
              <Button
                style={{ marginLeft: "10px" }}
              >
                <BsInfoCircle /> &nbsp;
                {"Details"}
              </Button>
            </Link>
          </>
        )}

        {/*All condition satisfied*/}
        {props.hasDemo && props.hasDetails && props.hasGithub && (
          <>
             <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub /> &nbsp;
              {"Github"}
            </Button>
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BiPlayCircle /> &nbsp;
              {"Demo"}
            </Button>
            <Link to = {props.link}>
              <Button
                style={{ marginLeft: "10px" }}
              >
                <BsInfoCircle /> &nbsp;
                {"Details"}
              </Button>
            </Link>
          </>
        )}

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
