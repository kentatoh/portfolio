import React from "react";
import Image from "./Image";
import "./ImageGrid.css";

function ImageGrid() {
  return (
    <>
      <div className="img-grid-container">
        <div className="img-grid">
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
          <Image path="/project/content1" src="images/placeholder.jpg" />
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
