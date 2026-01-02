import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const Projects = () => {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => {
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(true);
  };

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const handleClose3 = () => {
    setShow3(false);
  };
  const handleShow3 = () => {
    setShow3(true);
  };
  const handleShow4 = () => {
    setShow4(true);
  };
  const handleClose4 = () => {
    setShow4(false);
  };
  const handleShow5 = () => {
    setShow5(true);
  };
  const handleClose5 = () => {
    setShow5(false);
  };
  const handleShow6 = () => {
    setShow6(true);
  };
  const handleClose6 = () => {
    setShow6(false);
  };
  return (
    <>
      <CardGroup className="project-cards">
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://ffflexsquad.com">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/fantasyFootballThumbnail.PNG"
            />
          </Nav.Link>

          <Card.Body>
            <Card.Title className="card-title">
              Fantasy Football Flex Squad
            </Card.Title>
            <Card.Text>
              A fantasy football site I made for my league to view our history,
              individual team pages, season stats, and head to head matchups.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow6}>
                More details
              </Button>
              <Modal
                show={show6}
                onHide={handleClose6}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Fantasy Football Flex Squad</Modal.Title>
                </Modal.Header>
                <Modal.Body className="project-modal">
                  Coming Soon!
                  {/* This project was completed by myself and 3 other classmates.
                  The purpose was to create a complete fullstack application
                  with plenty of functionality for both users and admin. The app
                  allows users to remain a guest or register/login while
                  browsing movies to buy. With 251 movie titles to choose from,
                  users can sort through the catalog either directly using the
                  search bar or sort by different categories including price,
                  popularity, and title.
                  <br />
                  <br />
                  The way we accessed so many titles was through another API
                  (omdbapi) where we pulled a list of the top 250 movies,
                  queried that database, selected the pertinent information for
                  this project, and placed it into our own database. Users can
                  also leave reviews for movies and check their order history
                  once a purchase is made.
                  <br />
                  <br />
                  My specific contributions include handling the outside API,
                  displaying the movies, setting up the search bar and filter
                  methods, navigation between pages of displayed movies, and
                  creating the individual movie page to see full details. I was
                  also responsible for allowing admin to edit or delete movie
                  titles. */}
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: PERN stack, Recharts, Vercel, React
                      Bootstrap, JSON{" "}
                    </small>
                    <Nav.Link href="https://github.com/ksglasper/nfl-fantasy-league-mover">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://ffflexsquad.com">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                    {/* <Nav.Link href="https://www.youtube.com/watch?v=6cbjSG0tonU&list=PLVDIcDXQ2bNZZUw8mOHPaXIXRQbyVRdsn">
                      <img
                        className="modal-icon"
                        src="./images/youtube.png"
                      ></img>
                    </Nav.Link> */}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://weather-app-9f47.vercel.app/">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/weatherWithYou.PNG"
            />
          </Nav.Link>

          <Card.Body>
            <Card.Title className="card-title">Weather With You</Card.Title>
            <Card.Text>
              A weather app that users can search and favorite their favorite
              cities that show up on their profile. This project includes
              in-depth weather information at hourly, daily, and weekly
              intervals with easy to read charts and graphs.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow4}>
                More details
              </Button>
              <Modal
                show={show4}
                onHide={handleClose4}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Weather With You</Modal.Title>
                </Modal.Header>
                <Modal.Body className="project-modal">
                  Coming Soon!
                  {/* This project was completed by myself and 3 other classmates.
                  The purpose was to create a complete fullstack application
                  with plenty of functionality for both users and admin. The app
                  allows users to remain a guest or register/login while
                  browsing movies to buy. With 251 movie titles to choose from,
                  users can sort through the catalog either directly using the
                  search bar or sort by different categories including price,
                  popularity, and title.
                  <br />
                  <br />
                  The way we accessed so many titles was through another API
                  (omdbapi) where we pulled a list of the top 250 movies,
                  queried that database, selected the pertinent information for
                  this project, and placed it into our own database. Users can
                  also leave reviews for movies and check their order history
                  once a purchase is made.
                  <br />
                  <br />
                  My specific contributions include handling the outside API,
                  displaying the movies, setting up the search bar and filter
                  methods, navigation between pages of displayed movies, and
                  creating the individual movie page to see full details. I was
                  also responsible for allowing admin to edit or delete movie
                  titles. */}
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: PERN stack, Recharts, Vercel, React
                      Bootstrap, JSON{" "}
                    </small>
                    <Nav.Link href="https://github.com/Fullstack-PostGrad-Projects/weather-app">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://weather-app-9f47.vercel.app/">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                    {/* <Nav.Link href="https://www.youtube.com/watch?v=6cbjSG0tonU&list=PLVDIcDXQ2bNZZUw8mOHPaXIXRQbyVRdsn">
                      <img
                        className="modal-icon"
                        src="./images/youtube.png"
                      ></img>
                    </Nav.Link> */}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://obscure-harbor-35179.herokuapp.com/">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/cinema-site.PNG"
            />
          </Nav.Link>

          <Card.Body>
            <Card.Title className="card-title">Cinema's Top 251</Card.Title>
            <Card.Text>
              An e-commerce website made as a final group project for Fullstack.
              It features a wide selection of movies with a fully functional
              cart system and comprehensive user abilities.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow1}>
                More details
              </Button>
              <Modal
                show={show1}
                onHide={handleClose1}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Cinema's Top 251</Modal.Title>
                </Modal.Header>
                <Modal.Body className="project-modal">
                  This project was completed by myself and 3 other classmates.
                  The purpose was to create a complete fullstack application
                  with plenty of functionality for both users and admin. The app
                  allows users to remain a guest or register/login while
                  browsing movies to buy. With 251 movie titles to choose from,
                  users can sort through the catalog either directly using the
                  search bar or sort by different categories including price,
                  popularity, and title.
                  <br />
                  <br />
                  The way we accessed so many titles was through another API
                  (omdbapi) where we pulled a list of the top 250 movies,
                  queried that database, selected the pertinent information for
                  this project, and placed it into our own database. Users can
                  also leave reviews for movies and check their order history
                  once a purchase is made.
                  <br />
                  <br />
                  My specific contributions include handling the outside API,
                  displaying the movies, setting up the search bar and filter
                  methods, navigation between pages of displayed movies, and
                  creating the individual movie page to see full details. I was
                  also responsible for allowing admin to edit or delete movie
                  titles.
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: PERN stack{" "}
                    </small>
                    <Nav.Link href="https://github.com/ksglasper/GraceShopperTeamPrimer">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://obscure-harbor-35179.herokuapp.com/">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/watch?v=6cbjSG0tonU&list=PLVDIcDXQ2bNZZUw8mOHPaXIXRQbyVRdsn">
                      <img
                        className="modal-icon"
                        src="./images/youtube.png"
                      ></img>
                    </Nav.Link>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="project-cards">
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://github.com/ksglasper/playwrightPractice">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/playwrightPractice.png"
            />
          </Nav.Link>

          <Card.Body>
            <Card.Title className="card-title">
              Netflix Playwright Unit Testing
            </Card.Title>
            <Card.Text>
              An examination opf using playwright unit testing. The project
              features extensive testing for Netflix's login form including:
              navigation, error handling, edge cases, and customizable inputs.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow5}>
                More details
              </Button>
              <Modal
                show={show5}
                onHide={handleClose5}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Netflix Playwirhgt Practice</Modal.Title>
                </Modal.Header>
                <Modal.Body className="project-modal">
                  {/* This project was completed by myself and 3 other classmates.
                  The purpose was to create a complete fullstack application
                  with plenty of functionality for both users and admin. The app
                  allows users to remain a guest or register/login while
                  browsing movies to buy. With 251 movie titles to choose from,
                  users can sort through the catalog either directly using the
                  search bar or sort by different categories including price,
                  popularity, and title.
                  <br />
                  <br />
                  The way we accessed so many titles was through another API
                  (omdbapi) where we pulled a list of the top 250 movies,
                  queried that database, selected the pertinent information for
                  this project, and placed it into our own database. Users can
                  also leave reviews for movies and check their order history
                  once a purchase is made.
                  <br />
                  <br />
                  My specific contributions include handling the outside API,
                  displaying the movies, setting up the search bar and filter
                  methods, navigation between pages of displayed movies, and
                  creating the individual movie page to see full details. I was
                  also responsible for allowing admin to edit or delete movie
                  titles. */}
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: Javascript, Playwright, unit testing{" "}
                    </small>
                    <Nav.Link href="https://github.com/ksglasper/playwrightPractice">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                      ></img>
                    </Nav.Link>
                    {/* <Nav.Link href="https://obscure-harbor-35179.herokuapp.com/">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/watch?v=6cbjSG0tonU&list=PLVDIcDXQ2bNZZUw8mOHPaXIXRQbyVRdsn">
                      <img
                        className="modal-icon"
                        src="./images/youtube.png"
                      ></img>
                    </Nav.Link> */}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://jazzy-arithmetic-3865c1.netlify.app/">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/fitness-tracker-site.PNG"
            />
          </Nav.Link>
          <Card.Body>
            <Card.Title className="card-title">Fitness Tracker</Card.Title>
            <Card.Text>
              A fitness tracking website that allows users to both create and
              search for fitness routines and activities to reach personal
              fitness goals!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow2}>
                More details
              </Button>
              <Modal
                show={show2}
                onHide={handleClose2}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Fitness Tracker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This was a partner project building a PERN application
                  featuring a fitness application. The main goal was enabling
                  users to create and search for routines and activities. As the
                  first time doing a fullstack application there were a lot of
                  challenges with connecting a frontend to a self-created
                  backend. However, the benefit and knowledge gained was beyond
                  worth. This project really established how effective it is to
                  know the flow of information throughout the entire system when
                  debugging and handling errors.
                  <br />
                  <br />
                  My specific contributions include generating the list of
                  activities as well as the ability to create new activities. I
                  was also in charge of attaching specific activities to
                  routines and allowing users to search for routines based on
                  user or featuring a specific activity.
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: PERN stack{" "}
                    </small>
                    <Nav.Link href="https://github.com/ksglasper/fitnessTrackerBackend">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                        title="Backend Github"
                        alt="Backend Github"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://github.com/ksglasper/FitnessTrackerFrontEnd">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                        title="Frontend Github"
                        alt="Frontend Github"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://jazzy-arithmetic-3865c1.netlify.app/">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
        <Card border="dark" bg="dark" className="single-card">
          <Nav.Link href="https://voluble-gnome-5dc3dc.netlify.app/">
            <Card.Img
              className="site-thumbnail"
              variant="top"
              src="./images/tic-tac-toe-site.PNG"
            />
          </Nav.Link>
          <Card.Body>
            <Card.Title className="card-title">Tic-Tac-Toe</Card.Title>
            <Card.Text>
              A classic tic-tac-toe game. Play against your buddy or against a
              CPU!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted card-title">
              <Button variant="test2" onClick={handleShow3}>
                More details
              </Button>
              <Modal
                show={show3}
                onHide={handleClose3}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Tic-Tac-Toe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  One of my first solo JavaScript projects. Focusing heavily on
                  DOM Manipulation, this simple game of tic-tac-toe allows a
                  user to play against another human or against a CPU. Users can
                  input names or change them during the game and have it update
                  accordingly. The starting playing is randomized as well the
                  brief starting message to give users a sense of change
                  in-between games.
                  <br />
                  <br />
                  When I update the project, I would like to add levels of
                  difficulty to the CPU as well as turn this application to one
                  of many in an arcade-like website.
                  <div className="icon-div">
                    <small className="tech-used">
                      Technologies used: JS, DOM Manipulation, CSS, HTML5{" "}
                    </small>
                    <Nav.Link href="https://github.com/ksglasper/TicTacToeArcadeProject">
                      <img
                        className="modal-icon"
                        src="./images/github-icon.png"
                      ></img>
                    </Nav.Link>
                    <Nav.Link href="https://voluble-gnome-5dc3dc.netlify.app/">
                      <img
                        className="modal-icon"
                        src="./images/redirect.png"
                      ></img>
                    </Nav.Link>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Projects;
