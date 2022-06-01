import React from "react";
// import Project from '../Project'
import pigLogo from "../Assets/images/pigLogo.png";
import thisDayLogo from "../Assets/images/onthisday_black.png";
import weatherLogo from "../Assets/images/Weather-Dash-Image.jpg";
import techLogo from "../Assets/images/techBlogDemo.gif";
import textEditorLogo from "../Assets/images/textEditorLogo.JPG";
import geographyLogo from "../Assets/images/geography-quiz-img.jpg";
import gitHubLogo from "../Assets/images/GitHub-Mark-32px.png"

const projects = [
  {
    id: 1,
    name: "Pig E-Bank",
    deployedUrl: "https://infinite-falls-27891.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/Pig-E-Bank",
    logo: pigLogo,
    description: "A Budgeting App Powered by SQL"
  },
  {
    id: 2,
    name: "This Day in History",
    deployedUrl: "https://stiltskinner.github.io/This-Day-In-History/",
    gitHubUrl: "https://github.com/Stiltskinner/This-Day-In-History",
    logo: thisDayLogo,
    description: "A History Trivia App"
  },
  {
    id: 2,
    name: "This Day in History",
    deployedUrl: "https://stiltskinner.github.io/This-Day-In-History/",
    gitHubUrl: "https://github.com/Stiltskinner/This-Day-In-History",
    logo: thisDayLogo,
    description: "A History Trivia App"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    deployedUrl: "https://stiltskinner.github.io/Weather-Dashboard/",
    gitHubUrl: "https://github.com/Stiltskinner/Tech-Blog",
    logo: weatherLogo,
    description: "A Weather Forecast App"
  },
  {
    id: 4,
    name: "Tech Blog",
    deployedUrl: "https://pure-temple-52601.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/Weather-Dashboard",
    logo: techLogo,
    description: "A Full Stack Blog App"
  },
  {
    id: 5,
    name: "Text Editor",
    deployedUrl: "https://enigmatic-reef-42603.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/PWA-Text-Editor",
    logo: textEditorLogo,
    description: "A text editor Progressive Web App"
  },
  {
    id: 6,
    name: "Geography Quiz",
    deployedUrl: "https://stiltskinner.github.io/Geography-Quiz/",
    gitHubUrl: "https://github.com/Stiltskinner/Geography-Quiz",
    logo: geographyLogo,
    description: "A Geography Quiz App"
  },
]

export default function Portfolio() {
  return (
    <section className="container-fluid row justify-content-center align-items-start mb-3 vw-100" id="sec-about-me" title="Portfolio">
      <div className="d-flex row col-lg-8 col-md-6 col-12 align-self-center">
      <h2 className="text-center col-12">Portfolio</h2>
      {/* <Project projects={projects} /> */}
      </div>
    </section>

    
  );
}
