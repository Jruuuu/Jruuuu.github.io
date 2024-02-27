import "./style.css";

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

export default function Main() {
  return (
    <div className="container welcome ">
      <h2 className="wrap " id="Main">
        Hello World! I'm<span> JR,</span>
      </h2>
      <span className="text2">Take a Look Around</span>
      <br />
      <div className="dropdown">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi-eyeglasses"
            viewBox="0 0 16 16"
          >
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
          <div className="dropdown-content">
            <button onClick={() => scrollToSection("About")}>ABOUT ME </button>
            <button onClick={() => scrollToSection("Portfolio")}>
              PORTFOLIO
            </button>
            {/* <button onClick={()=>scrollToSection('Resume')} >RESUME</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
