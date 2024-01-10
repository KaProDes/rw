import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/math.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillCode } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I apply my passion for developing products with{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">Graphql</b> and{" "}
              <b className="purple">Next.js</b>
              <br />
              <br />I loved Mathematics since I was 6 and found Programming to
              be a creative outlet for the <b className="purple">
                Geometry
              </b>, <b className="purple">Algebra</b> and{" "}
              <b className="purple">Trigonometry </b>
              that I was so fond of.
              <br />
              <br />I am fluent in the classics &#8212;
              <i>
                <b className="purple"> C++, SQL, Python and Java </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">Architecting microservices </b> and
                <b className="purple"> Deploying them at scale</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kaprodes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kapil-d/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/KapProDes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillCode />
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
