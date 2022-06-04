import React, {useState} from "react";

export default function Project(props) {
  const [selected, setSelected] = useState()
  const handleSelected = (key) => {
    setSelected(key)
  }
  return (
    // Container for entire project card
    <div className='col-12 row justify-content-center align-items-start'>
        {props.projects.map(item => (
            <div className="card col-4 m-2 blueborder proj-container p-0" key={item.id} onMouseEnter={() => handleSelected(item.id)} onMouseLeave={() => handleSelected('')}>
        <img src={item.logo} className="card-img" alt="Project Logo" />
        <div className="container-fluid card-img-overlay justify-content-center ">   
          {selected === item.id &&
            <div className="col-4 mx-auto">
            <p className="card-title text-center text-project sky-back proj-name">
              <a
                className="proj-link"
                href={item.deployedUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </p>
          </div>
          }
          {selected === item.id &&
          <div className="col-lg-2 col-1 git-logo mx-auto">
            <a 
              
              href={item.gitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img className="mx-auto" src={item.gitHubLogo} alt="github icon"/>
            </a>
          </div>}
        </div>
      </div>
        ))}
      
    </div>
  );
}
