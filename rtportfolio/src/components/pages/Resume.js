import React from "react";
import RTResume from "../Assets/RTResume.pdf";
// TODO Add HTML and content to make Resume/skills list, replace blog with resume
export default function Resume() {
  return (
    <section
      className="container-fluid row justify-content-center align-items-start mb-3 vw-100"
      id="sec-Resume"
      title="Resume"
    >
        <h2 className="text-center col-12">Resume</h2>
        <a className="d-flex header-link flex-wrap justify-content-center col-3" href={RTResume} download>
          <p className="text-center">Click to download!</p>
      </a>
      <div className="d-flex row col-lg-10 col-md-7 col-12 align-self-center">
        <h3 className="text-center col-12 my-2 lgray-back">Technical Skills</h3>
        <div className="lead text-center my-3 text-default col-lg-4 col-12 ">
          <p className="fw-bold">Applications and Deployment</p>
          <p>
            VSCode | Heroku | MySQL Workbench | Insomnia | MongoDB | SQL 
          </p>
        </div>
        <div className="lead text-center my-3 text-default col-lg-4 col-12 sky-back">
          <p className="fw-bold">Languages, Libraries, Frameworks</p>
          <p>
          Javascript | HTML5 | CSS3 | jQuery |
          jQueryUI | Bootstrap | Handlebars | Node.js | Express.js | Sequelize |
          Git | Mongoose | NoSQL | GraphQL | React.js
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
            University of Texas at Austin/Trilogy 
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
      <div className="lead text-center my-3 text-default col-12">
          <div className="col-lg-4 col-12 mx-auto sky-back">
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
          Team Lead: Managed a team of 4 other teachers, overseeing the design and development of curriculum for all English 3 courses (~650 students/year). Spearheaded pivot to virtual learning in 2020 and led team in creating digital curriculum, assessments, and lessons. 
          </li>
          <li>
          Literacy Hub: Founded the Akins Literacy Hub, a peer-tutoring club based on the Writing Center model championed by The UT Austin Writing Center. Based on research into successful peer-tutoring efforts amongst high schoolers, designed a system focused on fostering student leadership and ownership. After 3 years, secured funding from administration to ensure continued support and success.
          </li>
          <li>
          Core Work: Taught courses at all high school grade levels, including Reading, English 2, English 3, English 3 OnRamps Dual Enrollment, and College Readiness. Day-to-day role requires stakeholder management in working with administration and parents, up-to-date knowledge of current education best practices, and prioritizing the needs of hundreds of students per year.
          </li>
        </ul>
        </div>
        <div className="lead text-center my-3 text-default col-12 ">
        <div className="col-lg-4 col-12 mx-auto sky-back">
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
          Led a team of 15 graduate and undergraduate consultants in crafting content for presentation to a variety of UT courses.  
          </li>
          <li>
          Delivered over 40 lecture-length presentations on writing, rhetoric, and research principles to UT courses in multiple departments. Tailored presentations to multiple audiences including students in engineering and computer science. 
          </li>
          <li>
          Conducted over 700 forty-five minute writing consultations with UT students from all disciplines, covering topics ranging from organization, research, argumentation, citations, sentence-level elegance, and more.
          </li>
        </ul>
        </div>
        <div className="lead text-center my-3 text-default col-12">
        <div className="col-lg-4 col-12 mx-auto sky-back">
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
          Educated executive level legal clients on using litigation software. Developed detailed digital training materials and coursework.
          </li>
          <li>
          Partnered with C-Suite on client strategy and reporting. Led overhaul of company-wide client reporting, resulting in increased client satisfaction and retention. 
          </li>
          <li>
          Created written and video educational content to train end-users on product features and updates. Authored blog posts and white papers for the company website on trends in litigation and document management.
          </li>
        </ul>
        </div>
        <div className="lead text-center my-3 text-default col-12">
        <div className="col-lg-4 col-12 mx-auto sky-back">
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

// Technical Skills
// __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
