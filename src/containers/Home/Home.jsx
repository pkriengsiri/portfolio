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
    <>
    <div className="home-spacer"></div>
    <div className="container mt-3 home">
      <div id="welcome-message">Welcome to my portfolio</div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2 className="mt-3 mb-3">
            I'm a full-stack developer based in Atlanta, GA
          </h2>
          <div className="row justify-content-center">
            <div
              className="col-5 home-buttons m-1 text-center"
              onClick={linkAbout}
            >
              <p className="home-buttons-text">About me</p>{" "}
              <i class="fas fa-id-card fa-4x"></i>
            </div>
            <div
              className="col-5 home-buttons m-1 text-center"
              onClick={linkPortfolio}
            >
              <p className="home-buttons-text">View my projects</p>
              <i class="fas fa-tools fa-4x"></i>
            </div>
          </div>
          <div className="my-4">
            <h2 className="mx-2">Connect with me:</h2>
            <div className="row ml-4 d-flex">
              <a
                href="https://github.com/pkriengsiri"
                target="_blank"
                rel="noreferrer"
                className="home-link"
              >
                <i className="fab fa-github-square fa-6x mr-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/petekriengsiri/"
                target="_blank"
                rel="noreferrer"
                className="home-link"
              >
                <i className="fab fa-linkedin fa-6x mr-2"></i>
              </a>
              <a href="mailto:pkriengsiri@gmail.com" className="home-link">
                <i className="fas fa-envelope-square fa-6x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="mt-3 mb-3">My technologies:</h2>
          <div className="row icons p-3 d-flex justify-content-center mx-2">
            <i className="devicon-mongodb-plain-wordmark devicon m-2"></i>
            <i className="devicon-express-original devicon m-2"></i>
            <i className="devicon-react-original-wordmark devicon m-2"></i>
            <i className="devicon-nodejs-plain devicon m-2"></i>
            <i className="devicon-javascript-plain devicon m-2"></i>
            <i className="devicon-jquery-plain-wordmark devicon m-2"></i>
            <i className="devicon-html5-plain-wordmark devicon m-2"></i>
            <i className="devicon-mysql-plain-wordmark devicon m-2"></i>
            <i className="devicon-handlebars-plain-wordmark devicon m-2"></i>
            <i className="devicon-sequelize-plain-wordmark devicon m-2"></i>
            <i className="devicon-bootstrap-plain-wordmark devicon m-2"></i>
            <i className="devicon-css3-plain-wordmark devicon m-2"></i>
            <i className="devicon-git-plain-wordmark devicon m-2"></i>
            <i className="devicon-github-original-wordmark devicon m-2"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
