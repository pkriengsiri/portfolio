import React from "react";
import "./Project.css";

const Project = ({ image, name, details,setProject}) => {
  let cardImage = require("../../images/" + image);

  return (
    <div
      className="card card-custom align-items-center animate-card"
      onClick={(e) => {
        setProject(details);
        document.getElementById('id01').style.display='block';
      }}
    >
      <img className="card-img-top" src={cardImage.default} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Project;
