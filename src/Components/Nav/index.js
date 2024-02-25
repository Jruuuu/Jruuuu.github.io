import React from "react";
import "./style.css";
import { Nav, Navbar} from "react-bootstrap";

export default function App() {
  function findPos(obj) {
    let curtop = -50;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while (obj === obj.offsetParent);
      return [curtop];
    }
  }

  function scrollToSection(e) {
    window.scrollTo({
      top: findPos(document.getElementById(e)) ,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <button
        className="navbar-brand js-scroll-trigger mr-auto"
        onClick={() => scrollToSection("Main")}
        style={{ cursor: "default" }}
      >
        JR
      </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <button
              className="nav-link js-scroll-trigger"
              onClick={() => scrollToSection("About")}
              style={{ cursor: "default" }}
            >
              ABOUT
            </button>
            <button
              className="nav-link  js-scroll-trigger"
              onClick={() => scrollToSection("Portfolio")}
              style={{ cursor: "default" }}
            >
              PORTFOLIO{" "}
            </button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
}
