import React from "react";

function Experience() {
  return (
    <>
      <div className="exp-div">
        <ul style={{ textAlign: "left", listStyleType: "none" }}>
          <div style={{ borderBottom: "1px solid white", marginBottom: "5px" }}>
            <h3>
              {" "}
              Toddle - <b className="purple">Product Engineer</b>
            </h3>
            <h4>Bangalore - 2022 (Present) </h4>
          </div>
          <li>
            &spades; Designed, developed, and oversaw the implementation of 52
            features and 110 enhancements for the Reports, Transcripts, and
            Terms modules of the product.
          </li>
          <li>
            &clubs; Implemented over 20 customized features across 7 epics to
            enhance the client experience and deliver personalized solutions
          </li>
          <li>
            &hearts; Participated in systematic code reviews and optimization
            initiatives, resulting in a 37% reduction in aggregate response time
            for the users
          </li>
          <li>
            &diams; Led the development of API endpoints for seamless feature
            porting, Positively impacting a global user base of 600k+
          </li>
        </ul>
      </div>

      <div className="exp-div">
        <ul style={{ textAlign: "left", listStyleType: "none" }}>
          <div style={{ borderBottom: "1px solid white", marginBottom: "5px" }}>
            <h3>
              {" "}
              Dell -{" "}
              <b className="purple">Software Development Engineer - Intern</b>
            </h3>
            <h4>Bangalore - 2021</h4>
          </div>
          <li>
            &spades; Created an Internal Content Management System from scratch
            with over 300+ documents and SQL Queries hosted
          </li>
          <li>
            &clubs; Scaled to be editable by 100+ users on the production
            server.
          </li>
          <li>
            &hearts; Built a NodeJS backend with auth0 Authentication and build
            Authorization functionality from scratch
          </li>
          <li>
            &diams; Integrated a Rich Text Editor, Markdown Editor and Document
            to HTML converter with code sanitization
          </li>
        </ul>
      </div>

      <div className="exp-div">
        <ul style={{ textAlign: "left", listStyleType: "none" }}>
          <div style={{ borderBottom: "1px solid white", marginBottom: "5px" }}>
            <h3>
              {" "}
              CampK12 - <b className="purple">Software Engineering Intern</b>
            </h3>
            <h4>Gurugram - 2020</h4>
          </div>
          <li>
            &spades; Contributed to the Intructors' Forum - an internal Q&A and
            support platform. Optimized deployment size by 20%
          </li>
          <li>
            &clubs; Built the frontend to distribute Code Snippets, Content and
            Examples to the Teaching staff
          </li>
          <li>
            &hearts; Worked with the team on migrating the Project to Heroku in
            8 days - saving the organization an estimated 2,00,000 INR in
            Hosting bills
          </li>
          <li>
            &diams; Rebuild the 2 sections of the frontend in ReactJS, reduced
            average loading time to 4.8 seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
