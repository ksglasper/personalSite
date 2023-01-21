import React from "react";
import { NavLink, Outlet, Link, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  let { resume } = useParams();
  return (
    <>
      <header id="header">
        <Navbar fixed="top" bg="test2" variant="dark">
          <Container>
            <Navbar.Brand href="#top">
              <img id="nav-logo" src="./images/nav-logo.png" />
            </Navbar.Brand>
            <Nav fill className="me-auto">
              <Nav.Link href="#top">
                <span>Home</span>
              </Nav.Link>
              <Nav.Link href="#projects">
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link href="#about-me">
                <span>About Me</span>
              </Nav.Link>
              <Nav.Link href="./assets/Kyle_Glasper_Resume.pdf" target="_blank">
                <span>Resume</span>
              </Nav.Link>
            </Nav>

            {/* <NavDropdown title="Navigate" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">
                  <Nav.Link href="#top">
                    <span>Home</span>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  <Nav.Link href="#projects">
                    <span>Projects</span>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  <Nav.Link href="#about-me">
                    <span>About Me</span>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  <Nav.Link
                    href="./assets/Kyle_Glasper_Resume.pdf"
                    target="_blank"
                  >
                    <span>Resume</span>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown> */}
            <Dropdown>
              <Dropdown.Toggle variant="test2" id="dropdown-basic">
                Navigate
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#top">Home</Dropdown.Item>
                <Dropdown.Item href="#projects">Projects</Dropdown.Item>
                <Dropdown.Item href="#about-me">About Me</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="./assets/Kyle_Glasper_Resume.pdf"
                  target="_blank"
                >
                  Resume
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
