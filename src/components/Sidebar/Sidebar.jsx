import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import resume from "../../files/dpk_resume.pdf";

const Sidebar = () => {
  const handleClick = () => {
    document.querySelector(".sidebar").style.width = "0px";
  };

  return (
    <>
      <aside className="sidebar" onBlur={handleClick}>
        <div id="close-menu">
          <i
            className="fas fa-window-close fa-2x"
            id="hamburger-close"
            onClick={handleClick}
          ></i>
        </div>
        <div className="list-group list-group-flush sidebar-links h4">
          <Link to="/" className="list-group-item">
            Home
          </Link>
          <Link to="/about" className="list-group-item">
            About
          </Link>
          <Link to="/portfolio" className="list-group-item">
            Portfolio
          </Link>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="list-group-item"
          >
            Resume
          </a>
          <a
            href="https://github.com/pkriengsiri"
            target="_blank"
            rel="noreferrer"
            className="list-group-item"
          >
            <i className="fab fa-github-square mr-2"></i>GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/petekriengsiri/"
            target="_blank"
            rel="noreferrer"
            className="list-group-item"
          >
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </a>
          <a href="mailto:pkriengsiri@gmail.com" className="list-group-item">
            <i className="fas fa-envelope-square mr-2"></i>Email
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
