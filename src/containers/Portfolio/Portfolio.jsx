import React, { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Modal from "../../components/Modal/Modal";
import Project from "../../components/Project/Project";
import circleImage from "../../images/portfolio.jpg";
import projects from "./projects";

const Portfolio = () => {
  // Stores the details of the project a user clicks
  const [project, setProject] = useState(null);
  // Controls the display state of the project modal window
  const [modalDisplay, setModalDisplay] = useState(false);

  // useEffect(() => {
  //   // Detect a click outside of the sidebar and set the sidebarDisplay state to false
  //   document.addEventListener("click", (e)=> {
  //     console.log(e.target);
  //     console.log(e.target !== document.querySelectorAll(".project-card"))
  //     // Check to see if the target is not the sidebar or the navbar hamburger menu icon
  //     if(e.target !== document.querySelector(".project-modal") && e.target !== document.querySelectorAll(".project-card")) {
  //       console.log("clicked outside")
  //       setModalDisplay(false);
  //     }
  //   })
  // }, []);

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
