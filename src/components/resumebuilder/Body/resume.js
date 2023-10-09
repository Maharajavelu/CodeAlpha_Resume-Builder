
import React from "react";

import resumeSvg from "../../assests/resume.svg";
import { Link } from "react-router-dom";
import './resume.css';

export function Resume() {
  return (
    <div className="container">
      <div className="left">
        <p className="heading3">
        Stand out from the crowd with a <span className="span1">Resume</span> that's tailored to your dream job.
        </p>
        <p className="heading3">
        Create your resume for free in minutes with our easy-to-use builder. 
        <br /><button className="span"><Link to="/edit">Get Started Today!</Link>
        </button>
        
        </p>
      </div>
      <div className="right">
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

