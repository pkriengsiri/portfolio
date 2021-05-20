import React, { useState } from "react";
import "./Project.css";
import ImageSpinner from "../ImageSpinner/ImageSpinner";

const Project = ({ image, name, details, setProject, setModalDisplay }) => {
  const [loading, setLoading] = useState(true);

  let cardImage = require("../../images/" + image);

  return (
    <div
      className="card card-custom project-card align-items-center animate-card"
      onClick={(e) => {
        // Sets the project state to the current project
        setProject(details);
        // Displays a modal window with the current project
        setModalDisplay(true);
      }}
    >
      {loading && (
        <ImageSpinner
          spinnerContainer={"portfolio-spinner-container"}
          spinnerType={"portfolio-spinner"}
        />
      )}
      <img
        style={!loading ? {} : { display: "none" }}
        className="card-img-top"
        src={cardImage.default}
        alt={"screenshot of " + name}
        onLoad={() => {
          setLoading(false);
        }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Project;
