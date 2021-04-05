import React from "react";
import "./Project.css";

const Project = ({ image, name, details,setProject, setModalDisplay}) => {
  let cardImage = require("../../images/" + image);

  return (
    <div
      className="card card-custom align-items-center animate-card"
      onClick={(e) => {
        // Sets the project state to the current project
        setProject(details);
        // Displays a modal window with the current project
        setModalDisplay(true);
      }}
    >
      <img className="card-img-top" src={cardImage.default} alt={"screenshot of "+name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Project;
