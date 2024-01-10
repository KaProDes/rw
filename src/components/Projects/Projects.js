import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import ieee_rsc from "../../Assets/Projects/ieee_rsc.png";
import unmasked from "../../Assets/Projects/unmasked.png";
import storymarker from "../../Assets/Projects/storymarker.png";
import movie_pundit from "../../Assets/Projects/movie_pundit.png";
import muj_hacks from "../../Assets/Projects/muj_hacks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storymarker}
              title="StoryMarker"
              description="StoryMarker is a collaboration tool built for small-medium size software development teams. It's a web based solution enabling small teams to finalize features, assign stories and share design snapshots and code"
              github="https://github.com/kaprodes/storymarker"
              webapp="https://storymarker.herokuapp.com/about"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_pundit}
              title="Movie Pundit"
              description="Movie Pundit is a content based movie Recommendation Engine that has been built using cosing similarity ranking. It uses the TMDB API for Movie Metadata and has been trained on a Kaggle Dataset of the same name."
              github="https://github.com/KaProDes/Movie_Pundit"
              webapp="https://movie-pundit.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unmasked}
              title="UnMasked"
              description="Light-weight desktop app that can detect Masked People, record and capture footage from any camera. Under the Hood, it uses a YoloV3 based objected detection model for classifying Masked and Unmasked People."
              github="https://github.com/KaProDes/UnMasked"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muj_hacks}
              title="MUJ Hacks 4"
              description="MUJ Hacks 4 was a hackathon website built to entertain event registrations from the participants, allow them to view their team status and also make Payments to register for the hackathon via an API provided by DevFolio"
              webapp="https://muj-hacks4.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ieee_rsc}
              title="IEEE Rajasthan State Conference"
              description="IEEE RSC was a conference website that had information about venue/event, allowed event registrations from the attendees, enabled payments using UPI to register for the event via a custom written backend logic"
              webapp="https://ieeersc.herokuapp.com/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
