import React from "react";

export default function Project(props) {
    return (
        // Container for entire project card
<div class="card col-lg-4 col-10">
  <img src='./Assets/images/pigLogo.png' class="card-img" alt="Pig E-Bank Logo"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Pig E-Bank</h5>
    <p class="card-text">A Budgeting App Powered by SQL</p>
    <a href="https://github.com/Stiltskinner/Pig-E-Bank" class="btn btn-primary">Github</a>
  </div>
  <a href="https://infinite-falls-27891.herokuapp.com/" class="btn btn-primary">Deployed App</a>
  </div>
    )
}