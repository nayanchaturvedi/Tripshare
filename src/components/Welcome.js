// import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default class Welcome extends Component {
//   render() {
//     return (
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="image"
//             src="https://images.wallpaperscraft.com/image/people_jump_happiness_beach_shadow_image_11066_1280x720.jpg"
//             alt="First slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="image"
//             src="https://www.fabhotels.com/blog/wp-content/uploads/2018/11/600x400-8-1280x720.jpg"
//             alt="Third slide"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="image"
//             src="https://www.revv.co.in/blogs/wp-content/uploads/2020/07/road-trip-songs-1280x720.jpg"
//             alt="Third slide"
//           />
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

import React, { Component } from "react";
import { Carousel, Jumbotron, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../assets/css/Style.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

import logomain from "../images/logomain.jpg";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                // src="https://eurama.hu/wp-content/uploads/2017/02/valley-of-fire-1303617_960_720-960x530.jpg"

                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="caption">Hit the Road</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                // src="https://map.gsfc.nasa.gov/media/030651/030651_2_640.png"
                src={slide2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="caption" style={{ color: "black" }}>
                  Walk through nature
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                // src="https://images.hdqwalls.com/download/best-nature-image-1280x720.jpg"
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="caption">Explore a city</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="text-center m-5">
          {/* <Jumbotron fluid>
            <Container> */}
          <h1 className="brand text-white">
            {" "}
            {/* <img className="logomain" src={logomain}></img> */}
            Trip Share
          </h1>
          <p className="brand text-white">
            <br></br>
            "Not until we are lost do we begin to understand ourselves."
            <br></br>
            -Henry David Thoreau
          </p>
          {/* </Container>
          </Jumbotron>{" "} */}
        </div>
      </div>
    );
  }
}
