import React from "react";
import ProjectPage from "../../ProjectPage.js";
import "./Content.css";

function Content1() {
  return (
    <>
      <div className="content-container">
        <ProjectPage
          src="../images/img-1.jpg"
          alt="project 1"
          header="Project 1"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, interdum et magna ut, varius volutpat magna. Donec sit amet ante fermentum, maximus nunc sed, blandit diam. Quisque fringilla diam nunc, sit amet eleifend felis ultricies eget. Morbi turpis elit, egestas non pharetra in, malesuada quis odio. Morbi venenatis ultricies orci, vitae elementum magna aliquam ac. Cras consectetur rhoncus orci, ac consectetur arcu placerat sed. Pellentesque convallis pulvinar faucibus. Curabitur dictum justo sit amet enim hendrerit tincidunt. Morbi ut elit ac ante tempor rutrum. Suspendisse id arcu sit amet libero placerat laoreet. Pellentesque in fringilla sapien. Aenean quis massa non magna euismod egestas. "
        />
      </div>
    </>
  );
}

export default Content1;
