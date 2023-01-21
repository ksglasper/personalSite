import React, { useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Formtest from "./Formtest";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import BlockText from "./BlockText";


const CssTest = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
// Loading Button functionality!@!!!!!
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('hello')
    setShow(false)
  }
  return (
    <>
      <header>

        
        {/* Stack 
         */}
        <Stack direction="horizontal" gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border ms-auto">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>



{/* Breadcrumb has a built in navigation of the url trail you are currently in!~ 
         */}

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>


        <Button variant="primary" size="lg" disabled>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" disabled>
          Button
        </Button>{" "}
        <Button href="#" variant="secondary" size="lg" disabled>
          Link
        </Button>{" "}

        {/* The button set up for the loading
        */}
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Click to load"}
        </Button>
      </header>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 moviePoster"
            src="https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testbox">
            <img
              width={900}
              height={500}
              className="d-block w-100 moviePoster"
              src="https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg"
              alt="Second slide"
            />
            <img
              width={900}
              height={500}
              className="d-block w-100 moviePoster"
              src="https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 moviePoster"
            src="https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
            alt="Third slide"
            
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

{/* THE MODAL SET IS HERE!##
*/}
      <Modal
        centered
        show={show}
        onHide={handleClose}
//Static forces user to click the close button to dismiss modal
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {/* The form within the modal body
            */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" aria-describedby="emailHelpBlock"/>
              <Form.Text className="text-muted" id="emailHelpBlock">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" aria-describedby="passwordlHelpBlock"/>
              <Form.Text className="text-muted" id="passwordlHelpBlock">
              Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="tea-green" type="submit" >
              Submit
            </Button>
          </Form>
          {/* <Form/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      {/*
      NavBar example!!!
      */}
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="#features">Features</Nav.Link>
            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link as={NavLink} to="/bootstraptest">BootStrap</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/materialuitest" eventKey="link-1" >MaterialUI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/' eventKey="link-2" >
          Home
        </Nav.Link>
      </Nav.Item>
    </Nav>
      <BlockText/>

    </>
  );
};

export default CssTest;
