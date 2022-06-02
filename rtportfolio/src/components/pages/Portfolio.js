import React from "react";
import Project from '../Project'
import pigLogo from "../Assets/images/pigLogo.png";
import thisDayLogo from "../Assets/images/onthisday_black.png";
import weatherLogo from "../Assets/images/Weather-Dash-Image.jpg";
import techLogo from "../Assets/images/techBlogDemo.gif";
import textEditorLogo from "../Assets/images/textEditorLogo.JPG";
import geographyLogo from "../Assets/images/geography-quiz-img.jpg";
import gitHubLightLogo from "../Assets/images/GitHub-Mark-Light-120px-plus.png";
import gitHubDarkLogo from "../Assets/images/GitHub-Mark-120px-plus.png";
import gitHubBlueLogo from "../Assets/images/GitHub-Mark-120px-plus-blue.png";

const projects = [
  {
    id: 1,
    name: "Pig E-Bank",
    deployedUrl: "https://infinite-falls-27891.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/Pig-E-Bank",
    logo: pigLogo,
    gitHubLogo: gitHubDarkLogo
  },
  {
    id: 2,
    name: "This Day in History",
    deployedUrl: "https://stiltskinner.github.io/This-Day-In-History/",
    gitHubUrl: "https://github.com/Stiltskinner/This-Day-In-History",
    logo: thisDayLogo,
    gitHubLogo: gitHubBlueLogo
  },
  {
    id: 3,
    name: "Weather Dashboard",
    deployedUrl: "https://stiltskinner.github.io/Weather-Dashboard/",
    gitHubUrl: "https://github.com/Stiltskinner/Tech-Blog",
    logo: weatherLogo,
    gitHubLogo: gitHubLightLogo
  },
  {
    id: 4,
    name: "Tech Blog",
    deployedUrl: "https://pure-temple-52601.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/Weather-Dashboard",
    logo: techLogo,
    gitHubLogo: gitHubLightLogo
  },
  {
    id: 5,
    name: "Text Editor",
    deployedUrl: "https://enigmatic-reef-42603.herokuapp.com/",
    gitHubUrl: "https://github.com/Stiltskinner/PWA-Text-Editor",
    logo: textEditorLogo,
    gitHubLogo: gitHubLightLogo
  },
  {
    id: 6,
    name: "Geography Quiz",
    deployedUrl: "https://stiltskinner.github.io/Geography-Quiz/",
    gitHubUrl: "https://github.com/Stiltskinner/Geography-Quiz",
    logo: geographyLogo,
    gitHubLogo: gitHubLightLogo
  },
]

export default function Portfolio() {
  return (
    <section className="container-fluid row col-12 justify-content-center flex-wrap mb-3" id="sec-about-me" title="Portfolio">
      <h2 className="text-center col-12">Portfolio</h2>
      <Project projects={projects} />
    </section>

    
  );
}
