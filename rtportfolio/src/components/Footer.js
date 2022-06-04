import React from 'react';

export default function Footer() {
    return (
        <footer className="container-fluid row justify-content-md-start justify-content-center lgray-back position-fixed bottom-0 m-0" id="sec-contact" title="Contact-Me">
          <div className="d-flex col-12 align-items-center justify-content-center">
            <ul className="nav col-12 flex-wrap text-md-start justify-content-center">
              <li className="col-2 fs-4 text-center"><a href="mailto:ryan.thomas@utexas.edu" target="_blank" rel="noreferrer" className="nav-link footer-link">Email</a></li>
              <li className="col-2 fs-4 text-center"><a href="https://github.com/Stiltskinner" target="_blank" rel="noreferrer" className="nav-link footer-link">Github</a></li>
              <li className="col-2 fs-4 text-center"><a href="https://www.linkedin.com/in/ryanpaxthomas/" target="_blank" rel="noreferrer" className="nav-link footer-link">LinkedIn</a></li>
              <li className="col-2 fs-4 text-center"><a href="https://twitter.com/Stiltskinner" target="_blank" rel="noreferrer" className="nav-link footer-link">Twitter</a></li>
            </ul>
          </div>
      </footer>
    );
  }
  