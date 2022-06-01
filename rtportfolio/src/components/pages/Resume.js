import React from "react";
import RTResume from "../Assets/RTResume.pdf";
// TODO Add HTML and content to make Resume/skills list, replace blog with resume
export default function Resume() {
  return (
    <section
      className="container-fluid row justify-content-center align-items-start mb-3 vw-100"
      id="sec-Resume"
      title="Resume"
    >
      <a className="header-link" href={RTResume}>
        <h2 className="text-center col-12">Resume</h2>
      </a>
      <div className="d-flex row col-lg-10 col-md-6 col-12 align-self-center">
        <h3 className="text-center col-12 my-2">Technical Skills</h3>
        <div className="lead text-center my-3 text-default col-4">
          <p className="fw-bold">Applications/Deployment</p>
          <p>
            VSCode | Heroku | MySQL Workbench | Insomnia | MongoDB | SQL 
          </p>
        </div>
        <div className="lead text-center my-3 text-default col-4">
          <p className="fw-bold">Languages, Libraries, Frameworks</p>
          <p>
          Javascript | HTML5 | CSS3 | jQuery |
          jQueryUI | Bootstrap | Handlebars | Node.js | Express.js | Sequelize |
          Git | Mongoose | NoSQL | GraphQL | React.js
          </p>
        </div>
        <div className="lead text-center my-3 text-default col-4">
          <p className="fw-bold">Concepts</p>
          <p>
          RESTful APIs | MVC Model | CRUD Operations | Object-Oriented Programming
          </p>
        </div>
      </div>
    </section>
  );
}

// Technical Skills
// __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
