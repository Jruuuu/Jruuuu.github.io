import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import "./style.css";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("targetElement");
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > rect.top) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="background"/>
        {showNav && <Nav />}
        <div id="targetElement">
          <div className="Main">
            <Main />
          </div>
          <div className="About">
            <About />
          </div>

          <div className="Portfolio">
            <Portfolio />
          </div>

          <Footer />
      </div>
    </div>
  );
}
