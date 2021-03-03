import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact</h1>
          <p>
            Email me at{" "}
            <a href="mailto:kentatoh13@gmail.com" className="email">
              kentatoh13@gmail.com
            </a>{" "}
            for collaboration
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
