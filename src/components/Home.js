import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Projects from "./Projects";
import Technologies from "./Technologies";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";


const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Container id="mainContainer">
        <div id="section-1" data-aos="fade-down">
          <h1 className="home">Kyle Glasper</h1>
          <h2 className="gen-text">Former Chemist journeying the path of Software Engineering.</h2>
          <div className="break"></div>
          <img className="my-photo" src="./images/recent-photo-modified.png" />
          <div className="break"></div>
          <p className="blurb-1 gen-text">
            Fullstack Academy Web Development Bootcamp graduate. Currently and
            forever taking the next steps to learn and become a better
            programmer.
          </p>

          <Technologies />
        </div>
        <div className="section-break"></div>

        <div id="projects" className="anchor-target" data-aos="fade-up">
          <h1 className="section-heading">Current Projects</h1>
          <Projects />
        </div>
        <div className="section-break"></div>

        <div id="about-me" className="anchor-target" data-aos="fade-up">
        <h1 className="section-heading">About Me</h1>
        <AboutMe/>
        </div>
        {/* <h1 className="section-heading">Contact Me</h1> */}
        <div className="section-break"></div>

        <ContactMe/>
      </Container>
    </>
  );
};

export default Home;
