import React, { useState } from "react";
import Main from "../../components/Main/Main";
import Modal from "../../components/Modal/Modal";
import Project from "../../components/Project/Project";
import circleImage from "../../images/portfolio.jpg";
import projects from "./projects";

const Portfolio = () => {
  const [project, setProject] = useState(null);
  const [modalDisplay, setModalDisplay] = useState(false);

  const circleImageAlt = "picture of a printed circuit board";
  const content = (
    <>
      <div className="row ml-5 justify-content-center">
        <h3>Please click on a project card to view the project details: </h3>
      </div>
      <div className="row justify-content-center" id="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            details={project}
            setProject={setProject}
            setModalDisplay={setModalDisplay}
          />
        ))}
      </div>
    </>
  );
  const title = "Portfolio";

  return (
    <>
      <Main
        circleImage={circleImage}
        circleImageAlt={circleImageAlt}
        content={content}
        title={title}
      />
      {modalDisplay && (
        <Modal setModalDisplay={setModalDisplay} project={project} />
      )}
    </>
  );
};

export default Portfolio;
