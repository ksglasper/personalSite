import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Footer = () => {
  return (
    <>
      <footer id="footer">
      
    <Navbar fixed="top"  bg="test2" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img id="nav-logo" src="https://i.imgur.com/8macnmX.png"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/bootstraptest">Projects</Nav.Link>
            <Nav.Link as={Link} to="/materialuitest">Resume</Nav.Link>
            <Nav.Link as={Link} to="#materialuitest">About Me</Nav.Link>

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
      </footer>
      <br />
      <Outlet />
    </>
  );
};

export default Footer;
