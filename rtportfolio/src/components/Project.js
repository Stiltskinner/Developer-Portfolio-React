import React from "react";

export default function Project(props) {
  return (
    // Container for entire project card
    <div className='col-12 row justify-content-center align-items-start'>
        {props.projects.map(item => (
            <div className="card col-4 m-2 blueborder proj-container p-0" key={item.id}>
        <img src={item.logo} className="card-img" alt="Project Logo" />
        <div className="container-fluid card-img-overlay justify-content-center ">
          <div className="col-lg-4 col-12 mx-auto">
            <h2 className="card-title text-center text-project sky-back">
              <a
                className="nav-link"
                href={item.deployedUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </h2>
          </div>
          <div className="col-lg-2 col-1 mx-auto">
            <a 
              href={item.gitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.gitHubLogo} />
            </a>
          </div>
        </div>
      </div>
        ))}
      
    </div>
  );
}
