import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Folks, I am <span className="purple">Kapil Deshmukh </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am a Computer Science Undergrad from Manipal University
            Jaipur
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">- Playing the Guitar</li>
            <li className="about-activity">
              - Singing Spanish and Italian Songs
            </li>
            <li className="about-activity">- Lifting Weights</li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Be Brave enough to be Bad at something new!"{" "}
          </p>
          <footer className="blockquote-footer">James Acuff</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
