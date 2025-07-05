import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"><strong>SUMMARY</strong></span>
            </h1>
            <p className="home-about-body">
            I'm an <span className="purple">aerospace engineering graduate</span> with a passion for<span className="purple"> data processing, visualization </span>, and <span className="purple">data science.</span>
            <br />
            <br />
             With a creative and analytical mindset, I love exploring the world of data and transforming complex information into visually appealing and meaningful insights.
            <br />
            <br />
              As you browse through my portfolio, you'll find a collection of my projects that showcase my versatility and dedication to data-driven problem-solving. 
              Whether it's managing extensive datasets, leveraging machine learning algorithms, developing intuitive dashboards and user-friendly interfaces, and creating API.
            <br />
            <br />
              I am always <span className="purple">eager to take on new challenges</span> and <span className="purple">collaborate</span> with others to <span className="purple">unlock the potential of data.</span>
            <br />
            <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adikelvianto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adi-kelvianto/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adii_kelvianto/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
