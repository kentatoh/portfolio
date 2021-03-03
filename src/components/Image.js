import React from "react";
import { Link } from "react-router-dom";

function Image(props) {
  return (
    <>
      <div className="img-wrap">
        <Link className="img-link" to={props.path}>
          <img className="img-image" alt="project" src={props.src} />
        </Link>
      </div>
    </>
  );
}

export default Image;
