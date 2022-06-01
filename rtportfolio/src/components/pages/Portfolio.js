import React from "react";
import pigLogo from "../Assets/images/pigLogo.png";
import gitHubLogo from "../Assets/images/GitHub-Mark-32px.png"

export default function Home() {
  return (
    <div className="container-fluid card col-lg-4 col-10">
      <img src={pigLogo} className="card-img" alt="Pig E-Bank Logo" />
      <div className="container-fluid card-img-overlay justify-content-center">
        <div className="col-4 mx-auto"><h2 className="card-title text-center col-12 sky-back"><a className="nav-link fs-4"href="https://infinite-falls-27891.herokuapp.com/" target="_blank" rel="noreferrer">Pig E-Bank</a></h2></div>
        <p className="card-text col-5 mx-auto ">A Budgeting App Powered by SQL</p>
        <div className="col-1 mx-auto">
        <a
          href="https://github.com/Stiltskinner/Pig-E-Bank" target="_blank" rel="noreferrer"
        >
          <img src={gitHubLogo}/>
        </a>
          </div>
      </div>
    </div>
  );
}
