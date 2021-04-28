import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Welcome extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="image"
            src="https://eurama.hu/wp-content/uploads/2017/02/valley-of-fire-1303617_960_720-960x530.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://map.gsfc.nasa.gov/media/030651/030651_2_640.png"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="image"
            src="https://images.hdqwalls.com/download/best-nature-image-1280x720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
