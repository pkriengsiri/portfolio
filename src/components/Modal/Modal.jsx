import React from "react";
import "./Modal.css";

const Modal = ({ project, setModalDisplay }) => {
  let modalImage = require("../../images/" + project.image);

  return (
    <div id="id01" className="project-modal">
      <div className="project-modal-content animate-top p-2">
        <header className="container w3-teal modal-header pb-1">
          <h3>{project.name}</h3>
        </header>
        <div className="container">
          <div className="mb-3">
            <img
              className="w-100 mt-3"
              id="project-image"
              alt={project.imageAlt}
              src={modalImage.default}
            />
          </div>
          <h4>Description</h4>
          <p>{project.description}</p>
          <h4>Technologies</h4>
          <p>{project.technologies}</p>
          <div className="modal-buttons mb-3">
            {project.deployed && (
              <a
                href={project.deployed}
                className="btn btn-primary bg-info rounded border-info m-1"
                id="application-link"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Link
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                className="btn btn-primary bg-info rounded border-info m-1"
                id="repository-link"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setModalDisplay(false);
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
