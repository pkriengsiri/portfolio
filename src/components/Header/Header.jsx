import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import resume from "../../files/dpk_resume.pdf"

const Header = () => {
  const handleClick = () => {
    document.querySelector(".sidebar").style.width = "250px";
  };

  return (
    <>
      <nav className="navbar navbar-expanded">
        <div className="col-4">
          <Link to="/" className="h3 mr-4">About</Link>
          <Link to="/portfolio" className="h3 mr-4">Portfolio</Link>
          <a
            href={resume}
            target="_blank"
            className="h3"
          >
            Resume
          </a>
        </div>
        <div className="col-4">
          <div className="row justify-content-center">
            <Link to="/" className="h1 font-weight-bold">
              Pete Kriengsiri
            </Link>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <a href="https://github.com/pkriengsiri" target="_blank">
            <i className="fab fa-github-square fa-3x mr-2"></i>
          </a>
          <a href="https://www.linkedin.com/in/petekriengsiri/" target="_blank">
            <i className="fab fa-linkedin fa-3x mr-2"></i>
          </a>
          <a href="mailto:pkriengsiri@gmail.com" target="_blank">
          <i className="fas fa-envelope-square fa-3x"></i>
        </a>
        </div>
      </nav>
      <nav className="navbar navbar-collapse">
        <div className="col-1" id="open-menu">
          <i
            className="fas fa-bars fa-2x"
            id="hamburger-open"
            onClick={handleClick}
          ></i>
        </div>
        <div className="col-10">
          <div className="row justify-content-center">
            <Link to="/" className="h1 font-weight-bold">
              Pete Kriengsiri
            </Link>
          </div>
        </div>
        <div className="col-1"></div>
      </nav>
    </>
  );
};

export default Header;
