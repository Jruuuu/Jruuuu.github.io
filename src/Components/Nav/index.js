import React from "react";
import "./style.css";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

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
      top: findPos(document.getElementById(e)),
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    // <Nav className="justify-content-end" activeKey="/home">
    // <Nav.Item>
    //   <Nav.Link href="/home">Active</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link eventKey="link-1">Link</Nav.Link>
    // </Nav.Item>
    // <Nav.Item>
    //   <Nav.Link eventKey="link-2">Link</Nav.Link>
    // </Nav.Item>
    // </Nav>

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <button
        className="navbar-brand js-scroll-trigger"
        onClick={() => scrollToSection("Main")}
        style={{ cursor: "default" }}
      >
        JR
      </button>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <button  className="nav-link js-scroll-trigger"
            onClick={() => scrollToSection("About")}
            style={{ cursor: "default" }}>ABOUT</button>

          <button
            className="nav-link  js-scroll-trigger"
            onClick={() => scrollToSection("Portfolio")}
            style={{ cursor: "default" }}
          >
            PORTFOLIO{" "}
          </button>
          {/* <button
            className="nav-link js-scroll-trigger"
            onClick={() => scrollToSection("")}
            style={{ cursor: "default" }}
          >
            RESUME
          </button> */}
        </div>
      </div>
    </nav>
  );
}
