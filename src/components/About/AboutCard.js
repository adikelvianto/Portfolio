import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! My name is <span className="purple">Adi Kelvianto </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            <br /> I am a fresh graduate in Aerospace Engineering from Bandung Institute of Technology.
            <br />
            <br /> Currently working as a Reliability Engineer, handling data alliance at Citilink Indonesia.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
