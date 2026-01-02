import React from "react";
import Nav from "react-bootstrap/Nav";

const ContactMe = () => {
  return (
    <>
      <div id="contact-me-container">
        <div className="contact-email">
          <a id="email" href="mailto:ksglasper@gmail.com">
            Get in Contact!
          </a>
        </div>

        <div className="socials-container">
          <Nav.Link
            className="contact-link"
            href="https://www.linkedin.com/in/ksglasper/"
          >
            <img className="contact-icon" src="./images/linkedin.png"></img>
          </Nav.Link>
          <Nav.Link
            className="contact-link"
            href="https://github.com/ksglasper"
          >
            <img className="contact-icon" src="./images/github-icon.png"></img>
          </Nav.Link>
          {/* <Nav.Link className="contact-link" href="https://twitter.com/thatsald7">
                      <img
                        className="contact-icon"
                        src="./images/twitter.png"
                      ></img>
                    </Nav.Link> */}
          <Nav.Link
            className="contact-link"
            href="https://www.strava.com/athletes/104206224"
          >
            <img className="contact-icon" src="./images/strava.png"></img>
          </Nav.Link>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
