import React from "react";
import { NavLink, Outlet, Link, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Header = () => {
  let {resume} = useParams()
  return (
    <>
      <header id="header">
      
    <Navbar fixed="top"  bg="test2" variant="dark">
        <Container>
          <Navbar.Brand href="#top"><img id="nav-logo" src="./images/nav-logo.png"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#top"><span>Home</span></Nav.Link>
            <Nav.Link href="#projects"><span>Projects</span></Nav.Link>
            <Nav.Link href="#about-me"><span>About Me</span></Nav.Link>
            <Nav.Link href="./assets/Resume_WebDev_KyleGlasper.pdf" target="_blank"><span>Resume</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>



        {/* <Stack direction="horizontal" gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border ms-auto">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>
        <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb> */}
      </header>
      <br />
      <Outlet />
    </>
  );
};

export default Header;
