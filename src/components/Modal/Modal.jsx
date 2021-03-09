import React, { useContext } from "react";
import "./Modal.css";
import ProjectContext from "../../contexts/ProjectContext";

const Modal = () => {
  const {
    image,
    name,
    description,
    technologies,
    repository,
    deployed,
    imageAlt,
  } = useContext(ProjectContext);

  let modalImage = require("../../images/" + image);

  return (
    <div id="id01" className="w3-modal">
      <div className="w3-modal-content w3-animate-top p-2">
        <header className="container w3-teal modal-header pb-1">
          <h3>{name}</h3>
        </header>
        <div className="container">
          <div className="mb-3">
            <img
              className="w-100 mt-3"
              id="project-image"
              alt={imageAlt}
              src={modalImage.default}
            />
          </div>
          <h4>Description</h4>
          <p>{description}</p>
          <h4>Technologies</h4>
          <p>{technologies}</p>
          <div className="modal-buttons mb-3">
            <a
              href={deployed}
              className="btn btn-primary bg-info rounded border-info m-1"
              id="application-link"
              target="_blank"
            >
              View the deployed application
            </a>
            <a
              href={repository}
              className="btn btn-primary bg-info rounded border-info m-1"
              id="repository-link"
              target="_blank"
            >
              View the repository
            </a>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("id01").style.display = "none";
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
