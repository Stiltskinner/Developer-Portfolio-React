import React from "react";
import RTResume from "../Assets/RTResume.pdf";
// TODO Add HTML and content to make Resume/skills list, replace blog with resume
export default function Resume() {
  return (
    <section
      className="container-fluid row justify-content-center align-items-start mb-3 col-12"
      id="sec-Resume"
      title="Resume"
    >
        <h2 className="text-center col-12">Resume</h2>
            <div className="d-flex col-12 justify-content-center">
            <a className="d-flex header-link flex-wrap justify-content-center resume-page-link text-center" href={RTResume} download>
            Click to download resume
      </a>
            </div>
            <div className="d-flex col-12 justify-content-center">
            <a className="d-flex header-link flex-wrap justify-content-center resume-page-link" href="https://gist.github.com/Stiltskinner/957834ed7b69908d00aa60b2d93701f8" target="_blank" rel="noreferrer noopener">
          <p className="text-center">Click to view technical writing sample</p>
      </a>
            </div>

      <div className="d-flex row col-lg-10 col-md-7 col-12 align-self-center">
        <h3 className="text-center col-12 my-2 lgray-back">Technical Skills</h3>
        <div className="lead text-center my-3 text-default col-lg-4 col-12 ">
          <p className="fw-bold">Applications and Deployment</p>
          <p>
            VSCode | Heroku | MySQL Workbench | Insomnia 
          </p>
        </div>
        <div className="lead text-center my-3 text-default col-lg-4 col-12 sky-back">
          <p className="fw-bold">Languages, Libraries, Frameworks</p>
          <p>
          Javascript | HTML5 | CSS3 | jQuery |
          jQueryUI | Bootstrap | Webpack | Node.js | Express.js | 
          Git | SQL | Sequelize | Mongoose | NoSQL | MongoDB | GraphQL | React.js
          </p>
        </div>
        <div className="lead text-center my-3 text-default col-lg-4 col-12">
          <p className="fw-bold ">Concepts</p>
          <p>
          RESTful APIs | MVC Model | CRUD Operations | Object-Oriented Programming
          </p>
        </div>
      </div>
      <div className="d-flex row col-lg-10 col-md-7 col-12 align-self-center">
      <h3 className="text-center col-12 my-2  lgray-back">Education</h3>
      <div className="lead text-center my-3 text-default col-lg-4 col-12 sky-back">
          <p className="fw-bold">Full Stack MERN Bootcamp</p>
          <p>
            University of Texas at Austin 
          </p>
          <p>
            March 2022 - June 2022 
          </p>
          <p> Grade: A+</p>
        </div>
        <div className="lead text-center my-3 text-default col-lg-4 col-12">
          <p className="fw-bold ">M.Ed.  Curriculum and Instruction</p>
          <p>
University of Texas at Austin
          </p>
          <p>
            August 2014 - June 2016 
          </p>
          <p> GPA: 4.0</p>
        </div>
        <div className="lead text-center my-3 text-default col-lg-4 col-12 sky-back">
          <p className="fw-bold">B.A. Rhetoric and Writing</p>
          <p>
University of Texas at Austin
          </p>
          <p>
            August 2006 - June 2010
          </p>
          <p> GPA: 3.78</p>
        </div>
      </div>

      <div className="d-flex row col-lg-10 col-md-7 col-12 align-self-center">
      <h3 className="text-center col-12 my-2 lgray-back">Work Experience</h3>
      {/* Technical Consultant at Kibo Section */}
      <div className="lead text-center my-3 text-default col-12">
          <div className="col-12 mx-auto sky-back">
          <h4 className='fw-bold'>Technical Consultant</h4>
          <h4>
            Kibo Commerce Inc. 
          </h4>
          <h4>
            July 2022 - September 2022
          </h4>
          </div>
        <ul className="text-start">
          <li>
          Built custom solutions for digital storefronts, integrating their e-commerce presence with the Kibo Commerce API/Order Management System using JavaScript, HTML, and CSS.
          </li>
          <li>
          Managed software integrations for complex e-commerce workflows, including shipping, inventory management, product catalogs, personalization, search, and more.
          </li>
          <li>
          Performed data management using the Kibo API, including writing custom functions to create new data entries and update existing ones.
          </li>
        </ul>
        </div>
      {/* English Teaching Section */}
      <div className="lead text-center my-3 text-default col-12">
          <div className="col-12 mx-auto sky-back">
          <h4 className='fw-bold'>English Team Leader, Teacher</h4>
          <h4>
            Akins Early College High School 
          </h4>
          <h4>
            August 2016 - March 2022
          </h4>
          </div>
        <ul className="text-start">
          <li>
          Managed a team of 4 other teachers, overseeing the design and development of curriculum for all English 3 courses (~650 students/year). Spearheaded pivot to virtual learning in 2020 and led team in creating digital curriculum, assessments, and lessons. 
          </li>
          <li>
          Founded the Akins Literacy Hub, a peer-tutoring club based on the Writing Center model championed by The UT Austin Writing Center. After 3 years, secured funding from administration to ensure continued support. Club provided over 500 tutoring sessions per year.
          </li>
          <li>
          Taught courses at all high school grade levels, including Reading, English 2, English 3, English 3 Dual-Enrollment through UT-Austin, and College Readiness. 
          </li>
          <li>
          Researched and implemented current education best practices and technologies 
          </li>
          <li>
          Achieved student college-credit success outcomes for Dual-Enrollment English students In the top 5% among other UT Dual Enrollment English teachers statewide.
          </li>
          <li>
          Evaluated as highly effective by administration 5 years in a row. 
          </li>
        </ul>
        </div>
        {/* Presentations Coordinator Section */}
        <div className="lead text-center my-3 text-default col-12 ">
        <div className="col-12 mx-auto sky-back">
          <h4 className='fw-bold'>
Presentations Coordinator, Writing Consultant
</h4>
          <h4>
          The University of Texas at Austin Writing Center 
          </h4>
          <h4>
            August 2014 - May 2016
          </h4>
          </div>
        <ul className="text-start">
          <li>
          Led a team of 15 graduate and undergraduate consultants in crafting content for presentation to a variety of UT courses, earning 97% 5/5 ratings on instructor satisfaction surveys.
          </li>
          <li>
          Delivered over 40 lecture-length presentations on writing, rhetoric, and research principles to UT courses in multiple departments. Tailored presentations to multiple audiences including students in engineering and computer science.  
          </li>
          <li>
          Conducted over 700 forty-five minute writing consultations with UT students from all disciplines, covering topics ranging from organization, research, argumentation, citations, sentence-level elegance, and more, earning 100% 10/10 ratings on student satisfaction surveys.
          </li>
        </ul>
        </div>
        {/* CSC Section */}
        <div className="lead text-center my-3 text-default col-12">
        <div className="col-12 mx-auto sky-back">
          <h4 className='fw-bold'>
          Client Services Coordinator
</h4>
          <h4>
          Liquid Litigation Management 
          </h4>
          <h4>
            June 2012 - August 2014
          </h4>
          </div>
        <ul className="text-start">
          <li>
          Educated executive level legal clients on using proprietary litigation software. Developed detailed digital training materials and coursework. Authored over 50 Requests for Proposal(RFPs).
          </li>
          <li>
          Partnered with C-Suite on client strategy and reporting. Led overhaul of company-wide client reporting, resulting in increased client satisfaction and retention.
          </li>
          <li>
          Created written and video educational content to train end-users on product features and updates. Authored blog posts and white papers for the company website on trends in litigation and document management.
          </li>
          <li>
          Earned 98% 5/5 ratings on customer satisfaction surveys for clients ranging from law-firm partners, associate attorneys, and document review personnel.
          </li>
        </ul>
        </div>
        {/* College Adviser Section */}
        <div className="lead text-center my-3 text-default col-12">
        <div className="col-12 mx-auto sky-back">
          <h4 className='fw-bold'>
          College Adviser
</h4>
          <h4>
          Advise TX - The University of Texas at Austin
          </h4>
          <h4>
            June 2010 - June 2012
          </h4>
          </div>
        <ul className="text-start">
          <li>
          Worked with students one-on-one and also advised at scale, delivering over 350 classroom presentations on college admissions, financial aid, college life, and more.
          </li>
          <li>
          Improved college application rates by 58% from the previous year at Sterling High School. 
          </li>
          <li>
          Presented to the Texas Higher Education Coordinating Board regarding the impact of the Advise TX Program.
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}