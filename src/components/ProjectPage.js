import React from "react";

function ProjectPage(props) {
  return (
    <>
      <div className="project-page-container">
        <div className="project-page-content">
          <h1 className="project-page-header">{props.header}</h1>
          <img className="project-page-img" src={props.src} alt={props.alt} />
          <p className="project-page-para">{props.para}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
