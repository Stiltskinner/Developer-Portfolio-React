import React from 'react';
import profilePic from '../Assets/images/RyanProfilePic.jpg'
// TODO: Add HTML and content to create actual about page
export default function About() {
  return (
<section className="container-fluid row justify-content-center align-items-start mb-3 vw-100" id="sec-about-me"
      title="About Me">
      <div className="col-lg-3 col-md-4 col-6 frame ms-5 my-auto">
        <img className="d-flex m-auto img-fluid" src={profilePic} alt="Ryan Thomas Profile"/>
      </div>
      <div className="d-flex row col-lg-8 col-md-6 col-12 align-self-center">
      <h2 className="text-center col-12">About Me</h2>
        <p className="lead text-start my-5 text-default">I am a Full Stack MERN Developer and former teacher with a passion for coding, learning, teaching, and solving problems. My combined technical and soft skills make me an asset for any team that needs someone flexible and proficient at leading others as well as taking direction. My graduate coursework in learning psychology helps me learn new skills by identifying gaps in my knowledge and efficiently filling those gaps. My training in education and teaching experience gives me a strong foundation for communication. If you want an ambitious, multi-talented hard-worker used to doing more with less, hire me. Thank you for checking out my work, and please feel free to reach out with inquiries, suggestions, job offers, or free cake.</p>
      </div>
    </section>
  );
}
