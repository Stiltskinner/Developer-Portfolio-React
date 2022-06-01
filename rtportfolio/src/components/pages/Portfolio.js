import React from "react";
import pigLogo from "../Assets/images/pigLogo.png";
import gitHubLogo from "../Assets/images/GitHub-Mark-32px.png"

export default function Home() {
  return (
    <div className="card col-lg-4 col-10">
      <img src={pigLogo} className="card-img" alt="Pig E-Bank Logo" />
      <div className="card-img-overlay">
        <h2 className="card-title">Pig E-Bank</h2>
        <p className="card-text">A Budgeting App Powered by SQL</p>
        <a
          href="https://github.com/Stiltskinner/Pig-E-Bank" target="_blank" rel="noreferrer"
        >
          <img src={gitHubLogo}/>
        </a>
      </div>
    </div>
  );
}
