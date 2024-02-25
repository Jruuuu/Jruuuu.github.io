import "react-bootstrap";
import "./style.css";
import gitHubIcon from "../../assets/images/GitHub-Mark-Light-32px.png";
import linkedInIcon from "../../assets/images/LI-In-Bug.png";
import instgramIcon from "../../assets/images/Instagram.png";

function App() {
  return (
    <footer className="footer text-center fixed-bottom mt-auto">
      <div className="mt-1 navbar-dark bg-light">
        <footer className="footer-copyright my-auto">
          <small className="mr-2">copyright © 2024</small>

          <a
            className="navbar-brand"
            href="https://github.com/Jruuuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="github icon" loading="lazy"></img>
          </a>
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/enrilo-ugalde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="linkedin icon" loading="lazy"></img>
          </a>
          <a
            className="navbar-brand"
            href="https://www.instagram.com/jruuuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={instgramIcon} alt="instagram icon" loading="lazy"></img>
          </a>
        </footer>
      </div>
    </footer>
  );
}

export default App;
