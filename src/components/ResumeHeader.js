import React from "react";
import { NavLink, Outlet, Link, useParams, useLocation } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { HashLink } from 'react-router-hash-link';


const ResumeHeader = () => {
  return (
    <>
      <header id="header">
      
    <Navbar fixed="top"  bg="test2" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img id="nav-logo" src="./images/nav-logo.png"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><span>Home</span></Nav.Link>
            <Nav.Link as={HashLink} to="/#projects"><span>Projects</span></Nav.Link>
            <Nav.Link as={HashLink} to="/#about-me"><span>About Me</span></Nav.Link>
            <Nav.Link as={Link} to="/resume"><span>Resume</span></Nav.Link>
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

export default ResumeHeader;
