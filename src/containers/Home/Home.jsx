import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const linkAbout = () => {
    history.push(`/about`);
  };

  const linkPortfolio = () => {
    history.push(`/portfolio`);
  };

  return (
    <div className="container mt-5 home">
      <div id="welcome-message">Welcome to my portfolio</div>
      <div className="row">
        <div className="col-12 col-md-6">
          
          <h3 className="mt-3">
            I'm a full-stack developer based in Atlanta, GA
          </h3>
          <div className="row">
            <div className="col-5 home-buttons m-3" onClick={linkAbout}>
              About me
            </div>
            <div className="col-5 home-buttons m-3" onClick={linkPortfolio}>
              View my projects
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mt-2">Connect with me:</h2>
          <div className="row ml-2">
            <a
              href="https://github.com/pkriengsiri"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-6x mr-2"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/petekriengsiri/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-6x mr-2"></i>
            </a>
            <a href="mailto:pkriengsiri@gmail.com">
              <i className="fas fa-envelope-square fa-6x"></i>
            </a>
          </div>
          <h2 className="mt-3">My technologies:</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
