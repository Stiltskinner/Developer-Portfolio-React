import React from 'react';

export default function Footer() {
    return (
        <footer className="container-fluid row justify-content-md-start justify-content-center sky-back w-100 position-absolute bottom-0" id="sec-contact" title="Contact-Me">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <ul className="nav col-10 flex-wrap text-md-start text-start justify-content-start">
              <li className="col-lg-2 col-12 mx-auto"><a href="mailto:ryan.thomas@utexas.edu" target="_blank" rel="noreferrer" className="contact-link ">Email</a></li>
              <li className="col-lg-2 col-12 mx-auto"><a href="https://github.com/Stiltskinner" target="_blank" rel="noreferrer" className="contact-link ">Github</a></li>
              <li className="col-lg-2 col-12 mx-auto"><a href="https://www.linkedin.com/in/ryanpaxthomas/" target="_blank" rel="noreferrer" className="contact-link ">LinkedIn</a></li>
              <li className="col-lg-2 col-12 mx-auto"><a href="https://twitter.com/Stiltskinner" target="_blank" rel="noreferrer" className="contact-link ">Twitter</a></li>
            </ul>
          </div>
      </footer>
    );
  }
  