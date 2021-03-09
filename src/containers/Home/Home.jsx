import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div id="welcome-message">Welcome to my portfolio</div>
          <h3>I'm a full-stack developer based in Atlanta, GA</h3>
          <button>About me</button>
          <button>View my projects</button>
        </div>
        <div className="col-12 col-md-6">
          <h3>Connect with me:</h3>

          <h3>My technologies:</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
