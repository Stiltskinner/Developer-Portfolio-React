import React from 'react';

export default function Footer() {
    return (
        <footer className="container-fluid row justify-content-md-start justify-content-center lgray-back position-fixed bottom-0" id="sec-contact" title="Contact-Me">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <ul className="nav col-12 flex-wrap text-md-start text-start justify-content-center">
              <li className="col-lg-2 col-12 fs-3"><a href="mailto:ryan.thomas@utexas.edu" target="_blank" rel="noreferrer" className="nav-link ">Email</a></li>
              <li className="col-lg-2 col-12 fs-3"><a href="https://github.com/Stiltskinner" target="_blank" rel="noreferrer" className="nav-link ">Github</a></li>
              <li className="col-lg-2 col-12 fs-3"><a href="https://www.linkedin.com/in/ryanpaxthomas/" target="_blank" rel="noreferrer" className="nav-link ">LinkedIn</a></li>
              <li className="col-lg-2 col-12 fs-3"><a href="https://twitter.com/Stiltskinner" target="_blank" rel="noreferrer" className="nav-link ">Twitter</a></li>
            </ul>
          </div>
      </footer>
    );
  }
  