import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
  return (
    <>
      <header id="header">
      <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link as={NavLink} to="/bootstraptest">BootStrap</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/materialuitest" eventKey="link-1" >MaterialUI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/' eventKey="link-2" >
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>




        <Stack direction="horizontal" gap={3}>
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
    </Breadcrumb>
      </header>
      <br />
      <Outlet />
    </>
  );
};

export default Header;
