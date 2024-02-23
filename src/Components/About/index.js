import "./style.css";
import Profile from "../../assets/images/IMG_2035.jpg";
import Html from "../../assets/images/Html.svg";
import csIcon from "../../assets/images/css.svg";
import Jscript from "../../assets/images/javascript.svg";
import Jquery from "../../assets/images/Jquery.svg";
import NodeJs from "../../assets/images/NodeJS.svg";
import Express from "../../assets/images/Express.svg";
import MySql from "../../assets/images/mysql.svg";
import MongoDB from "../../assets/images/Mongodb.svg";
import React from "../../assets/images/React.svg";

export default function About() {
  return (
    <div className="container col-md-10" id="About">
      <div className="row">
        <div className="col-md-12">
          <h1>Enrilo M. Ugalde JR</h1>
          <hr></hr>
          <div className="content">
            <b>Location: </b>San Diego  | <b>Phone# </b>
            619-961-5190 | <b>EMAIL: </b> ENRILOUGALDE@GMAIL.COM
            <br />
            <div className="row">
              <p>
                <img
                  src={Profile}
                  alt="Enrilo Ugalde Profile"
                  className="float-left mr-1 ml-4"
                />
                <b>
                  My journey from an Electronics Store Sales Associate to a
                  Software Engineer at Booz Allen Hamilton has been one of
                  dedication, perseverance, and continuous learning. Graduating
                  from the UCSD Extension Coding Bootcamp was a pivotal moment,
                  marking the beginning of my transition into the tech industry.
                  As a Sales Associate, I honed my customer service and
                  communication skills, which have proven invaluable in my
                  current role. My time at the bootcamp equipped me with a
                  strong foundation in programming languages, software
                  development methodologies, and problem-solving skills, setting
                  the stage for my career as a Software Engineer. Joining Booz
                  Allen Hamilton has been an exciting opportunity to apply my
                  technical expertise to real-world challenges and contribute to
                  innovative solutions. I am passionate about technology and
                  eager to continue growing in my technical skills. My journey
                  is a testament to my commitment to personal and professional
                  development, and I look forward to the opportunities that lie
                  ahead.
                </b>
                <br></br>
                <b>Front End:</b>
                <br></br>
                <img src={Html} alt="HTML" />,
                <img src={csIcon} alt="CSS" />,
                <img src={Jscript} alt="Javascrtip" />,
                <img src={Jquery} alt="JQUERY" />,
                <img src={React} alt="REACT" />
                <br></br>
                <b>Back End:</b>
                <br></br>
                <img src={NodeJs} alt="NodeJS" />,
                <img src={Express} alt="Express" />,
                <img src={MySql} alt="MYSQL" />,
                <img src={MongoDB} alt="MONGODB" />.
                <br />
                <br />
                <b>
                  “The mind is like an Umbrella, it only works when it is open”
                </b>
                <br /> - Sir James Jeans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
