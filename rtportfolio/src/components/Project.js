import React from "react";
import gitHubLogo from "./Assets/images/GitHub-Mark-32px.png"

export default function Project(props) {
  return (
    // Container for entire project card
    <div>
        {props.projects.map(item => (
            <div className="container-fluid card col-lg-4 col-10" key={item.id}>
        <img src={item.logo} className="card-img" alt="Project Logo" />
        <div className="container-fluid card-img-overlay justify-content-center">
          <div className="col-4 mx-auto">
            <h2 className="card-title text-center col-12 sky-back">
              <a
                className="nav-link fs-4"
                href={item.deployedUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </h2>
          </div>
          <p className="card-text col-5 mx-auto ">
            {item.description}
          </p>
          <div className="col-1 mx-auto">
            <a
              href={item.gitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHubLogo} />
            </a>
          </div>
        </div>
      </div>
        ))}
      
    </div>
  );
}
