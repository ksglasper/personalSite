import React from "react";
import { Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Header = () => {
  return (
    <>
      <header id="header">
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
