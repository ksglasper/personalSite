import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";





const Technologies = ()=>{



    return (
        <>

        <h3>Current proficiencies:</h3>
        <Carousel>
        <Carousel.Item>
        <Figure className="tech-logos">
            <Figure.Image
              className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/javascript.png"
            />
            

            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/react.png"
            />
            

            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/nodejs.png"
            />

            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/postgresql.png"
            />
            
          </Figure>
          {/* <img
            className="d-block w-100 moviePoster"
            src="https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            alt="First slide"
          /> */}
        <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Figure className="tech-logos">
          
            
            

            
            

            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/bootstrap.png"
            />

            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/express.png"
            />
            
            <Figure.Image
            className="tech-icon"
              width={150}
              height={150}
              alt="171x180"
              src="./images/HTML5-logo.png"
            />
            

            <Figure.Image
            className="tech-icon"
              width={100}
              height={100}
              alt="171x180"
              src="./images/css3.png"
            />
           
          </Figure>
            {/* <img
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
            /> */}
            <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item> */}
        {/* <Figure className="test12"> */}
            
            
          {/* </Figure> */}
          {/* <img
            className="d-block w-100 moviePoster"
            src="https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
            alt="Third slide"
          /> */}

        {/* </Carousel.Item> */}
      </Carousel>
        </>
    )
}

export default Technologies

