import React from "react";
import "./Main.css";

const Main = ({circleImage,circleImageAlt,content,title}) => {
  return (
    <main className="container my-3 rounded" id="main">
      <div className="row">
        <div className="col">
          {/* <!-- Header row --> */}
          <div className="row rounded-top" id="banner">
            <h2 className="font-weight-bold" id="main-header">
              {title}
            </h2>
            <hr />
            <img
              src={circleImage}
              className="img-fluid"
              id="circle-image"
              alt={circleImageAlt}
            />
          </div>
        </div>
      </div>
      {content}
    </main>
  );
};

export default Main;
