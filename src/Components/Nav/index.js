import React from "react";
import "./style.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

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
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <button
        className="navbar-brand js-scroll-trigger"
        onClick={() => scrollToSection("Main")}
        style={{ cursor: "default" }}
      >
        JR
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ml-auto">
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
