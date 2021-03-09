import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";


const Home = () => {

  const history = useHistory();

  const linkAbout = () => {
    history.push(`/`);
  }

  const linkPortfolio = () => {
    history.push(`/portfolio`);
  }

  return (
    <div className="container mt-5 home">
      <div className="row">
        <div className="col-12 col-md-6">
          <div id="welcome-message">Welcome to my portfolio</div>
          <h3 className="mt-3">
            I'm a full-stack developer based in Atlanta, GA
          </h3>
          <div className="row">
            <div className="col-5 home-buttons m-3" onClick={linkAbout}>About me</div>

            <div className="col-5 home-buttons m-3" onClick={linkPortfolio}>View my projects</div>

            {/* <div className="col-5 home-buttons m-3">About me</div>
             <div className="col-5 home-buttons m-3">View my projects</div> */}
          </div>
          {/* <button>About me</button>
          <button>View my projects</button> */}
        </div>
        <div className="col-12 col-md-6">
          <h2>Connect with me:</h2>
          <div className="row">
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
          <h2>My technologies:</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
