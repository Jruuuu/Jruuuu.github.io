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
            <b>Location: </b>San Diego and Los Angeles | <b>Phone# </b>{" "}
            619-961-5190 | <b>EMAIL: </b> ENRILOUGALDE@GMAIL.COM
            <br />
            <div className="row">
              <p>
                <img
                  src={Profile}
                  alt="Enrilo Ugalde Profile"
                  className="float-left mr-3"
                />
                A computer geek at heart, my interest in the world of technology
                began when my parents introduced me to my first computer, MSDOS.
                Since then I have been fixing, repairing, dissecting the
                technical side of a personal computer. As my 15 year mark
                working in administration for the Government comes, my wife
                sparked an interest in the web development side of technology.
                Although we are in an environment where we are secluded, I am
                excited to work with a creative team that will make the world a
                better place one code, script, or gesture at a time. Today, I am
                on path to become a Full Stack: Developer in which I will be
                proficient in Front End:
                <img src={Html} alt="HTML" />,
                <img src={csIcon} alt="CSS" />,
                <img src={Jscript} alt="Javascrtip" />,
                <img src={Jquery} alt="JQUERY" />,
                <img src={React} alt="REACT" /> and Back End:{" "}
                <img src={NodeJs} alt="NodeJS" />,
                <img src={Express} alt="Express" />,
                <img src={MySql} alt="MYSQL" />,{" "}
                <img src={MongoDB} alt="MONGODB" />. and many more evolving
                languages in this field.
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
