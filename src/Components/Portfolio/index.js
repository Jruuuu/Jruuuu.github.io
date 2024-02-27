import "./style.css";
import { Button } from "react-bootstrap";
import OUTDoorsy from "../../assets/images/OUTDoorsyimg.JPG";
import pwdeveloper from "../../assets/images/pwGenImg.JPG";
import cyclickgrindimg from "../../assets/images/cyclickgrindimg.JPG";
import storm from "../../assets/images/stormimg.JPG";
import popquery from "../../assets/images/popqueryimg.JPG";

export default function Portfolio() {
  return (
    <div className="container" id="Portfolio">
      <h1>PORTFOLIO</h1>
      <div className="row">
        <hr />
      </div>
      {/* FIVE PORTFOLIO PICS */}
      <div className="row portfolio">
        <div className="col-md-6 img-fluid">
          <h3>OUTDOORSY</h3>
          <hr />
          <a href="https://jruuuu.github.io/OUTDoorsy/">
            <img src={OUTDoorsy} alt="Storm DashboardScreenShot" />
          </a>
          <br />
          <Button
            variant="secondary"
            size="sm"
           align="center"
          >
            <a href="https://github.com/Jruuuu/OUTDoorsy">
              Github OUTDOORSY Repo{" "}
            </a>
          </Button>
        </div>
        <div className="col-md-6 img-fluid">
          <h3>Password Developer</h3>
          <hr />
          <a href="https://jruuuu.github.io/pwdeveloper/">
            <img src={pwdeveloper} alt="PW GENERATOR"></img>
          </a>
          <br />
          <Button
            variant="secondary"
            size="sm"
           align="center"
          >
            <a href="https://github.com/Jruuuu/pwdeveloper" className="">
              Github PW Developer Repo
            </a>
          </Button>
        </div>
      </div>
      <div className="row portfolio">
        <div className="col-md-6 img-fluid">
          <h3>CyCLICKGrind</h3>
          <hr />
          <a href="https://jruuuu.github.io/CyClickGrind/">
            <img src={cyclickgrindimg} alt="CyCLICKGrind"></img>
          </a>
          <br />
          <Button
            variant="secondary"
            size="sm"
           align="center"
          >
            <a href="https://github.com/Jruuuu/CyClickGrind" className="">
              Github CyClickGrind Repo
            </a>
          </Button>
        </div>

        <div className="col-md-6 img-fluid">
          <h3>STORM</h3>
          <hr />
          <a href="https://jruuuu.github.io/storm/">
            <img src={storm} alt="Storm DashboardScreenShot"></img>
          </a>
          <br />
          <Button
            variant="secondary"
            size="sm"
           align="center"
          >
            <a href="https://github.com/Jruuuu/storm" className="">
              Github STORM Repo
            </a>
          </Button>
        </div>
      </div>
      <div className="row portfolio">
        <div className="col-md-6 img-fluid">
          <h3>Pop QUERY</h3>
          <hr />
          <a href="https://jruuuu.github.io/popquery/">
            <img src={popquery} alt="POP QUERY"></img>
          </a>
          <br />
          <Button
            variant="secondary"
            size="sm"
           align="center"
          >
            <a href="https://github.com/Jruuuu/popquery" className="">
              Github Pop Query Repo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
